
//$(function(){
//    $('.selectpicker').selectpicker();
//});
const switchLanguage = function(lang) {
    alert(lang);
    window.location.href = lang;
    window.location = lang;
}
$(".nav").change(function() {
    window.location.href = $(".nav").value;
    window.location = $(".nav").val;
    alert($(".nav").val());
  });
  