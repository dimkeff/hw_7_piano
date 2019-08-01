let div = document.querySelector('.test');
let item = document.querySelectorAll('.button'),
	container = document.querySelector('.container'),
	audio = document.querySelectorAll('audio'),
	listnerKeyDown = function (event) {
		let keyCode = event.keyCode;
		for (let i = 0; i < item.length; i++) {
			if (keyCode == item[i].id) {
				item[i].classList.add('bigger');
				item[i].lastElementChild.currentTime = 0;
				item[i].lastElementChild.play();
			}
		}
	},
	listnerKeyUp = function (event) {
		let keyCode = event.keyCode;
		for (let i = 0; i < item.length; i++) {
			if (keyCode == item[i].id) {
				item[i].classList.remove('bigger');
			}

		}
	};
document.body.addEventListener('keydown', listnerKeyDown);
document.body.addEventListener('keyup', listnerKeyUp);
