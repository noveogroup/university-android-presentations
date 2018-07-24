## Создание сцен

    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:id="@+id/master_layout">
            <TextView
                android:id="@+id/title"
                ...
                android:text="Title"/>
            <FrameLayout
                android:id="@+id/scene_root">
                <include layout="@layout/a_scene" />
            </FrameLayout>
    </LinearLayout>