import { today } from "../utils.js";

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
	let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2019'); /**/
	queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('02'); /**/
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

xhr.open('GET', url + get.restDel + queryRest(key, today));
xhr.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(this.responseText, "text/xml");
		const $items = xmlDoc.querySelector("body item");
		console.log($items);
	}
};

xhr.send('');

export default xhr;