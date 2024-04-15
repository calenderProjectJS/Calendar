import { loadTodoList } from "../data/localStorage.js";
import { generateViewTimeArray, filterViewTimeArray, getDateInfoFromSpan } from "./calendar_todo.js";
import { days } from "../utils.js";

const form = (obj) => `
						<input type="checkbox" name="" id="">
						<span>${obj.txt}</span> `;


const makeTag = (txt) => {
	const $new = document.createElement("li");
	$new.innerHTML = form({ txt });
	return $new;
};

/* weekly dateBox -> monthly two dateBox */
const getTwoDatesInMonthly = ($dateBox) => {
	let dateBoxArr = [...document.querySelector("#main-content .date-container").children];
	const $today = dateBoxArr.find(ele => ele.dataset.dateIdx === $dateBox.dataset.dateIdx);
	return [$today, $today.nextElementSibling];
}

/* 선택된 날짜와 다음 날짜의 할일 구하기 */
const getTodoSelectedDateBox = (todoList, $dateBox) => {
	const dateBoxArr = getTwoDatesInMonthly($dateBox);
	const viewTimeArr = generateViewTimeArray(dateBoxArr);
	const obj = {};
	todoList.forEach((todo) => {
		const filteredViewTimeArr = filterViewTimeArray(viewTimeArr, todo);
		filteredViewTimeArr.forEach(e => {
			if (obj[e.dateBoxId]) {
				obj[e.dateBoxId].push(todo.title);
			} else {
				obj[e.dateBoxId] = [todo.title];
			}
		});
	});
	return obj;
};

const renderTodoListTitle = (target, $today) => {
	const $title = target.closest("#main-content").querySelectorAll(".todo-list .title span");
	$title[0].textContent = "오늘";
	$title[1].textContent = "내일";
	target = target.querySelector(".today-circle") ? target.querySelector(".today-circle") : target;
	if (!target.matches(".today-circle")) {
		const twoDates = getTwoDatesInMonthly($today);
		const span = getDateInfoFromSpan(twoDates[0].querySelector("span"));
		const span2 = getDateInfoFromSpan(twoDates[1].querySelector("span"));
		$title[0].textContent = ` ${span.date}일(${days[span.day][0]})`;
		$title[1].textContent = ` ${span2.date}일(${days[span2.day][0]})`;
	}
}

const renderTodoListBox = (target) => {
	let toDoList = loadTodoList();
	const $mainContent = target.closest("#main-content");
	const $todayList = $mainContent.querySelector(".todo-list .today .list");
	const $tomorrowList = $mainContent.querySelector(".todo-list .tomorrow .list");
	const $today = target.closest(".date-box");
	const obj = getTodoSelectedDateBox(toDoList, $today);

	$todayList.innerHTML = "";
	$tomorrowList.innerHTML = "";
	for (const key in obj) {
		if (key === $today.dataset.dateIdx) {
			obj[key].forEach(e => $todayList.appendChild(makeTag(e)));
		} else {
			obj[key].forEach(e => $tomorrowList.appendChild(makeTag(e)));
		}
	}
	renderTodoListTitle(target, $today);
};

export { renderTodoListBox };