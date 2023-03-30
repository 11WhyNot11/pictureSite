const checkTextInput = (selector) => {
	const textInpts = document.querySelectorAll(selector);
	
	textInpts.forEach(input => {
		input.addEventListener('keypress', (e) => {
			if(e.key.match(/[^а-яё 0-9]/ig)){
				e.preventDefault();
			}
		});

		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
		});
	});

};

export default checkTextInput;

