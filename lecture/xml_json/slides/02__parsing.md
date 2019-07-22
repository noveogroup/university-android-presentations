<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Синтаксический анализ <span class="fragment" data-fragment-index="1">aka <span style="color: yellow">Parsing</span></span>

---

### DOM-парсер

<br>
<div class="third-left fragment" data-fragment-index="1">
<img src="/lecture/xml_json/img/dom.png" width="100%">
</div>
<div class="third-center-right">
<strong class="fragment" data-fragment-index="2">Document Object Model</strong>
<p><span class="fragment" data-fragment-index="2">это не зависящий от платформы и языка интерфейс</span><span  class="fragment" data-fragment-index="3">, позволяющий получить доступ к содержимому XML-документов</span><span class="fragment" data-fragment-index="4">, а также изменять содержимое, структуру и оформление таких документов.</span></p>
<br><br>
<p class="fragment" data-fragment-index="5">В памяти строится полное дерево, представляющее документ</p>
</div>

* Все в памяти
* Работает только если документ валидный
* Можно производить in-memory "манипуляции"

---

### SAX-парсер

<br>
SAX (англ. «Simple API for XML») — способ последовательного чтения XML-файлов (существуют аналоги и для JSON). Push-парсер — мы обрабатываем события вида «начало элемента», «начало атрибута». Требуют фиксированного количества памяти для своей работы. Не позволяют изменять содержимое документа. Валидируют документ по ходу чтения. Можно прочесть часть «испорченного» документа. Обычно быстрее, чем DOM-парсеры

---

### StAX-парсер

<br>
StAX (англ. «Streaming API for XML») — способ последовательного чтения/записи XML-файлов (существуют аналоги и для JSON) Pull-парсер — мы не обрабатываем события, приходящие от парсера, а сами инициируем обработку, вытягивая токены. Нам предоставляется курсор, с которым мы можем перемещаться по токенам документа.

---

### Фреймворки

<ul>
<li>Позволяют делать парсинг автоматически, не задумываясь о деталях.</li>
<li>Можно просто подавать класс с соответствующим именованием полей.</li>
<li>Можно аннотациями задавать, что и как сериализовать/десериализовать.</li>
<li>Могут возникнуть проблемы с «плохим» файлом или с преобразованием структуры.</li>
<li>В основном они базируются на существующих DOM- (изредка Stream-) парсерах</li>
</ul>

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