var bodyWidth=$(window).width()-90; //设置中间部分尺寸
var bodyHeight=$(window).height()-90;
var size="45px";
$(".content,.cont").css({
		"width":bodyWidth,
		"height":bodyHeight
	});


$(function(){
	setWidthHeight(bodyWidth,bodyHeight);
	burgerContClick()
	reset();
	profilesCont();
});

//页面初始化动画
function reset(){
	/*团队和联系logo落下来，只发生一次*/
	$(".menuTextTeam").css("top","0px");
	$(".menuTextContact").css("bottom","0px");
	//三条杠掉落动画，只发生一次
	$(".burger3").animate({margin:"5px 0 0 -50%"},600);
	$(".burger2").animate({margin:"5px 0 0 -50%"},300);
	$(".burger1").animate({margin:"5px 0 0 -50%"},100);
	//设置导航栏宽度
	$(".topBar").css("border-top","45px solid #FBF2EB");
	$(".leftBar").css("border-left","45px solid #FBF2EB");
	$(".rightBar").css("border-right","45px solid #FBF2EB");
	$(".bottomBar").css("border-bottom","45px solid #FBF2EB");
	/*$(".topBar").addClass(".borTop-45");
	$(".leftBar").addClass(".borLeft-45");
	$(".rightBar").addClass(".borRight-45");
	$(".bottomBar").addClass(".borBottom-45");*/
	setHoverBar("45px");
	textTransform(".profilesSlideOne");
	moreAnimate();
}

//底部more动画 发生一次
function moreAnimate(){
	setTimeout(function(){
		$(".scrollTextCont-btn").css({
		  "opacity":"1",
		  "bottom":"60px"
	  });
		$(".scrollTextCont").css({
			"opacity":"1",
			"bottom":"25px"
		})
	},timeer)
}


//三条错位动画
function burgerAmimate(){
			$(".burgerCont").css("margin-top","28px");
		    $(".burger1").css("margin-left","-70%");
		    $(".burger3").css("margin-left","-30%");
}
//设置页面宽高
function setWidthHeight(bodyWidth,bodyHeight){
	$(".topBar,.bottomBar").css("width",bodyWidth);
	$(".leftBar,.rightBar").css("height",bodyHeight);
	$(".teamCont").css('top',-bodyHeight);
	$(".stackCont").css('left',-bodyWidth);
	$(".workCont").css('left',bodyWidth);
	$(".contactCont").css('top',bodyHeight);
}

