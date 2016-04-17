class: center, middle

### Introduction to Web Development

# Week 5
## More JavaScript

.footnote[Made with [RemarkJS](https://github.com/gnab/remark)]
---

## Agenda

1. Introduction
2. Quiz
2. JS calculator revamped
3. Project requirements

---

## Introduction

**Me**:
* 35 y.o., family (2 kids)
* former GU & Chalmers student
* working as software testing consultant
* worked as course assistant, enjoy teaching

--

**You**:
* short background
* happy with the course?
* aiming for certificate

--

We can learn from each other!

---

## Quiz

What is HTML?
* programming language
* markup language
* communication protocol
* all of the above

---

## Quiz

What is HTTP?
* programming language
* markup language
* communication protocol
* all of the above

---

## Quiz

What is CSS?
* programming language
* stylesheet language
* communication protocol
* all of the above

---

## Quiz

What is a web client?
* computer connected to Internet
* computer connected to a website
* web browser
* all of the above

---

## Quiz

Which HTTP method is used to request a resource from the server?
* GET
* POST
* PUT
* DELETE

---

## Quiz

Which HTTP status means success?
* 100
* 200
* 404

---

## Quiz

HTML file consists of:
* tags
* elements
* attributes
* all of the above

---

## Quiz

Minimal HTML document should contain:
* `<!DOCTYPE HTML ...>` declaration
* `<html>` element
* `<head>` element
* `<title>` element
* `<body>` element
* all of the above

--

* http://www.sitepoint.com/a-minimal-html-document/
* http://www.sitepoint.com/a-minimal-html-document-html5-edition/
* https://validator.w3.org

---

## Quiz

The tag for HTML paragraph is:
* `<div>`
* `<p>`
* `<br>`
* `<a>`

---

## Quiz

The tag for HTML link is:
* `<link>`
* `<a>`
* `<href>`
* `<src>`

---

## Quiz

Which element does not require a closing tag:
* `<head>`
* `<br>`
* `<p>`
* all of the above

---

## Quiz

Newlines within most HTML elements text will be:
* displayed
* ignored

--

Multiple spaces ignored too.
Not in `<pre>` element.
How would we display code inside <code> element?

---

## Quiz

It is a good practise to use `<b>`, `<i>`, and `<strike>` elements for text formatting:
* yes
* no

--

Use semantic elements instead

---

## Quiz

Block-level HTML elements include:
* `<div>`
* `<h1>` - `<h6>`
* `<p>`
* `<form>`
* all of the above

---

## Quiz

Inline HTML elements include:
* `<span>`
* `<a>`
* `<img>`
* `<strong>`
* all of the above

---

## Quiz

A responsive web page:
* responds to user input
* adjusts its look depending on screen size
* both

---

## Quiz

What is DOM?

---

## Quiz

CSS code can be placed in:
* inline style attributes
* `<link>` element
* external CSS file
* all of the above

---

## Quiz

It is good practise to put styling information both in HTML and CSS file:
* yes
* no

---

## Quiz

CSS selectors are used to select HTML elements by their:
* tag
* id
* class
* all of the above

---

## Quiz

Valid CSS selectors include:
* `.clouds, div { ... }`
* `div .clouds { ... }`
* `div > .clouds ( ... }`
* `div + .clouds { ... }`
* `* { ... }`
* all of the above

---

## Quiz

Text inside `<em>` element will be displayed in italic:
* always
* based on browser defaults
* based on CSS information

---

## Quiz

CSS box model defines:
* element width and height
* width of element borders
* space around element
* space around element content
* all of the above

---

## Quiz

Consider CSS:
```CSS
border-width: 1px;
border-style: solid;
border-color: #000;
```
Is it possible to specify this style using one property?
* yes
* no

--

`border: 1px solid #000;`

---

## Quiz

What will individual margins (bottom, left, right, top) be in this example:
```CSS
margin: 25px 50px 75px 100px;
``` 

--

Tip: reverse alphabetic order!

--

Also:
- `margin: 25px 50px 75px;` T RL B
- `margin: 25px 50px;` TB RL
- `margin: 25px;` ALL
Same for padding.
Check other CSS shorthand properties (e.g. font, border).

---

## Quiz

Recommended unit for font-size property is:
* `pixel`
* `em`
* both

---

## Quiz

Which is the larger font-size:
* `16px`
* `1em`
* they are equal

---

## Quiz

Which property is used to make text italic:
* `font-style`
* `font-weight`
* `font-variant`

---

## Quiz

Which property is used to make text bold:
* `font-style`
* `font-weight`
* `font-variant`

---

## Quiz

Can page elements be hidden using CSS?
* yes
* no

---

## Quiz

What is difference between `display:none` and `visibility:hidden`?

---

## Quiz

Will the following CSS:
```CSS
position: static:
top: 50px;
```
change position of an element?
* yes
* no

---

## Quiz

For an element within `<body>`, how will CSS:
```CSS
position: absolute;
top: 10px;
```
affect its position?

---

## Quiz

Which selector will change style of elements with id 'paragraph'?
* `paragraph {...};`
* `.paragraph {...};`
* `#paragraph {...};`

---

## Quiz

Which selector will change style of all elements with class 'some class'
located inside `<div>` elements?
* `div > .someclass {...};`
* `div + .someclass {...};`
* `div ~ .someclass {...};`

---

## Quiz

Which selector will change style of all elements with class 'some class'
located next to `<div>` elements?
* `div > .someclass {...}`;
* `div + .someclass {...}`;
* `div ~ .someclass {...}`;

---

## Quiz

In HTML5, it's necessary to specify the type of a script file/fragment,
e.g. `<script type="text/javascript">...</script>`:
* yes
* no

---

## Calculator Revamped

* start with an empty page
* add layout similar to physical calculator
* add event handlers
* change element layout with JS
* operations support
* calculate the result

---

## Coding with LightTable

Useful shortcuts:

--

* `Ctrl + /` - lets you comment/uncomment piece of code and see the effect.

--

* `Ctrl + Space` - command search

--

Connections

--

Built-in docs.

JS references:
* http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
* http://www.w3schools.com/jsref

--

Documentation browsers: Dash (Mac OS X), Zeal (Win, Linux)

---

## DOM Events

Browser keeps tracks of what happens in the webpage 
(including user actions: mouse moves and clicks, keyboard presses,
copying something to clipboard etc.). These are called _events_.

--

It then sends signals and let users react to events using JavaScript in their pages.
The code that does something in case of an event is called _event handler_.

--

Full list of supported events is available at:  
https://developer.mozilla.org/en-US/docs/Web/Events


---

## First Event Handler

We want to react to digit button presses. We want an `onclick` handler.
Let's try it out:

* inline JavaScript, e.g. `<... onclick="...">`

--

* write a function

--

* **element** (`this`) vs. **event** (`event`) object as argument:
```JavaScript
function eventHandler(this)  { ... };
function eventHandler(event) { ... };
```
Code: section 5.1, `calc.js`

---

## Adding Handlers to All Digits

We can manually add `onclick` attribute to our buttons, or...

--

We can program the browser to do it for us.

--

1) Traverse the collection:

```JavaScript
  for (var i = 0; i < collection.length; i++) {
      var item = collection.item(i);
```

--

2) Call `addEventListener` for each element, passing **itself**
as argument:
```JavaScript
  elem.addEventListener("click", digit_pressed(?));
```

