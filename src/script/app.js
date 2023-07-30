let confBtn = document.querySelector(".configureBtn");
const mainBlock = document.querySelector(".mainContainer");
const infoBlock = document.querySelector(".infoWrapper");
const preloaderVideo = document.querySelector(".preloaderVideo");
const constructorWrapper = document.querySelector(".constructorWrapper");

function changeToConf() {
    setTimeout(function(){
        mainBlock.style.height = 0;
        infoBlock.style.opacity = 0;
        document.body.style.overflow = "hidden";
        setTimeout(function(){
            infoBlock.style.display = "none";
            preloaderVideo.style.display = "block";
            setTimeout(function(){
                preloaderVideo.style.opacity = ".3";
                setTimeout(function(){
                    preloaderVideo.style.opacity = 0;
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