//========================체크 여부에 따라 수정, 삭제 이벤트======================
function checkCheckbox() {
  // 모든 체크박스 요소 가져옴
  const $checkboxes = document.querySelectorAll(".inputEl");

  // 체크된 체크박스 카운팅용 변수

  //=======================두개이상 체크시 수정버튼 비활성화=====================

  // 체크박스가 하나라도 체크됐는지 확인
  let isChecked = false;
  $checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  // 위 조건이 해당할 경우.
  // 수정 및 삭제 버튼에 클래스를 추가해서 스타일 변경
  const $fixBtns = document.querySelectorAll(".btn_box");
  $fixBtns.forEach(function (fixBtn) {
    if (isChecked) {
      fixBtn.classList.remove("color");
      // 수정 및 삭제 버튼 클릭 이벤트 핸들러 추가
      if (fixBtn.textContent === "삭제") {
        fixBtn.addEventListener("click", handleDeleteButtonClick);
      } else if (fixBtn.textContent === "수정") {
        fixBtn.addEventListener("click", handleFixButtonClick);
      }
    } else {
      fixBtn.classList.add("color");
      // 수정 및 삭제 버튼 클릭 이벤트 핸들러 삭제
      fixBtn.removeEventListener("click", handleDeleteButtonClick);
      fixBtn.removeEventListener("click", handleFixButtonClick);
    }
  });
}
// 이벤트 핸들러
window.onload = function () {
  // 페이지가 로드될 때마다 체크박스 상태 확인
  checkCheckbox();

  const $checkboxes = document.querySelectorAll(".inputEl");
  $checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", checkCheckbox);
  });
};

// =================================수정 기능

function handleFixButtonClick(event) {
  // 수정 버튼 클릭시에 이벤트 작성
  const $checkboxes = document.querySelectorAll(".inputEl:checked");
  const checkedCount = $checkboxes.length;

  // 체크된 체크박스가 2개 이상인 경우 alert 출력
  if (checkedCount !== 1) {
    alert("한 가지만 선택해주세요.");
    return;
  }
  $modalOverlay.classList.remove("hidden");
  console.log("수정버튼클릭");

  // 체크된 체크박스가 하나인 경우 해당 항목의 내용을 가져와 모달 내용에 채움
  const todoText = $checkboxes[0]
    .closest(".todoLi")
    .querySelector(".todo_text").textContent;
  const $textarea = document.querySelector(".txt-field");
  $textarea.value = todoText;

  // 모달을 띄움
  $modalOverlay.classList.remove("hidden");
}
//===================================
const $fixBtns = document.querySelectorAll(".btn_box");
$fixBtns.forEach(function (fixBtn) {
  if (isChecked) {
    fixBtn.classList.remove("color");
    // 수정 및 삭제 버튼 클릭 이벤트 핸들러 추가
    if (fixBtn.textContent === "삭제") {
      fixBtn.addEventListener("click", handleDeleteButtonClick);
    } else if (fixBtn.textContent === "수정") {
      fixBtn.addEventListener("click", handleFixButtonClick); // 수정 버튼에 이벤트 핸들러 추가
    }
  } else {
    fixBtn.classList.add("color");
    // 수정 및 삭제 버튼 클릭 이벤트 핸들러 삭제
    fixBtn.removeEventListener("click", handleDeleteButtonClick);
    fixBtn.removeEventListener("click", handleFixButtonClick);
  }
});

// ==================================삭제 기능
function handleDeleteButtonClick(event) {
  // 삭제 버튼 클릭시에 이벤트 작성

  // 체크된 체크박스 가져옴
  const $checkboxes = document.querySelectorAll(".inputEl:checked");

  const userConfirm = window.confirm("정말 삭제하시겠습니까?");
  // 각 체크된 요소에 대해 부모 li 요소를 찾아 삭제
  $checkboxes.forEach(function (checkbox) {
    if (userConfirm) {
      const listItem = checkbox.closest(".todoLi");
      listItem.parentNode.removeChild(listItem);
    }
  });

  // 체크박스 상태 업데이트
  checkCheckbox();

  console.log("삭제버튼클릭");
}
