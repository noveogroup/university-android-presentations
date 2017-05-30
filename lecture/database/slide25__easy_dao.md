## DAO is easy!

Вы помните `Cursor`?..

```
String query = "SELECT " + DBContract.CustomerEntry.ID + ", " +
        DBContract.CustomerEntry.NAME +
        " FROM " + DBContract.CustomerEntry.TABLE_NAME;
Cursor cursor = sqLiteDatabase.rawQuery(query, null);
cursor.moveToFirst();

do {
    int id = cursor.getInt(cursor.getColumnIndex(DBContract.CustomerEntry.ID));
    String name = cursor.getString(cursor.
                                getColumnIndex(DBContract.CustomerEntry.NAME));
    //create customer model, add it to collection, etc.
} while (cursor.moveToNext());

cursor.close();
```

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## DAO is easy!

Теперь всё стало проще!

```
List<Customer> customers = customerDao.queryForAll();
```

<img style="float: right" src="lecture/database/img/happy_droid.png">
<!-- .element: class="fragment" data-fragment-index="1" -->