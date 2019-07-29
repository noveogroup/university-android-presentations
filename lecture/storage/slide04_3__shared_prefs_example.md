## Shared Preferences

<div class="half-left">

<p>Находятся в папке приложения:</p>  
<code>/data/data/PACKAGE_NAME/shared_prefs/PREFS_NAME.xml</code>


</div>

<div class="half-right" style="text-align: right">

<img src="lecture/storage/img/file_explorer.png" class="align-right">
    
</div>

------

## Shared Preferences

<div class="half-left">

Вызов из MainActivity:

<pre><code class="kotlin" data-trim data-noescape>
    getPreferences(Context.MODE_PRIVATE)
        .edit()
        .putString("my_key", "my_value")
        .apply()
</code></pre>

</div>

<div class="half-right">


Файл MainActivity.xml:

<pre><code class="xml" data-trim data-noescape>
&lt;?xml version='1.0' encoding='utf-8' standalone='yes' ?>
&lt;map>
    &lt;string name="my_key">my_value&lt;/string>
&lt;/map>
</code></pre>

</div>
