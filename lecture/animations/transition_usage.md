## Использование Transition

1. Сцены


    TransitionManager.go(mEndingScene, mFadeTransition);

1. Вне сцен
    

    TransitionManager.beginDelayedTransition(mRootView, mFade); 
    mRootView.addView(mLabelText);