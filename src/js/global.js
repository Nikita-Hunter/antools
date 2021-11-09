document.addEventListener('DOMContentLoaded', function () {
    var itemHover = document.getElementById('openDropDodwn')
    var dropDown = document.getElementById('dropDown')
    itemHover.addEventListener('mouseenter', function (e) {
        dropDown.classList.add('dropdown-show');
    })
    itemHover.addEventListener('mouseleave', function () {
        dropDown.classList.remove('dropdown-show')
    })
});
// document.onkeydown = function(event) {
//     if (event.ctrlKey && (event.keyCode == 85) || (event.ctrlKey && event.shiftKey && (event.keyCode == 73)) || event.keyCode == 123) {
//         return false
//     }
// };
// document.oncontextmenu = function(){
//     return false
// };
var  colNav = document.getElementById('colNav')
var btnMenu = document.getElementById('btnMenu')
btnMenu.addEventListener('click', function(){
    colNav.classList.toggle('show-nav')
});