$( function() {



    $( ".glitch-img" ).mgGlitch({
      // set 'true' to stop the plugin
              destroy : false, 
      // set 'false' to stop glitching
      glitch: true, 
      // set 'false' to stop scaling
      scale: true, 
      // set 'false' to stop glitch blending
      blend : true, 
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 200, 
      // set max time for glitch 1 elem
      glitch1TimeMax : 400,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10, 
      // set max time for glitch 2 elem
      glitch2TimeMax : 100, 
      
    });
    $( ".glitchy-img" ).mgGlitch({
        // set 'true' to stop the plugin
                destroy : false, 
        // set 'false' to stop glitching
        glitch: true, 
        // set 'false' to stop scaling
        scale: true, 
        // set 'false' to stop glitch blending
        blend : true, 
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin : 100, 
        // set max time for glitch 1 elem
        glitch1TimeMax : 200,
        // set min time for glitch 2 elem
        glitch2TimeMin : 10, 
        // set max time for glitch 2 elem
        glitch2TimeMax : 100, 
        
      });

});


        var controller = new ScrollMagic.Controller();
        const scene1 = new ScrollMagic.Scene({
                triggerElement: '.tadeo',
                
        })
         .setClassToggle('.tadeo', 'show')
         .reverse(false)
         .addTo(controller);
        
        const scene2 = new ScrollMagic.Scene({
                triggerElement: '.karime',
        })
         .setClassToggle('.karime', 'show')
         .reverse(false)
         .addTo(controller);
        
        const scene3 = new ScrollMagic.Scene({
                triggerElement: '.red-squares .square',
                offset: -250 /* offset the trigger 150px below #scene's top */
                
        })
         .setClassToggle('.red-squares .square', 'show')
         .addTo(controller);
         const scene4 = new ScrollMagic.Scene({
                triggerElement: '.red-squares .cursor',
                offset: -250 /* offset the trigger 150px below #scene's top */
        })
         .setClassToggle('.red-squares .cursor', 'show')
         .addTo(controller);
        const scene5 = new ScrollMagic.Scene({
                triggerElement: '.banner-categoria .logo',
                offset: -250 /* offset the trigger 150px below #scene's top */
        })
         .setClassToggle('.banner-categoria .logo', 'show')
         .addTo(controller);

        const scene6 = new ScrollMagic.Scene({
                triggerElement: ' .banner-categoria .presenta',
                offset: -250 /* offset the trigger 150px below #scene's top */
        })
         .setClassToggle(' .banner-categoria .presenta', 'show')
         .addTo(controller);
       
     
         

        

         


$(window).load(function() {
       
        setTimeout(() => {
                $(".blue-overlay").fadeOut("slow");
                mostrarPromoPopUp();
                
        }, 2000);
        // setTimeout(() => {
        //         $('.red-squares .square').addClass("show");
        // }, 3000);
        
});



function mostrarPromoPopUp(){
        $("#promopopup").hide().fadeIn(1000);

        //close the POPUP if the button with id="close" is clicked
        $("#promopopup .close").on("click", function (e) {
            //e.preventDefault();
            $("#promopopup").fadeOut(1000);
        });
    }