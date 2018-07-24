## Debug

<br>

#### Доступ к БД через `adb shell`

`$ adb exec-out run-as com.example.app cp /data/data/com.example.app/databases/your_database.db /sdcard/`

<br>

`$ adb pull /sdcard/your_database.db`

<br>
<br>

Для просмотра базы можно использовать [DB Browser for SQLite](http://sqlitebrowser.org/).

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## Debug

<br>

#### Доступ к БД через [Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer.html)


<img src="lecture/storage/img/android_studio_3.0.png">

