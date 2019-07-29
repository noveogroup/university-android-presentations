## Shared Preferences

### Get:

<pre><code class="kotlin large" data-trim data-noescape>
val preferences = context.getSharedPreferences("my_preferences", Context.MODE_PRIVATE)
</code></pre>

<br>

Из Activity:

<pre><code class="kotlin large" data-trim data-noescape>
val preferences = getPreferences(Context.MODE_PRIVATE)
</code></pre>


------

## Shared Preferences

### Write:

<pre><code class="kotlin large" data-trim data-noescape>
val editor: SharedPreferences.Editor = preferences.edit()
editor.putBoolean(NOTIFICATIONS_ENABLED, enabled)
</code></pre>

<br>

Для применения изменений

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="kotlin large" data-trim data-noescape>
editor.commit() //synchronous
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="kotlin large" data-trim data-noescape>
editor.apply() //async, no return value
</code></pre>

<!-- .element: class="fragment" data-fragment-index="2" -->

<br>

------

### Read:

<pre><code class="java large" data-trim data-noescape>
val highScore = preferences.getInt(SAVED_SCORE_KEY, defaultValue)
</code></pre>

<br>

### Clear

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class="kotlin large" data-trim data-noescape>
editor.clear()
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->