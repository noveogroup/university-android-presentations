# Thread with Handler

Handler — ассоциированный с потоком объект, обрабатывающий сообщения

<br>

<pre><code class="Kotlin large" data-trim data-noescape>
val mainHandler = Handler(Looper.getMainLooper())
thread(start = true) {
    val result = executeSomeFun()

    // Run the result on Main UI Thread
    mainHandler.post { showResult(result) }
}
</code></pre>
