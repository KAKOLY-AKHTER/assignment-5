
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:~

getElementById:~
Using getElementById("id"), a specific ID is searched, and it always returns a single element.


getElementsByClassName:~
Using getElementsByClassName("className"), all elements with the specified class name are selected, and it returns a collection of elements.


querySelector :~
Using querySelector("selector"), a specific element matching the CSS selector is selected. It returns the first matching element.



querySelectorAll:~
Using querySelectorAll("selector"), all elements that match the given CSS selector are selected, and it returns a collection of elements.




2. How do you **create and insert a new element into the DOM**?

answer:~

To add a new element to the DOM, I first create it using document.createElement("div"). Then I set its content with .textContent or .innerHTML, and style it using .classList.add().
After that, I find the parent element using getElementById() or querySelector() and insert my new element using appendChild().
This way, I can dynamically update the HTML with JavaScript.





3. What is **Event Bubbling** and how does it work?


Answer:~

Event bubbling means that when I click on a child element, the event first triggers there and then moves upward through its parent elements in the DOM tree—like the parent, grandparent, and so on.



4. What is **Event Delegation** in JavaScript? Why is it useful?



Answer:~

Event Delegation means I attach a single event listener to a parent element instead of adding separate listeners to each child.
When a child element is clicked, the event bubbles up to the parent, and I use event.target to check which child was clicked.
This is useful because it makes the code cleaner, reduces memory usage, and works even if new child elements are added dynamically.




5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:~
preventDefault() :- This method stops the browser from performing its default action. For example, clicking a link normally navigates to another page, or submitting a form reloads the page. Using preventDefault() prevents that default behavior.
.
stopPropagation() :- Normally, when an event is triggered on a child element, it travels upward through its parent, grandparent, and so on—this is called event bubbling.
But if I use stopPropagation(), this bubbling process stops. That means even if the child element triggers the event, the parent’s event listener won’t run.









