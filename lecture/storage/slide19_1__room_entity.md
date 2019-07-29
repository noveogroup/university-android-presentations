## Room. Сущность

<pre><code class = "kotlin large" data-trim data-noescape>
@Entity(tableName = "users")
class User(
    @PrimaryKey
    val id: Long,

    @ColumnInfo(name = "full_name")
    val name: String
)
</code></pre>

<br>

------

## Room. Сущность

PrimaryKey autoincrement:

<pre><code class = "kotlin large" data-trim data-noescape>
@Entity(tableName = "users")
class User(
    @PrimaryKey<mark>(autoGenerate = true)</mark>
    <mark>var</mark> id: Long = 0

    @ColumnInfo(name = "full_name")
    val name: String
)
</code></pre>

<br>

------

## Room. Сущность

Составной PrimaryKey:

<pre><code class = "kotlin large" data-trim data-noescape>
@Entity(
        tableName = "user_favorite_sports",
        <mark>primaryKeys = [
            "user_id",
            "sport_id"
        ]</mark>
)
class DBFavoriteSport(
        @ColumnInfo(name = "user_id")
        val userId: Long,
        @ColumnInfo(name = "sport_id")
        val sportId: Int
)
</code></pre>

<br>
