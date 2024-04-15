const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

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
	$yearMonth = $yearMonth ? $yearMonth.textContent : `${year}년 ${month}월`;
	$title.textContent = `Calendar | ${$yearMonth}`;
}

export { getDateInfoFromText, days, titleMonth };