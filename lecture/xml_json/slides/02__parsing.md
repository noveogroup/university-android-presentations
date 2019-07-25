<!-- .slide:    data-background-color="#699f00" -->
<!-- .slide:    class="center center-horizontal" -->
<!-- .slide:    data-transition="convex" -->

# Синтаксический анализ <span class="fragment" data-fragment-index="1">aka <span style="color: yellow">Parsing</span></span>

---

### DOM-парсер

<br>
<div class="third-left fragment" data-fragment-index="1">
<img src="https://noveogroup.github.io/university-android-presentations/lecture/xml_json/img/dom.png" width="100%">
</div>
<div class="third-center-right">
    <strong class="fragment" data-fragment-index="2">Document Object Model</strong>
    
    <p>
        <span class="fragment" data-fragment-index="2">это не зависящий от платформы и языка интерфейс</span><span  class="fragment" data-fragment-index="3">, позволяющий получить доступ к содержимому XML-документов</span><span class="fragment" data-fragment-index="4">, а также изменять содержимое, структуру и оформление таких документов.</span>
    </p>
    
    <p class="fragment" data-fragment-index="5">В памяти строится полное дерево, представляющее документ</p>
    
    <ul class="fragment" data-fragment-index="6">
        <li>Работает только если документ валидный</li>
        <li>Можно производить in-memory "манипуляции"</li>
    </ul>
</div>

---

### SAX-парсер

<br>

<p>SAX (англ. «Simple API for XML») — способ последовательного чтения XML-файлов (существуют аналоги и для JSON).</p> 

<br>

<p class="fragment" data-fragment-index="1"><strong>Push-парсер</strong> — обрабатываем события вида «начало элемента», «начало атрибута».</p> 

<ul>
    <li class="fragment" data-fragment-index="2">Требуют фиксированного количества памяти для своей работы.</li> 
    <li class="fragment" data-fragment-index="3">Не позволяют изменять содержимое документа.</li>
    <li class="fragment" data-fragment-index="4">Валидируют документ по ходу чтения.</li> 
    <li class="fragment" data-fragment-index="5">Можно прочесть часть «испорченного» документа.</li> 
    <li class="fragment" data-fragment-index="6">Обычно быстрее, чем DOM-парсеры</li>
</ul>

------

<!-- .slide:    class="center center-horizontal" -->

### SAX-парсер

<img src="https://noveogroup.github.io/university-android-presentations/lecture/xml_json/img/sax.png" width="50%">

---

### StAX-парсер

<br>

<p>StAX (англ. «Streaming API for XML») — способ последовательного чтения/записи XML-файлов (существуют аналоги и для JSON)</p> 

<br>

<p class="fragment" data-fragment-index="1"><strong>Pull-парсер</strong> — <span class="fragment" data-fragment-index="2">мы не обрабатываем события, приходящие от парсера, а сами инициируем обработку, вытягивая токены. </span><span class="fragment" data-fragment-index="3">Нам предоставляется курсор, с которым мы можем перемещаться по токенам документа.</span></p>

------

### StAX-парсер

<br>

<p>Очень похож на итератор по событиям</p>


<ul>
    <li class="fragment" data-fragment-index="1">Обладает всем, что есть у SAX парсера.</li> 
    <li class="fragment" data-fragment-index="2">Не поддерживает валидацию по схеме.</li>
    <li class="fragment" data-fragment-index="3"><span class="highlight-blue fragment" data-fragment-index="4">Позволяет делегировать парсеры по сущностям.</span></li>
</ul>