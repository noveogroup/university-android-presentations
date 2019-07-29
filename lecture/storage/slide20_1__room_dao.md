
## DAO

**D**ata **A**ccess **O**bject  

<br>

Объект, который
* Предоставляет абстрактный интерфейс к какому-либо типу БД
* Изолирует в себе работу с БД


------

## Room. DAO

`@Insert`, `@Update`, `@Delete` "из коробки"
<br>

<pre><code class = "kotlin large" data-trim data-noescape>
@Dao
public interface UserDao {
    @Update(onConflict = ABORT)
    fun updateUser(user: User)

    @Insert
    fun insertAll(users: List&lt;User>)

    @Delete
    fun delete(user: User)
}

</code></pre>

------

## Room. DAO

Мощные и гибкие `@Query`
<br>


<pre><code class = "kotlin large" data-trim data-noescape>
@Dao
interface CustomerDao {
    @Query("SELECT * FROM users")
    fun getAll(): List&lt;User&gt; 

    @Query("SELECT * FROM users WHERE id IN (:ids)")
    fun loadAllByIds(vararg ids: Int): List&lt;User&gt;

    @Query("SELECT * FROM users WHERE full_name LIKE :first AND "
           + "last_name LIKE :last LIMIT 1")
    fun findByName(first: String, last: String): User
}
</code></pre>

<br>

Можно возвращать любые POJO*
