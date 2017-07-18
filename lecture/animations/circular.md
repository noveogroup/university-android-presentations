## Circular Reveal


    int finalRadius = Math.hypot(myView.getWidth(), myView.getHeight());

    // create the animator for this view (the start radius is zero)
    Animator anim =
        ViewAnimationUtils.createCircularReveal(myView, 0, 0, 0, finalRadius);
    anim.start();