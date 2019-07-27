## REST - REpresentational State Transfer

Интерфейс ограничен <b>CRUD</b> операциями

- Create — **POST**
- Read — **GET**
- Update — **PUT**
- Delete — **DELETE**

<div class="fragment" data-fragment-index="1">
Пример использования:

<ul>
<li>GET `/user/info` <span style="color: lightgrey"  class="fragment" data-fragment-index="2">— прочитать информацию</span></li>
<li>PUT `/user/info` <span style="color: lightgrey"  class="fragment" data-fragment-index="2">— обновить информацию</span></li>
<li>GET `/item/comments` <span style="color: lightgrey"  class="fragment" data-fragment-index="2">— получить комментарии</span></li>
<li>GET `/item/comments/14` <span style="color: lightgrey"  class="fragment" data-fragment-index="2">— получить 14ый комментарий</span></li>
<li>POST `/item/comments` <span style="color: lightgrey"  class="fragment" data-fragment-index="2">— добавить комментарий</span></li>
<li>DELETE `/item/comments` <span  style="color: lightgrey" class="fragment" data-fragment-index="2">— очистить комментарии</span></li>
<li>DELETE `/item/comments/14` <span  style="color: lightgrey" class="fragment" data-fragment-index="2">— удалить 14ый комментарий</span></li>
</ul>
</div>

---

## Типовая работа с REST-сервером

Рутинные операции:

- Сформировать запрос <!-- .element class="fragment" data-fragment-index="1" -->
    + URL
    + HTTP-заголовки
    + HTTP-метод
    + Задать тело (как правило JSON)
- Выполнить запрос в отдельном потоке <!-- .element class="fragment" data-fragment-index="2" -->
- Доставить результаты в целевой поток <!-- .element class="fragment" data-fragment-index="3" -->
- Обработать результаты <!-- .element class="fragment" data-fragment-index="4" -->

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Фреймворки <span class="fragment" data-fragment-index="1">для сети</span> <span class="fragment" data-fragment-index="2">и для графики</span>