<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Фреймворки

---


### Фреймворки

<ul>
<li>Автоматический парсинг!</li>
<li class="fragment" data-fragment-index="1">Просто отдай класс с <span style="color: purple">разметкой</span></li>
<li class="fragment" data-fragment-index="2">Можно отдельно размечать свойства для сериализации и десериалзиации</li>
<br>
<li class="fragment" data-fragment-index="3">Могут возникнуть проблемы с «плохим» файлом или с преобразованием структуры.</li>
<li class="fragment" data-fragment-index="4">В основном они базируются на существующих DOM- (изредка Stream-) парсерах</li>
</ul>

<br>
<br>

<blockquote class="fragment noveo-info" data-fragment-index="5">
Такую разметку и автоматический разбор принято называть <strong>mapping</strong>
</blockquote>

---

### Simple XML

<div class="half-left">
<pre><code class="xml" data-trim data-noescape>
&lt;example index="123"&gt;
   &lt;text&gt;Example message&lt;/text&gt;
&lt;/example&gt;
</code></pre>  
</div>

<div class="half-right">
<pre><code class="kotlin" data-trim data-noescape>
@Root
class Example {
    @field:Element(name = "text", required = true)
    val text: String
    
    @field:Attribute(name = "index")
    var index: Int
}
</code></pre>  
</div>

---

### GSON

<div class="half-left">
<pre><code class="JavaScript" data-trim data-noescape>
{
  "user_id"="id342",
  "age"=25
}
</code></pre>
</div>
<div class="half-right">
<pre><code class="kotlin" data-trim data-noescape>
data class User(
   @SerializedName("user_id")
   val id: String,
   @SerializedName("age")
   val age: Int
)
</code></pre>
</div>

------

### GSON

<a target="_blank" href="https://bytes.babbel.com/en/articles/2018-05-25-kotlin-gson-nullability.html">Есть проблема при работе с nullable в Kotlin :(</a>

---

### Jackson

<div class="half-left">
<pre><code class="JavaScript" data-trim data-noescape>
{
  "user_id"="id342",
  "age"=25
}
</code></pre>
</div>
<div class="half-right">
<pre><code class="kotlin" data-trim data-noescape>
data class User(
   @JsonProperty("user_id")
   val id: String,
   @JsonProperty("age")
   val age: Int
)
</code></pre>
</div>


---

<!-- .slide:    data-transition="convex" -->

### Ссылки

#### Форматы

- [XML docs](http://www.w3schools.com/xml/)
- [JSON docs](http://www.json.org/)

#### Фреймворки
- [Simple XML](http://simple.sourceforge.net/)
- [GSON](https://github.com/google/gson)
- [Jackson](http://wiki.fasterxml.com/JacksonHome)