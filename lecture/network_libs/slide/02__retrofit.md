<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# REST-клиент

---

<!-- .slide:    data-transition="convex-in fade-out" -->

# Retrofit

<blockquote class="noveo-info">
Retrofit turns your HTTP API into a Java interface.
</blockquote>

<br>

<pre><code class="Kotlin large" data-trim data-noescape>
interface NetworkClient {
    @GET("entities/{id}")
    fun getById(
        @Path("id") id: Int,
        @Query("type") type: String
    ): Call&lt;Response>

    @POST(/"entities/complete")
    fun send(@Body body: EntityBody): Call&lt;Response>
}
</code></pre>

------

<!-- .slide:    data-transition="fade-in slide-out" -->

# Retrofit 

<pre><code class="Kotlin large" data-trim data-noescape>
val retrofit = Retrofit.Builder().run {
    baseUrl(BuildConfig.END_POINT)
    client(<span class="fragment highlight-green" data-fragment-index="1">OkHttpClient.Builder().build()</span>)
    addConverterFactory(GsonConverterFactory.create(gson))
    addInterceptor(AuthenticationInterceptor())
    build()
}

val rest: NetworkClient = retrofit.create(NetworkClient::class.java)
</code></pre>
