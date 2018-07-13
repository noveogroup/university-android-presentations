# Intent Service

Выполняет действия "по требованию": `Context.startService(Intent)`  

По умолчанию исполняется в отдельном потоке (в отличие от других сервисов!).
Нет механизма явной передачи результата в главный поток.  
Нельзя прервать.  


------

# Intent Service


<pre><code class="kotlin">class SimpleIntentService : IntentService("Simple Service") {
    override fun onHandleIntent(intent: Intent) {
        url = intent.getStringExtra("link")
        result = load(url)
    }
}
</code></pre>

<br>

<pre><code class="kotlin">val intent = Intent(applicationContext, SimpleIntentService::class.java).
intent.putExtra("link", "http://url.to/load");
startService(intent)
</code></pre> 
