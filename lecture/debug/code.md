<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Что делать если работает неправильно?

---

## Logging

+ Журналирование процесса исполнения 
+ Помощь в процессе отладки
+ Сбор информации о причинах возникновения ошибок

---

## Logging - Рекомендуемое решение

+ В библиотеках  [SLF4J API](https://github.com/qos-ch/slf4j) 
+ В обычных Android-приложениях  [logback-android](../Libraries/best-practice_logback.md)

## Logging - Составные части 

+ `Logger` - именованая сущность, обычно соответствует классу
+ `Appender` - "писатель", может дополнять файл, web-сокет, консольный вывод
+ `Layout` - шаблон сообщения

[История Java Logging](https://habrahabr.ru/post/113145/)

---

<!-- .slide:    class="center center-horizontal" -->

# https://logback.qos.ch/manual/layouts.html 

```xml
<configuration>
    <appender name="logcat" class="ch.qos.logback.classic.android.LogcatAppender">
        <tagEncoder>
            <pattern>TAG</pattern>
        </tagEncoder>
        <encoder>
            <pattern>%logger{0}.%M [%thread] - %msg</pattern>
        </encoder>
    </appender>

    <root level="DEBUG">
        <appender-ref ref="logcat" />
    </root>
</configuration>
```

---

## Logging - раскраска 

[Editor] -> [Colors&Fonts] -> [Android Logcat]

* Debug : 6897BB <!-- .element: style="color:#6897BB" -->
* Info : 6A8759 <!-- .element: style="color:#6A8759" -->
* Warn : BBB529 <!-- .element: style="color:#BBB529" -->
* Error : FF6B68 <!-- .element: style="color:#FF6B68" -->
* Assert : 9876AA <!-- .element: style="color:#9876AA" --> 

Или использовать готовую тему, например [Solarized](https://github.com/jkaving/intellij-colors-solarized)

---

<!-- .slide:    class="center center-horizontal" -->

## Debugger

![](lecture/debug/img/debugger_stop.png)

И все? <!-- .element: class="fragment" data-fragment-index="1" -->

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Можно точнее выбирать место

![](lecture/debug/img/debugger_breakpoints.png)

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Даже по условию

![](lecture/debug/img/debugger_breakpoints_more.png)

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Даже с фильтрами и логами

![](lecture/debug/img/debugger_breakpoints_more_more.png)

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Можно вычислять выражения

![](lecture/debug/img/debugger_evaluate.png)

---

<!-- .slide:    class="center center-horizontal" -->

## Debugger


<div class="half-left">
<img src="lecture/debug/img/debugger_panel.png" width="60%">
</div>
<div class="half-right fragment" data-fragment-index="1">
<img src="lecture/debug/img/debugger_run.png" width="40%">
</div>

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### `android.os.Debug`

```kotlin
override fun onCreate() {
    if (debug) {
        Debug.waitForDebugger()
    }
}
```