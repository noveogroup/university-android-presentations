# Thread with Handler

Handler — ассоциированный с потоком объект, обрабатывающий сообщения

<br>

<pre><code class="Kotlin large">
val thread = Thread(Runnable {
    val result = executeSomeFun()

    // Run the result on Main UI Thread
    Handler(Looper.getMainLooper()).post { showResult(result) }
})
thread.start()

</code></pre>
