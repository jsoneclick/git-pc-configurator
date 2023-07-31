let confBtn = document.querySelector(".configureBtn");
const mainBlock = document.querySelector(".mainContainer");
const infoBlock = document.querySelector(".infoWrapper");
const preloaderVideo = document.querySelector(".preloaderVideo");
const constructorWrapper = document.querySelector(".constructorWrapper");
const preloader = document.getElementById("universe");

function changeToConf() {
    setTimeout(function(){
        mainBlock.style.height = 0;
        infoBlock.style.opacity = 0;
        document.body.style.overflow = "hidden";
        setTimeout(function(){
            infoBlock.style.display = "none";
            preloaderVideo.style.display = "block";
            preloader.style.display = "block";
            setTimeout(function(){
                preloaderVideo.style.opacity = ".3";
                setTimeout(function(){
                    preloaderVideo.style.opacity = 0;
                    preloader.style.display = "none";
                    setTimeout(function(){
                        preloaderVideo.style.display = "none";
                        
                        setTimeout(function(){
                            constructorWrapper.style.display = "block";
                        }, 500);
                    }, 100);
                }, 3000);
            }, 500);
        }, 2000);
    }, 300);
}
confBtn.addEventListener("click", changeToConf);


$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });