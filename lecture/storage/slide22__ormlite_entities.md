## Описание таблиц

Для создания и описания сущностей используются аннотации.

<pre><code class = "java large" data-trim data-noescape>
<span class="fragment" data-fragment-index="3">@DatabaseTable(tableName = CustomerEntry.TABLE_NAME)</span>
<span class="fragment" data-fragment-index="1">public class Customer {</span>

    <span class="fragment" data-fragment-index="4">@DatabaseField(columnName = CustomerEntry.COLUMN_NAME_ID,
                generatedId = true)</span>
    <span class="fragment" data-fragment-index="1">private long id;</span>
    
    <span class="fragment" data-fragment-index="4">@DatabaseField(columnName = CustomerEntry.COLUMN_NAME_NAME,
                canBeNull = false)</span>
    <span class="fragment" data-fragment-index="1">private String name;</span>

<span class="fragment" data-fragment-index="1">}</span>
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## Описание таблиц

Параметры `@DatabaseField`:

* `columnName`
* `id` &ensp; — &ensp; устанавливается в коде
* `generatedId` &ensp; — &ensp; генерируется автоматически (autoincrement)
* `defaultValue`
* `notNull`
* `unique`

