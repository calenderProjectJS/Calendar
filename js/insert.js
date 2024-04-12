import { toDoList, initTimeStop, REPEAT } from "./data.js";
import { renderRepeatToCalendarView, renderTodoListBox } from "./dashboard.js";
import * as util from "./date_utils.js"
import { saveTodoList } from "./localStorage.js";


let dateNow = new Date();
const todayYear = dateNow.getFullYear();
const todayMonth = dateNow.getMonth() + 1;
const todayDate = dateNow.getDate();
const todayDay = dateNow.getDay();

const insert = (obj) => {
	const time = obj.time !== "기한 없음" ? util.getDateInfoFromText(obj.time) : {
		year: todayYear,
		month: todayMonth,
		date: todayDate,
		day: todayDay,
	};
	toDoList.push({
		id: toDoList.length + 1,
		title: obj.title,
		time,
		repeat : REPEAT.NO,
		done: false,
		timeStop: initTimeStop,
	});
	saveTodoList(toDoList);
	renderRepeatToCalendarView(toDoList);
	if (window.location.pathname === "/index.html") {
		renderTodoListBox(document.querySelector(".weekly .date-container .date-box .today-circle"));

	}
}

export { insert };