<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# HTTP, REST, запросы и ответы

------

# HTTP запрос

Состоит из 3 частей, в определенном порядке:

<ul>
    <li data-fragment-index="1">Стартовая строка — определяет тип сообщения;</li>
    <li data-fragment-index="2">Заголовки — характеристики, параметры и прочие сведения;</li>
    <li data-fragment-index="3">Тело сообщения — данные сообщения. (отделяется от заголовков пустой строкой).</li>
</ul>

<br>

<p class="fragment" data-fragment-index="1">Тело сообщения может отсутствовать, но стартовая строка и заголовок являются обязательными элементами.</p>

------

# HTTP запрос

<pre><code class="text" data-trim data-noescape>
GET /api/v1.4/welcome.html?lang=ru HTTP/1.1
Host: api.noveogroup.com
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Host: api.noveogroup.com
accept-encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache
// пустая строка
// здесь могло быть ваше тело
</code></pre>

---

# Методы REST

## GET
  
Получить элемент по id или коллекцию элементов.  

<br>

`GET /users/` -- получить список всех пользователей  
`GET /users/3/` -- получить пользователя с id = 3


------

# Методы REST

## POST

Создание элемента/ обновление  
`+` все неподходящие под предыдущие категории действия (например, “зачекиниться” в локации, подписаться на новости и т.п.)

<br>

`POST /users/` -- добавить пользователей (данные в теле запроса)

------

# Методы REST

## DELETE
Удалить элемент по id

<br>

`DELETE /users/3` -- удалить пользователя 3


------

# Методы REST

Все операции с данными называют CRUD:

* `Create`
* `Read`
* `Update`
* `Delete`

<br>
Есть другие методы REST: `PUT`, `PATCH`, [etc](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).