// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.jqplot
//= require jquery/jquery.ui.touch-punch
//= require jquery/lol




$(document).ready(function() {

    // Player positioning

    $('#ball').css('left', '329px').css("top", "298px").css("z-index", "1")
    $( '#o1' ).css("left", "348px").css("top", "301px").css("z-index", "2")
    $( '#o2' ).css("left", "116px").css("top", "48px" ).css("z-index", "2")
    $( '#o3' ).css("left", "271px").css("top", "101px").css("z-index", "2")
    $( '#o4' ).css("left", "209px").css("top", "356px").css("z-index", "2")
    $( '#o5' ).css("left", "226px").css("top", "481px").css("z-index", "2")
    $( '#x1' ).css("left", "283px").css("top", "287px").css("z-index", "2")
    $( '#x2' ).css("left", "148px").css("top", "144px").css("z-index", "2")
    $( '#x3' ).css("left", "252px").css("top", "190px").css("z-index", "2")
    $( '#x4' ).css("left", "180px").css("top", "347px").css("z-index", "2")
    $( '#x5' ).css("left", "180px").css("top", "421px").css("z-index", "2")

    // Multi drag objects

    $("#o1").draggable({ alsoDrag: $("#x1"), stop : stopMethods }, { containment: '#court' });
    $("#o2").draggable({ alsoDrag: $("#x2"), stop : stopMethods }, { containment: '#court' });
    $("#o3").draggable({ alsoDrag: $("#x3"), stop : stopMethods }, { containment: '#court' });
    $("#o4").draggable({ alsoDrag: $("#x4"), stop : stopMethods }, { containment: '#court' });
    $("#o5").draggable({ alsoDrag: $("#x5"), stop : stopMethods }, { containment: '#court' });

    
    // Main draggable call

    $('#ball, #x1, #x2, #x3, #x4, #x5, #o1, #o2, #o3, #o4, #o5').draggable({ containment: '#court' }, {
        stop: stopMethods})
}); 
 
function parseGameClock() {
    var gameClock = parseInt($('#minutes option:selected').val()) * 60 + parseInt($('#seconds option:selected').val())
    $('#gc').val(gameClock)
    return gameClock
}

function conditionalSearch() {
    if ( !finalSearch ) {
        finalSearch = z
    }
    return finalSearch.length
}

