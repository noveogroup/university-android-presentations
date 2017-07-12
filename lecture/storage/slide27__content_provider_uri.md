## URI

**U**niform **R**esource **I**dentifier — унифицированный идентификатор ресурса.

<br>
<br>

При работе с провайдером используются URI и [`UriMatcher`](https://developer.android.com/reference/android/content/UriMatcher.html)

<pre><code class = "java large" data-trim data-noescape>
content://&lt;authority>/&lt;path>/&lt;id>
</code></pre>

* `authority` — уникальное имя `ContentProvider`'а
* `path` — какие данные нужны (имя таблицы)
* `id` — идентификатор записи.

------

## URI
### Пример

<pre><code class = "java large" data-trim data-noescape>
content://com.noveo.db.provider/toys
</code></pre>

Если URI оканчивается на `/toys` — это запрос про все игрушки

<br>

<pre><code class = "java large" data-trim data-noescape>
content://com.noveo.db.provider/toys/5
</code></pre>

Если на `toys/[ID]` — про конкретную игрушку
<br>
