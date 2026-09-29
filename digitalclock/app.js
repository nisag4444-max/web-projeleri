window.onload = function getTime() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var seconds = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  month = month < 10 ? "0" + (month + 1) : month;

  var day = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  document.getElementById("hour").innerHTML = hour + ":";
  document.getElementById("minute").innerHTML = minute + ":";
  document.getElementById("seconds").innerHTML = seconds;

  var inter = setInterval(getTime, 1000);

  document.getElementById("tarih").innerText = day + "/" + month + "/" + year;
};
