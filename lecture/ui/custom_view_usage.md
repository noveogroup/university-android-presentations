## Custom Views: Использование

    <?xml version="1.0" encoding="utf-8"?>
    <FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
             xmlns:app="http://schemas.android.com/apk/res-auto"
             android:layout_width="match_parent"
             android:layout_height="match_parent">

        <com.noveogroup.internship.ui.view.CustomImageView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            app:foreground_image="@drawable/abc_btn_check_material"
            app:foreground_image_margin="15dp"/>
    
    </FrameLayout>