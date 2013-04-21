//文字輸入
$(function(){
         $("#input-logotext").keyup(function(){
         $("#logo-text").empty();
         $("#logo-text").text($(this).attr("value"));
      });
    });	
	
//顏色改變

//QR code製作	