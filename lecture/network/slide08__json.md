# JSON

<blockquote class="noveo-info">
JavaScript Object Notation — текстовый формат обмена данными, основанный на JavaScript.
</blockquote>

<br>

* Занимает мало места
* Легко читается людьми
* Хорошо парсится
* Популярный (есть поддержка)
* Не зависит от языка программирования

<!-- .element: class="fragment" data-fragment-index="1" -->


------

# JSON syntax


<div class="half-left">
<pre><code class="JavaScript">{
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
  "married": true
}
</code></pre>
</div>

<div class="half-right">
<br>
    <p>Набор пар ключ-значение<p>
    <p>Ключ — только строка<p>
    <p>Значения:
    <li>объект</li>
    <li>массив</li>
    <li>число</li>
    <li>строка</li>
    <li>литералы (true, false, null)</li>
</div>