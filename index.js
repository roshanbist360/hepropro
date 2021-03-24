
// JS DOM for well working of sidebar menu
function openNav(){
document.getElementById('sidenav').style.width="200px";
};
function closeNav(){
document.getElementById('sidenav').style.width="0px";
};
// JQuery
// Below jquery is for changing actived or clicked nav menus background
$(document).on('click', '.nav-menus ul li', function(){
$(this).addClass('active').siblings().removeClass('active')
});


