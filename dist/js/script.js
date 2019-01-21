$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    sectionsColor: ['#eee','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)'],
    scrollingSpeed: 300,
    easing: 'swing',
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'left',
      'tooltips': ['TOP', 'ABOUT', 'THEME', 'GALLERY', 'EVENT', 'ACCESS']
    },
    touchSensitivity: 5,
    sectionSelector: '.section',
    afterRender: function(){
      $('#pp-nav').addClass('custom');
    },
  });
});

var windowWidth = $(window).width();
var windowSm = 1024;
if (windowWidth <= windowSm) {
} else {

}
