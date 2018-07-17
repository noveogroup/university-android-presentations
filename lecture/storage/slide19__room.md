## Room

ORM [библиотека](https://developer.android.com/topic/libraries/architecture/room.html) от Google.  

<br>

Лаконичная запись, использует аннотации.

<br>

------

## Room. Сущность

<pre><code class = "kotlin large" data-trim data-noescape>
@Entity(tableName = "customers")
data class Customer(
    @PrimaryKey
    val id: Long,

    @ColumnInfo(name = "full_name")
    val name: String
)

</code></pre>

<br>


------

## Room. Database

<br>

<pre><code class = "kotlin large" data-trim data-noescape>
@Database(entities = [{Customer::class}], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun customerDao(): CustomerDao
}
</code></pre>

<br>

<pre><code class = "kotlin large" data-trim data-noescape>
val db = Room.databaseBuilder(
        appContext,
        AppDatabase.class, "database-name.db"
).build()
</code></pre>
<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

------

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
public interface CustomerDao {
    @Update(onConflict = ABORT)
    fun updateCustomer(customer: Customer)

    @Insert
    fun insertAll(customers: List&lt;Customer>)

    @Delete
    fun delete(customer: Customer)
}

</code></pre>

------

## Room. DAO

Мощные и гибкие `@Query`
<br>

```
@Dao
interface CustomerDao {
    @Query("SELECT * FROM customers")
    fun getAll(): List<Customer> 

    @Query("SELECT * FROM customers WHERE id IN (:ids)")
    fun loadAllByIds(vararg ids: Int): List<Customer>

    @Query("SELECT * FROM customers WHERE full_name LIKE :first AND "
           + "last_name LIKE :last LIMIT 1")
    fun findByName(first: String, last: String): Customer
}

```
<br>

```
customers: List<Customer> = db.userModel().getAll()
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Можно возвращать любые POJO*
<!-- .element: class="fragment" data-fragment-index="2" -->

------

## Room

* Лаконичность
<!-- .element: class="fragment" data-fragment-index="1" -->
* Мощные DAO-интерфейсы
<!-- .element: class="fragment" data-fragment-index="2" -->
* Поддержка RxJava2 <!-- .element: class="fragment" data-fragment-index="3" -->
* Валидация в compile-time (!) <!-- .element: class="fragment" data-fragment-index="4" -->
* Не нужен <!-- .element: class="fragment" data-fragment-index="5" -->`Contract class`!!!


<br>

* Поддержка RxJava не полная <!-- .element: class="fragment" data-fragment-index="6" -->
* Нужно знать SQL <!-- .element: class="fragment" data-fragment-index="6" -->
* Нет вложенных сущностей <!-- .element: class="fragment" data-fragment-index="6" -->
