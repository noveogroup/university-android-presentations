# Repository

Предоставляет удобный высокоуровневый интерфейс для работы с данными.
Изолирует тонкости реализации работы с источниками данных от приложения.

Альтернативный термин — **Gateway**.

<br>


<pre><code class = "kotlin large" data-trim data-noescape>
interface UserGatewayApi {

    fun loadUser(): Single&lt;UserDto&gt;
    
    fun removeUserData(): Completable
}
</code></pre>

<!-- .element: class="fragment" data-fragment-index="1" -->

------

# Repository

Что под капотом:

<pre><code class = "kotlin large" data-trim data-noescape>
class UserGateway: UserGatewayApi {

    override fun loadUser(): Single&lt;UserDto&gt; {
        //обращение к 1 или нескольким источникам данных
        //объединение данных
        //конвертация в удобный формат
        //навешивание schedulers
        //логика retry,
        //fallback в случае ошибки
        //и т.п.
    }
    
    ...
   
}
</code></pre>

