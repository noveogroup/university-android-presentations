# Процессы

<p>Под каждое Android приложение по умолчанию выделяется 1 процесс.</p>
<p>В процессе может быть N потоков. Изначально - это один поток (main thread).</p>

<br>

<p>Периодически OS нужно освобождать ресурсы, занятые процессом</p>

------

# Process Hierarchy

<br>

<div class="center-horizontal">
    <img class="center center-horizontal" src="https://noveogroup.github.io/university-android-presentations/lecture/network/img/processes.png" width="100%">
</div>

------

# Process importance

<pre>
<code class="kotlin" data-trim data-noescape>
val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as? ActivityManager
val currentProcess = activityManager?.runningAppProcesses?.firstOrNull()

//High importance -- 0, Low  importance -- 100000
val currentProcessImportance = currentProcess?.importance ?: 0
val foregroundAllowed = currentProcessImportance &lt;= ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND <span style="display: none">// ></span>

if (foregroundAllowed) {
    // foreground!
} else {
    // some other
}
</code>
</pre>