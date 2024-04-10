import { goToMonth } from "./calendar.js";

const todoList = [
  {
    title: "할일 1",
    time: { year: 2024, month: 4, date: 1, day: 1 },
    repeat: 1,
  },
  {
    title: "할일 2",
    time: { year: 2024, month: 4, date: 22, day: 1 },
    repeat: 0,
  },
  {
    title: "할일 3",
    time: { year: 2024, month: 4, date: 10, day: 2 },
    repeat: 2,
  },
  {
    title: "할일 4",
    time: { year: 2024, month: 4, date: 10, day: 3 },
    repeat: 3,
  },
  {
    title: "할일 5",
    time: { year: 2024, month: 4, date: 27, day: 6 },
    repeat: 0,
  },
];
let todo = {
  title: "할일",
  time: { year: 2024, month: 4, date: 21, day: 0 },
  repeat: 0,
};

// 할 일 만들기로 추가 기능
// 만들기 버튼 누르면 모달 나타남
// 1. 할일 입력 textarea.txt-field
// 2. 기한 입력 button + div#drop-content.content-calendar

// 2-2. 요일 숫자를 받으면 "ㅇ요일" 텍스트 반환 함수
const getDayText = (dayNum) => {
  let dayKorText = "";

  switch (dayNum) {
    case 0:
      dayKorText = "일요일";
      break;
    case 1:
      dayKorText = "월요일";
      break;
    case 2:
      dayKorText = "화요일";
      break;
    case 3:
      dayKorText = "수요일";
      break;
    case 4:
      dayKorText = "목요일";
      break;
    case 5:
      dayKorText = "금요일";
      break;
    case 6:
      dayKorText = "토요일";
      break;
  }
  return dayKorText;
};
// span에서 날짜 구하고 객체 리턴하는 함수
const getDateInfoFromSpan = ($span) => {
  const yearMonthText = $span.dataset.date; // "2024-4"
  const selectedYear = +yearMonthText.split("-")[0]; // 2024
  const selectedMonth = +yearMonthText.split("-")[1]; // 4
  const selectedDate = $span.textContent;
  const selectedDay = $span.parentElement.dataset.dateIdx % 7;

  return {
    year: selectedYear,
    month: selectedMonth,
    date: selectedDate,
    day: selectedDay,
  };
};

// 2-1. 달력에서 날짜 선택 시 버튼 textContent가 날짜로 변경하고 객체 리턴 함수
const getSelectedDate = (e) => {
  // e.target이 span이면 그대로, span 상위요소면 qS로 span 선택
  const $selectedDateSpan =
    (e.target.matches(".date-text") && e.target) ||
    e.target.querySelector(".date-text");

  // 달력에서 선택한 요소의 날짜, 요일 구하기
  const {year, month, date, day} = getDateInfoFromSpan($selectedDateSpan);

  // 2-2. button.time-btn 기한 없음을 선택한 날짜로 변경
  // 2-2-1. getDayText(number) 요일 텍스트로 표시
  const $btnTime = e.target.closest(".select-time").firstElementChild;
  $btnTime.textContent = `${year}. ${month}. ${date}. ${getDayText(day)}`;

  // // 추후 할일 객체에 날짜 추가하기 위해 객체 리턴
  // return {
  //   year: selectedYear,
  //   month: selectedMonth,
  //   date: selectedDate,
  //   day: selectedDay,
  // };
};

