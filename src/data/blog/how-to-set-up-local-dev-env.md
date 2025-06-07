---
title: SKKU Table 로컬 개발 환경 설정 방법
author: 이균서
pubDatetime: 2025-05-17T05:17:19Z
slug: how-to-set-up-local-dev-env
featured: true
draft: false
tags:
  - Local Development
  - SKKU Table
  - Dev Environment
description: SKKU Table 로컬 개발 환경 설정 방법에 대해 알아 봅시다!
---

## Table of contents

## 프로젝트 클론

```bash
git clone https://github.com/skku-table/skku-table.git
```

![clone-skku-table](/assets/how-to-set-up-local-dev-env/clone.png)

상기 이미지와 명령어를 실행하면 프로젝트를 클론할 수 있습니다.

## 프로젝트 디렉터리 열기

```bash
code skku-table
```

OR

```bash
cursor skku-table
```

## 기존 도커 컨테이너와 볼륨 삭제

![delete-container](/assets/how-to-set-up-local-dev-env/delete-container.png)
![delete-volume](/assets/how-to-set-up-local-dev-env/delete-volume.png)

위 이미지와 같이 기존에 이미 있던 도커 컨테이너와 볼륨을 삭제합니다.

## `.env` 파일 생성

프로젝트 루트 디렉터리에 `.env` 파일을 생성합니다.
다음과 같은 형식으로 작성합니다.

```plaintext
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
MYSQL_DATABASE=skku-table-dev
SPRING_DATASOURCE_URL=jdbc:mysql://databse:3306/skku-table-dev
SPRING_PROFILES_ACTIVE=dev
```

## 백엔드(Mysql+Spring Boot Application) 실행

`docker-compose.yml` 파일을 열어 백엔드를 실행합니다.

![docker-compose-yml](/assets/how-to-set-up-local-dev-env/docker-compose-yml.png)

`database` 서비스를 실행하려면, 위에 있는 `Run Service` 재생 버튼을 클릭합니다.  
그러면, mysql 컨테이너가 실행됩니다.  
mysql을 띄웠으면, 이제 Spring Boot Application을 실행합니다.

`application` 서비스를 실행하려면, 위에 있는 `Run Service` 재생 버튼을 클릭합니다.  
그러면, Spring Boot Application이 실행됩니다.

됐습니다! 이제 백엔드가 실행됐습니다.
이제 Bruno를 열어서, 다음과 같이 local에 띄워진 백엔드 API를 테스트해 볼 수 있습니다. (참고로 밑에 상술한 시드 데이터에 맞게 요청을 날리면 됩니다.)

![test-backend-api-with-bruno](/assets/how-to-set-up-local-dev-env/test-backend-api-with-bruno.png)

## 시드 데이터

이제는 백엔드가 로컬(노트북 혹은 데스크탑)에서 실행이 되면, 기본적으로 데이터베이스에 시드 데이터가 들어가 있습니다.

## 1. 사용자 `user`

(비밀번호: `password123`로 모두 동일)
| ID | 이름 | 이메일 | 권한(Role) |
| --- | ------ | -------------- | ---------- |
| 1 | 김철수 | user1@skku.edu | USER |
| 2 | 이영희 | user2@skku.edu | USER |
| 3 | 박관리 | admin@skku.edu | ADMIN |
| 4 | 정부스 | host1@skku.edu | HOST |
| 5 | 최부스 | host2@skku.edu | HOST |

---

## 2. 축제 `festival`

| ID  | 축제명                  | 기간          | 장소               | 좋아요 |
| --- | ----------------------- | ------------- | ------------------ | ------ |
| 1   | 2024 성균관대 봄 축제   | 5-15 ~ 5-17   | 자연과학캠퍼스     | 150    |
| 2   | 2024 성균관대 가을 축제 | 10-20 ~ 10-22 | 인문사회과학캠퍼스 | 200    |
| 3   | 2024 대동제             | 11-10 ~ 11-12 | 자연과학캠퍼스     | 300    |

---

## 3. 부스 `booth` (축제별)

<details>
<summary><strong>① 2024 성균관대 봄 축제 (ID 1)</strong></summary>

| 부스        | 주최        | 위치        | 설명                 | 좋아요 |
| ----------- | ----------- | ----------- | -------------------- | ------ |
| 떡볶이 부스 | 요리 동아리 | 학생회관 앞 | 매콤달콤 떡볶이 판매 | 50     |
| 포토존      | 사진 동아리 | 중앙광장    | 예쁜 사진 촬영       | 80     |
| 타로 부스   | 심리학과    | 도서관 앞   | 타로 운세            | 30     |
| 버스킹 공연 | 음악 동아리 | 야외 무대   | 다양한 음악 공연     | 100    |
| 솜사탕 부스 | 화학과      | 과학관 앞   | 달콤 솜사탕          | 25     |
| 네일아트    | 미술학과    | 예술관 로비 | 네일아트 서비스      | 35     |

