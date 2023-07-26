const button = document.querySelector('button');
// main.js 또는 index.js 등 스크립트 파일에서 등록
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (err) {
      console.error('Service Worker registration failed:', err);
    });
}

function Timer() {
  var now1 = new Date().getTime();
  // var countDownDate = now1 + 3600000 * 3;
  var countDownDate = now1 + 10000;
  console.log(countDownDate);
  //Notification
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted') {
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
          // new Notification('Times up');
        }
      });
    } else {
      alert('알람을 허용해 주세요');
    }
  });
}

button.addEventListener('click', Timer);
