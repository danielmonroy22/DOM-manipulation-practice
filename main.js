const container = document.querySelector('#container');


// creating div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


//creating paragraph
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";
// creating headings
const heading3 = document.createElement('h3');
heading3.textContent = "I’m a blue h3!";
heading3.style.color = "blue";
// div with border
const divBorder = document.createElement('div');
divBorder.style.borderColor = "black";
divBorder.style.backgroundColor = "pink";
// creating elements to add to this div
const headingDivBorder = document.createElement('h1');
headingDivBorder.textContent = "I’m in a div";
const pDivBorder = document.createElement("p");
pDivBorder.textContent = "ME TOO!"
// adding elements to divBorder
divBorder.appendChild(headingDivBorder);
divBorder.appendChild(pDivBorder);

// adding elements to container

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(divBorder);




//EXERCISE

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
