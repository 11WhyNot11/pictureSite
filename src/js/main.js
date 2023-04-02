import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInput from './modules/checkTextInputs';
import showMoreImgs from './modules/loadImages';
import calc from './modules/calculator';
import changeCalcModalState from './modules/changeCalcModalState';
import filter from './modules/filterImgs';
import pictureSize from './modules/pictureSize';
import createAccordion from './modules/accordion';
import createBurger from './modules/burger';
import scroll from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let calcModalState = {};

	

	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms(calcModalState);
	mask('[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
	showMoreImgs('.button-styles', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price');
	changeCalcModalState(calcModalState);
	filter();
	pictureSize('.sizes-block');
	createAccordion('.accordion-heading');
	createBurger('.burger-menu', '.burger');
	scroll('.pageup');
	drop();
	
});