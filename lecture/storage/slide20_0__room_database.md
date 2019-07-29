## Room. Database

<br>

<pre><code class = "kotlin large" data-trim data-noescape>
@Database(entities = [User::class, Repo::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}
</code></pre>

<br>

<pre><code class = "kotlin large" data-trim data-noescape>
val db = Room.databaseBuilder(
        appContext,
        AppDatabase::class.java, "database-name.db"
).build()
</code></pre>
<!-- .element: class="fragment" data-fragment-index="1" -->

<br>
