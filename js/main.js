$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    }else {
      $('.scroll-up-btn').removeClass("show");
    }    
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Data Scientist", "Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing2", {
    strings: ["Web Developer", "Data Scientist", "Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
})
  