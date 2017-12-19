$(function(){
	var cliH=$(window).height();
	var cliW=$(window).width();
	var txtH=cliH-80;
	$('.car_page').css({'height':cliH+'px','width':cliW+'px'});
	$('.box_txt').css('height',txtH+'px');
	//左滑动
	var len=$('.car_box').length;
	var zindex = 0;
    var nowPage = 1;
	$('.car_nav li').eq(0).addClass('active');
	
	//创建li
	function CNavLi(){
		var crLi='';
		crLi+='<li></li>';
		$('.car_nav ul').append(crLi);
	}
	for(var i=0;i<5;i++){
		CNavLi();
		//creBox();
	}
	//创建BOX
	creBox('1');
	$('#slid1 .car_box1').css('transform','translateX(0)');
	function creBox(index){
		var crBox='';
		crBox+='<div class="car_box car_box'+index+' box2">';
		crBox+='		<div class="box_tit">';
		crBox+='			<span class="car_img"><img src="images/car_img1.png" /></span>';
		crBox+='			<span class="car_type">长城</span><span class="car_color">红红色</span>';
		crBox+='		</div>';
		crBox+='		<div class="box_txt" style="height:'+txtH+'px">';
		crBox+='			<div class="tx_c">';
		crBox+='				<dl class="active"></dl>';
		crBox+='				<span class="lock_txt">已解锁</span>';
		crBox+='			</div>';
		crBox+='		</div>';
		crBox+='	</div>';
		$('.car_content').append(crBox);
	
	}
	$('.car_nav ul li:first-child').addClass('active');
	$(document).on("swipeLeft",".car_content",function(){
		console.log(nowPage);
		$(".car_box"+nowPage).prevAll().remove();
		zindex++;
		
		if(nowPage >= 5){
			nowPage=5;
			return false;
		}else{
		    console.log('当前'+nowPage);
			$(".car_box"+nowPage).css({
				"transform":"translateX(-100%)",
			});
			console.log(nowPage);
		onActive($('.car_nav li'),nowPage);
			nowPage++;
			creBox(nowPage);
			$(".car_box"+nowPage).css({
				"z-index":zindex,
				"transform":"translateX(100%)",
			});
			setTimeout(function(){
				$(".car_box"+nowPage).css({
				"z-index":zindex,
				"transform":"translateX(0)", 
				}) 
			},0)
		}
		
	})
	$(document).on("swipeRight",".car_content",function(){
		$(".car_box"+nowPage).prevAll().remove();
		zindex++;
		//console.log(zindex); 
		if(nowPage <= 1){
			nowPage=1; 
			return false;
		}else{
			$(".car_box"+nowPage).css({	
			"transform":"translateX(100%)", 
			 });
			 console.log('当前'+nowPage);
			nowPage--;
			var nowp=nowPage-1;
			creBox(nowPage);
			console.log('当前当前'+nowp);
			onActive($('.car_nav li'),nowp);
			$(".car_box"+nowPage).css({
				"transform":"translateX(-100%)", 
				 
			});
			setTimeout(function(){
				$(".car_box"+nowPage).css({
				"z-index":zindex,
				"transform":"translateX(0)", 
				 
			})},0)
			
			
		}
	})
	
	$(document).on('touchstart','.box_txt',function(){
		//$('.tx_c dl').addClass('active');
	})
	$(document).on('touchend','.box_txt',function(){
		//$('.tx_c dl').removeClass('active');
	})
	function onActive(ali,now){
		ali.removeClass('active');
		ali.eq(now).addClass('active');
	}
	//-----------------------------
	 
	
})