//设置导航栏尺寸
function setBarSize(size){
	$(".topBar,.bottomBar").css({
	  "border-left-width":size,
	  "border-right-width":size,
	  "border-left":size+" solid transparent",
	  "border-right":size+" solid transparent"
	  });
	$(".leftBar,.rightBar").css({
	  "border-top-width":size,
	  "border-bottom-width":size,
	  "border-top":size+" solid transparent",
	  "border-bottom":size+" solid transparent"
	  });
	$(".topBar").css({
	  "border-top-width": size,
	  "border-top": size+" solid #FBF2EB"
	  });
	$(".bottomBar").css({
	"border-bottom-width": size,
    "border-bottom": size+" solid #FBF2EB",
	  });
	$(".leftBar").css({
	  "border-left-width": size,
	  "border-left": size+" solid #FBF2EB"
	  });
	$(".rightBar").css({
	  "border-right-width": size,
	  "border-right": size+" solid #FBF2EB"
	  });
}
//三条杠点击事件
function burgerContClick(){
	$(".burgerCont").click(function(){
		if(size=="45px"){
			size="70px";
		    setHoverBar(size);
			setBarSize(size);
			bodyWidth=$(window).width()-140;
		    bodyHeight=$(window).height()-140;
		    setWidthHeight(bodyWidth,bodyHeight);
		    burgerAmimate();
		    setTimeout(function () {
		       $(".menuText p").addClass(".burgerCont-0deg");
		    }, 800);
		    $(".menuTextStack").css("left","10px");
		    $(".menuTextWork").css("right","10px");
		}else if(size=="70px"){
			size="45px"
			setHoverBar(size);
			setBarSize(size);
			bodyWidth=$(window).width()-90;
		    bodyHeight=$(window).height()-90;
		    setWidthHeight(bodyWidth,bodyHeight);
		    $(".burgerCont").css("margin-top","6px");
		    $(".burger").css("margin-left","-50%");
		    $(".menuText p").addClass(".burgerCont-90deg");
		    $(".menuTextStack").css("left","0px");
		    $(".menuTextWork").css("right","0px");
		}
		
	});
}
//设置鼠标经过导航栏事件
function setHoverBar(size){
	console.log(size);
	$(".leftBar").mouseover(function(){
		$(this).css("border-left",size+" solid #48ECB6");
	}).mouseout(function(){
		$(this).css("border-left",size+" solid #FBF2EB")
	});
	$(".topBar").mouseover(function(){
		$(this).css("border-top",size+" solid #48ECB6");
	}).mouseout(function(){
		$(this).css("border-top",size+" solid #FBF2EB")
	});
	$(".rightBar").mouseover(function(){
		$(this).css("border-right",size+" solid #48ECB6");
	}).mouseout(function(){
		$(this).css("border-right",size+" solid #FBF2EB")
	});
	$(".bottomBar").mouseover(function(){
		$(this).css("border-bottom",size+" solid #48ECB6");
	}).mouseout(function(){
		$(this).css("border-bottom",size+" solid #FBF2EB")
	});
}

//设置文字翻转
function textTransform(slides){
	timeer=800;
	setTimeout(function(){
		$(slides).find(".logo").css({
		"opacity":"1",
		"margin":"9% 0 0 6%"
	})
	},500)
	$(slides).find(".line").each(function(){
		var This=$(this);
		setTimeout(function(){
		This.addClass("rotateX-0deg").removeClass("rotateX-90deg");
	},timeer)
		timeer=timeer+200;
	})
	
	var fontWidth=$(slides).find(".fontSizeSmallBox").width();

	setTimeout(function(){
		$(slides).find(".fontSizeSmall").css("width","477px");
	},timeer);
}



//开始滚动事件
function profilesCont(){
	$(".profilesCont").bind('mousewheel', function(event, delta,deltaX,deltaY) { 
				var slideOne = $(".profilesSlideOne");
				var slideTwo = $(".profilesSlideTwo");
				var slidThree = $(".profilesSlideThree");
				//文字logo复位
				function logoTextReset(slide){
					slide.find(".logo").addClass("logo-reset");
					slide.find(".line").each(function(){
						$(this).addClass("rotateX-90deg").removeClass("rotateX-0deg");
					})
				}
				function changeCover(animateEle,cssEle,first,second,third){
					animateEle.animate({margin:"100% 0 0 0"},600);
					cssEle.css("margin","0");
					setTimeout(function(){
							if(third==slidThree){
								textTransform();
							}
							third.addClass("cover3").removeClass("cover1");
							first.addClass("cover1").removeClass("cover2");
							second.addClass("cover2").removeClass("cover3");
						},600);
					setTimeout(function(){
						logoTextReset(animateEle);
						first.addClass("bg-100").removeClass("bg-120");
						third.addClass("bg-120").removeClass("bg-100");
					},00)
				}
				if(delta==-1){
					//向下滚动
					if(slideOne.is(".cover1")){
						changeCover(slideOne,slideTwo,slideTwo,slidThree,slideOne);
					}else if(slideTwo.is(".cover1")){
						changeCover(slideTwo,slidThree,slidThree,slideOne,slideTwo);
					}else if(slidThree.is(".cover1")){
						changeCover(slidThree,slideOne,slideOne,slideTwo,slidThree);
					}
				}
});
}
/*228*/