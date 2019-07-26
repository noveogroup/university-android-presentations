## Legacy: Работа с SQLite

* `Contract class`
* `SQLiteOpenHelper`
* `SQLiteDatabase`
* `Cursor`

------

## Legacy: Работа с SQLite

Много ручной работы, громоздкий код.


<pre>
<code data-trim data-noescape>
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
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->