var preloaded = 0;
var images = [];

function switchback(new_file){
  l1.style.backgroundImage = "url(img/crop"+new_file+")";
  r1.style.backgroundImage = "url(img/slice"+new_file+")";
  l2.style.opacity = 0;
  r2.style.opacity = 0;
}
function switchbg() {
  current+=1;
  if (current > files.length-1)
    current=0;
  var new_file= files[current];

  l2.style.backgroundImage = "url(img/crop"+new_file+")";
  r2.style.backgroundImage = "url(img/slice"+new_file+")";
  l2.style.opacity = 1;
  r2.style.opacity = 1;
  setTimeout(function (){switchback(new_file);}, 1000)
}

function onload() {
  preloaded+=1;
  if (preloaded===files.length*2){
    console.log("loaded");
    setInterval(switchbg, 5000);
  }
}

function preloadImage (i) {
  var img = new Image ();
  img.onload = onload;
  img.src = "img/crop"+files[i];
  images.push(img);
  var img = new Image ();
  img.onload = onload;
  img.src = "img/slice"+files[i];
  images.push(img);
}

for(var i=0;i<files.length;i++){
  preloadImage(i)
}

/* ==========================================================================
   A very simple countdown clock to the minting date.
   ========================================================================== */

// The time of the mint.
const MINT_TIME_UK = new Date(2021, 10, 16, 17, 00, 00, 00);

function time_to_utc(d) {
  utc_date = Date.UTC(d.getUTCFullYear(), 
    d.getUTCMonth(), 
    d.getUTCDate(),
    d.getUTCHours(), 
    d.getUTCMinutes(),
    d.getUTCSeconds());
  return new Date(utc_date);
}

function seconds_between_dates(d1, d2) {
  return Math.floor((d1.getTime() - d2.getTime())/1000);
}

function pad_time(n) {
  return (n < 10 ? "0" + n : n);
}

// Figure out how many seconds from the current time to the mint.
// This takes into account time zones by converting everything to UTC.
var mint_time_utc = time_to_utc(MINT_TIME_UK);
var current_time_utc = time_to_utc(new Date());
var target_seconds = seconds_between_dates(mint_time_utc, current_time_utc);
function mint_countdown() {

  var days_left = Math.floor(target_seconds/24/60/60);
  var hours = Math.floor((target_seconds) - (days_left*86400));
  var hours_left = Math.floor(hours/3600);
  var minutes_left = Math.floor((hours - (hours_left*3600))/60);
  var seconds_left = target_seconds % 60;

  document.getElementById('cd-days').innerHTML = pad_time(days_left);
  document.getElementById('cd-hours').innerHTML = pad_time(hours_left);
  document.getElementById('cd-minutes').innerHTML = pad_time(minutes_left);
  document.getElementById('cd-seconds').innerHTML = pad_time(seconds_left);

  
  if (target_seconds <= 0) {
    clearInterval(mint_countdown_timer);
    document.getElementById('countdown').innerHTML = "Mint has begun! <br/> Please visit URL";
  } else {
    target_seconds--;
  }
}

var mint_countdown_timer = setInterval('mint_countdown()', 1000);

