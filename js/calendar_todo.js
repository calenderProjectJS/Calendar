import { goToMonth } from "./calendar.js";


// 할 일 만들기로 추가 기능
// 만들기 버튼 누르면 모달 나타남
// 할일 입력 textarea.txt-field
// 기한 입력 button + div#drop-content.content-calendar
// 반복 안함 button + div#drop-content.content-repeat
// 모달 저장 버튼 클릭 시 추가 완료



//===== 함수 실행 영역 =====//


// 이전 달 버튼 클릭 이벤트 핸들러
document.querySelector('.dropdown .go-prev').parentElement.addEventListener('click', () => {
  console.log("이전버튼");
  goToMonth(-1); // 방향을 -1로 설정하여 이전 달로 이동
});

// 다음 달 버튼 클릭 이벤트 핸들러
document.querySelector('.dropdown .go-next').parentElement.addEventListener('click', () => {
  console.log("다음버튼");
  goToMonth(1); // 방향을 1로 설정하여 다음 달로 이동
});