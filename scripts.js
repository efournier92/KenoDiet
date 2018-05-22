function updateCountdown() {
  var d = new Date();
  var seconds = d.getMinutes() * 60 + d.getSeconds(); // convert time to seconds
  var fiveMin = 60 * 20; // reset every 20 minutes
  var timeleft = fiveMin - seconds % fiveMin;
  var result = parseInt(timeleft / 60) + ':' + (timeleft % 60).pad(2); //format seconds
  document.getElementById('countdown').innerHTML = result;
}

// refresh countdown once per second
setInterval(function () {
  updateCountdown()
}, 1)

// pad single digit integers with leading zero
Number.prototype.pad = function pad(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
