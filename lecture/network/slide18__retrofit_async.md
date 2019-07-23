# Асинхронность и Retrofit

<br>

<div class="half-left">
<h4>Асинхронный способ</h4>
<pre><code class="kotlin" data-trim data-noescape>
<span class="fragment highlight-grey" data-fragment-index="1">val call = api.getUser()
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
<span class="fragment highlight-grey" data-fragment-index="1">val call = api.getUser()
try {
    val </span><span class="fragment highlight-green" data-fragment-index="1">response</span><span class="fragment highlight-grey" data-fragment-index="1">: Response&lt;User> = call.execute()</span>
    <span class="fragment highlight-green" data-fragment-index="1">//handle response</span>
<span class="fragment highlight-grey" data-fragment-index="1">} catch (</span><span class="fragment highlight-red" data-fragment-index="1">error</span><span class="fragment highlight-grey" data-fragment-index="1">: Exception) {</span>
    <span class="fragment highlight-red" data-fragment-index="1">//handle error</span> 
<span class="fragment highlight-grey" data-fragment-index="1">}</span>
</code></pre></div>
