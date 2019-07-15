## <a href="https://www.w3.org/TR/1998/REC-xml-19980210" target="_blank">e<span class="fragment highlight-green" data-fragment-index="1">X</span>tensible <span class="fragment highlight-green" data-fragment-index="1">M</span>arkup <span class="fragment highlight-green" data-fragment-index="1">L</span>anguage</a>

<div class="fragment" data-fragment-index="1"><span class="fragment highlight-green" data-fragment-index="1">XML</span> - расширяемый язык разметки</div>
<li>Хранение данных</li>
<li>Передача данных</li>
<li>Создание диалектов</li>

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
        <li>Тэги</li>
        <li class="fragment" data-fragment-index="1">Элементы <span class="fragment highlight-grey" data-fragment-index="2">в т.ч. корневой</span></li>
        <li class="fragment" data-fragment-index="3">Значение <span class="fragment highlight-grey" data-fragment-index="4">(может быть пустым)</span></li>
        <li class="fragment" data-fragment-index="5">Атрибуты</li>
        <li>XML объявление (declaration)</li>
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
    <li>Читаемость</li>
    <li>Стандарт W3C</li>
    <li>Подходит для классических структур данных</li>
    <li>Не зависит от платформы</li>
</div>

<div class="half-right fragment" data-fragment-index="2">
    <h3 style="color: red">Минусы</h3>
    <li class="fragment" data-fragment-index="3">Многословность</li>
    <li class="fragment" data-fragment-index="4">Неоднозначность</li>
    <li class="fragment" data-fragment-index="5">Отсутствует строгая типизация</li>
</div>

---

## <span class="fragment highlight-red" data-fragment-index="1">J</span>ava<span class="fragment highlight-red" data-fragment-index="1">S</span>cript <span class="fragment highlight-red" data-fragment-index="1">O</span>bject <span class="fragment highlight-red" data-fragment-index="1">N</span>otation - JSON

<li>Хранение данных</li>
<li>Передача данных</li>
<li></li>
<li>Менее многословный(чем XML)</li>
<li>Соответственно, меньше весит</li>
<li>Более распространен в качестве формата передачи данных веб-сервисов</li>

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
    <li>Набор пар ключ-значение</li>
    <li>Ключ - только строка</li>
    <li>Значения: объект, массив, число, литералы(true, false, null), строка</li>
    <li>Более распространен в качестве формата передачи данных веб-сервисов</li>
</div>

---

### DOM-парсер

<br>
Document Object Model — это не зависящий от платформы и языка интерфейс, позволяющий программам получить доступ к содержимому XML-документов, а также изменять содержимое, структуру и оформление таких документов. В памяти строится полное дерево, представляющее документ

---

### SAX-парсер

<br>
SAX (англ. «Simple API for XML») — способ последовательного чтения/записи XML-файлов (существуют аналоги и для JSON). Push-парсер — мы обрабатываем события вида «начало элемента», «начало атрибута». Требуют фиксированного количества памяти для своей работы. Не позволяют изменять содержимое документа. Валидируют документ по ходу чтения. Можно прочесть часть «испорченного» документа. Обычно быстрее, чем DOM-парсеры

---

### StAX-парсер

<br>
StAX (англ. «Streaming API for XML») — способ последовательного чтения/записи XML-файлов (существуют аналоги и для JSON) Pull-парсер — мы не обрабатываем события, приходящие от парсера, а сами инициируем обработку, вытягивая токены. Нам предоставляется курсор, с которым мы можем перемещаться по токенам документа.

---

### Фреймворки

<li>Позволяют делать парсинг автоматически, не задумываясь о деталях.</li>
<li>Можно просто подавать класс с соответствующим именованием полей.</li>
<li>Можно аннотациями задавать, что и как сериализовать/десериализовать.</li>
<li>Могут возникнуть проблемы с «плохим» файлом или с преобразованием структуры.</li>
<li>В основном они базируются на существующих DOM- (изредка Stream-) парсерах</li>

---

### Simple XML

<div class="half-left">
<pre><code class="xml">
&lt;example index="123"&gt;
   &lt;text&gt;Example message&lt;/text&gt;
&lt;/example&gt;
</code></pre>  
</div>

<div class="half-right">
<pre><code class="java">
@Root
public class Example {

   @Element
   private String text;

   @Attribute
   private int index;
}
</code></pre>  
</div>

---

### GSON

<div class="half-left">
<pre><code class="JavaScript">
{
  "user_id"="id342",
  "age"=25
}
</code></pre>
</div>
<div class="half-right">
<pre><code class="java">
public class User {

   @SerializedName("user_id")
   private String text;

   private int index;
}
</code></pre>
</div>

---

### Ссылки

- [W3C XML Tutorial](http://www.w3schools.com/xml/)
- [JSON docs](http://www.json.org/)
- [Simple XML](http://simple.sourceforge.net/)
- [Gson](https://github.com/google/gson)
- [Jackson](http://wiki.fasterxml.com/JacksonHome)
- [XmlPullParser](https://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html)