## View Animations

    <?xml version="1.0" encoding="utf-8"?>
    <set xmlns:android="http://schemas.android.com/apk/res/android"
        android:fillAfter="true"
        android:duration="1000" >
        
        <alpha
            android:fromAlpha="1.0"
            android:toAlpha="0.0" />
        </set>

## Код:

    Animation anim = AnimationUtils.loadAnimation(this, R.anim.test);
    view.startAnimation(anim);