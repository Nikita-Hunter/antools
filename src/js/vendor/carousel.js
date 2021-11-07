$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       center: true,
       items: 1,
       loop:true,
       autoplay:true,
       autoplayTimeout:2000,
       autoWidth:false,
       doot: true,
       nav: true,
       pagination: true,
       navText: ["<div class='prevv'><i class='fas fa-chevron-left'></i></div>","<div class='nextt'><i class='fas fa-chevron-right'></i></div>"],
       responsive:
       {
           600:{
               items: 1,
           }
       } 
    });
});