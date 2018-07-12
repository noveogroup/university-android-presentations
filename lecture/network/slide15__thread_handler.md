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

------

# Thread with Handler

Kotlin-style

<br>

<pre><code class="Kotlin large">
thread(start = true) {
    val result = executeSomeFun()

    // Run the result on Main UI Thread
    Handler(Looper.getMainLooper()).post { showResult(result) }
}

</code></pre>
