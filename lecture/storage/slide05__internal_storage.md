## Internal Storage

Место для хранения приватных файлов.  
Недоступно другим приложениям/пользователю. При удалении приложения очищается.

<br>

*Use case*:  
* Внутренние данные приложения
    - Созданные в приложении файлы
    - Скачанный с сервера контент
    - ```getFilesDir() ```
* Кэш
    - ```getCacheDir() ```

------

## Internal Storage

<pre><code class="kotlin large" data-trim data-noescape>
val file = File(context.filesDir, "my_file.txt")
</code></pre>

<br>

### Чтение

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="kotlin large" data-trim data-noescape>
file.readText()
file.readBytes()
file.readLines()
</code></pre>
<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

### Запись
<!-- .element: class="fragment" data-fragment-index="2" -->  

<pre><code class="java large" data-trim data-noescape>
file.writeText("some text")
file.writeBytes(byteArrayOf())
</code></pre>
<!-- .element: class="fragment" data-fragment-index="2" -->


<br>
