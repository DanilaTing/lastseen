// Set the date we're counting down to
var countDownDate = new Date("June 10, 2018 19:00:00 GMT+3").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  console.log("distance = " + distance);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days);

  if (days < 10) {
    days = "0" + days.toString()
  }

  if (hours < 10) {
    hours = "0" + hours.toString()
  }

  if (minutes < 10) {
    minutes = "0" + minutes.toString()
  }

  if (seconds < 10) {
    seconds = "0" + seconds.toString()
  }

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds + "";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $(".soon").css('display', 'none')
    $(".soon").after("<div class='buyWrapper'> <div class='kedBuy'> <figure class='ked'></figure> <a href='buy.html' class='BUY'>BUY</a> </div> </div>");
  }
}, 1000);
