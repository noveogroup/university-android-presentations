## Internal Storage

Место для хранения приватных файлов.  
Недоступно другим приложениям/пользователю. При удалении приложения очищается.

<br>

*Use case*:  
* Внутренние данные приложения
    - Созданные в приложении файлы
    - Скачанный с сервера контент
* Кэш
    - ```getCacheDir() ```

`//todo: посмотреть про стримы в java-лекции (и лабе)`

------

## Internal Storage

### Запись и чтение

* `OutputStream`:

<!-- .element: class="fragment" data-fragment-index="1" -->  


```
FileOutputStream outputStream =
                context.openFileOutput(FILENAME, Context.MODE_PRIVATE);
outputStream.write(text.getBytes());
outputStream.close();
```
<!-- .element: class="fragment" data-fragment-index="1" -->


<br>

* `InputStream`:

<!-- .element: class="fragment" data-fragment-index="2" -->

```
FileInputStream inputStream = context.openFileInput(FILENAME);
```
<!-- .element: class="fragment" data-fragment-index="2" -->