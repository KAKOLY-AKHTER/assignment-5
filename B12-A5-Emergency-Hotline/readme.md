
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:~

getElementById():  
This method selects a specific element with a unique ID. It always returns a single element.

getElementsByClassName():   
With this I can select multiple elements that have the same class name. It returns an HTMLCollection.

querySelector(): 
It works like a CSS selector. It returns the first element that I want to match.

querySelectorAll():  
Returns all matching elements as a NodeList.




2. How do you **create and insert a new element into the DOM**?

answer:~

If I want to add a new element to the DOM, I first create a div with document.createElement("div"). Then I add content with .textContent or .innerHTML, and apply style with .classList.add().
Then I find the parent element where I want to add it with getElementById() or querySelector(). Then I add the new element inside the parent with appendChild().
This is how HTML can be updated dynamically with JavaScript





3. What is **Event Bubbling** and how does it work?


Answer:~

Event bubbling means that when an event like a click occurs on a child element, it first triggers on that element, then moves upward to its parent,  grandparent, and even the whole section or body. This allows us to handle events from a parent level, using less code.



4. What is **Event Delegation** in JavaScript? Why is it useful?



Answer:~

Event delegation means that instead of having separate listeners for each child element, I place a single listener on the parent element.When a child is clicked, the event bubbles up to the parent. Then I use event.target to know which child was clicked.

This is useful because it makes the code cleaner, reduces memory usage, and works even if new child elements are added dynamically.




5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:~

preventDefault() :
This stops the browser's default behavior. For example, prevents form submission from reloading the page.

stopPropagation() :
This stops event bubbling. This means that even if an event is triggered on a child element, the parent-level listener will no longer run.









