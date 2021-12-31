

		let strength = {
			1: 'Very Weak',
			2: 'Weak',
			3: 'Medium',
			4: 'Strong',
			5: 'Very Strong'
		};

		let strengthValue = {
			'caps': false,
			'length': false,
			'special': false,
			'numbers': false,
			'small': false
		};

		let password = prompt("Enter your password");

		if(password.length >= 8) {
			strengthValue.length = true;
		}

		for(let index=0; index < password.length; index++) {
			let char = password.charCodeAt(index);
			if(!strengthValue.caps && char >= 65 && char <= 90) {
				strengthValue.caps = true;
			} else if(!strengthValue.numbers && char >=48 && char <= 57){
				strengthValue.numbers = true;
			} else if(!strengthValue.small && char >=97 && char <= 122){
				strengthValue.small = true;
			} else if(!strengthValue.numbers && char >=48 && char <= 57){
				strengthValue.numbers = true;
			} else if(!strengthValue.special && (char >=33 && char <= 47) || (char >=58 && char <= 64)) {
				strengthValue.special = true;
			}
		}

		let strengthIndicator = 0;
		for(let metric in strengthValue) {
			if(strengthValue[metric] === true) {
				strengthIndicator++;
			}
		}
		console.log("Your password: " + password + " ( " + strength[strengthIndicator] + " )");
		alert("Your password: " + password + " ( " + strength[strengthIndicator] + " )");