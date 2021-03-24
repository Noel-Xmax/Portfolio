$(document).ready(function(){
  // $(".cv").submit(function(event){
  //   event.preventDefault();
  //   // $(".hamlink1").show();
   console.log("welcome")

$(".hamlink1").click(function(){
  alert("Welcome to my Portfolio, where you will learn about me, my Qualifications, Work Experiences,Skills, Projects done and a Resume for further clarificatons.");
    });

    $('.hamlink3').click(function(){
      $(".aboutme").toggle();
      $(".mySkills").toggle();
      $(".myProjects").toggle();
    });
    $('.hamlink4').click(function(){
      $(".aboutme").toggle();
      $(".mySkills").toggle();
      $(".workExp").toggle();
       });
    $('.hamlink5').click(function(){
       $(".aboutme").toggle();
      $(".myProjects").toggle();
      $(".workExp").toggle();
     });
     $('.hamlink6').click(function(){
      $(".aboutme").slideUp();
      $(".myProjects").slideUp();
      $(".workExp").slideUp();
      $(".mySkills").slideUp();
      $(".contactme").slideDown();
      $("footer").slideDown();
      });
    
      $('.hamlink1').click(function(){
        $(".aboutme").toggle();
        $(".myProjects").toggle();
        $(".workExp").toggle();
        $(".mySkills").toggle();
        $(".contactme").toggle();
        });
    // $('#prz').click(function(){
    //   $(".card-crusts,.card-toppings").toggle();
    // });
    // $('#active').click(function(){
    //   $(".card-menu,.card-crusts,.card-toppings,.item4,.card-sizes,.card-prices").toggle();
    // });
  });
