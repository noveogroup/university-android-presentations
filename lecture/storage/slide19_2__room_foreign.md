## Room. Foreign key

<pre><code class = "kotlin large" data-trim data-noescape>
@Entity(tableName = "repos",
        foreignKeys = [ForeignKey(entity = User::class,
                parentColumns = ["id"],
                childColumns = ["user_id"],
                onDelete = CASCADE)])
class Repo(
        @PrimaryKey
        val id: Int,
        val name: String,
        val url: String,
        @ColumnInfo(name = "user_id")
        val userId: Int
)
</code></pre>
