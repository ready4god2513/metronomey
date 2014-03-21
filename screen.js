$(function(){

  $place = $(".timer");

  metronome.start(function(beat, max){
    $place.html(beat);
  });

});