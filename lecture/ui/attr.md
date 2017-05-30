## Attributes

* В xml поведение отдельного View можно настраивать с помощью аттрибутов
* Существует набор аттрибутов общих для всех View
* Почти каждый наследник View имеет свой собственный набор специфичных для него аттрибутов
* Можно создавать свои собственные аттрибуты
* Часто для каждого аттрибута существуют соответствующие ему методы

------

## Common Attributes

* android:id - уникальный идентификатор
* android:layout_width - ширина элемента
* android:layout_height - высота элемента
* android:layout_margin - отступы снаружи элемента
* android:padding - отступы внутри элемента
* android:layout_gravity - расположение элемента внутри родителя
* android:gravity - расположение контента внутри элемента
* android:visibility - показывать элемент или нет
* android:background - фоновое изображение
* ...

------

## Unique Attributes

* TextView
    * android:text – текст
    * android:textSize – размер
    * android:textColor – цвет
    * android:textStyle - стиль (bold, italic, monospace)
    * android:singleLine - максимум одна строка текста
    * android:maxLines - максимальное число строк текста
    * android:ellipsize - что делать, если текст слишком длинный

------

## Unique Attributes

* EditText
    * android:hint - подсказка, видна пока EditText пустой
    * android:textColorHint - цвет подсказки
    * android:inputType - тип клавиатуры (email, телефон и т.д.)
    * android:digits - список допустимых символов


* ImageView
    * android:src - что показывать
    * android:scaleType - как масштабировать
    * android:adjustViewBounds - меняем размеры View в зависимости от размеров картинки