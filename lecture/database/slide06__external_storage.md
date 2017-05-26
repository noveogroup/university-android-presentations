## External Storage

Общедоступное место для хранения файлов на съёмном носителе или в публичном разделе памяти.

<blockquote class="noveo-warn">
*Caution!*
Файлы могут быть перезаписаны, удалены или недоступны!
</blockquote/>

<br>

*Use case*:  
* Медиа-файлы
* Не критичные для работы приложения данные

<br>


------

## External Storage

Для работы с внешним хранилищем требуется запросить разрешения:

```
<uses-permission
    android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission
    android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```