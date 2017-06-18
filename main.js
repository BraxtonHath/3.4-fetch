// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var customers = document.querySelector('.customers');
  var info = [];


  fetch(url).then(function(response){
    console.log('response', response);
    response.json().then(function(data){
       console.log(data);
      info = data.results;
       console.log('info', info);



      var customer = document.createElement('div');
      customer.className = 'container';
      customers.appendChild(customer);



      for (var i = 0; i < info.length; i++) {
        console.log('testing', info[i]);




        var innerDiv = document.createElement('div');
        innerDiv.className = 'customer info';
        customer.appendChild(innerDiv);
        console.log('testing1', innerDiv);



        var picture = document.createElement('div');
        picture.className = 'pics';
        var pics = '<img class="image" src="' + info[i].picture.large + '">';
        picture.innerHTML = pics;
        innerDiv.appendChild(picture);




        var nameContainer = document.createElement('p');
        nameContainer.className = 'full-name';
        var name = info[i].name.first + ' ' + info[i].name.last;
        nameContainer.textContent = name;
        innerDiv.appendChild(nameContainer);
        console.log('testingNAME', nameContainer);



        var emailContainer = document.createElement('p');
        emailContainer.className = 'email';
        var email = info[i].email;
        emailContainer.textContent = email;
        innerDiv.appendChild(emailContainer);


        var addressContainer = document.createElement('div');
        addressContainer.className = 'full-address';
        innerDiv.appendChild(addressContainer);


        var firstLineA = document.createElement('p');
        firstLineA.className = 'address-line-1';
        var addressLine1 = info[i].location.street;
        firstLineA.textContent = addressLine1;
        addressContainer.appendChild(firstLineA);




        var secondLineA = document.createElement('p');
        secondLineA.className = 'address-line-2';
        var addressLine2 = info[i].location.city + ', ' + info[i].location.state + ' ' + info[i].location.postcode;
        secondLineA.textContent = addressLine2;
        addressContainer.appendChild(secondLineA);



        var phoneContainer = document.createElement('p');
        phoneContainer.className = 'phone';
        var phone = info[i].cell;
        phoneContainer.textContent = phone;
        innerDiv.appendChild(phoneContainer);


      }
    });
  });



})();