</details>

<details>
<summary><strong>② 2024 성균관대 가을 축제 (ID 2)</strong></summary>

| 부스         | 주최            | 위치          | 설명                | 좋아요 |
| ------------ | --------------- | ------------- | ------------------- | ------ |
| 호떡 부스    | 봉사 동아리     | 정문 앞       | 따뜻한 호떡         | 60     |
| 플리마켓     | 경영학과        | 중앙도서관 앞 | 수공예품 판매       | 90     |
| 미니게임     | 컴퓨터학과      | 공학관 앞     | 미니게임 & 상품     | 40     |
| 커피 부스    | 바리스타 동아리 | 경영관 앞     | 핸드드립 커피       | 45     |
| 페이스페인팅 | 디자인학과      | 미술관 앞     | 페이스페인팅 서비스 | 20     |

</details>

<details>
<summary><strong>③ 2024 대동제 (ID 3)</strong></summary>

| 부스          | 주최            | 위치         | 설명          | 좋아요 |
| ------------- | --------------- | ------------ | ------------- | ------ |
| 주점          | 경제학과        | 학생회관 3층 | 안주 & 음료   | 150    |
| 귀신의 집     | 연극 동아리     | 체육관       | 공포 체험     | 120    |
| 푸드트럭      | 학생회          | 중앙광장     | 세계 음식     | 200    |
| 보드게임 카페 | 보드게임 동아리 | 학생회관 2층 | 보드게임 체험 | 55     |
| 칵테일 부스   | Mixology 동아리 | 중앙광장     | 무알콜 칵테일 | 70     |

</details>

---

## 4. 예약 `reservation` (샘플 6건)

| 예약 ID | 사용자    | 부스        | 축제         | 시간        | 인원 | 결제수단 |
| ------- | --------- | ----------- | ------------ | ----------- | ---- | -------- |
| 1       | 김철수(1) | 떡볶이(1)   | 봄 축제(1)   | 05-15 12:30 | 2    | CARD     |
| 2       | 김철수(1) | 버스킹(4)   | 봄 축제(1)   | 05-15 18:00 | 4    | BANK     |
| 3       | 이영희(2) | 포토존(2)   | 봄 축제(1)   | 05-16 14:00 | 3    | CARD     |
| 4       | 이영희(2) | 호떡(5)     | 가을 축제(2) | 10-20 13:00 | 2    | CARD     |
| 5       | 김철수(1) | 푸드트럭(8) | 대동제(3)    | 11-10 19:00 | 5    | BANK     |
| 6       | 정부스(4) | 타로(3)     | 봄 축제(1)   | 05-16 15:00 | 1    | CARD     |

---

## 5. 좋아요

### (1) 축제 좋아요 `user_festival_like`

| 사용자    | 축제         |
| --------- | ------------ |
| 김철수(1) | 봄 축제(1)   |
| 김철수(1) | 대동제(3)    |
| 이영희(2) | 가을 축제(2) |
| 이영희(2) | 대동제(3)    |
| 정부스(4) | 봄 축제(1)   |
| 최부스(5) | 가을 축제(2) |

### (2) 부스 좋아요 `user_booth_like`

| 사용자    | 부스 ID 목록 |
| --------- | ------------ |
| 김철수(1) | 1, 4, 8      |
| 이영희(2) | 2, 5, 9      |
| 정부스(4) | 3            |
| 최부스(5) | 6, 10        |

## 시드 데이터 (데이터베이스 테이블 구조)

## 1. `user`

| id  | name   | email          | password (bcrypt)                                            | role  | created_at | updated_at |
| --- | ------ | -------------- | ------------------------------------------------------------ | ----- | ---------- | ---------- |
| 1   | 김철수 | user1@skku.edu | $2a$10$fihxE1rSIi64vEXARNikYu7vvrFt6OS.PyLqMp4B31bJzQM8Z4chO | USER  | NOW()      | NOW()      |
| 2   | 이영희 | user2@skku.edu | $2a$10$fihxE1rSIi64vEXARNikYu7vvrFt6OS.PyLqMp4B31bJzQM8Z4chO | USER  | NOW()      | NOW()      |
| 3   | 박관리 | admin@skku.edu | $2a$10$fihxE1rSIi64vEXARNikYu7vvrFt6OS.PyLqMp4B31bJzQM8Z4chO | ADMIN | NOW()      | NOW()      |
| 4   | 정부스 | host1@skku.edu | $2a$10$fihxE1rSIi64vEXARNikYu7vvrFt6OS.PyLqMp4B31bJzQM8Z4chO | HOST  | NOW()      | NOW()      |
| 5   | 최부스 | host2@skku.edu | $2a$10$fihxE1rSIi64vEXARNikYu7vvrFt6OS.PyLqMp4B31bJzQM8Z4chO | HOST  | NOW()      | NOW()      |

