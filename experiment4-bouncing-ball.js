//var circle = $('.circle');

$(document).ready(function(){
  var color = $('#color').val();
  var diam = $("#diam").val();
  var bounce = $('#bounce').val();
  var bounceH = $('#bounceH').val();
  var bounceS = $('#bounceS').val();

/*
function changeValue(name, property) {
  $('#' + name).change(function(){
    property = $('#' + name).val();
  });
}
*/


  $("#color").change(function(){
    color = $('#color').val();
  });
  $("#diam").change(function(){
    diam = $('#diam').val();
  });
  $("#bounce").change(function(){
    bounce = $('#bounce').val();
  });
  $("#bounceH").change(function(){
    bounceH = $('#bounceH').val();
  });
  $("#bounceS").change(function(){
    bounceS = $('#bounceS').val();
  });



/*
  $("#button2").click(function(){
    event.stopPropagation();
    bounce = $('#bounce').val();
    bounceH = $('#bounceH').val();
    bounceS = $('#bounceS').val();
  })

  //Sets the colo and size of the ball when made
  $("#button1").click(function(){
    event.stopPropagation();
    color = $('#color').val();
    diam = $("#diam").val();
  });
*/
//Adds a new ball
  $('#button3').on("click", function(){
    $('<div class="circle"></div>').css("background-color", color).css("width", diam).css("height", diam).insertAfter("body");
    
  });
    
  

  $(document).on("mouseover", ".circle", function(event){
    event.stopPropagation();
    for (var i=0; i < bounce; i++){
      $(this).animate({top: "+=" + bounceH}, 100000/parseInt(bounceS));
      $(this).animate({top: "-=" + bounceH}, 100000/parseInt(bounceS));
    }
  });
  $(document).on("click", ".circle", function(event){
    event.stopPropagation();
    $(this).remove();
  } );
    
    
    

  




});


/*
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
*/