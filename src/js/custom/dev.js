var $ = require('jquery');
$(function(){
  $('.opener').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});

$(document).ready(function() {
  let sidebarRemove = $('#sidebar-action');
  let replaceClass = 'col-sm-12 col-md-12 col-lg-12 pl-0';
  let removeClass = 'col-md-8 col-lg-8';
  let findContent = $('#replace-class');
  console.log(document.location.pathname);
  console.log(replaceClass);

  if (document.location.pathname === '/cgi/stats/report') {
    sidebarRemove.remove();
    findContent.addClass(replaceClass).removeClass(removeClass);
  }
});
