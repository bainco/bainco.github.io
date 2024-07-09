---
layout: page
title: Project Update (Jan 2024)
description: some changes to be more realistic
img: assets/img/3.png
importance: 2
category: work
giscus_comments: false
---

Like any good project...we've run into some issues, but also made some progress!

# The Good

First off, the good news!

### Course Survey

Our new course survey is not only done but has been administered! [Check it out here](https://docs.google.com/forms/d/e/1FAIpQLSeNgink7RM6FDKqhxEtYh8wYm0FIAfTg_jtjFZOTtAIiIovAg/viewform?usp=sf_link) if you have a `@u.northwestern.edu` address. It's got the same purposes as it did before (to give us an informal view of the students in the class) but also has some new focii:

* It tries to zero in on **why** students are taking the course (though self-reported obviously)
* It asks more specific questions about programming experience and comfort
* It asks relational questions about student perceptions of programming experience of their peers in the course

I'll hold off on showing any results in this update...but the results are surprising!

### Lecture Re-focusing

In the first few week of class we focused on making our programs _mnemonic_. This came in the form of changes to how we introduced:

* [Lecture 0](https://docs.google.com/presentation/d/1pBVN9dpN-bGjiF1HCLaPLtJjQjC_y9MHoHs52dVJU4U/edit?usp=sharing) - What is CS? - framing CS as a **social** discipline where your programs are both designed to be read by computers but also humans!
* [Lecture 1](https://docs.google.com/presentation/d/1I-MjTFxcKQ858IynZuyv5Iu__jztiY3nlBPuVz-Yixw/edit?usp=sharing) - What is programming? - Framing the task of programming as explaining to the computer in exact detail an action (no room for "interpretation" or "emphasis")
* [Lecture 2](https://docs.google.com/presentation/d/1gELOqQIbcGWFM1ar_DenmPy5bUk2V8_YXxReuV7KRGM/edit?usp=sharing) - Variables - they need to be named after what they contain

While these are "subtle" changes, they setup the framing of the later ideas and let students know right up front how important this idea of "programs are meant to be read by humans."

### Peer Review MC Questions

I was able to design a number of peer review focused review focused multiple choice questions both for our "Mini-Quiz" assignments on Friday which are completed via PollEverywhere and for our in-person "Quizzes" (exams). Here's an example!

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pr_question_example.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Peer Review Rubric

I've adapted Google's Code Review manual to a simple rubric that can be implemented in Canvas. Here's what we've got so far:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rubric.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This will be what students are asked to fill out to review a student's submission for HW 3.

* If you'd like to take a peek at the HW assignment itself, [click here](https://bain-cs110.github.io/assignments/hw-3)
* If you'd like to see the instructions given for the Peer Review (HW 4), [click here](https://bain-cs110.github.io/assignments/hw-4)

# The Not So Good

I tried out some Narrativizing activities with my Peer Mentor staff (undergraduate TAs) and they all thought while it was an interesting activity, it was too hard to develop a clear rubric for such activities that they felt like they could actually implement (since we're dealing with 250+ students, that's sort of an important detail).

For now, I've decided to integrate this component into my lectures and demo videos rather than as an assignment.

---
layout: page
title: project 2
description: a project with a background image and giscus comments
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
