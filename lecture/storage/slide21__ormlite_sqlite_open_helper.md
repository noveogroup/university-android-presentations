## OrmLiteSqliteOpenHelper

* <!-- .element: class="fragment" data-fragment-index="1" --> Наследуем `OrmLiteSqliteOpenHelper`
* <!-- .element: class="fragment" data-fragment-index="2" --> Нужен конструктор от `Сontext` (!)

<br>


<pre><code class = "java large" data-trim data-noescape>
public class DatabaseHelper extends OrmLiteSqliteOpenHelper {
<span class="fragment" data-fragment-index="3">
    private static final String DATABASE_NAME = "database.db";
    private static final int DATABASE_VERSION = 1;</span>
<span class="fragment" data-fragment-index="2">
    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }</span>
    
}
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## OrmLiteSqliteOpenHelper

<pre>
<code data-trim data-noescape>
@Override
public void onCreate(SQLiteDatabase database, ConnectionSource connectionSource) {
    try {
        <span class="fragment highlight-red" data-fragment-index="1">TableUtils</span>.createTable(connectionSource, Customer.class);
    } catch (SQLException e) {
            //handle...
    }
}
</code></pre>


<blockquote class="noveo-info">
`TableUtils`: `createTable()`, `clearTable()`, `dropTable()`
</blockquote>

<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

```
@Override
public void onUpgrade(SQLiteDatabase database, ConnectionSource connectionSource,
                                                    int oldVersion, int newVersion) {
    //...
}
```

<!-- .element: class="fragment" data-fragment-index="2" -->

