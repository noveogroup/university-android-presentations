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

### Запись и чтение

* `OutputStream`:

<!-- .element: class="fragment" data-fragment-index="1" -->  

<pre><code class="java large" data-trim data-noescape>
File file = new File(context.getFilesDir(), "my_file.txt");
outputStream = new FileOutputStream(file.getAbsolutePath());
</code></pre>
<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="java large" data-trim data-noescape>
FileOutputStream outputStream =
                context.openFileOutput("my_file.txt", Context.MODE_PRIVATE);
</code></pre>
<!-- .element: class="fragment" data-fragment-index="2" -->


<br>

* `InputStream`:

<!-- .element: class="fragment" data-fragment-index="3" -->

<pre><code class="java large" data-trim data-noescape>
FileInputStream inputStream = context.openFileInput("my_file.txt");
</code></pre>
<!-- .element: class="fragment" data-fragment-index="3" -->
