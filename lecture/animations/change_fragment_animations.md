## Change Fragment animation
    ft.setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out);

    <objectAnimator xmlns:android="http://schemas.android.com/apk/res/android"
        android:interpolator="@android:interpolator/accelerate_quad"
        android:valueFrom="0"
        android:valueTo="1"
        android:propertyName="alpha"
        android:duration="@android:integer/config_mediumAnimTime" />