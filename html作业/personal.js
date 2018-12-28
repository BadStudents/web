function coloregg1() {
  document.getElementById("hotdog")
  if (hotdog.style.display=="none") {
    hotdog.style.display="block";
  }
  else{
 hotdog.style.display="none";
  }
}
function qqcode() {
  document.getElementById("qq").src="qqcode.jpg";
}
function wechatcode(){
  document.getElementById("wechat").src="wechatcode.jpg";
}
function happy(){
  document.getElementById("hotdog").src="happy.gif";
}
function trigger() {
  alert("-.-.     ---     -.     ...     ---     .-..     .");
  
}
$(function(){
  $("#launch").click(function(){
    $("#soccer").animate({paddingTop:'250px',},"slow");
    $("#soccer").animate({paddingTop:'20px',},"slow");
    $("#soccer").animate({paddingTop:'250px',},"slow");
    $("#soccer").animate({paddingTop:'20px',},"slow");
    $("#soccer").animate({paddingTop:'250px',},"slow");
    $("#soccer").animate({paddingTop:'20px',},"slow");
  })
})
console.log("其实与其说这是彩蛋，不如说是一个人物介绍。\n一位大家很少了解的神秘人！——中本聪。\n我十分敬佩的一位大佬，他有很多标签，区块链界的大佬，比特币的创始人。同时他也是如今互联网界中\n有如此大成就但是却不知道身份的神秘人。\n希望有一天他的身份能被揭开。——出于我人类本能的好奇心。");