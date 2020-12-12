var accordions = document.getElementsByClassName("accordion");
var svgButtons = document.querySelectorAll('.accordion svg')

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    // svgButtons.forEach(element => {
    //   element.classList
    // });

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = "0px";
      content.style.paddingBottom = "0px";
    } else {
      content.style.maxHeight = content.scrollHeight + 20 + "px";
      content.style.paddingTop = "10px";
      content.style.paddingBottom = "10px";
    }
  }
}


window.addEventListener('load', function() {
  const btnFilters = document.querySelectorAll('.main-home .filters button')
  btnFilters.forEach(element => {
    // const intervalBtn = setInterval(function(){ 
    //   alert("Hello"); 
    // }, 1000);
    element.classList.add('active')
  });
  
})