---
layout: page
title: Peer Feedback in Large Scale CS Courses
description: a work in progress
img: assets/img/final.png
importance: 5
category: teaching
---

In the 2023-2024 academic year, I completed the Searle Fellows Program where I focused on implementing peer evaluation in a large-scale introductory computer science classroom.

## The Big Picture

As part of the Searle Fellows Program, I was mainly focused on augmenting my COMP_SCI 110 course. This is a challenging course to teach because it's:

- the only course in the entire Computer Science Department which is majority non-major students
- the only course CS course that specifically does not count toward a major or minor in CS
- a large-format course (250 to 350 students per quarter)
- has a majority of students who simply want to see what CS is rather than become expert programmers (~60% according to surveys)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/big_picture.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Specifically for the Searle Fellows Project, I made a number of changes and new assignments:

- instituted a new pre-course survey to get a better idea of the incoming students
- integrated a new core learning objective: _Students will be able to **understand** and **critique** a program written by another person._
- created a series of new assignments focused on reading programs rather than writing them
- developed automated assignment and grading tools for peer reviews of computer programs via the Canvas LMS
- begun a prototype of a new piece of software that integrates with Canvas capable of supporting peer reviewing of programming assignments

While we were unable to formally evaluate the specific changes made to the syllabus and course, I'll do my best to include anecdotes and informal qualitative evidence of the changes this project may have caused in the course.

## New Course Survey and Insights

The first part of my project was to design an implement a new course survey. This went swimmingly and was used in both Winter 2024 and Spring 2024. [Check it out here](https://docs.google.com/forms/d/e/1FAIpQLSeNgink7RM6FDKqhxEtYh8wYm0FIAfTg_jtjFZOTtAIiIovAg/viewform?usp=sf_link) if you have a `@u.northwestern.edu` address. It's got the same purposes as it did before (to give us an informal view of the students in the class) but also has some new focii:

- It tries to zero in on **why** students are taking the course (though self-reported obviously)
- It asks more specific questions about programming experience and comfort
- It asks relational questions about student perceptions of programming experience of their peers in the course

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pre_course_survey.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

From this data, we've got two big conclusions:

- Most of the students in this class do not have a specific "end goal" in CS
- Most of the students in this class _come into_ the class thinking other students know more about programming then them

While at the moment, we don't have time to specifically address these, in the future, I aim to measure these same ideas in a course _post-survey_ to see if the course might contribute to any changes in these students.

## Changing the Perception of "Programming"

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/implementation_scheme.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In the above diagram, we see our new focus on: a program, like an essay, isn't done when you've finished the first draft! In order to emphasize this idea, we've:

1. added a new learning objective to our syllabus
2. changed the first week of the class to reframe CS as a social discipline
3. added a new series of microassessments on reading / critiquing programs
4. added a major new assignment that asks students to give feedback on a peer's program

While this doesn't cover all of our original goal, it's a start.

## Refocused Intro Lectures

In the first few week of class we focused on making our programs _mnemonic_. This came in the form of changes to how we introduced:

- [Lecture 0](https://docs.google.com/presentation/d/1pBVN9dpN-bGjiF1HCLaPLtJjQjC_y9MHoHs52dVJU4U/edit?usp=sharing) - What is CS? - framing CS as a **social** discipline where your programs are both designed to be read by computers but also humans!
- [Lecture 1](https://docs.google.com/presentation/d/1I-MjTFxcKQ858IynZuyv5Iu__jztiY3nlBPuVz-Yixw/edit?usp=sharing) - What is programming? - Framing the task of programming as explaining to the computer in exact detail an action (no room for "interpretation" or "emphasis")
- [Lecture 2](https://docs.google.com/presentation/d/1gELOqQIbcGWFM1ar_DenmPy5bUk2V8_YXxReuV7KRGM/edit?usp=sharing) - Variables - they need to be named after what they contain

## Microassessments

I was able to design a number of peer review focused multiple choice questions both for our "Mini-Quiz" assignments on Friday which are completed via PollEverywhere and for our in-person "Quizzes" (exams). Here's an example!

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pr_question_example.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Peer Feedback Assignment

I've adapted Google's Code Review manual to a simple rubric that can be implemented in Canvas. Here's what we've got so far:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rubric.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This will be what students are asked to fill out to review a student's submission for HW 3.

- If you'd like to take a peek at the HW assignment itself, [click here](https://bain-cs110.github.io/assignments/hw-3)
- If you'd like to see the instructions given for the Peer Review (HW 4), [click here](https://bain-cs110.github.io/assignments/hw-4)

## Analyzing the Peer Feedback

I've begun an initial lexical analysis of the feedback given (with around 330 rubrics filled out, it's quite a bit of data). At the moment, I don't have time to complete a rigorous analysis, but I'll revisit this towards the end of the quarter to fill in more details.

## Peer Feedback Programming Tools

Unfortunately, not all went to plan so we had to design some specialized tools to fix those problems.

- While Canvas **happens** to support previewing `.py` files in its preview window, when assigned as a peer review **it prevents students from downloading the submission** which means they can't actually download it to their computer and run it like a regular computer program (also worth noting a good like 70% of the time, these previews never end up rendering without any error message - just an infinite loading animation)
- In order to make it a "graded" peer review, Canvas insisted I needed to assign rubric items points. Well, my goal was _participation_ in the Peer Feedback process, so I made all rubric selections equal in terms of points (i.e. someone's feedback doesn't affect your grade).
- Turns out...when you do this, Canvas actually _incorrectly displays_ the selections on the rubric to the person who you gave feedback. It'll show the correct number of points, _but it shows category selections wrong_!!!
- If someone didn't submit the assignment that's being peer-reviewed, they don't automatically get assigned a peer's submission to review
- That's fine...but it doesn't say that when you generate the assignments, so I mistakenly assigned those people a peer's submission to review which Canvas then notifies them about...**but won't actually allow them to submit it.**
- As usual, a small number of students took advantage of my lack of specificity in the instructions "leave a comment on each rubric item indicating why you selected that rubric item" and simply wrote one word answers to most of the comments.

You can find all the code I used to solve those problems at the below GitHub repo. Over the summer, I plan on narrativizing these programs and making them fit for a non-programming audience since, while this problem occurred in my class because I wanted to students to give feedback on programs, this same process could apply to any class where students are unable to give feedback using Canvas' built-in feedback tool (basically anything beyond a `txt`, `docx`, or `pdf` file).

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

## Special Thanks

Thanks to the Searle Fellows Program and a special thanks to my Mentor, [Dr. Michael Fagen](https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=31193) and Project Group Leader [Kate Flom Derrick](https://searle.northwestern.edu/about/staff-grad-postdoc/kate-flom-derrick.html).

Also thanks to the folks in my Project Group who were supportive throughout the year!