---

## 2. `festival`

| id  | name                    | description                                         | location           | start_date | end_date   | poster_image_url                               | map_image_url                               | like_count | created_at | updated_at |
| --- | ----------------------- | --------------------------------------------------- | ------------------ | ---------- | ---------- | ---------------------------------------------- | ------------------------------------------- | ---------- | ---------- | ---------- |
| 1   | 2024 성균관대 봄 축제   | 성균관대학교 봄 축제입니다! 다양한 공연과 부스 준비 | 자연과학캠퍼스     | 2024-05-15 | 2024-05-17 | https://example.com/spring-festival-poster.jpg | https://example.com/spring-festival-map.jpg | 150        | NOW()      | NOW()      |
| 2   | 2024 성균관대 가을 축제 | 풍성한 먹거리와 볼거리가 가득한 가을 축제           | 인문사회과학캠퍼스 | 2024-10-20 | 2024-10-22 | https://example.com/fall-festival-poster.jpg   | https://example.com/fall-festival-map.jpg   | 200        | NOW()      | NOW()      |
| 3   | 2024 대동제             | 학생회 주최 대동제                                  | 자연과학캠퍼스     | 2024-11-10 | 2024-11-12 | https://example.com/daedong-poster.jpg         | https://example.com/daedong-map.jpg         | 300        | NOW()      | NOW()      |

---

## 3. `booth` (일부 예시)

| id  | festival_id | name        | host        | location    | description            | start_date_time     | end_date_time       | like_count | poster_image_url                          | event_image_url                          | created_at | updated_at |
| --- | ----------- | ----------- | ----------- | ----------- | ---------------------- | ------------------- | ------------------- | ---------- | ----------------------------------------- | ---------------------------------------- | ---------- | ---------- |
| 1   | 1           | 떡볶이 부스 | 요리 동아리 | 학생회관 앞 | 매콤달콤한 떡볶이 판매 | 2024-05-15 11:00:00 | 2024-05-15 18:00:00 | 50         | https://example.com/tteokbokki-poster.jpg | https://example.com/tteokbokki-event.jpg | NOW()      | NOW()      |
| 2   | 1           | 포토존      | 사진 동아리 | 중앙광장    | 예쁜 사진 촬영         | 2024-05-15 10:00:00 | 2024-05-17 20:00:00 | 80         | https://example.com/photo-poster.jpg      | https://example.com/photo-event.jpg      | NOW()      | NOW()      |
| …   | …           | …           | …           | …           | …                      | …                   | …                   | …          | …                                         | …                                        | …          | …          |

_(나머지 부스·페이스페인팅·푸드트럭 등 18개 행은 생략)_

---

## 4. `reservation`

| id  | user_id | booth_id | festival_id | reservation_time    | number_of_people | payment_method | created_at | updated_at |
| --- | ------- | -------- | ----------- | ------------------- | ---------------- | -------------- | ---------- | ---------- |
| 1   | 1       | 1        | 1           | 2024-05-15 12:30:00 | 2                | CARD           | NOW()      | NOW()      |
| 2   | 1       | 4        | 1           | 2024-05-15 18:00:00 | 4                | BANK           | NOW()      | NOW()      |
| …   | …       | …        | …           | …                   | …                | …              | …          | …          |

---

## 5. `user_festival_like`

| user_id | festival_id | created_at |
| ------- | ----------- | ---------- |
| 1       | 1           | NOW()      |
| 1       | 3           | NOW()      |
| 2       | 2           | NOW()      |
| 2       | 3           | NOW()      |
| 4       | 1           | NOW()      |
| 5       | 2           | NOW()      |

---

## 6. `user_booth_like`

| user_id | booth_id | created_at |
| ------- | -------- | ---------- |
| 1       | 1        | NOW()      |
| 1       | 4        | NOW()      |
| 1       | 8        | NOW()      |
| 2       | 2        | NOW()      |
| 2       | 5        | NOW()      |
| 2       | 9        | NOW()      |
| 4       | 3        | NOW()      |
| 5       | 6        | NOW()      |
| 5       | 10       | NOW()      |

## 프론트엔드(React) 실행

평소와 똑같이 `pnpm run dev`를 실행하면 됩니다.  
대신 프론트엔드 디렉터리로 이동해야 합니다.

```bash
cd frontend
pnpm run dev
```
