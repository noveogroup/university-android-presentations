## External Storage

Общедоступное место для хранения файлов.  
Находится на съёмном носителе или в публичном разделе внутренней памяти.

<br>

*Use case*:  
* Медиа-файлы
* Не критичные для работы приложения данные

<br>

<pre><code class="kotlin large">Environment.getExternalStoragePublicDirectory() // медиа директория</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="kotlin large">context.externalFilesDir() // папка приложения</code></pre>

<!-- .element: class="fragment" data-fragment-index="2" -->

<pre><code class="kotlin large">context.getExternalCacheDir() // кэш приложения на внешнем хранилище</code></pre>

<!-- .element: class="fragment" data-fragment-index="3" -->

------

## External Storage

Нужны разрешения:

<pre><code class="java large" data-trim data-noescape>
&lt;uses-permission
        android:name="android.permission.READ_EXTERNAL_STORAGE"/>
&lt;uses-permission
        android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</code></pre>

<br>


>*Caution!*
>Файлы могут быть перезаписаны, удалены или недоступны!

<!-- .element: class="noveo-warn fragment" data-fragment-index="1" -->

<img style="float: right" src="lecture/storage/img/external_storage.png">

<br>