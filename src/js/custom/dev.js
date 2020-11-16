var $ = require('jquery');
require('../../../node_modules/jssocials/dist/jssocials.min.js');

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

  if (document.location.pathname === '/cgi/stats/report') {
    sidebarRemove.remove();
    findContent.addClass(replaceClass).removeClass(removeClass);
  }
});

var configIcon = {
  facebook: {
    showCount: false,
    showLabel: true,
    logo: "fa fa-facebook",
    share: "facebook",
    shareIn: "popup",
    shares: [
      {
        share: "facebook", 
        label: "Share On Facebook",
        css: "share-of-label"
      },
    ]
  },
  allVariant : {
    shares: [
      { 
        share: "facebook", 
      }, 
      "twitter",
      { 
        share: "email", 
        logo: "fa fa-envelope"
      },
      "line",
      "whatsapp"
    ],
    shareIn: "popup",
    showCount: false,
    showLabel: false,
    mediaQuery: {
      showLabel: function(screenWidth) {
        return (screenWidth < 1280);
      },
    }
  }
}

// $('#share-social-fb').jsSocials(configIcon.facebook);
// $('#share-social-all').jsSocials(
//   configIcon.allVariant,
//   configIcon.allVariant.mediaQuery
// );