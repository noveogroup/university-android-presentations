## REST - REpresentational State Transfer

Интерфейс ограничен <b>CRUD</b> операциями

- Create - POST
- Read - GET
- Update - PUT
- Delete - DELETE

Пример использования:

- GET /user/info — прочитать информацию
- PUT /user/info — обновить информацию
- GET /item/comments — получить комментарии
- GET /item/comments/14 — получить 14ый комментарий
- POST /item/comments — добавить комментарий
- DELETE /item/comments — очистить комментарии
- DELETE /item/comments/14 — удалить 14ый комментарий

---

## Работа с REST-сервером

Необходимо выполнить ряд рутинных операций:

- Сформировать запрос
    + URL
    + HTTP-заголовки
    + HTTP-метод
    + Задать тело (как правило JSON)
- Выполнить запрос
- Преобразовать полученные результаты

---

## Retrofit

- Библиотека - REST-клиент
- Декларативное описание взаимодействия с REST API
- Синхронные и асинхронные вызовы
- Встроенная интеграция с другими библиотеками
    + Парсеры(GSON, SimpleXML)
    + OkHttp(по умолчанию), HttpUrlConnection
    + RxJava

---

## Retrofit - описание REST Api

<div>
<pre><code class="java">
    interface NetworkClient {
        
        @GET("/entities/{id}")
        Call&lt;Response&gt; getById(
                @Path("id") int id,
                @Query("type") String type
        );

        @POST("/entities/complete")
        Observable&lt;Response&gt; send(
                @Body EntityBody body
        );
    }
</code></pre>
</div>

---

## Retrofit - доступные аннотации

- `@GET @POST @PUT @DELETE`
- `@Path @Field @Body @Query` 
- `@Multipart` + `@Part`
- `@FormUrlEncoded`
- `@Headers`

---

## Retrofit - выполнение запроса

<div>
<pre><code class="java small">
    class Sample {
        private NetworkClient rest;

        public Sample() {
            final Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BuildConfig.END_POINT)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .addInterceptor(new AuthenticationInterceptor())
                .build();
            rest = retrofit.create(NetworkClient.class);
        }

        private void someMethod() {
            final Call&lt;List&lt;User&gt;&gt; userListCall = rest.userList();

            //синхронный вызов
            new Thread(new Runnable() {
                public void run() {
                    List&lt;User&gt; userList = userListCall.execute();
                }
            }).start();

            //асинхронный вызов
            userListCall.enqueue(new Callback&lt;List&lt;User&gt;&gt;() {
                @Override
                public void onResponse(Response&lt;Repo&gt; response) {...}
 
                @Override
                public void onFailure(Throwable t) {...}
            });

            //реактивный вызов
            rest.userListObserv().subscribe(new Subscriber() {...});
        }
    }
</code></pre>
</div>

---

## Работа с изображениями

Также необходимо выполнять рутинные операции

- создать/найти `ImageView` в коде
- выполнить запрос в сети
- задать placeholder
- показать stub-изображение в случае ошибки
- преобразовать изображение в `Drawable`/`Bitmap`
    + Закэшировать
    + Изменить размер
    + Наложить маску на изображение

---

## Glide

- Отображает картинки, gif, проигрывает локальных видео
- placeholder, error handling
- Маштабирование, миниатюры изображений
- Кэширование(in memory, local storage)
- Приоритеты загрузки
- Трансформации
- Можно писать свои расширения
- Учитывает жизненный цикл Activity/Fragment

---

## Glide - загрузка изображений

<div>
<pre><code class="java">
    class Sample {
        private Glide glide;

        public Sample(final Context context) {
            glide = Glide.with(context);
        }

        private void someMethod() {
            glide.load(R.drawable.sample_image).into(imageView1);
            glide.load("file:///android_asset/image.png").into(imageView2);
            glide.load(new File("path/to/sample/image.png")).into(imageView3);

            glide.load(url)
                    .placeholder(R.drawable.image_placeholder)
                    .error(R.drawable.image_error)
                    .resize(50, 50)
                    .transform(new CropSquareTransformation())
                    .fit().centerCrop()
                    .into(imageView);
        }
    }
</code></pre>
</div>

---

## Glide - трансформация изображений
Создаем свой класс и используем его, все просто:

    !java
    class CropSquareTransformation implements BitmapTransformation  {
      @Override 
      Bitmap transform(BitmapPool pool, Bitmap toTransform, 
                            int outWidth, int outHeight) {
        int size = Math.min(toTransform.getWidth(), toTransform.getHeight());
        int x = (toTransform.getWidth() - size) / 2;
        int y = (toTransform.getHeight() - size) / 2;
        Bitmap result = Bitmap.createBitmap(toTransform, x, y, size, size);
        if (result != toTransform) { toTransform.recycle(); }
        return result;
      }

      @Override 
      //just for cache options
      public String getId() { return "square()"; }
    }

---

## Полезные ссылки

- [square.github.io/retrofit](http://square.github.io/retrofit/)
- [square.github.io/okhttp](http://square.github.io/okhttp/)
- [github.com/bumptech/glide](https://github.com/bumptech/glide)
