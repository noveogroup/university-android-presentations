## <a href="https://www.w3.org/TR/1998/REC-xml-19980210" target="_blank">e<span class="fragment highlight-green" data-fragment-index="1">X</span>tensible <span class="fragment highlight-green" data-fragment-index="1">M</span>arkup <span class="fragment highlight-green" data-fragment-index="1">L</span>anguage</a>

<div class="fragment" data-fragment-index="1"><span class="fragment highlight-green" data-fragment-index="1">XML</span> - расширяемый язык разметки</div>
<ul>
<li>Хранение данных</li>
<li>Передача данных</li>
<li>Создание диалектов</li>
</ul>

---

### Синтаксис XML

<div class="half-left">
    <pre><code class="xml small">
        &lt;?xml version="1.0" encoding="UTF-8"?&gt;
        &lt;addresses&gt;
           &lt;address&gt;
              &lt;name&gt;Pupkin&lt;/name&gt;
              &lt;city&gt;>Novosibirsk&lt;/city&gt;
              &lt;street&gt;Demakova&lt;/street&gt;
              &lt;phone type="mobile">+79139130000&lt;/phone&gt;
              &lt;webcontent&gt;<![CDATA[<html>...</html>]]>&lt;/webcontent&gt;
              &lt;documents&gt;
                 &lt;document type="driving permit">9045798749&lt;/document&gt;
              &lt;/documents&gt;
           &lt;/address&gt;
           &lt;address&gt;
              &lt;name&gt;Losev&lt;/name&gt;
              &lt;phone type="home"&gt;+73834913400&lt;/phone&gt;
              &lt;documents&gt;
                 &lt;document type="passport"&gt;3451231231&lt;/document&gt;
                 &lt;document type="driving permit"&gt;43568749&lt;/document&gt;
              &lt;/documents&gt;
           &lt;/address&gt;
           &lt;address&gt;&lt;/address&gt;
           &lt;!-- Comment --&gt;
        &lt;/addresses&gt;
    </code></pre>
</div>

<div class="half-right">
    <h3>Что тут?</h3>
    <ul>
        <li class="fragment" data-fragment-index="1">Тэги</li>
        <li class="fragment" data-fragment-index="2">Элементы <span class="fragment highlight-grey" data-fragment-index="3">в т.ч. корневой</span></li>
        <li class="fragment" data-fragment-index="3">Значение <span class="fragment highlight-grey" data-fragment-index="4">(может быть пустым)</span></li>
        <li class="fragment" data-fragment-index="4">Атрибуты</li>
        <li class="fragment" data-fragment-index="5">XML объявление (declaration)</li>
    </ul>
</div>

---

### Применения

<li class="fragment" data-fragment-index="1">SVG</li>
<li class="fragment" data-fragment-index="2">HTML</li>
<li class="fragment" data-fragment-index="3">Конфиги для Ant, Maven</li>
<li class="fragment" data-fragment-index="4">Android resources</li>
<li class="fragment" data-fragment-index="5">Сериализация данных</li>

---

### XML

<div class="half-left fragment" data-fragment-index="1">
    <h3 style="color: green">Плюсы</h3>
    <ul>
    <li>Читаемость</li>
    <li>Стандарт W3C</li>
    <li>Подходит для классических структур данных</li>
    <li>Не зависит от платформы</li>
    </ul>
</div>

<div class="half-right fragment" data-fragment-index="2">
    <h3 style="color: red">Минусы</h3>
    <li class="fragment" data-fragment-index="3">Многословность</li>
    <li class="fragment" data-fragment-index="4">Неоднозначность</li>
    <li class="fragment" data-fragment-index="5">Отсутствует строгая типизация</li>
</div>

---

## <span class="fragment highlight-red" data-fragment-index="1">J</span>ava<span class="fragment highlight-red" data-fragment-index="1">S</span>cript <span class="fragment highlight-red" data-fragment-index="1">O</span>bject <span class="fragment highlight-red" data-fragment-index="1">N</span>otation - JSON

<ul>
<li>Хранение данных</li>
<li>Передача данных</li>
<li>Менее многословный (чем XML)</li>
<li>Соответственно, меньше весит</li>
<li>Широко распространен</li>
</ul>

---

### Синтаксис

<div class="half-left">
<pre><code class="JavaScript small">
{
  "user": {
    "name": "John Doe",
    "birthday": "07-02-1983",
    "children": [
      {
        "name": "John Doe JR",
        "birthday": "05-03-2005",
        "children": []
      }
    ]
  },
  "location": {
    "lat": 58.04857,
    "lng": 83.85743
  },
  "married": true,
  "danger": "low"
}
</code></pre>
</div>

<div class="half-right">
    <h3>Что тут?</h3>
    <ul>
    <li class="fragment" data-fragment-index="1">Ключи <span>(строка)</span></li>
    <li class="fragment" data-fragment-index="2">Пары ключ-значение</li>
    <li class="fragment" data-fragment-index="3">
    <p>Значения:</p>
     <ul>
     <li class="fragment" data-fragment-index="4">объект</li> 
     <li class="fragment" data-fragment-index="5">массив</li>
     <li class="fragment" data-fragment-index="6">число</li>
     <li class="fragment" data-fragment-index="7">литералы: <span>boolean, null, строка, число</span></li>
     </ul>
    </li>
    </ul>
</div>
