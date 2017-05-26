## Shared Preferences

Данные в виде пар `key`-`value`.  

|   key    |  value       |
| -------- | --------     |
|`String`  |  `int`       |
|          |  `long`      |
|          |  `float`     |
|          |  `String`    |
|          |`Set<String>` |


<br>

*Use case*:  
Настройки пользователя и маленькие наборы данных.  

<br>

Находятся в папке приложения:  
`
/data/data/YOUR_PACKAGE_NAME/shared_prefs/YOUR_PREFS_NAME.xml
`


------

## Shared Preferences

`//todo: replace with PrefsManager`

### Get

```
public static String PREFERENCES_KEY = "com.example.myapp.MY_OWN_PREFS";
SharedPreferences preferences =
context.getSharedPreferences(PREFERENCES_KEY, Context.MODE_PRIVATE);
```

------

## Shared Preferences

### Write

```
SharedPreferences.Editor editor = preferences.edit();
editor.putBoolean(NOTIFICATIONS_ENABLES, enabled);
editor.commit();
```

------

## Shared Preferences

### Read

```
int highScore = preferences.getInt(SAVED_SCORE_KEY, defaultValue);
```

или просто 

```
int highScore = preferences.getInt(SAVED_SCORE_KEY);
```