
jQuery(document).ready(function(){
 jQuery('#ssb_close_btn').click(function(){
 jQuery.cookie('mps_cookie_close', '5', { expires: 7, path: '/' });
 jQuery('#ssb_wrap').hide(500);
 jQuery('#ssb_close_btn').css('display','none');
 jQuery('#ssb_bar_opn').fadeIn(700);
 })
 jQuery('#ssb_bar_opn').click(function(){
 	jQuery.removeCookie('mps_cookie_close', { path: '/' });
 	jQuery('#ssb_bar_opn').css('display','none');
 	jQuery('#ssb_wrap').slideDown(500);
 	jQuery('#ssb_close_btn').fadeIn(500);
 })

 if (jQuery.cookie('mps_cookie_close')) {
 	jQuery('#ssb_wrap').hide(0);
 	jQuery('#ssb_close_btn').css('display','none');
 	jQuery('#ssb_bar_opn').fadeIn(70);
 };


});