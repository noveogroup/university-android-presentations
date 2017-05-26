## SQLiteOpenHelper

Абстрактный [класс](https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html) для создания и обновления БД.

<br>

### Как использовать
Отнаследоваться и переопределить методы:
* `onCreate(SQLiteDatabase)`
* `onUpgrade(SQLiteDatabase, int, int)`

<br>

------

## SQLiteOpenHelper

### Доступ к базе
Создать и/или открыть БД:
* `getReadableDatabase()`
* `getWritableDatabase()`

<br>

Закрыть БД:
* `close()`
(можно не закрывать)