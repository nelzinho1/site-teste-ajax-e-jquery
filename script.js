$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

  $(document).ready(function(){
    $("#bt").click(function(){
      $("#div1").fadeIn(1000);
      $("#div2").fadeIn(1000);
      $("#div3").fadeIn(1000);
  });
  });
  
      $(document).ready(function(){
      $(".hide1").click(function(){
          $("#div3").hide(500);
          $("#div2").hide(500);
          $("#div1").hide(500);
        });
      });