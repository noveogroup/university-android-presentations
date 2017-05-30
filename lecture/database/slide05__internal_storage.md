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

```
File file = new File(context.getFilesDir(), "my_file.txt");
outputStream = new FileOutputStream(file.getAbsolutePath());
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```
FileOutputStream outputStream =
                context.openFileOutput("my_file.txt", Context.MODE_PRIVATE);
```
<!-- .element: class="fragment" data-fragment-index="2" -->


<br>

* `InputStream`:

<!-- .element: class="fragment" data-fragment-index="3" -->

```
FileInputStream inputStream = context.openFileInput("my_file.txt");
```
<!-- .element: class="fragment" data-fragment-index="3" -->
