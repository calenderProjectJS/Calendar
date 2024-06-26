# 아바라 캘린더 프로젝트

## 1. 프로젝트 개요
### 1-1 소개
  - 캘린더에 할일을 표기하고 날짜의 할일을 조회할 수 있는 사이트
  - 팀명 및 프로젝트명 : 바쁘조, 아바라 프로젝트
  - 주제 선정 기준
	  - 사용자와 상호작용하는 사이트
    - 작업 분할이 쉬워서 협업이 용이한 주제
    - 지속적인 업데이트 가능 여부
  - 팀원 소개 및 역할
    - 송나래 : 월간 달력 기능 구현
    - 이동혁 : 할일 생성 수정 조회 삭제
    - 송호성 : 협업 전략 구성 및 작업 관리
  
### 1-2 작업 환경
  - Web API : HTML, CSS, JS
  - github

## 2. 프로젝트 설명
### 2-1 수행 전략
  - 작업을 시각화, 효율적인 작업 관리 목적 -> 깃헙 칸반보드
  - 주요 작업 분석 후, 작업의 특성에 맞는 협업 전략 구성

    ![gitworkflow drawio](https://github.com/calenderProjectJS/Calendar/assets/62678380/1e26e88f-9296-4ee5-8998-06caab41e100)
  - 작업 A 브랜치와 작업 A를 세부 작업으로 분할한 작업 A-1, A-2, ..., A-n을 작업 A에 병합
  - 작업 B 브랜치와 작업 B를 세부 작업으로 분할한 작업 B-1, B-2, ..., B-n을 작업 B에 병합
  - 작업이 완료된 브랜치 작업 A, B를 최종 브랜치 main에 병합
  
### 2-2 주요 기능
  - 월간, 주간 날짜 표시 및 할일 표시
  - 할 일 조회, 추가, 수정, 삭제

## 3. 향후 업데이트
  - 요청에 적절한 응답이 가능한 서버
  - 유저별 데이터로 관리되는 사이트

## 4. 참조 자료
  - MDN Date : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date 
  - MDN LocalStorage : https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage