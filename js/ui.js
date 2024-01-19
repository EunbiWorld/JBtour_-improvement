$(window).scroll(function() {
  var num = $(window).scrollTop();

  if ($(this).scrollTop() > 0) {
	  $('#header').addClass('on');

  } else if($(this).scrollTop() < 35){
	  $('#header').removeClass('on');
  }
});

function gnb_open(){
  //메뉴 호버시
	$(".gnb > li").on("mouseover", function(){
		$("#header").addClass("active");
		$(this).find(">a").addClass("on");
		$(this).find(".depth_D").slideDown(300);
	}).on("mouseleave", function(){
		$("#header").removeClass("active");
		$(this).find(">a").removeClass("on");
		$(this).find(".depth_D").stop(true, true).slideUp(300);
	});
}

function m_gnb_open(){
	var html = $('html');
	$(".m_btn_gnb, .wrap_bg").on("click",function(){
		if(open){
			open = false;
			$(".left_Box").stop().animate({"left":"0"})
			$(".wrap_bg").fadeIn(350);
			$(".m_btn_gnb").addClass("is-active");

		}else{
			open = true;
			$(".left_Box").stop().animate({"left":"-100%"})
			$(".wrap_bg").stop().fadeOut(350);
			$(".m_btn_gnb").removeClass("is-active");
		}
	});
	$(".wrap_bg").on("click",function(){
		open = true;
		$(".left_Box").stop().animate({"left":"-100%"})
		$(".wrap_bg").stop().fadeOut(350);
	});
	$(".m_gnb > li > a").on("click", function(){
		if($(this).next(".m_depth").css("display") == "none"){
			$(".m_gnb > li > a").removeClass("on");
			$(".m_gnb > li > a").next(".m_depth").stop(true, true).slideUp();
			$(this).addClass("on");
			$(".m_gnb > li").addClass("on");
			$(this).next(".m_depth").slideDown();
		}else{
			$(".m_gnb > li").removeClass("on");
			$(this).removeClass("on");
			$(this).next(".m_depth").stop(true, true).slideUp();
		}
	});
};

function view_select(){
  var open = true;
	$(".right_select").on("click", function(){
		if( open ){
			open = false;
			$(this).find(">p").addClass("on");
			$(this).find(".depth").stop().slideDown(300);
		}else{
			open = true;
			$(".right_select > p").removeClass("on");
			$(".right_select > .depth").slideUp(300);

		}
	});
}

function subLnb(){
	$(".sc_left .on_title").on("click", function(){
		if($(this).next(".left_lnb").css("display") == "none"){
			$(this).next(".left_lnb").slideDown();
			$(".on_title").addClass('on');
		}else{
			$(this).next(".left_lnb").stop(true, true).slideUp();
			$(".on_title").removeClass('on');
		}
	});
}


$(document).ready(function(){
	gnb_open();
	 m_gnb_open();
});
