## Property Animations

    val animation: ValueAnimator = ValueAnimator.ofFloat(0f, 1f)
    animation.setDuration(1000)
    animation.start()

    val anim: ObjectAnimator = ObjectAnimator.ofFloat(shape, "translationX", 300)
    anim.start()