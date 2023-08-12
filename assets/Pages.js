//NavigationBar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const navbarHeight = navbar.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > navbarHeight) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

// 2017z
var divs = ["Page1_2017", "Page2_2017", "Page3_2017", "Page4_2017", "Page5_2017"];
var visibleDivId = null;
function divVisibility(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}