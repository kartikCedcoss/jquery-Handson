$(document).ready(function(){
    
      $("[href]").hide();
    
  }); //Use the correct selector to hide all elements with an href attribute..
  
  $("tr:odd").hide(); //Use the correct selector to hide all odd table rows in a table.


$("p").
click
(function(){
  $(this).hide();
});//Use the correct event to hide all <p> elements with a "click".

$("p").
dblclick
(function(){
  $(this).hide();
});//Use the correct event to hide all <p> elements with a "double-click".


$("p").
mouseenter
(function(){
  $(this).hide();
});//When the mouse pointer enters a <p> element, it should be hidden. Use the correct event to do so.

$("input").
keypress
(function(){
  $(this).hide();
});//If you press a keyboard key inside an <input> element, it should be hidden. Use the correct event to do so.

$("p").on(
"click"
, function(){
  $(this).hide();
});//Use the on() method to attach a click event handler to all <p> elements.

$("p").click(function(){
    $(this).
  hide
  ();
  });//Use a jQuery method to hide a <p> element when it is clicked on.

  $("p").click(function(){
    $(this).
  hide
  (
  "slow"
  );
  });//Use a jQuery method to hide a <p> element when it is clicked on.
