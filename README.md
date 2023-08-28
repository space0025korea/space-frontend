## 329Design
[🚀 329design.co.kr](https://329design.co.kr) 

인테리어 업체 329Design의 포트폴리오 전시, 고객 상담용 홈페이지 제작

## 참여

<img src="https://github.com/329space/329design-frontend/assets/84840032/6c0ed80d-5dd5-4858-9b71-fe2fcceb3df3" width="50"> |[이지수](https://github.com/mynameisjisoo)
---|---

## 사용 기술
### Frontend
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![](https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![](https://img.shields.io/badge/apollo%20client-311C87?style=for-the-badge&logo=apollographql&logoColor=white) ![](https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) ![](https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![](https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white) ![](https://img.shields.io/badge/☁️%20cloudinary-3448c5?style=for-the-badge&logoColor=white) ![](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)


### Backend
![](https://img.shields.io/badge/strapi-2F2E8B?style=for-the-badge&logo=strapi&logoColor=white) ![](https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) ![](https://img.shields.io/badge/amazon%20rds-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=white) ![](https://img.shields.io/badge/koyeb-121212?style=for-the-badge&logo=koyeb&logoColor=white) ![](https://img.shields.io/badge/☁️%20cloudinary-3448c5?style=for-the-badge&logoColor=white)

## 기능
### Headless CMS
* 관리자 페이지와 API의 빠른 구현을 위해 Headless CMS인 strapi를 이용하여 백엔드를 구축
### 포트폴리오 [`/portfolio`](https://329design.co.kr/portfolio)
* 관리자가 어드민에서 작성한 포트폴리오 내용을 [백엔드](https://github.com/329space/329design-backend)와의 API 통신을 통해 가져옴

### 문의 메일 전송 [`/contact`](https://329design.co.kr/contact)
* [/pages/api/send.ts](https://github.com/329space/329design-frontend/blob/main/pages/api/send.ts)
* 고객이 입력한 문의 사항과 첨부한 이미지 파일을 관리자 이메일로 전송하는 기능
* 고객 입력값으로 HTML 이메일 양식을 생성하고 nodemailer 를 이용하여 메일 전송 구현


## 실행화면
### Frontend (Client)
![main-demo](https://github.com/329space/329design-frontend/assets/84840032/ed7cd2db-7de6-430c-aeca-fc229263109a) |![portfolio-demo](https://github.com/329space/329design-frontend/assets/84840032/7172fc6f-009c-4fa6-8265-91be80e143ab)
--- | --- | 

### Backend (Admin)
![image](https://github.com/329space/329design-frontend/assets/84840032/14c189ad-9e88-4c6b-bd82-0db1233a4490) |![image](https://github.com/329space/329design-frontend/assets/84840032/8c90093a-bf41-4be4-8093-61f5eacd8f2a)
--- | --- | 
