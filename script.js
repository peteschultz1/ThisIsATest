function myFunction() {
  var x = document.getElementById("myNav-Bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}
