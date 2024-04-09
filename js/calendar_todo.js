import { goToMonth } from "./calendar.js";


// 할 일 만들기로 추가 기능
// 만들기 버튼 누르면 모달 나타남
// 할일 입력 textarea.txt-field
// 기한 입력 button + div#drop-content.content-calendar
// 달력에서 날짜 선택 시 버튼 textContent가 날짜로 변경
const getSelectedDate = (e) => {
  
  // e.target이 span이면 그대로, span 상위요소면 qS로 span 선택 
  const $selectedDateBox =  (e.target.matches('.date-text') && e.target) || e.target.querySelector('.date-text');
  
  // 달력 헤더 year-month에서 연월 가져옴
  const yearMonthText = $selectedDateBox.closest('.monthly').querySelector('.year-month').textContent;
  const selectedYear = yearMonthText.slice(0, 4);
  const selectedMonth = yearMonthText.slice(-2, -1);
  
  // 선택한 요소의 날짜, 요일 구하기
  const selectedDate = $selectedDateBox.textContent;
  const selectedDay = $selectedDateBox.dataset.dateIdx % 7;

  console.log(selectedDate);
  console.log(selectedDay);

  // button.time-btn 기한 없음을 선택한 날짜로 변경
  const $btnDate = e.target.closest('.select-time').firstElementChild;
  $btnDate.textContent 
  = `${selectedYear}. ${selectedMonth}. ${selectedDate}`;

  console.log($btnDate.textContent);

  // 추후 할일 객체에 날짜 추가하기 위해 객체 리턴
  return {year: selectedYear, month: selectedMonth, date: selectedDate, day: selectedDay};
  
}

// 반복 안함 button + div#drop-content.content-repeat
// 모달 저장 버튼 클릭 시 추가 완료



//===== 함수 실행 영역 =====//


// 드롭다운 이전 달 버튼 클릭 이벤트 핸들러
document.querySelector('.dropdown .go-prev').parentElement.addEventListener('click', () => {
  console.log("이전버튼");
  goToMonth(-1); // 방향을 -1로 설정하여 이전 달로 이동
});

// 드롭다운 다음 달 버튼 클릭 이벤트 핸들러
document.querySelector('.dropdown .go-next').parentElement.addEventListener('click', () => {
  console.log("다음버튼");
  goToMonth(1); // 방향을 1로 설정하여 다음 달로 이동
});

document.querySelector('.dropdown .date-container').addEventListener('click', e => {
  console.log("드롭다운 날짜 선택");
  getSelectedDate(e);
});