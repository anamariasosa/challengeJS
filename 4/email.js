var sendBtn = document.getElementById('submit'); 
var emailInput = document.getElementById('emailInput');
var emailModified = document.getElementById('emailModified');

class Email {
	constructor(email) {
		this.email = email
		this.generate();
	}
	generate() {
		this.email = this.email
 					.replace(/\@/g,' [at] ')
					.replace(/\./g,' [dot] ')
		emailModified.innerHTML = this.email
	}
}

var email = () => {
	var emailText = emailInput.value;

	(emailText !== '') ? new Email (emailText) : emailModified.innerHTML = 'campo vacío';
}

sendBtn.addEventListener('click', email)