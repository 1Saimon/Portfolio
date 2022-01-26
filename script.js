$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrool-up-btn').addClass("show");
        }else{
            $('.scrool-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scrool-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //ativar menu e navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // texto animado
    var typed = new Typed(".typing",{
        strings: ["Designer","Editor de Vídeo","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2",{
        strings: ["Designer","Editor de Vídeo","Freelancer"],
        typeSpeed: 100,
         backSpeed: 60,
         loop: true    
    });
  




});

