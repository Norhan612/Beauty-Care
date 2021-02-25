$(function (){
    
     'use strict';
     new WOW().init();
     
     var offSet = 68;
     
     
 
     
    // About ==> Scroll To Overview
    $('.navbar .navbar-nav .overview').click(function (){
        
         $('html,body').animate({
            
          scrollTop: $('.about').offset().top - offSet
        },2000);
       // new WOW().init();
    });
    
    // services ==> Scroll To services
    $('.navbar .navbar-nav .servv').click(function (){
        
         $('html,body').animate({
            
          scrollTop: $('.services').offset().top - offSet
        },2000);
    });
    
    // Contact ==> Scroll To Contact Us
    $('.navbar .navbar-nav .cont').click(function (){
        
         $('html,body').animate({
            
          scrollTop: $('.contact-us').offset().top - offSet
        },2000);
    });

   // To Show Make Up Section
         // By Category
   $('.category .category-box .makeup-product').click(function(){
         $('.makeup ').fadeToggle(2000);
         $('html,body').animate({
            
          scrollTop: $('.makeup').offset().top - offSet
        },2000);
   });
         // By Dropdown
   $('.navbar .dropdown-menu .dropdown-makeup').click(function(){
        // $('.makeup ').fadeToggle(5000);
         
         $('html,body').animate({
            
          scrollTop: $('.makeup').offset().top - offSet
        },2000);
   });
  
  
  
     
    // To Show Skin Care Section
       // By Category
    $('.category .category-box .skincare-product').click(function(){
        $('.skincare').fadeToggle(2000);
        $('html,body').animate({
            
          scrollTop: $('.skincare').offset().top - offSet
        },2000);
    });
        // By Dropdown
    $('.navbar .dropdown-menu .dropdown-skincare').click(function(){
        // $('.skincare').fadeToggle(5000);
         
         $('html,body').animate({
            
          scrollTop: $('.skincare').offset().top - offSet 
        },2000);
    });
    
    
    
    
     // To Show Hair Care Section
       // By Category
    $('.category .category-box .haircare-product').click(function(){
        $('.haircare').fadeToggle(2000);
        
         $('html,body').animate({
            
          scrollTop: $('.haircare').offset().top - offSet 
        },2000);
    });
        // By Dropdown
    $('.navbar .dropdown-menu .dropdown-haircare').click(function(){
        // $('.haircare').fadeToggle(5000);
         
         $('html,body').animate({
            
          scrollTop: $('.haircare').offset().top - offSet
        },2000);
    });
    
    
    
     // To Show Nails Care Section
       // By Category
    $('.category .category-box .nailscare-product').click(function(){
        $('.nailscare').fadeToggle(2000);
        
        $('html,body').animate({
            
          scrollTop: $('.nailscare').offset().top - offSet 
        },2000);
    });
        // By Dropdown
    $('.navbar .dropdown-menu .dropdown-nailscare').click(function(){
        // $('.nailscare').fadeToggle(5000);
         
         $('html,body').animate({
            
          scrollTop: $('.nailscare').offset().top - offSet
        },2000);
    });
    
    
      // Trigger NiceScroll 
    $('html').niceScroll({
      railpadding: { top: 68, right: 0, left: 0, bottom: 0 },
     // autohidemode: false,
      cursorcolor: '#F03F86',
      cursorwidth: 8,
      cursorborder: '1px solid #F03F86',
      
      
    });
    
});
   