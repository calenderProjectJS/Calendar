import { toDoList, initTimeStop } from "./data.js";

let dateNow = new Date();
const todayYear = dateNow.getFullYear();
const todayMonth = dateNow.getMonth();
const todayDate = dateNow.getDate();
const todayDay = dateNow.getDay();

const insert = (obj) => {
	console.log(obj);
	const time = obj.time !== "기한 없음" ? obj.time : {
		year: todayYear,
		month: todayMonth,
		date: todayDate,
		day: todayDay,
	};
	toDoList.push({
		id: toDoList.length,
		title: obj.title,
		time,
		repeat : obj.repeat,
		done: false,
		timeStop: initTimeStop,
	});
	console.log(toDoList);
}

export { insert };