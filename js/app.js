import modalEvent from "./evnt/modal.js";
import calenderEvent from "./evnt/app_cal.js";
import { dashboardEvent } from "./evnt/dashboard.js";
import { loadTodoList, saveTodoList } from "./data/localStorage.js";
import { toDoList } from "./data/data.js";
import { todoEvent } from "./evnt/todo.js";
import { select } from "./data/controller.js";
import { titleMonth, getheaderToday } from "./utils.js";
import { xhr, test} from "./module/anniversary.js";

if (loadTodoList().length === 0) {
	saveTodoList(toDoList);
}

modalEvent();
getheaderToday();
titleMonth();
test();
const root = window.location.hostname === "127.0.0.1" ? "" : "/Calendar";
if (window.location.pathname === root + "/" || window.location.pathname === root + "/index.html") dashboardEvent();
if (window.location.pathname === root + "/html/calendar.html") calenderEvent();
if (window.location.pathname === root + "/html/todo.html") {
	select();
	todoEvent();
}