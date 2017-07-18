## Property Animations

    ValueAnimator animation = ValueAnimator.ofFloat(0f, 1f);
    animation.setDuration(1000);
    animation.start();

    ObjectAnimator anim = ObjectAnimator.ofFloat(shape, "translationX",300);
    anim.start();