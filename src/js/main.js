// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
	const nav = document.querySelector('nav')

	// тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
	const breakpoint = 1
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)


// Swiper

const swiper = new Swiper('.swiper', {

	// If we need pagination
	

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	

	//   // Responsive breakpoints
	  breakpoints: {
	  // when window width is >= 320px
	  1200: {
	    slidesPerView: 4,
	    spaceBetween: 20
	  },
	  1000: {
	    slidesPerView: 3,
	    spaceBetween: 20
	  },
	  800: {
	    slidesPerView: 2,
	    spaceBetween: 30
	  },
		550: {
	    slidesPerView: 1,
	    spaceBetween: 30
	  },
	  // when window width is >= 480px
	  480: {
	    slidesPerView: 1,
	    spaceBetween: 30
	  },
	}
});


// SWIPER

const swiper1 = new Swiper('.swiper1', {
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

	
    

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },
  }
});

function hasClass(element, className) {
	var rx = new RegExp('(?:^| )' + className + '(?: |$)');
	return rx.test(element.className);
}

var btnContainer = document.getElementById("filter");

if(document.querySelector('.main__body1')){
	// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn-filter");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active-button");
		current[0].className = current[0].className.replace(" active-button", "");
		this.className += " active-button";
	});
}

var btnMarketing = document.getElementById('marketingButton');

var coursesWrapper = document.getElementById('coursesPage');

var coursesCard = document.getElementsByClassName('courses__card1');
var allButton = document.getElementById('allButton');
var managementButton = document.getElementById('managementButton'); 
var hrButton = document.getElementById('hrButton'); 
var deisgnButton = document.getElementById('deisgnButton');
var developButton = document.getElementById('developButton'); 


btnMarketing.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		if (hasClass(coursesWrapper.children[q], "marketing")){
			
		}else{
			
			coursesWrapper.children[q].classList.add("disabled-card");
		}
		
		
	}
})


allButton.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		coursesWrapper.children[q].classList.add("active-card");
	}
})

managementButton.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		if (hasClass(coursesWrapper.children[q], "managment")) {

		} else {
			
			coursesWrapper.children[q].classList.add("disabled-card");
		}


	}
})



hrButton.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		if (hasClass(coursesWrapper.children[q], "hr")) {

		} else {

			coursesWrapper.children[q].classList.add("disabled-card");
		}


	}
})


deisgnButton.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		if (hasClass(coursesWrapper.children[q], "design")) {

		} else {

			coursesWrapper.children[q].classList.add("disabled-card");
		}


	}
})

developButton.addEventListener("click", () => {
	for (var q = 0; q < coursesWrapper.children.length; q++) {
		coursesWrapper.children[q].classList.remove("disabled-card");
		if (hasClass(coursesWrapper.children[q], "develop")) {

		} else {
			
			coursesWrapper.children[q].classList.add("disabled-card");
		}


	}
})
}


let minusButton = document.getElementsByClassName('aboutTalk__img');
let themeText = document.getElementsByClassName('aboutTalk__subtext');
for(let i = 0; i<minusButton.length; i++){
	minusButton[i].addEventListener('click', () => {
		minusButton[i].classList.add('qwe');
		themeText[i].classList.toggle('eventsTheme__none');
	})
}
