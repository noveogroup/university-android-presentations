## Retrofit

Предоставляет похожие классы на `OkHttp`, но другие

<ul>
<li class="fragment" data-fragment-index="1">Call&lt;T&gt;</li>
<li class="fragment" data-fragment-index="2">Callback&lt;T&gt;</li>
<li class="fragment" data-fragment-index="3">Response&lt;T&gt;</li>
</ul>

------

<!-- .slide:    data-transition="slide-in fade-out" -->

## Retrofit

<br>

<div class="half-left">
<h4>Асинхронный способ</h4>
<pre><code class="kotlin" data-trim data-noescape>
<span class="fragment highlight-grey" data-fragment-index="1">val call: Call&lt;User> = api.getUser()
call.enqueue(object : Callback&lt;User> {
    override fun onResponse(..., </span><span class="fragment highlight-green" data-fragment-index="1">response</span><span class="fragment highlight-grey" data-fragment-index="1">: Response&lt;User>) {</span>
        <span class="fragment highlight-green" data-fragment-index="1">// handle response</span>
<span class="fragment highlight-grey" data-fragment-index="1">    } </span>
    
<span class="fragment highlight-grey" data-fragment-index="1">    override fun onFailure(...,</span> <span class="fragment highlight-red" data-fragment-index="1">error</span><span class="fragment highlight-grey" data-fragment-index="1">: Throwable) {</span>
        <span class="fragment highlight-red" data-fragment-index="1">// handle error</span>
<span class="fragment highlight-grey" data-fragment-index="1">    }
})</span>
</code></pre></div>
<div class="half-right">
<h4>Синхронный способ</h4>
<pre><code class="kotlin" data-trim data-noescape>
<span class="fragment highlight-grey" data-fragment-index="1">val call: Call&lt;User> = api.getUser()
try {
    val </span><span class="fragment highlight-green" data-fragment-index="1">response</span><span class="fragment highlight-grey" data-fragment-index="1">: Response&lt;User> = call.execute()</span>
    <span class="fragment highlight-green" data-fragment-index="1">//handle response</span>
<span class="fragment highlight-grey" data-fragment-index="1">} catch (</span><span class="fragment highlight-red" data-fragment-index="1">error</span><span class="fragment highlight-grey" data-fragment-index="1">: Exception) {</span>
    <span class="fragment highlight-red" data-fragment-index="1">//handle error</span> 
<span class="fragment highlight-grey" data-fragment-index="1">}</span>
</code></pre></div>

------

<!-- .slide:    data-transition="fade" -->

## Retrofit - пример

<div>
<pre><code class="kotlin small" data-trim data-noescape>
    class Sample() { 
        val retrofit = Retrofit.Builder().run {
            baseUrl(BuildConfig.END_POINT)
            addConverterFactory(GsonConverterFactory.create(gson))
            addInterceptor(AuthenticationInterceptor())
            build()
        }
        
        val rest: NetworkClient = retrofit.create(NetworkClient::class.java)

        fun someMethod() {
            val userListCall: Call&lt;List&lt;User&gt;&gt; = rest.userList()

            <span class="fragment highlight-current-green" data-fragment-index="1">thread(start = true) { userListCall.execute() }</span>

            <span class="fragment highlight-current-green" data-fragment-index="2">userListCall.enqueue(object : Callback&lt;List&lt;User&gt;&gt; {
                @override fun onResponse(..., response: Response&lt;Repo&gt;) {...} 
                @override fun onFailure(..., error: Throwable) {...}
            })</span>

            <span class="fragment highlight-current-green" data-fragment-index="3">val subscription = rest.userListObserve().subscribeBy(
                onSuccess = { response: Response&lt;Repo&gt; -> ... },
                onComplete = { error: Throwable -> ... }
            )</span> 
        }
    }
</code></pre>
</div>