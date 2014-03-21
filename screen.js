$(function(){

  $place = $(".timer");
  $bpm = $(".bpm");
  $bpb = $(".beatsPerBar");
  $sound = new Audio($place.data("beep"));

  $bpm.val(metronome.bpm);
  $bpb.val(metronome.interval);

  $bpm.on("change", function(){
    metronome.bpm = parseInt($(this).val());
    metronome.restart(output);
  });

  $bpb.on("change", function(){
    metronome.interval = $(this).val();
    metronome.restart(output);
  });

  metronome.start(output);

  function output(beat, max){
    $place.html(beat);
    $sound.play();
  }

});