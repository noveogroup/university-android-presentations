## Room. DAO. RxJava

<pre><code class = "kotlin large" data-trim data-noescape>
@Update
fun update(User user): Completable
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

<pre><code class = "kotlin large" data-trim data-noescape>
@Query("SELECT * FROM users WHERE full_name LIKE :first AND "
           + "last_name LIKE :last LIMIT 1")
fun findByName(first: String, last: String): Single&lt;User&gt;
</code></pre>

<!-- .element: class="fragment" data-fragment-index="2" -->
