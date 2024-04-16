const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const repeats = ["반복 안함", "매일", "매주", "매달"];
const date = new Date();
const today = {
	year: date.getFullYear(),
	month: date.getMonth(),
	date: date.getDate(),
	day: date.getDay(),
}

const getDateInfoFromText = (input) => {
	const time = input.split(".");
	return {
		year: Number(time[0]),
		month: Number(time[1]),
		date: Number(time[2]),
		day: days.indexOf(time[3].trim()),
	}
}

const titleMonth = () => {
	const $title = document.querySelector("head title");
	let $yearMonth = document.querySelector("#main-content .header-calendar .year-month");
	$yearMonth = $yearMonth ? $yearMonth.textContent : `${today.year}년 ${today.month + 1}월`;
	$title.textContent = `Calendar | ${$yearMonth}`;
}

const getheaderToday = () => {
	const $today = document.querySelector(".wrapper .selected-date");
	$today.textContent = `${today.year}년 ${today.month + 1}월 ${today.date}일`;
}

const colors = () => {
	let r = Math.floor((Math.random() * (256 - 170)) + 170);
	let g = Math.floor((Math.random() * (256 - 170)) + 170);
	let b = Math.floor((Math.random() * (256 - 170)) + 170);
	while (Math.abs(r - g) < 10) g = Math.floor((Math.random() * (256 - 170)) + 170);
	while (Math.abs(g - b) < 10) b = Math.floor((Math.random() * (256 - 170)) + 170);
	return `rgb(${r}, ${g}, ${b})`;
}

export { getDateInfoFromText, days, titleMonth, getheaderToday, today, colors, repeats };