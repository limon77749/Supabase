import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';
flsFunctions.isWebp();
const swiper = new Swiper();
//================================================
let menuArrows = document.querySelectorAll(".menu__arrow");

if (menuArrows.length > 0) {
	for (let index = 0; index < menuArrows.length; index++) {
		const menuArrow = menuArrows[index];

		menuArrow.addEventListener("click", function (e) {
			menuArrow.parentElement.classList.toggle("_active");
		});
	}
};
const bodyDocument = document.body;
const burgerMenu = document.querySelector(".menu__burger");
const entranceHeader = document.querySelector(".header__entrance");
const popup = document.querySelector(".popup");
const bodyPopup = document.querySelector(".popup__body");

if (burgerMenu) {
	const menuBody = document.querySelector(".menu__body");
	const registrationHeader = document.querySelector(".header__registration");

	burgerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		burgerMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		registrationHeader.classList.toggle("_active");
		if (popup) {
			popup.addEventListener("click", function (e) {
				if (e.target === bodyPopup) {
					bodyDocument.classList.add("_lock");
				}
			});
		}
	});
}

if (entranceHeader) {
	entranceHeader.addEventListener("click", function (e) {
		popup.classList.toggle("_open");
		bodyDocument.classList.add("_lock");
	});
}

if (popup) {
	popup.addEventListener("click", function (e) {
		if (e.target === bodyPopup) {
			popup.classList.remove("_open");
			bodyDocument.classList.remove("_lock");
		}
	});
}

const choiceFooter = document.querySelector(".footer-top__choice");

if (choiceFooter) {
	choiceFooter.addEventListener("click", function (e) {
		choiceFooter.classList.toggle("_active");
		bodyDocument.classList.toggle("light");
	});
}