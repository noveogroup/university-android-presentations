<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# OkHttp (HTTP Client)

---

# OkHttp

<blockquote class="noveo-info"> works above Okio, better IO than Java IO.</blockquote>  

* <!-- .element class="fragment" data-fragment-index="1" --> Реализация интерфейса `HttpUrlConnection`. 
* <!-- .element class="fragment" data-fragment-index="2" --> Удобное API поверх `HttpUrlConnection` 
* <!-- .element class="fragment" data-fragment-index="3" --> `HttpUrl` как замена  `java.net.URL`, `java.net.URI`, `android.net.Uri` 

------

# OkHttp client

<pre><code class="kotlin large" data-trim data-noescape>
val client = OkHttpClient.Builder().run {
    addNetworkInterceptor(Interceptor())
    sslSocketFactory(SocketFactory(), TrustManager())
    build()
}
</code></pre>

------

<!-- .slide:    data-transition="slide-in fade-out" -->

# OkHttp request

<pre><code class="kotlin large" data-trim data-noescape>
val url = HttpUrl.parse("https://api.noveogroup.com/demo/").newBuilder().run {
    addQueryParameter("v", "1.4")
    addQueryParameter("q", "android")
    build()
}

val request: Request = Request.Builder().url("$url").build()
val call: Call = client.newCall(request)
val response: Response = call.execute()
</code></pre>

------

<!-- .slide:    data-transition="fade-in slide-out" -->

# OkHttp request (async)

<pre><code class="kotlin large" data-trim data-noescape>
val url = HttpUrl.parse("https://api.noveogroup.com/demo/").newBuilder().run {
    addQueryParameter("v", "1.4")
    addQueryParameter("q", "android")
    build()
}

val request: Request = Request.Builder().url("$url").build()
val call: Call = client.newCall(request)
call.enqueue(object : Callback {
    @override fun onResponse(..., response: Response) {}
    @override fun onFailure(..., error: IOException) {} 
})
</code></pre>

---

<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# OkHttp предоставляет API и для сокетов

### но это уже другая история... <!-- .element class="fragment" data-fragment-index="1" -->


