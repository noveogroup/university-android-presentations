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