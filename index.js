'use strict';

const url = 'https://60376bfd5435040017722533.mockapi.io/formRej';
const form = document.querySelector('.form');

 function upload(data) {
  return  fetch(url, {
    body: data,
    method: 'POST',
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Error: " + res.statusText);
    }
    return res;
  })
};

form.addEventListener('submit', function (event) {
  upload(new FormData(form))
  .then(() => {
    alert('Ваши данные отправлены успешно.')
  })
  .catch((error) => {
    alert(error.message)
  });
  event.preventDefault();
});
