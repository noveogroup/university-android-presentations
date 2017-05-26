## Content Provider

Класс для обмена данными между приложениями.

`//todo: add Document Provider and move to the end`

*Use case*:  
* Доступ к контактам и т.п.
* Виджеты

<br>

```
<provider 
     android:authorities="com.noveo.internship.db.exampleContentProvider" 
     android:name=".database.ExampleContentProvider"
     android:multiprocess="true"
     android:exported="false" />
```
<!-- .element: class="fragment" data-fragment-index="1" -->

------

## Content Provider

### Как использовать

Создаем наследника и переопределяем методы:

* `onCreate()`
* `query()`
* `getType()`
* `insert()`
* `update()`
* `delete()`

