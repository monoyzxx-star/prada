//상단메인 슬라이딩

$(function() {

  $('#slides').slidesjs({
	width: 1900,
	height: 985,
	navigation: false,
	pagination :true,
	start: 1,
	pagination: {effect: "fade"},
	effect: {fade: {speed: 200}},
	play: {auto: true, effect: "fade"}
  });
  
});

//Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// 푸터의 탑버튼 탑으로 부드럽게 가기
$(function(){	
	$('.gotop').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	;});
});

