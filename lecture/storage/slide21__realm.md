## Realm

`#nosql`

Использует собственное хранилище объектов (граф объектов).  
Разработана специально для мобильных платформ.

<br>

<iframe width=100% height=500px src="https://realm.io/products/realm-mobile-database/"></iframe>

------

## Realm в Android

Представлен как [Realm Java](https://realm.io/docs/java/latest/).

Сущности должны наследоваться от `RealmObject`.  


<pre><code class = "kotlin large" data-trim data-noescape>
open class Dog : RealmObject() {
    var name: String? = null
}
</code></pre>

------

## Realm. Особенности

* Не нужно знать SQL
* Быстрое чтение и выполнение запросов
* SQL-like features

<br>

* LiveObjects
* ThreadSingleton

<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

* [~~Отладка с дебаггером~~](https://realm.io/docs/java/latest/#testing-and-debugging)
* [RealmBrowser](https://itunes.apple.com/app/realm-browser/id1007457278) только для mac.

<!-- .element: class="fragment" data-fragment-index="2" -->