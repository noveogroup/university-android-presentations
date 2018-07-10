# JSON parsing

Для сериализации и десериализации объектов используются готовые решения.

<br>

<blockquote class="noveo-info">
<p>Есть множество инструментов для просмотра и редактирования json в браузере.
Например, отформатировать json можно <a href="http://jsonviewer.stack.hu/">здесь</a>.</p>
</blockquote>

------

# Jackson

Jackson — библиотека поддержки JSON для JVM платформы.

<br>

<pre><code class="groovy large" data-trim data-noescape>implementation "com.fasterxml.jackson.core:jackson-core:2.9.4"
implementation "com.fasterxml.jackson.core:jackson-annotations:2.9.4"
implementation "com.fasterxml.jackson.core:jackson-databind:2.9.4"
implementation "com.fasterxml.jackson.module:jackson-module-kotlin:2.9.4"
</code></pre></div>

------

# Jackson


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

<pre><code class="Kotlin">
data class UserJson(
        @JsonProperty("name")
        val name: String,
        
        @JsonProperty("birthday")
        val birthday: String,
        
        @JsonProperty("children")
        val children: List&lt;Child>,
        
        @JsonProperty("location")
        val place: Location,
        
        @JsonProperty("married")
        val married: Boolean
)

</code></pre>

------

# Jackson


<pre><code class="Kotlin large">val mapper = jacksonObjectMapper()
val user = mapper.readValue(json)
</code></pre>

<br>

### [Annotations](https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations)

* `@JsonProperty`
* `@JsonIgnore`
* `@JsonFormat`
