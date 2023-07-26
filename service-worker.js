// service-worker.js 파일에 작성
self.addEventListener('push', function (event) {
  const options = {
    body: 'This is the body of the push notification',
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
