
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:~

getElementById:  
getElementById() selects one specific element using its unique id. It always returns a single element.

getElementsByClassName:   
Selects all elements with the given class name. Returns an html collection.

querySelector: 
Selects the first element that matches a css selector. Returns a single element.

querySelectorAll:  
Selects all elements that match a css selector. It returns a nodeList.




2. How do you **create and insert a new element into the DOM**?

answer:~

To add a new element to the dom, I first create it using document.createElement("div"). Then I set its content with .textContent or .innerHTML, and style it using .classList.add().
After that, I find the parent element using getElementById() or querySelector() and insert my new element using appendChild().
This way, I can dynamically update the html with javaScript.





3. What is **Event Bubbling** and how does it work?


Answer:~

Event bubbling means that if I click on a small element—like a button—the event first triggers on that button. Then it moves upward step by step to its parent, grandparent, and even the whole section or body. This way, the event spreads through the dom tree, making it easier to handle things from the parent level.



4. What is **Event Delegation** in JavaScript? Why is it useful?



Answer:~

Event Delegation means I attach a single event listener to a parent element instead of adding separate listeners to each child.
When a child element is clicked, the event bubbles up to the parent, and I use event.target to check which child was clicked.
This is useful because it makes the code cleaner, reduces memory usage, and works even if new child elements are added dynamically.




5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:~

preventDefault() :- This method stops the browser from performing its default action. For example, clicking a link normally navigates to another page, or submitting a form reloads the page. Using preventDefault() prevents that default behavior.

stopPropagation() :- Normally, when an event is triggered on a child element, it travels upward through its parent, grandparent, and so on—this is called event bubbling.
But if I use stopPropagation(), this bubbling process stops. That means even if the child element triggers the event, the parent’s event listener won’t run.









