## Используем каждый день
- Logging
- IntelliJ IDEA debugger

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

