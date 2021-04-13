
$(document).ready(function(){ 
   $("#mycarousel").carousel( { interval: 2000 } ); 

   $("#carouselStopStart").click(function(){ 
         if ($("#carouselStopStart").children("span").hasClass('fa-pause')) { 
            $("#mycarousel").carousel('pause'); 
            $("#carouselStopStart").children("span").removeClass('fa-pause'); 
            $("#carouselStopStart").children("span").addClass('fa-play'); 
         }
         else if ($("#carouselStopStart").children("span").hasClass('fa-play')){ 
            $("#mycarousel").carousel('cycle'); 
            $("#carouselStopStart").children("span").removeClass('fa-play'); 
            $("#carouselStopStart").children("span").addClass('fa-pause'); 
         } 
   });
});

// Assignment 04
$("#reservationButton").click(function(){             
   $('#reservationModal').modal('show');
});
$("#loginButton").click(function(){             
   $('#loginModal').modal('show');
});