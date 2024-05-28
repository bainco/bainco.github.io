---
layout: post
title: Fall Retreat
date: 2023-09-08 00:32:13
description: assumptions, literacies, and learning
tags: literacy visibility philosophy
categories: retreat-reflection
tabs: true
---

While there were a lot of pieces to today's retreat, I wanted to spend some time reflecting on two particular parts.

## On Reflective Teaching

Kate led today's session on [Becoming a Critically Reflective Teacher](https://www.wiley.com/en-us/Becoming+a+Critically+Reflective+Teacher%2C+2nd+Edition-p-9781119049708). During my PhD, I studied quite a bit of critical theory and its influence on pedagogy, particular in the K-12 space. Though much of that though influences my education philosophy and course design, I don't necessarily name it as such.

My focus in intro coursework (which is likely going to be the target of my Searle Fellows Project) is building _literacy_ in a new field. While literacy in reading/writing is thoroughly defined, it's not as well-defined in other contexts: math, physics, computer programming, etc. There's this commonly held aphorism that you've truly reached fluency in a new language once you start to dream in the langauge. What does that look like for computer science? Does it have a parallel? Is that even a useful framing?

I don't have time to answer those bigger questions at the moment, so let's focus on some more specific implementation details in my course and my own teaching statement (the goal of the workshop).

### Questions for my own Teaching Statement
* I spend so much of my time on work that isn't described or featured in my teaching statement: dealing with student issues; designing for flexibility; struggling with appropriate assessment. How do I include these experiences in my teaching statement in a way that shows not everything is perfect but I'm trying to make things better?
* How do I show flexibility in schedule and content while dealing with the fact that students **do not actually want flexibility** in large courses – they want to know what/when in order to optimize their time?
 
### Questions for Other Fellows / the Program
* Are grades hurtful or helpful?
* How do we deal with large scale classrooms? (100+ students vs. 1 professor)
* Dealing with student expectations – what happens when students come into your class expecting something it's not designed to be?


## Guest Lecture: Raj Choudhury

[Dr. Choudhury](https://www.southalabama.edu/departments/ilc/about.html) gave a guest lecture on the Scholarship of Teaching and Learning which I found very enjoyable. It's always refreshing to see other people think about a problem space in the same way you do (even if they're taking a totally different analytical approach). His example of an Major League Baseball game board vs an International Cricket match board is an amazing corollary to particularly computer science (the act of programming).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mlb.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MLB Score Bug (above) vs an International Cricket Score Bug (below)
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cricket.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Programming is about "encoding" what's in our brains, in a way that the computer can understand and execute. In a way, these score bugs are no different. They each encode a tremendous amount of information, yet, to an outsider, they're inscrutable. A member of one community, regardless of their expertise in that community, could see a score bug (a concept with which they are quite familiar) of the other sport and be at a complete loss.

The process of learning is about becoming an "insider" or, in my opinion more appropriate terms, a community member. Programming is no different. Seeing a computer program without any knowledge of the "syntax" and "grammar" of that language would mean not having any insight into the underlying meaning of that program. Not to mention, this perfectly generalizes to _other programming languages_. Being an expert in one language is neither necessary nor sufficient to learn another language. Each will look different:

{% tabs log %}

{% tab log php %}

```php
var_dump('hello');
```

{% endtab %}

{% tab log js %}

```javascript
console.log("hello");
```

{% endtab %}

{% tab log ruby %}

```javascript
pputs 'hello'
```

{% endtab %}

{% endtabs %}

But also, at their core, there are common features that we can look for (just like most spoken languages have concepts of syntax and grammar). And that's what my intro classes focus on!