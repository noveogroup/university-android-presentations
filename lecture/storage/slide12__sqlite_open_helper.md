## SQLiteOpenHelper

Абстрактный [класс](https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html) для создания и обновления БД.
* <!-- .element: class="fragment" data-fragment-index="1" --> Наследуем `SQLiteOpenHelper`
* <!-- .element: class="fragment" data-fragment-index="2" --> Нужен конструктор от `Сontext` (!)

<br>

<pre><code class = "java large" data-trim data-noescape>
public class SQLiteHelper extends SQLiteOpenHelper {
<span class="fragment" data-fragment-index="3">
    private static final String DATABASE_NAME = "database.db";
    private static final int DATABASE_VERSION = 1;</span>
<span class="fragment" data-fragment-index="2">
    public SQLiteHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }</span>
}
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## SQLiteOpenHelper

>Обязательно знать SQL

<!-- .element: class="noveo-warn fragment" data-fragment-index="2"-->


```
@Override
public void onCreate(SQLiteDatabase db) {
    db.execSQL("CREATE TABLE customers (\n" +
                       "  id INT PRIMARY KEY AUTO_INCREMENT,\n" +
                       "  name        TEXT NOT NULL,\n" +
                       "  address     TEXT NOT NULL\n" +
                       ");");
}
```

<br>

```
@Override
public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
    //...
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

------

## SQLiteOpenHelper

### Доступ к базе
Создать и/или открыть БД:
* `getReadableDatabase()`
* `getWritableDatabase()`

<br>

Закрыть БД:<!-- .element: class="fragment" data-fragment-index="1" -->
* <!-- .element: class="fragment" data-fragment-index="1" -->`close()`
