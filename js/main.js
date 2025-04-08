/*
 * Try to manipulate the page
 *
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 *
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 *
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */

// Easiest: 1. Get the title for each dog/cat services, and put them into the console using console.log

console.log(document.getElementById("dog").innerHTML);
console.log(document.getElementById("house").innerHTML);
console.log(document.getElementById("walking").innerHTML);
console.log(document.getElementById("care").innerHTML);
console.log(document.getElementById("vists").innerHTML);


// Eaiest: 2. Change the title of the page to "We're the CAT People" 
document.getElementById("people").innerHTML = "We're The Cat People";

// Easiest: 3. Change the main image to be something cat related.
/*I wasn't sure if the header image or the img halfway down the page was the main image but
since it means the header image in a later task I took this as being the image half way down the page
*/

document.getElementById("herobottom").src = "./img/close-up-of-woman-with-cat.jpg";


// Harder: 1. Replace the call to action button background color with "red"
document.getElementById("search").style.backgroundColor = "red";

// Harder: 2. Find another image and replace the header (try unsplash.com, get familiar with searching for images)

window.onload = function() {
    document.getElementById("herochange").style.backgroundImage = "url('../img/hero-women-with-cat-change.jpg')";
};

// Harder: 3. the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
document.getElementById("sitter").innerHTML = "Thanks";


// Hardest: 1. Make the responsive menu work!

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

// Hardest: 2. Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
