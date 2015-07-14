var circle = $('.circle');

$(document).ready(function(){

  var ySpeed = 20, xSpeed = 30;
  var fallSpeed = 500;
  var lost = 10;
  var h = window.innerHeight - 2;
  var circleH = circle.height();
  $(document).on("click", function(e){
    //alert(e.type);
    //alert(e.target.nodeName);
    //circle.css("top", e.pageY + "px");
    //circle.css("left", e.pageX + "px");
    while (h > circleH) {
      circle.animate({top: "+=" + (h - circleH) + "px", left: "+=" + xSpeed + "px"}, fallSpeed);
      h -= ySpeed;
      if (h < circleH) break;
      fallSpeed += 10;
     
      circle.animate({top: "-=" + (h - circleH) + "px", left: "+=" + xSpeed + "px"}, fallSpeed);
      ySpeed += 5;
    }
    
  })


});