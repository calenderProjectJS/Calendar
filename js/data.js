/* 
	const toDoList = [
		{
			id: number,
			title: string,
			time: object,
			repeat: number,
			checked: boolean,
			timeStop: object,
		},
	];

	time = {
		year: number,
		month: number,
		date: number,
		day: number,
	}

	timeStop = {
			isRunning: boolean,
			isPause: boolean,
			startTime: object,
			currentTime: object,
		}

	(start/current)Time = {
		hour: number,
		minute: number,
		sec: number,
		ms: number,
	}

*/

const initTime = {
	hour: 0,
	minute: 0,
	sec: 0,
	ms: 0,
}

const initTimeStop = {
	isRunning: false,
	isPause: false,
	startTime: initTime,
	endTime: initTime
}

const toDoList = [
	{
		id: 1,
		title: "할일 1",
		time: {
			year: 2024,
			month: 4,
			date: 10,
			day: 3
		},
		repeat: 1,
		done: false,
		timeStop: initTimeStop,
	},
	{
		id: 2,
		title: "할일 2",
		time: {
			year: 2024,
			month: 4,
			date: 10,
			day: 3
		},
		repeat: 1,
		done: false,
		timeStop: initTimeStop,
	},
	{
		id: 3,
		title: "할일 3",
		time: {
			year: 2024,
			month: 4,
			date: 10,
			day: 3
		},
		repeat: 1,
		done: false,
		timeStop: initTimeStop,
	},
	{
		id: 4,
		title: "할일 4",
		time: {
			year: 2024,
			month: 4,
			date: 10,
			day: 3
		},
		repeat: 1,
		done: false,
		timeStop: initTimeStop,
	},
];

const REPEAT = {
	ONEDAY: "반복 없음",
	WEEK: "매주 반복",
	MONTH: "매달 반복",
}

export { toDoList, REPEAT, initTimeStop };