$(function(){
	// // console.log("test")
 //   // #で始まるアンカーをクリックした場合に処理
 //   $('a[href^=#]').click(function() {
 //      // スクロールの速度
 //      var speed = 400; // ミリ秒
 //      // アンカーの値取得
 //      var href= $(this).attr("href");
 //      // 移動先を取得
 //      var target = $(href == "#" || href == "" ? 'html' : href);
 //      // 移動先を数値で取得
 //      var position = target.offset().top;
 //      // スムーススクロール
 //      $('body,html').animate({scrollTop:position}, speed, 'swing');
 //      return false;
 //   });

 // トップタイトル
 $('#more').click(
 	function(){
 		var $more = $('#more')
 		var $moretext = $('.more-txt')
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

 // コラム
 $(function(){
 	$('#tags div').click(function(){
 		// attrの意味が良くわからない　ネットから引用
 		var tags = $(this).attr('id');
 		$('#tags div').removeClass('select');
 		$(this).addClass('select')
 		$('#all div').hide();
 		// (tags == ????)の部分もネットから引用
 		if(tags == 'column'){
 			$('#all .coram-text').fadeIn('slow');
 			$('#column').addClass('blue-icon');
 			$('#show').removeClass('blue-icon');
 			$('#tips').removeClass('blue-icon');
 		}else if(tags == 'tips'){
 		    $('#all .tip-coram').fadeIn('slow');
 		    $('#tips').addClass('blue-icon'); 
 		    $('#show').removeClass('blue-icon');
 		    $('#column').removeClass('blue-icon');
 		}else{
 			$('#all div').fadeIn('slow');
 			$('#show').addClass('blue-icon');
 			$('#column').removeClass('blue-icon');
 			$('#tips').removeClass('blue-icon');
 		}
 	});
 });
// コラム画像
 $('.scale').hover(
 	function(){
 		var $scale = $('.scale')
 		if($scale.hasClass('zoom')){
 			$(this).hover($scale).addClass('zoom');
 		}else{
 			$(this).hover($scale).removeClass('zoom');
 		}

 	});
// コラムの終わり

// 学習する言語
 $('.word-box-hover').hover(
 	function() {
 		$(this).find('.text').fadeIn();
 	},
    function(){
 	    $(this).find('.text').fadeOut();
 	});
 // 学習言語の終わり

// ヘッダーの部分（作成中）
// bxsliderの使い方がいまいち分からない
 $(document).ready(
 	function(){
 		$('.menter-list').bxSlider();
});
 // ヘッダーの終わり
});