// 3. 반복 안함 button + div#drop-content.content-repeat
// 3-1. 버튼에 선택한 반복 옵션 표시,
//      todo 객체에 repeat 옵션값 저장 (추가/수정될 투두리스트)
// 0: 반복 안함, 1: 매일, 2: 매주, 3: 매월
const setReccurrenceOption = (target) => {
  const optionText = target.textContent;
  let $btnRepeat = target.closest(".repeat-btn");
  let repeatOptionNum = 0;

  if (optionText === "매일") {
    repeatOptionNum = 1;
    $btnRepeat.textContent = "매일";
  } else if (optionText === "매주") {
    repeatOptionNum = 2;
    // 가능하면 위 기한 함수 리턴되는 객체에서 day 가져오기
    // $btnRepeat.textContent = `매주 ${dayKorText(day)}`;
    $btnRepeat.textContent = `매주`;
  } else if ((optionText = "매월")) {
    repeatOptionNum = 3;
    $btnRepeat.textContent = `매월`;
    // $btnRepeat.textContent = `매월 ${date}일`;
  }
  todo.repeat = repeatOptionNum;
  console.log(todo.repeat);

  // return repeatOptionNum;
};
// 3-2. 반복옵션에 따라 캘린더 뷰에 렌더하는 함수
// 매개변수로 todoList 가져오기
const renderRepeatToCalendarView = (todoList) => {
  // 메인 캘린더의 date-container 선택해서 date-box 배열로 저장
  const dateBoxArr = Array.from(document.querySelector("#main-content .date-container").children);
  
  // 캘린더 뷰 기준 날짜마다 Date()와 date-box인덱스를 객체로 담은 배열 생성 
  const viewTimeArr = dateBoxArr.map(dateBox => {
    const {year, month, date} = getDateInfoFromSpan(dateBox.firstElementChild);
    const dateBoxId = +dateBox.dataset.dateIdx;
    return { dateObj: new Date(`${year}-${month}-${date}`), dateBoxId };
  });

  // 할일 리스트의 할일 마다 해당하는 날짜에 렌더
  todoList.forEach((todo) => {
    // todo의 날짜 구하기
    const month = (todo.time.month > 1) ? todo.time.month - 1 : 0;
    const todoTime = new Date(todo.time.year, month, todo.time.date, 0, 0, 0, 0);
    
    // todo의 repeat 값 따라 리스트 추가할 날짜만 필터
    const filteredViewTimeArr = viewTimeArr.filter(({dateObj: viewTime}, dateBoxId) => {
      let option = todo.repeat;
      // 매일 반복은 todoTime 이상의 viewTime만 필터링
      if(option === 1) return viewTime.getTime() >= todoTime.getTime();
      // 매주 반복은 todoTime 이상의 viewTime이면서 요일이 같을 때만 필터링
      else if(option === 2) {
        return viewTime.getTime() >= todoTime.getTime() && todo.time.day === dateBoxId % 7;
      }
      // 매월 반복은 todoTime 이상의 viewTime이면서 날짜가 같을 때만 필터링
      else if(option === 3) return viewTime.getTime() >= todoTime && todo.time.date === viewTime.getDate();
      else if(option === 0)return viewTime.getTime() === todoTime.getTime();  
      else return false;
    });
    
    
    // 해당 날짜의 ul 자식요소로 li 태그 추가
    filteredViewTimeArr.forEach( ({dateBoxId}) => {
      // todo 정보를 li 태그에 담기
      const $repeatLi = document.createElement("li");
      $repeatLi.textContent = todo.title;
      $repeatLi.classList.add("cal-list");

      const $ul = dateBoxArr[0].parentElement.querySelector(`div[data-date-Idx="${dateBoxId}"] ul`);
      $ul.appendChild($repeatLi);
      if($ul.previousElementSibling.classList.contains('inactive')) {
        $ul.classList.add('inactive');
      }
      // console.log($ul);
    });
  });

};

// 모달 저장 버튼 클릭 시 추가 완료

//===== 함수 실행 영역 =====//

// 드롭다운 이전 달 버튼 클릭 이벤트 핸들러
document
  .querySelector(".dropdown .go-prev")
  .parentElement.addEventListener("click", () => {
    console.log("이전버튼");
    goToMonth(-1); // 방향을 -1로 설정하여 이전 달로 이동
  });

// 드롭다운 다음 달 버튼 클릭 이벤트 핸들러
document
  .querySelector(".dropdown .go-next")
  .parentElement.addEventListener("click", () => {
    console.log("다음버튼");
    goToMonth(1); // 방향을 1로 설정하여 다음 달로 이동
  });

document
  .querySelector(".dropdown .date-container")
  .addEventListener("click", (e) => {
    console.log("드롭다운 날짜 선택");
    getSelectedDate(e);
  });

// 테스트를 위해 html script에서 가져왔습니다. 병합 시 주의!
const $selectRepeat = document.querySelector(".select-repeat");
const $contentRepeat = document.querySelector(".content-repeat");
$selectRepeat.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  $contentRepeat.classList.add("show");

  // e.target 드롭다운 옵션 조건 판단
  setReccurrenceOption(e.target);
  
});
// 투두리스트 추가 수정 삭제 마다 render 해야 함
renderRepeatToCalendarView(todoList);

export {todoList, renderRepeatToCalendarView};