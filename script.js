//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function(){
	const usernameInput = document.getElementById('username');
	const passwordinput = document.getElementById('password');
	const rememberMeCheckbox = document.getElementById('rememberMe');
	const submitButton = document.getElementById('submit');
	const existingButton = document.getElementById('existing');

	submitButton.addEventListener('click', function(event) {
		event.preventDefault();

		const username = usernameInput.value;
		const password = passwordinput.value;
		const rememberMe = rememberMeCheckbox.checked;

		if (rememberMe) {
			localStorage.setItem('username', username);
			localStorage.setItem('password', password)
		} else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}

		alert('Logged in as ' + username);
	});

	if (localStorage.getItem('username') && localStorage.getItem('password')) {
		const existingButton = document.createElement('button');
		existingButton.setAttribute('id', 'existing');
		existingButton.textContent = 'Login as existing user';
		existingButton.addEventListener('click ,' function() {
			const username = localStorage.getItem('username');
			alert('Logged in as ' + username);
		});
		document.bodyappendChild(existingButton);
	}
});