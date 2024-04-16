import { saveTodoList, loadTodoList } from "./localStorage.js";
import { addTodoToList } from "../evnt/todo.js";
import { renderRepeatToCalendarView } from "../module/calendar_todo.js";
import { renderTodoListBox } from "../evnt/dashboard.js";
import * as u from "../utils.js";

const select = () => {
	let todoList = loadTodoList();
	todoList.forEach(element => {
		addTodoToList(element);
	});
}

const insert = (obj) => {
	let todoList = loadTodoList();
	const time = obj.time !== "기한 없음" ? u.getDateInfoFromText(obj.time) : {
		year: u.today.year,
		month: u.today.month + 1,
		date: u.today.date,
		day: u.today.day,
	};
	todoList.push({
		id: todoList.length + 1,
		title: obj.title,
		time,
		repeat : obj.repeat,
		done: false,
		color: u.colors(),
	});
	saveTodoList(todoList);
	renderRepeatToCalendarView(todoList);
	if (window.location.pathname === "/index.html" || window.location.pathname === "/Calendar/") {
		renderTodoListBox(document.querySelector(`.weekly .date-container [data-date-idx="${time.date}"]`));
	}
}

const remove = (id) => {
	let todoList = loadTodoList();
	const idx = todoList.findIndex((list) => list.id === id);
	todoList.splice(idx, 1);
	saveTodoList(todoList);
}

const update = (id, obj)	=> {
	let todoList = loadTodoList();
	const idx = todoList.findIndex((list) => list.id === id);
	todoList[idx].title = obj.txt;
	todoList[idx].time = obj.time;
	todoList[idx].repeat = obj.repeat;
	saveTodoList(todoList);
}

export {select, insert, remove, update};