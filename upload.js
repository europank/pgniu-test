'use strict';

var url = 'https://60376bfd5435040017722533.mockapi.io/formRej';
var form = document.querySelector('.form');

var onError = function (message) {
  console.error(message);
};

var upload = function (data, onSuccess) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.addEventListener('load', function () {
    var error;
    switch (xhr.status) {
      case 201:
        onSuccess(xhr.response);
        break;
      case 404:
        error = 'Ничего не найдено';
        break;
        
        default:
          error = 'djsjdksdk';
    }
    if (error) {
      onError(error);
    };
  });
  
  xhr.open('POST', url);
  xhr.send(data);
};

form.addEventListener('submit', function (evt) {
  upload(new FormData(form), function (response) {
    alert('удачно')
  });
  evt.preventDefault();
});











































/*var onSuccess = function (data) {
  var eee = data;
  console.log(eee);
};

var onError = function (message) {
  console.error(message);
};

var xhr = new XMLHttpRequest();
var url = 'https://60376bfd5435040017722533.mockapi.io/formRej';

xhr.responseType = 'json';

xhr.addEventListener('load', function() {
  var error;
  switch (xhr.status) {
    case 200:
      onSuccess(xhr.response);
      break;
    case 404:
      error = 'Ничего не найдено';
      break;
      
      default:
        error = 'djsjdksdk';
  }
  if (error) {
    onError(error);
  };
});
xhr.open ('POST', url)
xhr.send();*/










































/* var url = 'https://60376bfd5435040017722533.mockapi.io/formRej';

  var onSuccess = function (data) {
      alert(data);
    };

  var onError = function (message) {
      alert(message);
    };

  var send = function (onSuccess, onError) {
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';
    
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
    
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
    
      xhr.open('POST',url);
      xhr.send();
    };

  var submit = document.getElementById('submit');

  submit.addEventListener('click', send(onSuccess, onError));*/
