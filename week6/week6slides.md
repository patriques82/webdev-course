class: center, middle

### Introduction to Web Development

# Week 6
## jQuery

.footnote[Made with [RemarkJS](https://github.com/gnab/remark)]

---

## Agenda

1. jQuery
2. Project

---

## What is jQuery?

The "Write Less, Do More JavaScript library" which simplifies:
* DOM traversal (i.e. page element selection)
* DOM manipulation (both HTML and CSS)
* event handling
* and many more (AJAX, animations etc.)


Links:
* [Downloads, API Documentation etc.](https://jquery.com)
* [Project Home](https://jquery.org)

---

## Adding jQuery to Your Project


Download the _minified_ version, e.g. `jquery-2.2.3.min.js`:
```HTML
<script src="resources/jquery-2.2.3.min.js"></script>
```
or use a CDN (Content Distribution Network), e.g.
```HTML
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
```

Even though the minified jQuery is small, there is a good chance it was already downloaded by other pages and is stored in your browser's cache.

---

## jQuery Simplifies Coding

Remember when we had to add event handlers to all of our `class="digit"` buttons last week?

--

We wrote a lot of code:
```JavaScript
function digit_pressed(arg) {
  var text = arg.innerHTML;
  var output = document.getElementById("output");
  if (output.innerHTML == "0") {
    output.innerHTML = text;
  }
  else {
    output.innerHTML += text;
  }}

function addDigitClickHandlers() {
  var digits = document.getElementsByClassName("digit");
  for (var i = 0; i < digits.length; i++) {
    var digit = digits.item(i);
    digit.addEventListener("click",function(){digit_pressed(this)});
  }}

window.onload = function() {addDigitClickHandlers();}
```
---

## jQuery Example

You can do the same using jQuery:

--
```JavaScript
$(function(){
  $(".digit").click(function(){
    if ($("#output").text() == "0")
      $("#output").text($(this).text());
    else
      $("#output").append($(this).text());
  })
});
```
Code: section 1 , `week6/calc.js`
--

It looks scary ...

--

... but let's not be frightened - `API documentation` is your best friend!

http://api.jquery.com/

---

## Looking Under the Hood

```JavaScript
$(function(){
  $(".digit").click(function(){
    if ($("#output").text() == "0")
      $("#output").text($(this).text());
    else
      $("#output").append($(this).text());
  })
});
```
is the same as...

---

## Looking Under the Hood

```JavaScript
$(document).ready(function(){
  $(".digit").click(function(){
    if ($("#output").text() == "0")
      $("#output").text($(this).text());
    else
      $("#output").append($(this).text());
  })
});
```
is the same as...

---

## Looking Under the Hood

```JavaScript
$(document).ready(function(){
  $(".digit").click(function(){
    digit_pressed($(this));
  })
});

function digit_pressed(this){
  if ($("#output").text() == "0")
    $("#output").text($(this).text());
  else
    $("#output").append($(this).text());
};
```
is the same as...

---

## Looking Under the Hood

```JavaScript
$(document).ready(function(){
    add_handlers();
  })
});

function add_handlers(){
  $(".digit").click(function(){
    digit_pressed($(this));
})};

function digit_pressed(this){
  if ($("#output").text() == "0")
    $("#output").text($(this).text());
  else
    $("#output").append($(this).text());
};
```
Same logic but in different form.

--

We could carry on until we get to plain JavaScript.

---

## jQuery Simplifies Coding!

--

It adds additional _layer of abstraction_ that lets us be more productive:
* provides shortcut functions for common web development tasks
* some functions, e.g. `text`, let you both _get_ DOM data and _set_ (change) it - this
makes code more concise and easier to follow

Still, jQuery is just JavaScript code, nothing more. There is no magic and you can do
same things with plain JavaScript.

---

## Big Idea

Main concept to grasp for using jQuery - **first-class functions**.

--

A _functional programming_ feature (also - 'functions as arguments', 'functions as
first-class citizens'). It lets write more structured code composed of many small functions that can be reused.

In JavaScript you can:
* pass function as argument to another function:
  ```JavaScript
  function a() { ... };
  function b(fun) { ... };
  b(a); // call b with a as argument
  ```
* assign function to a variable:
  ```JavaScript
  function a() { ... };
  var b = a;
  ```

---

## Anonymous Functions

With jQuery, you will often use _anonymous functions_ (e.g. when assigning event handlers).

Anonymous functions are declared in-place and can be:
* a member of a data structure (object or array)
* assigned to a variable
* passed as an argument to another function

Code: section 2, `week6/calc.js`

---

## $ = jQuery


`$` is ubiquitous in jQuery-dependent code. It is a shorthand for the `jQuery` function which lets you do a number of things:

* run some code when 'document is ready'

* find elements in the page to do some actions on them:
  * change content
  * change style
  * assign event handlers

* create new elements


https://www.smashingmagazine.com/2014/05/mystery-jquery-object-syntax-basic-introduction/

http://api.jquery.com/jQuery


---

## Selectors

jQuery uses CSS selectors to find elements. Both standard CSS selectors and additional options added in jQuery itself.

http://api.jquery.com/category/selectors/



---

## Project 2

The project 2 is about adding interactivity to a website, e.g. one you made in
project 1. Some ideas: making a slideshow or a page with interactive menus.

Whatever you do, you webpage should not reload when its content is changed!

Part 1. Pure JavaScript:
* write event handlers for at least 3 different events that the page will react to
* assign some of your event handlers at load time
* event handlers should change both page content and element styles
* have at least one loop that will traverse a group of elements that have
same class or type
* have at least one variable that will store some information about the current
state of your page

Part 2. jQuery:
* create a new version of your website which will use jQuery
* replace standard JavaScript functions with jQuery functions whenever possible
* both version of the website should have same behaviour

Submit you code by email to `eugene DOT groshev AT gmail DOT com` on Thursday 21 April
the latest. We will have a discussion of your project on Monday 25 April.

When you present your project, you should be able to explain your code to the teacher.


