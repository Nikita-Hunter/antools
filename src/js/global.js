document.addEventListener('DOMContentLoaded', function () {
    var itemHover = document.getElementById('openDropDodwn')
    var dropDown = document.getElementById('dropDown')
    itemHover.addEventListener('mouseenter', function (e) {
        dropDown.classList.add('dropdown-show');
    })
    itemHover.addEventListener('mouseleave', function () {
        dropDown.classList.remove('dropdown-show')
    })
})