import { titleMonth, today } from "../utils.js";
import { loadTodoList } from "../data/localStorage.js";
import { renderCalendarView, renderWeeklyView, goToMonth } from "../module/calendar.js";
import { renderRepeatToCalendarView } from "../module/calendar_todo.js";
import { renderTodoListBox } from "../module/dashboard_render.js";

const dashboardEvent = () => {
	let toDoList = loadTodoList();
	renderCalendarView(today.year, today.month, document.querySelector(".container-1 .calendar"));
	renderWeeklyView();
	renderRepeatToCalendarView(toDoList);
	renderTodoListBox(document.querySelector(`.weekly .date-container [data-date-idx="${today.date}"]`));
	//renderRepeatToCalendarView(toDoList);
	document.querySelector('.date-container').addEventListener('click', e => {
		renderWeeklyView(e);
		renderRepeatToCalendarView(toDoList);
	});
	document.querySelector('.go-prev').parentElement.addEventListener('click', (e) => {
		goToMonth(-1, e.target.closest(".monthly"));
		renderRepeatToCalendarView(toDoList);
		titleMonth();
	});
	document.querySelector('.go-next').parentElement.addEventListener('click', (e) => {
		goToMonth(1, e.target.closest(".monthly"));
		renderRepeatToCalendarView(toDoList);
		titleMonth();
	});
	document.querySelector('.go-today')?.parentElement.addEventListener('click', (e) => {
		renderCalendarView(today.year, today.month, e.target.closest(".monthly"));
		renderRepeatToCalendarView(toDoList);
		titleMonth();
	});
	document.querySelector(".weekly .date-container")?.addEventListener("click", (e) => {
		renderTodoListBox(e.target.closest(".date-box"));
	});
	document.querySelector(".container-1 .todo-list")?.addEventListener("click", (e) => {
		if (!e.target.closest(".list li")) return;
		const $li = e.target.closest(".list li");
		const $span = $li.querySelector("span");
		const $input = $li.querySelector("input");
		if (e.target === $input) {
			$li.classList.toggle("checked");
		} else if (e.target === $li || e.target === $span) {
			$li.classList.toggle("checked");
			$input.checked = !$input.checked;
		}
	});
}

export { dashboardEvent, renderCalendarView, renderTodoListBox };