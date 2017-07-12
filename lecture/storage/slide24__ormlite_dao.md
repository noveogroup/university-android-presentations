## DAO

**D**ata **A**ccess **O**bject  

<br>

Объект, который
* Предоставляет абстрактный интерфейс к какому-либо типу БД
* Изолирует в себе работу с БД

------

## DAO в ORMLite

Для каждого класса `@DatabaseTable`:

<!-- .element: class="fragment" data-fragment-index="1" -->

<pre><code class = "java large" data-trim data-noescape>
public class DatabaseHelper extends OrmLiteSqliteOpenHelper {
    private Dao<Customer, Long> customerDao;
    
    public Dao<Customer, Long> getCustomerDao() throws SQLException {
            if (customerDao == null) {
                customerDao = getDao(Customer.class);
            }
            return customerDao;
    }
...
}
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->


------

## DAO в ORMLite

Методы RuntimeExceptionDao не бросают SQLException. 

<pre><code class = "java large" data-trim data-noescape>
public class DatabaseHelper extends OrmLiteSqliteOpenHelper {
    private RuntimeExceptionDao<Customer, Long> customerRuntimeDao;

    public RuntimeExceptionDao<Customer, Long> getCustomerRuntimeDao() {
        if (customerRuntimeDao == null) {
            customerRuntimeDao = getRuntimeExceptionDao(Customer.class);
        }
        return customerRuntimeDao;
    }
...
}

</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

------

## DAO

Предоставляет удобные методы:

* `create()`
* `createIfNotExists()`&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
* `createOrUpdate()`
* `update()`

<!-- .element: class="fragment" data-fragment-index="1" -->

* `delete()`
* `deleteById()`&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

<!-- .element: class="fragment" data-fragment-index="2" -->

* `query()`
* `queryForAll()`
* `queryForEq()`
* `queryForFirst()`

<!-- .element: class="fragment" data-fragment-index="3" -->

<br>

и другие.<!-- .element: class="fragment" data-fragment-index="4" -->