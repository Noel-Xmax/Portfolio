$(document).ready(function(){
  // $(".cv").submit(function(event){
  //   event.preventDefault();
    // $(".hamlink1").show();
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
      });
    
      $('.hamlink1').click(function(){
        $(".aboutme").toggle();
        $(".myProjects").toggle();
        $(".workExp").toggle();
        $(".mySkills").toggle();
        $(".contactme").toggle();
        });
    $('workExp').click(function(){
      $(".work1,.work2,.work3,.work4").collapse();
    });
  });
