## Shared element

    imgContainerView.setOnClickListener {
        val intent: Intent = Intent(this, Activity2.class)
        // create the transition animation - the images in the layouts
        // of both activities are defined with android:transitionName="robot"
        // androidRobotView - common  view
        val options = ActivityOptions
            .makeSceneTransitionAnimation(this, androidRobotView, "robot")
        // start the new activity
        startActivity(intent, options.toBundle())
    }