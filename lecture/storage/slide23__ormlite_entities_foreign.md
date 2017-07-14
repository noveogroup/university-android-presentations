## Внешние ключи


<img src="lecture/storage/img/foreign-key-example.png">

------

Email принадлежит Customer'у :
```
@DatabaseTable(tableName = EmailEntry.TABLE_NAME)
public class Email {
    @DatabaseField(columnName = EmailEntry.COLUMN_NAME_CUSTOMER,
                   foreign = true,
                   foreignAutoRefresh = true)
    private Customer customer;
}
```

<br>

Customer обладает несколькими email'ами: 

 <!-- .element: class="fragment" data-fragment-index="1" -->

```
@DatabaseTable(tableName = CustomerEntry.TABLE_NAME)
public class Customer {
    @ForeignCollectionField(columnName = CustomerEntry.COLUMN_NAME_EMAIL,
                            eager = true)
    private Collection<Email> emails;
}
```

<!-- .element: class="fragment" data-fragment-index="1" -->
