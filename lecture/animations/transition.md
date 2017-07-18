## Создание Transition

1. Добавить директорию res/transition/
1. Добавить xml файл (res/transition/fade_transition.xml)
    
    
    <fade xmlns:android="http://schemas.android.com/apk/res/android" />

    Transition mFadeTransition = TransitionInflater.from(this).
        inflateTransition(R.transition.fade_transition);

1. Создать из кода Transition mFadeTransition = new Fade();