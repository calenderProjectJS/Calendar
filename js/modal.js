const modalEvent = () => {
	/* modal event */
	const openModalButton = document.querySelector('.add-btn-wrapper .add');
	const $modalOverlay = document.querySelector('.modal-overlay');
	const $modalContent = document.querySelector(".modal-content");
	const closeModalButton = $modalContent.querySelector('.modal-close');
	const $saveBtn = $modalContent.querySelector(".save");
	
	openModalButton.addEventListener('click', () => {
		$modalOverlay.classList.remove('hidden');
	});
	
	$saveBtn.addEventListener("click", (e) => {
		e.preventDefault();
		$modalOverlay.classList.add("hidden");
	})
	
	closeModalButton.addEventListener('click', () => {
		$modalOverlay.classList.add('hidden');
	});
	
	/* dropdown calendar event */
	const $selectTime = document.querySelector(".select-time");
	const $contentCalendar = document.querySelector(".content-calendar");
	const outerContent = $modalOverlay;
	
	$selectTime.addEventListener("click", (e) => {
		e.stopPropagation();
		e.preventDefault();
		$contentCalendar.classList.add("show");
	});
	
	/* dropdown repeat event */
	const $selectRepeat = document.querySelector(".select-repeat");
	const $contentRepeat = document.querySelector(".content-repeat");
	$selectRepeat.addEventListener("click", (e) => {
		e.stopPropagation();
		e.preventDefault();
		$contentRepeat.classList.add("show");
	});
	
	outerContent.addEventListener("click", (e) => {
		$contentCalendar.classList.remove("show");
		$contentRepeat.classList.remove("show");
	}, true);
};

export default modalEvent;