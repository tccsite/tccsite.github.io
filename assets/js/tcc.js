//$(function(){
//    $('.selectpicker').selectpicker();
//});
const switchLanguage = function (lang) {
  console.log(lang);
  window.location.href = lang;
  window.location = lang;
};
/*
$(".nav").change(function () {
  window.location.href = $(".nav").value;
  window.location = $(".nav").val;
  alert($(".nav").val());
});*/
const initPage = function () {
  const queryString = window.location.search;
  console.log(queryString);
};
initPage();
