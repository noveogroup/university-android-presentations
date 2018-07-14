## Использование Transition

* Сцены


    TransitionManager.go(mEndingScene, mFadeTransition)

* Вне сцен
    

    TransitionManager.beginDelayedTransition(mRootView, mFade) 
    mRootView.addView(mLabelText)