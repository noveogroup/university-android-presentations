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
<code class = "java large" data-trim data-noescape>
<span class="fragment" data-fragment-index="1">String query = "SELECT id, name FROM customers";</span>
<span class="fragment" data-fragment-index="2">
Cursor cursor = sqLiteDatabase.rawQuery(query, null);
cursor.moveToFirst();</span>

<span class="fragment" data-fragment-index="3">do {</span><span class="fragment" data-fragment-index="4">
    int id = cursor.getInt(cursor.getColumnIndex("id"));
    String name = cursor.getString(cursor.getColumnIndex("name"));
    //create customer model, add it to collection, etc. </span>
<span class="fragment" data-fragment-index="3">} while (cursor.moveToNext());</span>

<span class="fragment" data-fragment-index="5">
cursor.close();</span>
</code></pre>