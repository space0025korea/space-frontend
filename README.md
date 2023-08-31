## 프로젝트 개요
인테리어 디자인 업체 329 Design의 홈페이지를 제작했습니다. 프로젝트는 클라이언트용 페이지와 어드민 페이지 두 부분으로 나뉘어져 있습니다. [**클라이언트용 페이지**](https://329design.co.kr)에서는 고객이 인테리어 작품을 확인할 수 있고 상담 문의 글을 작성하여 관리자 메일로 발송할 수 있습니다. 그리고 [**어드민 페이지**](https://board-329design.koyeb.app/admin/auth/login)에서는 관리자가 직접 인테리어 작품 사진와 내용을 입력할 수 있습니다.

## 프로젝트 링크
- 클라이언트용 페이지 : [🏡 329 Design](https://329design.co.kr)
- 어드민 페이지 : [🖥️ Admin](https://board-329design.koyeb.app/admin/auth/login) `🙅‍♂️관계자 외에는 가입 및 로그인이 제한됩니다.`

## 프로젝트 상세 정보
- 프로젝트 기간 : 2023.07 ~ 2023.08
- 참여 인원 : 1명
- 이 프로젝트와 관련한 회고가 궁금하다면 [여기](https://www.notion.so/devjisoo/329-Design-9c026ab522d846ebb1efca5cc5193414?pvs=4#b4f9a373e189431f8a9535f25b0ca4d3)를 참고해주세요.🙇🏻‍♀️

## 사용 기술

**Frontend** 
- HTML, CSS, JavaScript, TypeScript
- Next.js, Axios, GraphQL, Apollo Client, Tailwind CSS, Swiper, Node Mailer, Cloudinary, Netlify, Github Actions, ESLint, Prettier

**Backend** 
- Strapi, GraphQL, PostgresQL, Amazon RDS, Koyeb, Cloudinary, Github Actions

## 주요 기능
**Headless CMS 활용**
* 관리자 페이지와 API의 빠른 구현을 위해 Headless CMS인 strapi를 이용하여 백엔드 개발 

**포트폴리오** [`/portfolio`](https://329design.co.kr/portfolio) 
* 어드민에서 작성한 포트폴리오 내용을 백엔드와의 API 연동을 통해 표시 

**문의 메일 전송** [`/contact`](https://329design.co.kr/contact) 
* 고객이 입력한 문의 사항과 첨부한 이미지 파일을 관리자 이메일로 전송하는 기능 구현 
* 고객 입력값을 기반으로 HTML 이메일 형식 생성 후 Nodemailer 를 활용하여 메일 전송 구현 

**이미지 슬라이더** 
* Swiper.js를 활용하여 포트폴리오 페이지 내 이미지 슬라이드 모달 구현 
* 첫페이지 배경화면 자동 슬라이드 구현 

**반응형 디자인**
- 데스크탑과 모바일 사이즈에서 모두 원활하게 작동하는 반응형 디자인을 구현하여 자연스러운 사용자 경험을 제공

## 실행 화면
**329Design (Client)**
![main-demo](https://github.com/329space/329design-frontend/assets/84840032/ed7cd2db-7de6-430c-aeca-fc229263109a) |![portfolio-demo](https://github.com/329space/329design-frontend/assets/84840032/7172fc6f-009c-4fa6-8265-91be80e143ab)
--- | --- | 

**Admin**
`🙅‍♂️관계자 외에는 가입 및 로그인이 제한됩니다.`
![image](https://github.com/329space/329design-frontend/assets/84840032/14c189ad-9e88-4c6b-bd82-0db1233a4490) |![image](https://github.com/329space/329design-frontend/assets/84840032/8c90093a-bf41-4be4-8093-61f5eacd8f2a) 
--- | --- |
![image](https://github.com/329space/329design-frontend/assets/84840032/f6fd84da-1996-49bf-9e08-8ddde656a99d) |![image](https://github.com/329space/329design-frontend/assets/84840032/6da0cd6b-8a6f-4226-8043-bfc48c5d1216)
