## Создание Transition

* Добавить директорию res/transition/
* Добавить xml файл (res/transition/fade_transition.xml)

```
	<fade xmlns:android="http://schemas.android.com/apk/res/android" />

	val mFadeTransition: Transition = TransitionInflater.from(this).
	    inflateTransition(R.transition.fade_transition)
```

* Создать из кода 

```
	mFadeTransition: Transition = new Fade()
```