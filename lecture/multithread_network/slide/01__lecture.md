## Процессы

<li>Под каждое приложение по умолчанию выделяется один процесс</li>
<li>В отдельном процессе может быть множество потоков. Изначально - это один поток(main thread, ui thread)</li>
<li>Периодически OS нужно освобождать ресурсы, занятые процессом, под другие более приоритетные процессы</li>

---

### Приоритеты процессов
<li>Foreground</li>
<li>Visible</li>
<li>Service</li>
<li>Background</li>
<li>Empty</li>

---

## Main Thread

<li>По умолчанию все компоненты приложения работают в нем</li>
<li>Потоконебезопасен - обращение к View из другого потока выбрасывает исключение</li>
<li>Если занять больше чем на 5 секунд, система покажет Application Not Responding сообщение</li>
<br>
<div class="fragment" data-fragment-index="1">Долгие операции в главном потоке - это плохо!

---

## Асинхронное поведение

<li>Thread и Runnable</li>
<li>AsyncTask</li>
<li>Service, IntentService</li>
<li>Loader</li>

---

## Thread with Handler

Handler - ассоциированный с потоком объект, обрабатывающий сообщения

<div class="half-left">
<pre><code class="java">
public class LooperThread extends Thread {
    Handler handler;

    @Override
    public void run() {
        Looper.prepare();
        handler = new Handler() {
            @Override
            public void handleMessage(Message msg) {
                Log.d(TAG, msg.getData().getString(KEY));
            }
        };
        Looper.loop();
    }
}
</code></pre>    
</div>

<div class="half-right">
 <pre><code class="java">
LooperThread looper = new LooperThread();
looper.start();

if (looper.handler != null) {
    Message message = new Message();
    Bundle bundle = new Bundle(1);
    bundle.putString(KEY, "message");
    message.setData(bundle);

    looper.handler.sendMessage(message);
}
 </code></pre>   
</div>

---

## Thread with Handler

<div class="half-left">
Можно и так
<pre><code class="java">
new Handler(getMainLooper()).post(new Runnable() {
    @Override
    public void run() {
        выполнится на main thread
    }
});
</code></pre>    
</div>

<div class="half-right">
<li><b>handler.post</b>(Runnable r)</li>
<li><b>handler.postDelayed</b>(Runnable r, long delay)</li>
<li><b>handler.postAtTime</b>(Runnable r, long time)</li>
<li><b>handler.postAtFrontOfQueue</b>(Runnable r)</li>
<br>
<li><b>handler.sendMessage</b>(Message msg)</li>
<li><b>handler.sendMessageDelayed</b>(Message msg, long delay)</li>
<li><b>handler.sendMessageAtTime</b>(Message msg, long time)</li>
<li><b>handler.sendMessageAtFrontOfQueue</b>(Message msg)</li>
</div>

---

## Thead with Handler

![app](lecture/multithread_network/img/looper.png)
<!-- .element: width="30%" -->

<!-- .element: class="center-horizontal" -->

---

## AsyncTask

<div class="half-left">
<pre><code class="java small">
private class MyAsyncTask extends AsyncTask&lt;URL, Void, Bitmap&gt; {
    @Override
    protected void onPreExecute() {
        super.onPreExecute();
        showLoading();
    }

    @Override
    protected Bitmap doInBackground(URL... urls) {
        final Bitmap bitmap = loadBitmap(urls[0]);
        return bitmap;
    }

    @Override
    protected void onPostExecute(Bitmap bitmap) {
        super.onPostExecute(bitmap);
        imageView.setImageBitmap(bitmap);
        hideLoading();
    }
}

new MyAsyncTask().execute(url);
</code></pre>
</div>
<div class="half-right">
    <li>onPreExecute - main thread</li>
    <li>doInBackground - new thread</li>
    <li>onPostExecute - main thread</li>
</div>

---

## AsyncTask

<div class="half-left">
Плюсы
<li>Дженерик - можем работать с любыми объектами</li>
<li>Встроенный менеджмент потоков</li>
</div>
<div class="half-right">
Минусы
<br>
<li>Потеря результатов при пересоздании экрана</li>
<li>Потенциальные утечки памяти</li>
</div>

