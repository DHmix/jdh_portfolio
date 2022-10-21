$(document).ready(function(){
    function scrchk(){
        var scr = $(document).scrollTop();
        if(scr > 0){
            $("header").css("top","-20px");
        }else{
            $("header").css("top","0px");
        }
    }
    scrchk();
    $(document).scroll(function(){
        scrchk();
    });
    
});
$(document).ready(function(){

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
  
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
  
          scrollTop: $(hash).offset().top
  
        }, 80, function(){
  
          window.location.hash = hash;
  
        });
  
      } 
  
    });
  
  });