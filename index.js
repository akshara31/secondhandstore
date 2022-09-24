//small alert box, for welcome message
// function loadpage() {
//   var name = prompt("Please Enter your Name", "");
//   var t = new Date();
//   var h = t.getHours();
//   var m = t.getMinutes();
//   alert("Hello " + name + ", Welcome to this site! Time right now is " + h + " : " + m);
// }

//mouse over event
function mouseen() {
  $("#mh").css({
    "color": "rgb(137, 138, 166)",
    "font-weight": "bold"
  });
}
function mousele() {
  $("#mh").css({
    "color": "rgb(201, 187, 207)",
    "font-weight": "bold"
  });
}

//hover function for html elements

// $("#himg").hover(function hov(){
//   $("#himg").fadeIn();
// })
// $("#himg").onmouseover = function(){
//    $("#himg").fadeIn(2000);
// })

function fadefunc() {
	$("#himg").fadeIn('slow', 0.4);
}

//scrolling and making parts of the website appear and dissapear
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

//console logging when user reaches end of page
window.onscroll = () => {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    console.log("You have reached the end of this page!");
  }
}

//moving to top of this site
const toTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
