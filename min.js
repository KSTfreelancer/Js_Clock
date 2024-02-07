function time(){
  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  if ( hours == '12'){
    var hr = 12;
  }
  else if(hours == '00'){
    var hr = 12;
  }else{
    var hr = hours % 12;

  }

  if (hr < 10){
    hr = '0'+hr;
  }
  if (min < 10){
    min = '0'+min;
  }
  if (sec < 10){
    sec = "0"+sec;
  }


  var ampm = hours < 12? "AM" : "PM";
  var timed = hr +":"+ min +":"+ sec +" "+ampm;
  document.getElementById('clock').innerHTML=timed

}
// time();

setInterval(time,1000);