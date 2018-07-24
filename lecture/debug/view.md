<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Что делать если тормозит?

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="fade-out slide-in" -->

## Рендеринг в Android

<br> <br> 

# 60 fps

<br>

# 16.66 ms per frame

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="fade" -->

## Рендеринг в Android

<img src="lecture/debug/img/frames_flow.png">

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="fade" -->

## Рендеринг в Android

<img src="lecture/debug/img/frames_parts.png">

---

<!-- .slide: class="center center-horizontal" -->

## Misc Frame

```
I/Choreographer(691): Skipped 647 frames! 
                      The application may be doing too much work on its main thread.
```

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="slide-in" -->

## Overdraw 

<img src="lecture/debug/img/overdraw_bad.png" width="40%">

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="fade" -->

## Overdraw 

<img src="lecture/debug/img/overdraw_good.png" width="40%">

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="slide-in" -->

## Measure & Layout

<img src="lecture/debug/img/android_view_lifecycle.png" width="20%">

---

<!-- .slide: class="center center-horizontal" -->
<!-- .slide: data-transition="fade" -->

## Measure & Layout

<img src="lecture/debug/img/android_view_lifecycle_2.png" width="20%">

---

<!--  .slide: class="center center-horizontal" -->
<!--  .slide: data-transition="fade" -->

## Measure & Layout

<div class="half-left">
<img src="lecture/debug/img/android_view_lifecycle_2.png" width="40%">
</div>
<div class="half-right">
<br><br>
<h3>Что происходит</h3>
<ul>
<li>Измерение размеров</li>
<li>Рассчет координат</li>
<li>Инструкции GPU</li>
</ul>

<h3 class="fragment" data-fragment-index="1">Советы</h3>
<ul class="fragment" data-fragment-index="1">
<li>в `onDraw()` не создавать объекты</li>
<li>минимизировать вложенность ViewGroup</li>
<li>реже вызывать `invalidate()` </li>
</ul>
</div>

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Утечки памяти

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="slide-in fade-out" -->   

## Profiler

![](lecture/debug/img/debugger_profiler.png)

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade-in slide-out" -->   

## Profiler - Memory

<video controls name="media" width="50%"><source src="https://storage.googleapis.com/androiddevelopers/videos/studio/memory-profiler-allocations-jvmti.mp4" type="video/mp4"></video>

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="slide-in fade-out" -->   

## LeakCanary

```kotlin

class MyApplication {
    val refWatcher by lazy { LeakCanary.install(this) }
}

class BaseFragment: Fragment {

    val refWatcher: RefWatcher? 
        get() = (activity?.applicationContext as? MyApplication).refWatcher

    override fun onDestroy() {
        super.onDestroy()
        refWatcher?.watch(this);
    }
    
}
```

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade-in slide-out" -->    

## LeakCanary

![](lecture/debug/img/leakcanary_info.png)

---

## Утечки памяти

* Нужно следить за ссылками
* Можно использовать `WeakReference<T>`
* Нужно отписываться от долгих операций из Lifecycle