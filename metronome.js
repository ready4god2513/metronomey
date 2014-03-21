var metronome = {

  bpm: 100,
  interval: "4/4",
  timer: false,
  position: 1,
  beatsPerBar: false,

  start: function(beatChanged){
    this.resetBeat();

    this.timer = setInterval((function(self){
      return function(){
        if(typeof beatChanged == "function"){
          beatChanged.apply(self, [self.position, self.totalBeatsPerBar()]);
        }
        return self.incrementBeat();
      }
    })(this), this.bpmInMilliseconds());
  },

  stop: function(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = false;
      this.beatsPerBar = false;
    }
  },

  restart: function(callback){
    this.stop();
    this.start(callback);
  },

  resetBeat: function(){
    this.position = 1;
    this.totalBeatsPerBar();
    this.stop();
  },

  incrementBeat: function(){
    if(this.position == this.beatsPerBar){
      this.position = 0;
    }

    this.position++;
  },

  totalBeatsPerBar: function(){
    if(!this.beatsPerBar){
      var pat = /(\d)/;
      this.beatsPerBar = pat.exec(this.interval)[0];
    }

    return this.beatsPerBar;
  },

  bpmInMilliseconds: function(){
    return 1000.0 * 60.0 / parseFloat(this.bpm);
  }

};