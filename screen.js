$(function(){

  $place = $(".timer");
  $bpm = $(".bpm");
  $bpb = $(".beatsPerBar");

  metronome.bpm = 200;
  $bpm.val(metronome.bpm);
  $bpb.val(metronome.interval);

  $bpm.on("change", function(){
    metronome.bpm = parseInt($(this).val());
    metronome.restart(display);
  });

  $bpb.on("change", function(){
    metronome.interval = $(this).val();
    metronome.restart(display);
  });

  metronome.start(display);

  function display(beat, max){
    $place.html(beat);
  }

});