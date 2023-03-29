const modals = () => {
	let btnPressed;

	function bindModal(triggerSelector, modalSelector, closeSelector, triggerDestroyed = false){
		const trigger = document.querySelectorAll(triggerSelector),
			  modal = document.querySelector(modalSelector),
			  close = document.querySelector(closeSelector),
			  windows = document.querySelectorAll('[data-modal]'),
			  gift = document.querySelector('.fixed-gift'),
			  scroll = calcScroll();

		

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if(e.target){
					e.preventDefault();
				}

				btnPressed = true;

				windows.forEach(item => {
					item.style.display = 'none';
					item.classList.add('animated', 'fadeIn');
				});

				if(triggerDestroyed){
					item.remove();
				}

				gift.style.marginRight = `${scroll}px`;

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				// document.body.classList.add('modal-open')
				document.body.style.marginRight = `${scroll}px`;

			});
		});



		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;

			gift.style.marginRight = `0px`;
			// document.body.classList.remove('modal-open');

			windows.forEach(item => {
				item.style.display = "none";
			});
		});

		modal.addEventListener('click' , (e) => {
			if(e.target === modal){
				modal.style.display = "none";
				document.body.style.overflow = "";
				document.body.style.marginRight = `0px`;

				gift.style.marginRight = `0px`;
				// document.body.classList.remove('modal-open');

				windows.forEach(item => {
					item.style.display = "none";
				});
			}
		});
	}

	function showModalByTime(selector, time){	
		setTimeout(() => {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if(getComputedStyle(item).display !== 'none'){
					display = 'block'; //приймає правдиве значення
				}
			});
			if(!display){
				document.querySelector(selector).style.display = "block";
				document.body.style.overflow = 'hidden';
				let scroll = calcScroll();
				document.body.style.marginRight = `${scroll}px`;

			}
		},time);
	}

	function showModalByScroll(selector){
		window.addEventListener('scroll', () => {
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // це для підтримки в 
			//старих браузерах, які мають частичну совмістимость 
			if(!btnPressed){
				if(window.pageYOffset + document.documentElement.clientHeight >= scrollHeight - 1){
					document.querySelector(selector).click(); // вручну клікаємо
					//window.removeEventListener('scroll', showModalByScroll);
				}
			}
		});
	}



	function calcScroll(){
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}


	// showModalByTime('.popup-consultation', 10000);
	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation','.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true); 
	showModalByScroll('.fixed-gift'); 
};

export default modals;