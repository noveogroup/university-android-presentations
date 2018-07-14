## Circular Reveal


    val finalRadius: Int = Math.hypot(myView.getWidth(), myView.getHeight())

    // create the animator for this view (the start radius is zero)
    val anim: Animator =
        ViewAnimationUtils.createCircularReveal(myView, 0, 0, 0, finalRadius)
    anim.start()