# AsyncTask

<div class="half-left">
<pre><code class="kotlin">class MyAsyncTask : AsyncTask&lt;URL, Void, Bitmap&gt;() {
    override fun onPreExecute() {
        super.onPreExecute()
        showLoading()
    }

    override fun doInBackground(vararg params: URL?): Bitmap {
        final Bitmap bitmap = loadBitmap(urls[0])
        return bitmap
    }

    override fun onPostExecute(bitmap: Bitmap) {
        super.onPostExecute(bitmap)
        imageView.setImageBitmap(bitmap)
        hideLoading()
    }
}
</code></pre>

<pre><code class="kotlin">val myAsyncTask = MyAsyncTask()
myAsyncTask.execute(url)
</code></pre>

</div>
<div class="half-right">
    `onPreExecute()` - main thread  
    `doInBackground()` - new thread  
    `onPostExecute()` - main thread  
</div>

------

# AsyncTask

<div class="half-left">
<h3>Плюсы</h3>
<li>Дженерик - может работать с любыми объектами</li>
<li>Встроенный менеджмент потоков</li>
<li>Публикация прогресса</li>
</div>
<div class="half-right">
<h3>Минусы</h3>
<li>Потеря результатов при пересоздании экрана</li>
<li>Потенциальные утечки памяти</li>
</div>
