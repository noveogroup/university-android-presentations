## Room

ORM [библиотека](https://developer.android.com/topic/libraries/architecture/room.html) от Google.  

<br>

Лаконичная запись, использует аннотации. Валидация в compile-time.

<br>

<div class="half-left">

<li><ul>`@Database`</ul>
<ul>`@Entity`</ul>
<ul>`@ColumnInfo`</ul>
<ul>`@PrimaryKey`</ul>
<ul>`@ForeignKey`</ul>
</li>
</div>

<div class="half-right">

<li><ul>`@Dao`</ul>
<ul>`@Insert`</ul>
<ul>`@Update`</ul>
<ul>`@Delete`</ul>
<ul>`@Query`</ul>
</li>
</div>

------

## Room dependencies

<pre><code class = "groovy large" data-trim data-noescape>
apply plugin: 'kotlin-kapt'

...

dependencies {
    def room_version = "2.1.0"

    implementation "androidx.room:room-runtime:$room_version"
    kapt "androidx.room:room-compiler:$room_version"

    // optional - RxJava support for Room
    implementation "androidx.room:room-rxjava2:$room_version"
}

</code></pre>
