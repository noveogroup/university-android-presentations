## Room

ORM [библиотека](https://developer.android.com/topic/libraries/architecture/room.html) от Google.  

<br>

Лаконичная запись, использует аннотации.

<br>

Проект выйдет в релиз осенью.
<!-- .element: class="fragment" data-fragment-index="1" -->

<img class="fragment" data-fragment-index="1" src="lecture/storage/img/android_o.png">

------

## Room. Сущность

<pre><code class = "java large" data-trim data-noescape>
@Entity(tableName = "customers")
public class Customer {
    @PrimaryKey
    private long id;

    @ColumnInfo(name = "full_name")
    private String name;
}

</code></pre>

<br>

Почти как в ORMLite.
<!-- .element: class="fragment" data-fragment-index="1" -->


------

## Room. Database

<br>

<pre><code class = "java large" data-trim data-noescape>
@Database(entities = {Customer.class}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
    public abstract CustomerDao customerDao();
}
</code></pre>

<br>

<pre><code class = "java large" data-trim data-noescape>
AppDatabase db = Room.databaseBuilder(getApplicationContext(),
        AppDatabase.class, "database-name")
        .build();
</code></pre>
<!-- .element: class="fragment" data-fragment-index="1" -->

<br>

Круче, чем в ORMLite.
<!-- .element: class="fragment" data-fragment-index="2" -->

------

## Room. DAO

`@Insert`, `@Update`, `@Delete` "из коробки"
<br>

<pre><code class = "java large" data-trim data-noescape>
@Dao
public interface CustomerDao {
    @Update(onConflict = ABORT)
    void updateCustomer(Customer customer);

    @Insert
    void insertAll(Customer... customers);

    @Delete
    void delete(Customer customer);
}

</code></pre>

------

## Room. DAO

Мощные и гибкие `@Query`
<br>

```
@Dao
public interface CustomerDao {
    @Query("SELECT * FROM customers")
    List<Customer> getAll();

    @Query("SELECT * FROM customers WHERE id IN (:ids)")
    List<Customer> loadAllByIds(int[] ids);

    @Query("SELECT * FROM customers WHERE full_name LIKE :first AND "
           + "last_name LIKE :last LIMIT 1")
    Customer findByName(String first, String last);
}

```
<br>

```
List<Customer> customers = db.userModel().getAll();
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

* Нужно знать SQL <!-- .element: class="fragment" data-fragment-index="6" -->
* Пока только alpha <!-- .element: class="fragment" data-fragment-index="6" -->
* Нет вложенных сущностей <!-- .element: class="fragment" data-fragment-index="6" -->
