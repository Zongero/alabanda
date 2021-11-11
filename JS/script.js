
$(document).ready(function() {
	Fancybox.bind("[data-fancybox]", {});

	$('.block__title').click(function(event) {
		if($('._block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__link').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);

	});

	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.services__item').mouseover(function(event){
		$(this).removeClass('no-focus');
		
	});

	$('.services__item').mouseleave(function(){
		$(this).addClass('no-focus');
	});


	$('._slider1').slick({
		dots:true,
		autoplay:true,
		draggable:false,
		autoplaySpeed:3500,
		variableWidth:true,
		variableHeight:true,
		slidesToShow:1,
		pauseOnFocus:false,
		easing:'ease',
		responsive:[{
			breakpoint: 860,
			settings: {
				arrows:false
			}
		}]
	});

	$('._slider2').slick({
		dots:true,
		autoplay:true,
		draggable:false,
		autoplaySpeed:3500,
		variableWidth:true,
		variableHeight:true,
		slidesToShow:1,
		pauseOnFocus:false,
		easing:'ease',
		arrows:false
		});


});

// Прокрутка при скроле
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
const menuHeader = document.querySelector ('.header__menu');
const menuBurger = document.querySelector ('.header__burger');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			 if( window.innerWidth <= 800 ){
				if (menuHeader.classList.contains('active')) {
					document.body.classList.remove('lock');
					menuBurger.classList.remove('active');
					menuHeader.classList.remove('active');
				}
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}