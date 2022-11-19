//selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if (emailValue.includes('@')) {
		alert('All Good!')
	} else {
		alert('This does not appear to be a vaild email address. Please try again.')
	}
})


//attaching 'click listeners'

//getting user entered values

//java script validations