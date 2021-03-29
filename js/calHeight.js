$(document).ready(function(){
    /*브라우저 높이값 구현*/
    /*선택자 window | width(), height()*/
    /*본인 브라우저의 너비, 높이값 콘솔창 출력*/
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log('브라우저 너비 : ' + browserWidth);
    console.log('브라우저 높이 : ' + browserHeight);
    
    $('#wrap').css({'height':browserHeight});
});