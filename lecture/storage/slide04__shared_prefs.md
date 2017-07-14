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

<pre><code class="java large" data-trim data-noescape>
SharedPreferences preferences =
                context.getSharedPreferences("my_preferences", Context.MODE_PRIVATE);
</code></pre>

------

## Shared Preferences

### Write:

<pre><code class="java large" data-trim data-noescape>
SharedPreferences.Editor editor = preferences.edit();
editor.putBoolean(NOTIFICATIONS_ENABLES, enabled);
editor.commit();
</code></pre>

<br>

### Read:

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="java large" data-trim data-noescape>
int highScore = preferences.getInt(SAVED_SCORE_KEY<span class="fragment fade-in" data-fragment-index="3">);</span><span class="fragment fade-out" data-fragment-index="2">, defaultValue);</span>
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->
