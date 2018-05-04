function updateCountdown() {
  var d = new Date();
  var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet 00:00 to seconds for easier caculation
  var fiveMin = 60 * 20; //five minutes is 300 seconds!
  var timeleft = fiveMin - seconds % fiveMin; // let's say 01:30, then current seconds is 90, 90%300 = 90, then 300-90 = 210. That's the time left!
  var result = parseInt(timeleft / 60) + ':' + (timeleft % 60).pad(2); //formart seconds into 00:00 
  document.getElementById('countdown').innerHTML = result;
}

setInterval(function () {
  updateCountdown()
}, 1)

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
