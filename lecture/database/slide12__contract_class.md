## Contract class

Хранит константы для имён таблиц и колонок.  
1 таблица — 1 вложенный класс.

<br>

```
public final class DatabaseContract {

    public static class NewsEntry implements BaseColumns {
        public static final String TABLE_NAME = "news";
        public static final String COLUMN_NAME_TITLE = "title";
        public static final String COLUMN_NAME_SUBTITLE = "subtitle";
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

------

## Contract class

```
private static final String SQL_CREATE_ENTRIES =
        "CREATE TABLE news (" +
                "_id INTEGER PRIMARY KEY," +
                "title TEXT," +
                "subtitle TEXT" +
                ");";
```

into
<!-- .element: class="fragment" data-fragment-index="1" -->

```
private static final String SQL_CREATE_ENTRIES =
    "CREATE TABLE " + FeedEntry.TABLE_NAME + " (" +
    FeedEntry._ID + " INTEGER PRIMARY KEY," +
    FeedEntry.COLUMN_NAME_TITLE + " TEXT," +
    FeedEntry.COLUMN_NAME_SUBTITLE + " TEXT)";
```
<!-- .element: class="fragment" data-fragment-index="2" -->

