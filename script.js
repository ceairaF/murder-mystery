
// selects the HTML button element from our document
var button = document.querySelector('button')
// add a 'listener' to the button that is waiting for a 'click' event 
// when a click happens on the button, it will run the changeColor function
button.addEventListener('click', changeColor)

function changeColor(){
  console.log("Clicked!")
  // selects our navbar
  var navbar = document.querySelector("#navbar ul")
  // Javascript can assign new attributes to the navbar
  navbar.style.backgroundColor = 'red'
}

