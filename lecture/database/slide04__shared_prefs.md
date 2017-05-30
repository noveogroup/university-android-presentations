## Shared Preferences

Данные в виде пар `key`-`value`.  


Находятся в папке приложения:  
`/data/data/YOUR_PACKAGE_NAME/shared_prefs/YOUR_PREFS_NAME.xml`

<br>

*Use case*:  
Настройки пользователя и маленькие наборы данных.  

<br>

|   key    |  value       |
| -------- | --------     |
|`String`  |  `int`       |
|          |  `long`      |
|          |  `float`     |
|          |  `String`    |
|          |`Set<String>` |


------

## Shared Preferences

### Get:

```
static String PREFERENCES_KEY = "com.example.myapp.MY_OWN_PREFS";
SharedPreferences preferences =
                context.getSharedPreferences(PREFERENCES_KEY, Context.MODE_PRIVATE);
```

------

## Shared Preferences

### Write:


```
SharedPreferences.Editor editor = preferences.edit();
editor.putBoolean(NOTIFICATIONS_ENABLES, enabled);
editor.commit();
```

<br>

### Read:

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre>
<code data-trim data-noescape>
int highScore = preferences.getInt(SAVED_SCORE_KEY<span class="fragment fade-in" data-fragment-index="3">);</span><span class="fragment fade-out" data-fragment-index="2">, defaultValue);</span>
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->
