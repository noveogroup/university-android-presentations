## Contract class

Хранит константы для имён таблиц и колонок.  
1 таблица — 1 вложенный класс.

<br>

```
public final class DBContract {

    public static class CustomerEntry {
        public static final String TABLE_NAME = "customers";
        public static final String ID = "id";
        public static final String NAME = "name";
        public static final String ADDRESS = "address";
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

------

## Contract class

```
static final String SQL_CREATE_CUSTOMERS =
            "CREATE TABLE customers (\n" +
            "  id INT PRIMARY KEY AUTO_INCREMENT,\n" +
            "  name        TEXT NOT NULL,\n" +
            "  address     TEXT NOT NULL\n" +
            ");";
```

into
<!-- .element: class="fragment" data-fragment-index="1" -->

```
static final String SQL_CREATE_CUSTOMERS =
        "CREATE TABLE " + DBContract.CustomerEntry.TABLE_NAME + "(\n" +
        DBContract.CustomerEntry.ID + " INT PRIMARY KEY AUTO_INCREMENT,\n" +
        DBContract.CustomerEntry.NAME + " TEXT NOT NULL,\n" +
        DBContract.CustomerEntry.ADDRESS + " TEXT NOT NULL\n" +
        ");";
```

<!-- .element: class="fragment" data-fragment-index="2" -->

