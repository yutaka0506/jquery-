$(function(){
	// console.log("test")
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

 // 学習する言
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




 $('.word-box-hover').hover(
 	function() {
 		$(this).find('.text').fadeIn();
 },
    function(){
 	    $(this).find('.text').fadeOut();
 }


 );

});