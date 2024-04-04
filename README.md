# (가제)캘린더 및 일정 관리 웹사이트 프로젝트

## 깃 협업 플로우
  - 작업 A 브랜치와 작업 A를 세부 작업으로 분할한 작업 A-1, A-2, ..., A-n을 작업 A에 병합
  - 작업 B 브랜치와 작업 B를 세부 작업으로 분할한 작업 B-1, B-2, ..., B-n을 작업 B에 병합
  - 작업이 완료된 브랜치 작업 A, B를 최종 브랜치 main에 병합


	![gitworkflow drawio](https://github.com/calenderProjectJS/Calendar/assets/62678380/1e26e88f-9296-4ee5-8998-06caab41e100)

## 작업 등록
  - [프로젝트](https://github.com/orgs/calenderProjectJS/projects/1/views/1)의 Todo에 Add item을 누르고 적절한 작업 이름 설정
    
	![Image](https://github.com/orgs/calenderProjectJS/projects/1/assets/62678380/5a9e2ed6-df12-4962-a591-382523a89186)

  - 어떤 작업인지에 대한 내용을 Description에 작성, assignees에 설정 후 convert to issue

    ![Image](https://github.com/orgs/calenderProjectJS/projects/1/assets/62678380/524585be-1616-4115-aba0-5f7993df41c0)

  - 이슈를 등록할 저장소를 선택

    ![Image](https://github.com/calenderProjectJS/Calendar/assets/62678380/b7f018e9-d980-43ae-a8d8-aedf54e184d0)

  - create branch를 클릭

    ![Image](https://github.com/calenderProjectJS/Calendar/assets/62678380/417d8289-e4c6-4e73-938b-01b7b13c8db3)

  - 작업할 branch source를 확인 후 브랜치 생성 

    ![Image](https://github.com/calenderProjectJS/Calendar/assets/62678380/8cd13cab-0423-4c0a-b2ff-22065e387241)

  - 로컬로 이동 후, bash에서 명령어 입력

    ![Image](https://github.com/calenderProjectJS/Calendar/assets/62678380/38439482-e0ad-49e2-8271-2c5a04f369fa)