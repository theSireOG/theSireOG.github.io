$('document').ready(function(){

  var backgroundAnimate = function(){
    $('.background_animate').each(function(index, object){
      var left = index == 0 ? '-100%' : '0%';
      $(object).animate({
        'left': left
      }, 15000, "linear", function(){
        if(index == 0){
          $(object).css('left', '100%');
          var pop = $(object).detach();
          $('.background-container').append(pop);
          backgroundAnimate();
        }
      });
    });
  }
  backgroundAnimate();

  $('#burger').click(function(e){
  	$(this).toggleClass('is-open');
  	$('#main-nav').toggleClass('is-open');
  });
});
