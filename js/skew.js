var skew_right = document.querySelector('.skew-mobile1');
var skew_left = document.querySelector('.skew2');
var skew_desktop = document.querySelector('.skew-desktop');
window.addEventListener('scroll', function(){
    var value = - 22 + window.scrollY/30;
    skew_right.style.transform = "skewY("+ value +"deg)"
});
window.addEventListener('scroll', function(){
    var value = + 22 - window.scrollY/30;
    skew_left.style.transform = "skewY("+ value +"deg)"
});
window.addEventListener('scroll', function(){
    var value = - 9 + window.scrollY/100;
    skew_desktop.style.transform = "skewy("+ value +"deg)"
});