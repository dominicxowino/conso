// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {
$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});
});


//$(document).ready(function() {
//    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
//        e.preventDefault();
//        $(this).siblings('a.active').removeClass("active");
 //       $(this).addClass("active");
//        var index = $(this).index();
//        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
//        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
//    });
//
//
