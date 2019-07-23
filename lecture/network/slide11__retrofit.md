<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Фреймворки

---

# Retrofit

<blockquote class="noveo-info">
Retrofit turns your HTTP API into a Java interface.
</blockquote>

<br>

<pre><code class="Kotlin large">interface NetworkClient {
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

# Retrofit

Библиотека - REST-клиент

<br> 


- Декларативное описание взаимодействия с REST API
- Синхронные и асинхронные вызовы
- Встроенная интеграция с другими библиотеками
    + Парсеры: Jackson, GSON, etc.
    + Клиенты: OkHttp, HttpUrlConnection
    + RxJava

<!-- .element: class="fragment" data-fragment-index="1" -->
