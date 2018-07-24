<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Инструменты для отладки

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    
   
## Режим разработчика

---

<!--  .slide: class="center center-horizontal" -->

## Режим разработчика

<img src="lecture/debug/img/enable_options.jpg" width="50%">

---

<!--  .slide: class="center center-horizontal" -->

## Режим разработчика

<div class="third-left">
<img src="lecture/debug/img/bounds.png" width="60%"> 
</div>
<div class="third-center">
<img src="lecture/debug/img/overdraw_large.png" width="60%">
</div>
<div class="third-right">
<img src="lecture/debug/img/profile_gpu.png" width="60%">
</div>

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Как работает отладчик?

---

<!-- .slide:    class="center center-horizontal" -->

## ADB

<img src="lecture/debug/img/adb_struct.png" width="75%">

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="fade-in slide-out" -->    

## ADB

<div class="half-left">
<ul>
<li><code>adb usb</code></li>
<li><code>adb tcpip 5555</code></li>
<li><code>adb connect 192.168.1.125</code></li>
<li><code>adb devices</code></li>
</ul>
</div> 

<div class="half-right fragment" data-fragment-index="2">
<ul>
<li>Устанавливать apk</li>
<li>Запускать приложения</li>
<li>Отправлять пуши</li>
<li>Выдавать разрешения</li>
</ul>
</div> 

---

<!-- .slide:    class="center center-horizontal" -->

## ADB Idea plugin

![](lecture/debug/img/adb_plugin.png)

---

## Stetho

<div class="fragment half-left" data-fragment-index="1">
<img src="lecture/debug/img/stetho_network.png">
</div>
<div class="fragment half-right" data-fragment-index="2">
<ul>
<li>Database Inspection</li>
<li>Shared Preferences Inspection</li>
<li>Network Inspection</li>
<li>View Hierarchy</li>
<li>Dumpapp Plugins, свои интерфейсы командной строки(CLI)</li>
</ul>
</div>

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    
   
## Как отладить верстку?

---

<!-- .slide:    class="center center-horizontal" -->

## Layout Inspector

<img src="lecture/debug/img/layout_inspector.png">

---

<!-- .slide:    class="center center-horizontal" -->

## Stetho - Elements

<img src="lecture/debug/img/stetho_layout.png">

---

<!-- .slide:    class="center center-horizontal" -->

## Systrace

<a href="https://developer.android.com/studio/command-line/systrace" target="_blank"><img src="lecture/debug/img/systrace.png"></a>

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->
   
## Как проверять файловую систему?

---

<!-- .slide:    class="center center-horizontal" -->

## Device File Explorer

<img src="lecture/debug/img/device_fe.png">

---

<!-- .slide:    class="center center-horizontal" -->

## ADB & abe.jar

```
adb backup -f backup.ab com.you.package.app
```

<img src="lecture/debug/img/abe.png">

---

<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    
   
## Как проанализировать сборку?

---

<!-- .slide:    class="center center-horizontal" -->

## Apk analyzer

<img src="lecture/debug/img/apk_analyzer.png">

---

## Ссылки

- [Slf4j](https://www.slf4j.org/docs.html)
- [Logback](https://github.com/tony19/logback-android)
- [Debugger](https://developer.android.com/studio/debug/)
- [RxJavaPlugins](http://reactivex.io/RxJava/2.x/javadoc/io/reactivex/plugins/RxJavaPlugins.html)
- [ADB](https://developer.android.com/studio/command-line/adb.html)
- [ADB Idea plugin](https://plugins.jetbrains.com/plugin/7380-adb-idea)
- [Profiler](https://developer.android.com/studio/profile/memory-profiler)
- [Layout Inspector](https://developer.android.com/studio/debug/layout-inspector)
- [Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer)
- [APK analyzer](https://developer.android.com/studio/build/apk-analyzer)
- [Stetho](http://facebook.github.io/stetho/)
- [Systrace](https://developer.android.com/studio/command-line/systrace)

