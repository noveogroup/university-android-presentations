## Создание сцены из Layout

    Scene mAScene;
    Scene mAnotherScene;

    // Create the scenes
    mAScene = Scene.getSceneForLayout(mSceneRoot, R.layout.a_scene, this);
    mAnotherScene =
        Scene.getSceneForLayout(mSceneRoot, R.layout.another_scene, this);