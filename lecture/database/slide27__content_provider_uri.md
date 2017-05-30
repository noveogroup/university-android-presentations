## URI

**U**niform **R**esource **I**dentifier — унифицированный идентификатор ресурса.

<br>
<br>

При работе с провайдером используются URI и [`UriMatcher`](https://developer.android.com/reference/android/content/UriMatcher.html)

```
content://<authority>/<path>/<id>
```

* `authority` — уникальное имя `ContentProvider`'а
* `path` — какие данные нужны (имя таблицы)
* `id` — идентификатор записи.

------

## URI
### Пример

```
content://com.noveo.db.provider/toys
```
Если URI оканчивается на `/toys` — это запрос про все игрушки

<br>

```
content://com.noveo.db.provider/toys/5
```

Если на `toys/[ID]` — про конкретную игрушку
<br>
