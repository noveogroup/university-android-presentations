<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->    

## Инструменты для отладки

---

## Systrace

<a href="https://developer.android.com/studio/command-line/systrace" target="_blank"><img src="lecture/debug/img/systrace.png"></a>

---

<!--  .slide: class="center center-horizontal" -->

## Стань разработчиком

<img src="lecture/debug/img/enable_options.jpg" width="60%">

---

<!--  .slide: class="center center-horizontal" -->

## Стань разработчиком

<div class="third-left">
<img src="lecture/debug/img/bounds.png" width="75%"> 
</div>
<div class="third-center">
<img src="lecture/debug/img/overdraw_large.png" width="75%">
</div>
<div class="third-right">
<img src="lecture/debug/img/profile_gpu.png" width="75%">
</div>

---

<!--  .slide: class="center center-horizontal" -->

<iframe width="840" height="472" src="https://www.youtube.com/embed/9HtTL_RO2wI" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

---

## Логи 

---

## ADB

- Считать логи
- Выдать permission'ы
- Установить, удалить приложение, почистить его данные
- и многое другое

---

## ADB Idea plugin

- Uninstall App
- Kill App
- Start App
- Restart App
- Clear App Data
- Clear App Data and Restart

---

## Android Debug Drawer
<div class="half-left center-horizontal">
    <img src="lecture/debug/img/debug_drawer.png" width="50%">
</div>
<div class="half-left">
    <li> Отображает и изменяет состояние приложения </li>
    <li> Интерфейс прямо в приложении </li>
    <li> Подходит не только для разработчика, но и для тест-инженера </li>
    <li> Есть готовые модули для популярных библиотек: OkHttp, Glide </li>
    <li>Можно делать свои модули</li> 
</div>

---

## Stetho

- Database Inspection
- Shared Preferences Inspection
- Network Inspection
- View Hierarchy
- Dumpapp Plugins, свои интерфейсы командной строки(CLI)

В качестве интерфейса - Chrome Dev Tools, то есть отладка прямо из Chrome

---

## Stetho - Database Inspection

- Доступ ко всем sql-базам в приложении
- Вся мощь SQL через консоль
- Не работает с Realm, Couchbase и подобными

---

## Stetho - Shared preferences

- Просмотр и редактирование

---

## Stetho - View hierarchy

- Отображение иерархии View
- Изменения в реальном времени
- Доступ к свойствам View
- Подсветка выделенных элементов

---

## Stetho - Dumper plugins

- Позволяет запускать Java-код прямо из консоли на десктопе <br>
- Основной плюс: нет привязки к UI приложения

---

## Ссылки
- [Logback](https://github.com/tony19/logback-android)
- [ADB](https://developer.android.com/studio/command-line/adb.html)
- [ADB Idea plugin](https://plugins.jetbrains.com/plugin/7380-adb-idea)
- [Debug drawer library](https://github.com/palaima/DebugDrawer)
- [Stetho](http://facebook.github.io/stetho/)
- [Stetho Dumpapp example](https://code.tutsplus.com/tutorials/debugging-android-apps-with-facebooks-stetho--cms-24205)

