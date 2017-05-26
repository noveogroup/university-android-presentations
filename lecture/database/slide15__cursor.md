## Cursor

Возвращается на запрос к базе данных.  
Предоставляет произвольный доступ к результатам запроса. 

<br>

* `moveToFirst()`, `moveToLast()`
* `moveToNext()`, `moveToPrevious()`

* типизированные методы
    + `getInt()`
    + `getLong()`
    + `getString()`;
    + etc
    
* `getPosition()`
* `getColumnIndex()`

* `close()`

------

## Работа с Cursor

<pre>
<code data-trim data-noescape>
<span class="fragment" data-fragment-index="1">String query = "SELECT " + DBContract.Customer.ID + ", " +
        DBContract.Customer.NAME +
        " FROM " + DBContract.Customer.TABLE_NAME;</span>
<span class="fragment" data-fragment-index="2">
Cursor cursor = sqLiteDatabase.rawQuery(query, null);
cursor.moveToFirst();</span>

<span class="fragment" data-fragment-index="3">do {</span><span class="fragment" data-fragment-index="4">
    int id = cursor.getInt(cursor.getColumnIndex(DBContract.Customer.ID));
    String name = cursor.getString(cursor.getColumnIndex(DBContract.Customer.NAME));
    //...</span>
<span class="fragment" data-fragment-index="3">} while (cursor.moveToNext());</span>

<span class="fragment" data-fragment-index="5">
cursor.close();</span>
</code></pre>