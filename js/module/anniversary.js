import { today } from "../utils.js";
import { saveHolidayList, loadHolidayList } from "../data/localStorage.js";

const xhr = new XMLHttpRequest();
const key = 'jnBzwmpZT2R23RcIULm5xeKznct7Zm4TJKgGluZ2AwLSTnBDypkC57KykTZ599myibI9pU%2FUf2UQ%2FIv1Ke2cYA%3D%3D';

const url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService'; /*URL*/
const get = {
	anniversary: "/getAnniversaryInfo",
	restDel: "/getRestDeInfo",
	holiDel: "/getHoliDeInfo",
	division: "/get24DivisionsInfo",
	sundry: "/getSundryDayInfo",
}

const queryAnni = (key, obj) => {
	const month = obj.month + 1 < 10 ? `0${obj.month + 1}` : obj.month + 1;
	let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(obj.year); /**/
	queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(month); /**/
	return queryParams;
}

const queryRest = (key, obj) => {
	const month = obj.month + 1 < 10 ? `0${obj.month + 1}` : obj.month + 1;
	let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
	queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(obj.year); /**/
	queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(month); /**/
	console.log(obj.month + 1);
	return queryParams;
}

const requestXML = () => {
	for (let index = 0; index < 12; index++) {
		xhr.open('GET', url + get.restDel + queryAnni(key, {year: today.year, month: index}), false);
		xhr.onreadystatechange = function async () {
			const dates = loadHolidayList();
			if (this.readyState === 4 && this.status === 200) {
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(this.responseText, "text/xml");
				const $items = xmlDoc.querySelectorAll("body item");
				for (const iter of [...$items]) {
					dates.push({
						name: iter.getElementsByTagName("dateName")[0].textContent,
						locdate: iter.getElementsByTagName("locdate")[0].textContent,
						isHoliday: iter.getElementsByTagName("isHoliday")[0].textContent,
					});
				}
				saveHolidayList(dates);
			}
		};
		xhr.send('');
	}
}
if (loadHolidayList().length === 0) requestXML();
export default xhr;