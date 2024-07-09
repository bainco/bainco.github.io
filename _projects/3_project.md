---
layout: page
title: Project Update (Feb 2024)
description: oh canvas.
img: assets/img/7.png
importance: 3
category: work
---

So, HW 4 (the peer review assignment) has come and gone. Overall it went **okay**, but we had some issues.

### Canvas Peer Review Tool

Canvas LMS has a Peer Review Tool built-into it which, I thought, would do most of the heavy lifting for me. Well, I was sort of correct. It does allow the following:

1. assigning each student a peer's submission to review
2. associating a specific rubric for peer's to use to review an assignment
3. notifying students via the Canvas interface they have a pending review

This is great right?!? It seems like it should work perfectly for our use case. I entered in all the assignment details, made some screenshots of the process, etc.. Everything was great until a student showed me what their side of things looked like (you can't use the Student View feature of Canvas to preview a Peer Review because `Test Student` can't be assigned as a peer reviewer).

- While Canvas **happens** to support previewing `.py` files in its preview window, when assigned as a peer review **it prevents students from downloading the submission** which means they can't actually download it to their computer and run it like a regular computer program.
- In order to make it a "graded" peer review, Canvas insisted I needed to assign rubric items points. Well, my goal was _participation_ in the Peer Feedback process, so I made all rubric selections equal in terms of points (i.e. someone's feedback doesn't affect your grade).
- Turns out...when you do this, Canvas actually _incorrectly displays_ the selections on the rubric to the person who you gave feedback. It'll show the correct number of points, _but it shows category selections wrong_!!!
- If someone didn't submit the assignment that's being peer-reviewed, they don't automatically get assigned a peer's submission to review
- That's fine...but it doesn't say that when you generate the assignments, so I mistakenly assigned those people a peer's submission to review which Canvas then notifies them about...**but won't actually allow them to submit it.**
- As usual, a small number of students took advantage of my lack of specificity in the instructions "leave a comment on each rubric item indicating why you selected that rubric item" and simply wrote one word answers to most of the comments.

### Solutions

Well, luckily I'm pretty familiar with the Canvas API so I was able to fix a lot of this on the fly.

First, to allow the downloading of the peer's submission, I wrote a program that looked up each person's assigned peer review, downloaded that peer's submission, anonymized it, and then messaged it through Canvas to the reviewer.

Second, to fix the display issue, I wrote a custom renderer for the peer feedback. Luckily though Canvas was displaying the results incorrectly, it was storing the underlying data correctly.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pr_report.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This report is both sent anonymously to the peer getting reviewed and copy is sent to the reviewer so they can see the final version of what their peer gets.

Third, you can fix the "no submit" problem by going back and submitting a blank assignment for each of the non-submitters. I automated this via the Canvas API.

Fourth, I edited the instructions for leaving comments. I required students to leave a "two sentence" comment justifying each of their rubric selections.

### Reflections

Overall, it could have been worse. This is sort of the peril of doing anything new in a class this size. One little issue and suddenly 250 people are freaking out. Some conclusions here:

- I'm ready to do this again because I now have prototype tools for the activity
- This data won't be fit to be analyzed beyond limited qualitative conclusions
- The Canvas PR tool isn't fit for this sort of assignment (but I don't have time during the year to make my own)

While I'm disappointed by this attempt, I will say I heard five positive things about this assignment:

- Student: "It was so cool to see someone else's program! It made me feel so much more like I belonged than before. I just assumed everyone was better at programming than me"
- Peer Mentor: "After this week I finally heard people talk about 'cleaning up their programs' rather than just getting it done."
- Peer Mentor: "I think this turned out pretty well - I thought it'd be a disaster"
- Student: "I really appreciated the comments I got. I both felt like I had accomplished something because they gave me compliments but they also gave me an idea to try out" (since they use their design in HW 3 in HW 5).
- Student: "I actually borrowed their idea for my next homework – it was too cute to pass up!"

Luckily, I found out I'm teaching this class again in Spring, so I'll try again then.
