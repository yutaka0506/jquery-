// ** $(document).ready(function(){ の略
$(function(){
	// console.log("test")
	   // #で始まるアンカーをクリックした場合に処理
	   $('a[href^=#]').click(function() {
	      // スクロールの速度
	      var speed = 400; // ミリ秒
	      // アンカーの値取得
	      var href= $(this).attr("href");
	      // 移動先を取得
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      // 移動先を数値で取得
	      var position = target.offset().top;
	      // スムーススクロール
	      $('body,html').animate({scrollTop:position}, speed, 'swing');
	      return false;
	   });

	 // トップタイトル
	 // ** $('#more').click(function({ の方が一般的
	   $('#more').click(function(){
	 		//  ** add ;
	 		var $more = $('#more');
	 		var $moretext = $('.more-txt');
	 		if($more.hasClass('open')){
	 			$more.removeClass('open');
	 			$moretext.fadeOut();
	 			$(this).find('span').text('もっと詳しく');
	 		}else{
	 			$more.addClass('open');
	 			$moretext.fadeIn();
	 			$(this).find('span').text('閉じる');
	 		}
	 	});
	// トップタイトルの終わり
	
	// メンター
	  // $('.carousel').carousel({
	  // 	interval: 2500})



	 // コラム
	 // ** ここの$(function() { は
	 	$('#tags div').click(function(){
	 		// attrの意味が良くわからない　ネットから引用
	 		// ** var tagId = $(this).attr('id') という変数名の方がわかりやすい
	 		var tagId = $(this).attr('id');
	 		$('#tags div').removeClass('select');
	 		$(this).addClass('select')
	 		$('#all div').hide();
	 		// (tags == ????)の部分もネットから引用
	 		// ** if文使わずに実装できるとかなり量減る
	 		if(tagId == 'column'){
	 			$('#all .coram-text').fadeIn('slow');
	 			// ** 以下の3行は2行で書ける
	 			// ** removeClassする方をクラス使って一括で出来る
	 			$('#column').addClass('blue-icon');
	 			$('#show').removeClass('blue-icon');
	 			$('#tips').removeClass('blue-icon');
	 		}else if(tagId == 'tips'){
	 		    $('#all .tip-coram').fadeIn('slow');
	 		    $('#tips').addClass('blue-icon'); 
	 		    $('#show').removeClass('blue-icon');
	 		    $('#column').removeClass('blue-icon');
	 		}else{
	 			$('#all .allcorams').fadeIn('slow');
	 			$('#show').addClass('blue-icon');
	 			$('#column').removeClass('blue-icon');
	 			$('#tips').removeClass('blue-icon');
	 		}
	 	});

	 	// コラムの始まり

	 	$('.icon').hover(function(){
	 		$(this).addClass('zoom');
	 		$(this).children('.zoom-black').fadeIn(300);
	 	},function(){
	 		$(this).removeClass('zoom');
	 		$(this).children('.zoom-black').fadeOut(300);
	 	});
	 	// コラムの終わり
	 	// 学習する言語
	 	$('.word-box-hover').hover(function() {
	 		$(this).find('.text').fadeIn();
	 	},function(){
	 		$(this).find('.text').fadeOut();
	 	});

 	$('.pricing').click(function(){
 		$('.course-modal-wrapper').fadeIn();
 		$('.modal').fadeIn();
 		// $('#course-select').val('1');
 		// $('#course-select').val('2');
 		// $('#course-select').val('3');
 	});

 	$('#login-1').click(function(){
 		$('#course-select').val('1');
 	});
 	$('#login-2').click(function(){
 		$('#course-select').val('2');
 	});
 	$('#login-3').click(function(){
 		$('#course-select').val('3');
 	});


 	$('.fa').click(function(){
 		$('.course-modal-wrapper').fadeOut();
 		$('.modal').fadeOut();
 	});

	 // 学習言語の終わり
	 // submit部分

	// ヘッダーの部分（作成中）
	// bxsliderの使い方がいまいち分からない
	// ** ここも$(document).ready(function(){が入らない
	 // ヘッダーの終わり
});