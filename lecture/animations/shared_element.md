## Shared element


    final View imgContainerView = findViewById(R.id.img_container);

    // get the common element for the transition in this activity
    final View androidRobotView = findViewById(R.id.image_small);

    // define a click listener
    imgContainerView.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            Intent intent = new Intent(this, Activity2.class);
            // create the transition animation - the images in the layouts
            // of both activities are defined with android:transitionName="robot"
            ActivityOptions options = ActivityOptions
                .makeSceneTransitionAnimation(this, androidRobotView, "robot");
            // start the new activity
            startActivity(intent, options.toBundle());
        }
    });