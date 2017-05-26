## DAO 
Data Access Object - объект, который
* Предоставляет абстрактный интерфейс к какому-либо типу БД
* Изолирует в себе работу с БД.

Для каждого класса `@DatabaseTable`:


```
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

```

<!-- .element: class="fragment" data-fragment-index="1" -->


------

## DAO

Предоставляет удобные методы:

* `create()`
* `createIfNotExists()`
* `createOrUpdate()`
* `update()`

<!-- .element: class="fragment" data-fragment-index="1" -->

* `delete()`
* `deleteById()`

<!-- .element: class="fragment" data-fragment-index="2" -->

* `query()`
* `queryForAll()`
* `queryForEq()`
* `queryForFirst()`

<!-- .element: class="fragment" data-fragment-index="3" -->

и другие.<!-- .element: class="fragment" data-fragment-index="4" -->