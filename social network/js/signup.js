function singUp(e) {
   e.preventDefault();
   console.log('All work');
   let data = {
      "username": document.getElementById('name').value,
      "password": document.getElementById('psw').value,
      "confirm_password": document.getElementById('psw-repeat').value

   };
   console.log('Data :', data);

   fetch(serverURL + 'signup', {
      "headers": {
         "content-type": "application/json",
      },
      "body": JSON.stringify(data),
      "method": 'POST',
   })
      .then(response => {
         if (response.ok) {
            return response.json();
         } else {
            response.status === 400
            throw new Error('Bad Request');
         }
      })
      .then((data) => {
         //obrabativem polucheny otvet

         localStorage.setItem('id', data.id);
         localStorage.setItem('jwt', data.jwt);
         console.log(data);
      })

    .catch(error => { //lovim oshibku 400
      console.error('Registration error:', error);
    displayErrorMessage('An error occurred during registration.');//vyvodim oshibku na stranice registracii
    });
   }

    