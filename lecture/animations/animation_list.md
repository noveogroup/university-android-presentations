## Declaring Views

    <animation-list xmlns:android="http://schemas.android.com/apk/res/android">
        <item android:drawable="@drawable/smile1" android:duration="200"/>
        <item android:drawable="@drawable/smile2" android:duration="200"/>
        <item android:drawable="@drawable/smile3" android:duration="200"/>
    </animation-list>

## Код:

    val mAnimation: AnimationDrawable = AnimationDrawable()
    // устанавливаем циклическое повторение анимации 
    mAnimation.setOneShot(false)
    mAnimation.addFrame(smile1, 250) 
    mAnimation.addFrame(smile1, 250)
    
    AnimationDrawable animation = (AnimationDrawable)image.getBackground()
    animation.start()