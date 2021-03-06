<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Что делать если работает неправильно?

---

## Logging

+ Журналирование процесса исполнения 
+ Помощь в процессе отладки
+ Сбор информации о причинах возникновения ошибок

------

## Logging - Рекомендуемое решение

+ В библиотеках  [SLF4J API](https://github.com/qos-ch/slf4j) 
+ В обычных Android-приложениях  [logback-android](../Libraries/best-practice_logback.md)

## Logging - Составные части 

+ `Logger` - именованая сущность, обычно соответствует классу
+ `Appender` - "писатель", может дополнять файл, web-сокет, консольный вывод
+ `Layout` - шаблон сообщения

[История Java Logging](https://habrahabr.ru/post/113145/)

------

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

------

<!-- .slide:    data-transition="slide-in fade-out" -->    

## Logging - раскраска 

[Editor] -> [Colors&Fonts] -> [Android Logcat]

* Debug : 6897BB <!-- .element: style="color:#6897BB" -->
* Info : 6A8759 <!-- .element: style="color:#6A8759" -->
* Warn : BBB529 <!-- .element: style="color:#BBB529" -->
* Error : FF6B68 <!-- .element: style="color:#FF6B68" -->
* Assert : 9876AA <!-- .element: style="color:#9876AA" --> 

Или использовать готовую тему, например [Solarized](https://github.com/jkaving/intellij-colors-solarized)

------

<!-- .slide:    data-transition="fade-in slide-out" -->    

## Logging - раскраска 

[Editor] -> [Colors&Fonts] -> [Android Logcat]

![](lecture/debug/img/logcat_colorful.png)

---

<!-- .slide:    class="center center-horizontal" -->

## Debugger

![](lecture/debug/img/debugger_stop.png)

И все? <!-- .element: class="fragment" data-fragment-index="1" -->

------

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Можно точнее выбирать место

![](lecture/debug/img/debugger_breakpoints.png)

------

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Даже по условию

![](lecture/debug/img/debugger_breakpoints_more.png)

------

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Даже с фильтрами и логами

![](lecture/debug/img/debugger_breakpoints_more_more.png)

------

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade" -->    

## Debugger

### Можно вычислять выражения <span style="color: grey" class="fragment" data-fragment-index="1">Run > Quick Evaluate Expression</span>

![](lecture/debug/img/debugger_evaluate.png)

------

<!-- .slide:    class="center center-horizontal" -->

## Debugger


<div class="half-left">
<img src="lecture/debug/img/debugger_panel.png" width="60%">
</div>
<div class="half-right fragment" data-fragment-index="1">
<img src="lecture/debug/img/debugger_run.png" width="40%">
</div>

------

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

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## А как дебажить Rx?

------

## Rx Logging 

```kotlin
fun <T> Observable<T>.applyLogger(log: Logger, name: String): Observable<T> = compose { source ->
    source
            .doOnSubscribe { log.debug("$name started") }
            .doOnError { log.debug("$name failed with ${it.javaClass.simpleName}") }
            .doOnNext { log.debug("$name next item $it") }
            .doOnComplete { log.debug("$name completed") }
            .doOnDispose { log.debug("$name disposed") }
}

val log = LoggerFactory.getLogger("LogTAG")

fun test() {
    api.request()
        .applyLogger(log, "api.request()")
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe()
}
```

------

## Rx General Error Handler

```kotlin
RxJavaPlugins.setErrorHandler { error ->
    //Analyze error
    val shouldCrash = when (error) {
        is OnErrorNotImplementedException -> {}
        is CompositeException -> {}
        is UndeliverableException -> {}
        else -> {}
    }

    Thread.currentThread().let {
        if (shouldCrash) it.uncaughtExceptionHandler.uncaughtException(it, cause)
    }
}
```

<!-- .element: data-trim -->

---

## Thread Error Handler 

```kotlin
Thread.getDefaultUncaughtExceptionHandler().let { handler ->
    Thread.setDefaultUncaughtExceptionHandler { thread, error ->
        log.error("uncaught error", error)
        
        var tmp = error
        while (tmp.cause != null) {
            tmp = tmp.cause
            log.error("${tmp::class.java.simpleName} cause ", tmp as Throwable)
        }

        handler.uncaughtException(thread, error)
    }
}
```

## Прямой крэш

<!-- .element: class="fragment" data-fragment-index="1" -->

```kotlin
Thread.getDefaultUncaughtExceptionHandler().uncaughtException(Thread.currentThread(), error)
``` 

<!-- .element: class="fragment" data-fragment-index="1" -->