--

3) Load all handlers automatically

Code: section 5.2, `calc.js`

---

## Keyboard Events

`keydown`, `keypress` and `keyup` events

--

`keypress` event is being deprecated, and `textInput` will be used instead
in the future - see http://javascript.info/tutorial/keyboard-events#processing-the-character-keypress

Code: section 7, `calc.js`

---

## Resources

Online courses:

1. [HTML, CSS and JavaScript](https://www.coursera.org/learn/html-css-javascript)
(Coursera, The Hong Kong University of Science and Technology) - starts on 11 April
2. [HTML, CSS and JavaScript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers) (Coursera, John Hopkins University) -
starts on 11 April
3. [HTML, CSS and JavaScript Web Development](https://www.edx.org/course/javascript-html-css-web-development-microsoft-dev211-1x) (edX, Microsoft) - started on 25 March
4. [Introduction to jQuery](https://www.edx.org/course/introduction-jquery-microsoft-dev208x-1) (edX, Microsoft) - self-paced
5. [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804)
(Udacity) - self-paced
6. [JavaScript](https://www.codecademy.com/learn/javascript) (Codecademy) - self-paced

Search [Coursera](http://www.coursera.org), [edX](https://www.edx.org),
[Codecademy](https://www.codecademy.com) and [Udacity](https://www.udacity.com)
for other courses.

---

## Until Next Time

* Do [W3C Schools JavaScript Quiz](http://www.w3schools.com/js/js_quiz.asp)

* Do the exercises using code from last lecture:
  * Add handlers for all operation buttons and related logic to your program.
  How will you test it?
  * Add handlers for `mousedown` and `mouseup` events to change element styles (see
  code in sections 6, `calc.js`)
  * Add support for keyboard input (see code in section 7, `calc.js`). Which events
  suits this kind of application best?

* If you have time, do these more advanced exercises:
  * [Refactor](https://en.wikipedia.org/wiki/Code_refactoring) the code that handles
  the calculations so that you don't have to do multiple `if` checks on the `oper`
  variable (see lines 4-7 in `calc.js` and Google for _anonymous function_).
  * Add more operations (like power and square root).
  * Add a button to toggle basic and more advanced view of the calculator (where you
  can place more advanced operations).

---

## Project 2

The project 2 is about adding interactivity to a website, e.g. one you made in
project 1. Some ideas: making a slideshow or a page with interactive menus.

Whatever you do, you webpage should not reload when its content is changed!

For pure JavaScript part you need to:
* write event handlers for at least 3 different events that the page will react to
* assign some of your event handlers at load time
* event handlers should change both page content and element styles
* have at least one loop that will traverse a group of elements that have
same class or type
* have at least one variable that will store some information about the current
state of your page

When you present your project, you should be able to explain your code to the teacher.

jQuery part of the specification comes this Thursday.
