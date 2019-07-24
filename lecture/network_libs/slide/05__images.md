<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Графический клиент

---

## Работа с изображениями

Рутинные операции

<ul>
    <li class="fragment" data-fragment-index="1">создать/найти `ImageView` в коде</li>
    <li class="fragment" data-fragment-index="2">загрузить картинку из сети</li>
    <li class="fragment" data-fragment-index="3">задать placeholder</li>
    <li class="fragment" data-fragment-index="4">показать stub-изображение в случае ошибки</li>
    <li class="fragment" data-fragment-index="5">преобразовать изображение в `Drawable`/`Bitmap`
        <ul class="nested">
            <li class="fragment" data-fragment-index="6">Закэшировать</li>
            <li class="fragment" data-fragment-index="7">Изменить размер</li>
            <li class="fragment" data-fragment-index="8">Наложить маску на изображение</li>
        </ul>
    </li>
</ul>

---

## Glide

<ul>
<li class="fragment" data-fragment-index="1">Отображает картинки, gif, проигрывает локальных видео</li>
<li class="fragment" data-fragment-index="2">Сам переключает заглушки: placeholder, error</li>
<li class="fragment" data-fragment-index="3">Маштабирование, миниатюры изображений</li>
<li class="fragment" data-fragment-index="4">Кэширование(in memory, local storage)</li>
<li class="fragment" data-fragment-index="5">Приоритеты загрузки</li>
<li class="fragment" data-fragment-index="6">Трансформации</li>
<li class="fragment" data-fragment-index="7">Можно писать свои расширения</li>
<li class="fragment" data-fragment-index="8">Учитывает жизненный цикл `Activity`/`Fragment`</li>
</ul>

---

<pre><code class="kotlin" data-trim data-noescape>
    class Sample(context: Context) {
        val glide = Glide.with(context)

        fun someMethod() {
            <span class="fragment highlight-current-blue" data-fragment-index="1">glide.load(R.drawable.sample_image).into(imageView1) </span>
            <span class="fragment highlight-current-blue" data-fragment-index="2">glide.load("file:///android_asset/image.png").into(imageView2) </span>
            <span class="fragment highlight-current-blue" data-fragment-index="3">glide.load(File("path/to/sample/image.png")).into(imageView3) </span>
            <span class="fragment highlight-current-blue" data-fragment-index="4">glide.load("http://google.com/logo.png").into(imageView4) </span>            
            <span class="fragment highlight-current-blue" data-fragment-index="5">glide.load(url) 
                    .placeholder(R.drawable.image_placeholder)
                    .error(R.drawable.image_error)
                    .apply(RequestOptions().transform(MultiTransformation(
                            CropSquareTransformation(),
                            Tint(tintColor)
                    )))
                    .apply(RequestOptions().override(50, 50))
                    .into(imageView); </span>
        }
    }
</code></pre>

---

## Glide - трансформация изображений
Создаем свой класс и используем его, все просто:

<div>
<pre><code class="kotlin" data-trim data-noescape>
    class CropSquareTransformation : BitmapTransformation  {
      @override fun transform(
            pool: Bitmap, toTransform: Bitmap, outWidth: Int, outHeight: Int
      ): Bitmap {
        val size = min(toTransform.width, toTransform.height)
        val x = (toTransform.width - size) / 2
        val y = (toTransform.height - size) / 2
        return Bitmap.createBitmap(toTransform, x, y, size, size).also { result ->
            toTransform.takeIf { it != result }?.recycle() 
        }
      }

      @override fun getId(): String = "square()"
    }

</code></pre>
</div>

---

## Полезные ссылки

- [square.github.io/retrofit](http://square.github.io/retrofit/)
- [square.github.io/okhttp](http://square.github.io/okhttp/)
- [github.com/bumptech/glide](https://github.com/bumptech/glide)
