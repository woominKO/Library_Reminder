const button = document.querySelector('button');

function Timer() {
  var now1 = new Date().getTime();
  //   var countDownDate = now1 + 3600000 * 3;
  var countDownDate = now1 + 10000;
  console.log(countDownDate);

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('div').innerHTML =
      hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(x);
      document.querySelector('div').innerHTML = 'Times up';
    }
  });
}

button.addEventListener('click', Timer);
