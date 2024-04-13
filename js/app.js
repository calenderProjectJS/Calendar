import modalEvent from "./modal.js";
import getheaderToday from "./header.js";
import calenderEvent from "./app_cal.js";
import { dashboardEvent } from "./dashboard.js";
import { loadTodoList, saveTodoList } from "./localStorage.js";
import { toDoList } from "./data.js";
import { todoEvent } from "./todo.js";
import select from "./todo1.js";
if (loadTodoList().length === 0) {
	saveTodoList(toDoList);
}

modalEvent();
getheaderToday();
if (window.location.pathname === "/index.html") dashboardEvent();
if (window.location.pathname === "/html/calendar.html") calenderEvent();
if (window.location.pathname === "/html/todo.html") {
	select();
	todoEvent();
}