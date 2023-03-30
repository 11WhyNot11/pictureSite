import { postData } from "../services/requests";

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		  inputs = document.querySelectorAll('input'),
		  upload = document.querySelectorAll('[name="upload"]');
	

	const message = {
		loading: "Загрузка...",
		success: "Спасибо, мы скоро с вами свяжемся!",
		failure: "Что-то пошло не так...",
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};

	const path = {
		designer: 'assets/server.php',
		question :'assets/question.php'
	};



	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
	};

	upload.forEach(item => {
		item.addEventListener('input', () => {
			let dots;
			const arr = item.files[0].name.split('.');
			arr[0].length > 7 ? dots = '...' : dots = '.'; 
			const name = arr[0].substr(0, 7) + dots + arr[1];
			item.previousElementSibling.textContent = name;
		});
	});
	

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			item.parentNode.style.height = getComputedStyle(item.parentNode).height;

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			item.classList.add('animated', 'fadeOut');
			setTimeout(() => {
				item.style.display = 'none';
			}), 2000;

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			textMessage.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(textMessage);

			const formData = new FormData(item);

			

			let api;
			item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

			console.log(api);	

			if(item.classList.contains('calc_form')){
				for(let key in state){
					formData.append(key, state[key]);
				}
			}

			postData(api, formData)
				.then(res => {
					console.log(res);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						item.parentNode.style.removeProperty('height');
						item.style.display = 'block';
						item.classList.remove('fadeOut');
						item.classList.add('fadeInUp');
					},5000);
				});


		});
	});



};

export default forms;