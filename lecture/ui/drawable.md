## Drawable Types

* ColorDrawable - просто цвет
* BitmapDrawable - просто картинка
* NinePatchDrawable - картинка, которая умеет правильно растягиваться
* StateListDrawable - меняет свой контент в зависимости от состояния
* ShapeDrawable - набор свойств таких как: просто цвет, радиус скругления, градиент, обводка.

------

## Drawable Types

`drawable/view_selector.xml` :

    !xml
    <?xml version="1.0" encoding="utf-8"?>
    <selector xmlns:android="http://schemas.android.com/apk/res/android">
        <item android:drawable="@drawable/icon" 
                                android:state_enabled="true" />
        <item android:drawable="@drawable/icon_inactive" 
                                android:state_enabled="false" />
    </selector>

`drawable/view_bg_shape.xml` :

    !xml
    <shape xmlns:android="http://schemas.android.com/apk/res/android"
        android:shape="rectangle">
        <solid android:color="@color/blue" />
        <corners android:radius="2dp" />
    </shape>