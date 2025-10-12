// Q.1 - Create a navbar and change the color of its first element to red.
// Navbar and its elements creation is in HTML
document.body.firstElementChild.firstElementChild.style.color = "white";

// Q.2 - Create a table without tbody. Now use "View page source" button to check whether it has a tbody or not.
// Table creation is in HTML.
// Ans. - It is not showing in "View page source" tab, but showing in "Inspect - Elements"



// Q.3 - Create an element of 3 children. Now change the color of first and last element to green.
// Creation is in HTML.
let sc = document.body.children[2];
sc.firstElementChild.style.color = "green";
sc.lastElementChild.style.color = "green";



// Q.4 - Write a javascript code to change background of all <li> tags to cyan.
// Creation of lists is in HTML.
document.querySelectorAll('li').forEach(e => {
    e.style.backgroundColor = "cyan"
})



// Q.5 - Which of the following is used to look for the farthest ancestor that matches a given CSS selector.
// (a) matches   (b) closest   (c) contains   (d) none of these
// Ans. - (b) closest