---

## Loaders
### Основные компоненты

<li>Loader - объект, асинхронно выполняющий задачу</li>
<li>LoaderManager - создает, уничтожает, запускает, пересоздает Loader</li>
<li>LoaderManager.LoaderCallbacks - интерфейс для связи клиента и менеджера</li>

---

### Loaders

Преимущество перед AsyncTask
<li>Учитывает пересоздание Activity, Fragment</li>
<br>

Минусы
<li>Много кода</li>
<li>Неотделимо привязан к Activity/Fragment</li>

---

### Loaders
<div>
<pre><code class="java small">
private void load() {
    getSupportLoaderManager().initLoader(0, null, new LoaderManager.LoaderCallbacks&lt;Bitmap&gt;() {
        @Override
        public Loader&lt;Bitmap> onCreateLoader(int i, Bundle bundle) {
            ImageLoader loader = new ImageLoader(this);
            return loader;
        }

        @Override
        public void onLoadFinished(Loader&lt;Bitmap&gt; loader, Bitmap bitmap) {
            showBitmap(bitmap);
        }

        @Override
        public void onLoaderReset(Loader&lt;Bitmap&gt; loader) {
            //handle loader recreation
        }
    }).forceLoad();
}

private static class ImageLoader extends AsyncTaskLoader&lt;Bitmap&gt; {

    public ImageLoader(Context context) {
        super(context);
    }

    @Override
    public Bitmap loadInBackground() {
        return loadBitmap();
    }
}
</code></pre>
</div>

---

## Service

<div class="fragment" data-fragment-index="1">Проблема: производить долгострочные операции в сущностях, привязанных к Activity/Fragment небезопасно, поскольку время жизни этих компонентов зависит от поведения пользователя.
<br>
</div>
<br>
<div class="fragment" data-fragment-index="2">
Решение: Service - компонент приложения, не имеющий пользовательского интерфейса
</div>

---

## Service

![app](lecture/multithread_network/img/service_lifecycle.png)
<!-- .element: width="30%" -->

<!-- .element: class="center-horizontal" -->

---

## Intent Service

<div class="half-left">
<pre><code class="java small">
public class SimpleIntentService extends IntentService {
    protected void onHandleIntent(Intent intent) {
        String url=intent.getStringExtra("link");
        Result result = load(url);
    }
}
</code></pre>
<pre><code class="java small">
Intent intent = new Intent(getApplicationContext(), SimpleIntentService.class);
intent.putExtra("link", "url_to_load");
startService(intent);
</code></pre> 
</div>

<div class="half-right">
    <li>По умолчанию исполняется в отдельном потоке</li>
    <li>Нет механизма явной передачи результата в главный поток</li>
    <li>Нельзя прервать</li>
</div>

---

### Работа с сетью

<li>Чаще всего под работой с сетью подразумевают взаимодействие с REST-подобными cервисами, т.е. HTTP + JSON/XML</li>
<li>Для доступа в сеть требуется разрешение android.permission.INTERNET. Также может понадобиться разрешение android.permission.ACCESS_NETWORK_STATE для проверки доступности сети.</li>
<li>Для отображения web-страниц можно использовать WebView - практически полноценный браузер.</li>

---

### Http-клиенты

<li>Создается объект URL</li>
<li>Подготавливается запрос – устанавливается хедеры, параметры запроса, тип контента и т.д.</li>
<li>По необходимости подгатавливается тело запроса (POST запрос)</li>
<li>Читается ответ сервера. Строку ответа (код, сообщение), заголовки, cookie и т.д.</li>
<li>Закрывается соединение и освобождаются ресурсы</li>

---

### OkHttp

<div>
<pre><code class="java">
OkHttpClien client = new OkHttpClient();

Request request = new Request.Builder()
        .url("http:/example/data")
        .build();

client.newCall(request).enqueue(new Callback() {
    @Override public void onFailure(Request request, Throwable throwable) {
        Log.e(TAG, throwable.getMessage())
    }

    @Override public void onResponse(Response response) throws IOException {
        Log.d(TAG, response.body().toString();
    }
});
</code></pre>
</div>
