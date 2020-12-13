'use-strict';
var $ = require('jquery');

$(function(){
  $('.opener').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});

function replaceMentContent () {
  var sidebarRemove = $('#sidebar-action'),
    replaceClass = 'col-sm-12 col-md-12 col-lg-12 pl-0',
    removeClass = 'col-md-8 col-lg-8',
    findContent = $('#replace-class');
  if (document.location.pathname === '/cgi/stats/report') {
    sidebarRemove.remove();
    findContent.addClass(replaceClass).removeClass(removeClass);
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name= '') {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';'),
  checkSidebar = document.getElementById('sidebar'),
  collapseMenu = document.getElementById('collapse-menu'),
  replaceClass = 'col-sm-12 col-md-12 col-lg-12',
  removeClass = 'col-md-8 col-lg-8 pl-0',
  findContent = $('#replace-class');

  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      if (c.substring(nameEQ.length,c.length)) {
        alert('situs ini memilki cookies !');
        findContent.addClass(replaceClass).removeClass(removeClass);
      }
      return c.substring(nameEQ.length,c.length);
    } 
  }
  checkSidebar.style.display = "block";
  collapseMenu.style.display = "none";
  return null;
}

function eraseCookie (name) {  
  document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

function loginVerification () {
  setCookie('c-k3md1kbd', 'login-verification', 7);
}

$('#login').on('click', function () {
  loginVerification();
});

$('#logout').on('click', function () {
  eraseCookie('c-k3md1kbd');
});


$('#collapse-menu').on('click', function () {
  var sdbar = document.getElementById('sidebar'),
    replaceClass = 'col-sm-12 col-md-12 col-lg-12',
    removeClass = 'col-md-8 col-lg-8 pl-0',
    findContent = $('#replace-class');

  if (sdbar.style.display === "block") {
    sdbar.style.display = "none";
    findContent.addClass(replaceClass).removeClass(removeClass);
  } else {
    sdbar.style.display = "block";
    findContent.addClass(removeClass).removeClass(replaceClass);
  }
});



$(document).ready(function() {
  replaceMentContent();
  getCookie('c-k3md1kbd');
});