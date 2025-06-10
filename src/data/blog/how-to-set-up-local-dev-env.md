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

## 프론트엔드의 로컬 개발 환경 설정

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

시드 데이터는 repository에 있는 `backend/src/main/resources/db/seed/dev/R_seed_data.sql` 파일에 있습니다.

## 시드 데이터 초기화

`docker compose run --rm dev-flyway-clean` 명령어를 실행하면 시드 데이터가 삭제됩니다.  
`docker compose run --rm dev-flyway-migrate` 명령어를 실행하면 시드 데이터가 적용됩니다.  
`docker compose run --rm dev-flyway-info` 명령어를 실행하면 migration 정보를 확인할 수 있습니다.

## 프론트엔드(React) 실행

평소와 똑같이 `pnpm run dev`를 실행하면 됩니다.  
대신 프론트엔드 디렉터리로 이동해야 합니다.

```bash
cd frontend
pnpm run dev
```

## 백엔드의 로컬 개발 환경 설정

## `.env` 파일 생성

프로젝트 루트 디렉터리에 `.env` 파일을 생성합니다.
다음과 같은 형식으로 작성합니다.

```plaintext
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
MYSQL_DATABASE=skku-table-dev
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/skku-table-dev
SPRING_PROFILES_ACTIVE=dev
```

`SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/skku-table-dev` 부분이 프론트엔드 `.env` 파일에서 `SPRING_DATASOURCE_URL=jdbc:mysql://database:3306/skku-table-dev` 부분과 다릅니다.

## Spring Boot Profile 설정

IntelliJ IDEA의 우측 상단에 있는, `Run` 버튼 옆에 있는 아이콘을 클릭하면 나오는 메뉴에서 `Edit Configurations...`를 클릭합니다.

![edit-configurations](/assets/how-to-set-up-local-dev-env/edit-configurations.png)

![spring-boot-profile](/assets/how-to-set-up-local-dev-env/spring-boot-profile.png)

`Active Profiles` 부분에 `dev`를 추가합니다.  
그리고 `Environment variables` 부분에 방금 만든 `.env` 파일의 Path를 추가합니다. (우측에 있는 폴더 아이콘을 눌러서 직접 `.env` 파일을 선택할 수 있습니다.)

## Rebuild Project

IntelliJ IDEA `Build` - `Rebuild Project`를 클릭합니다.  
그러면 프로젝트가 재빌드됩니다.

## 백엔드 실행

평소처럼 mysql 컨테이너를 실행하고, 백엔드를 실행하면 됩니다.  
그러면 spring에 dev profile이 적용되어 로컬 데이터베이스에 접근합니다.  
또한, 시드 데이터가 적용되어 있습니다.

## 자바 코드 포맷

[구글 스타일 가이드 저장소](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)

![settings-code-style](/assets/how-to-set-up-local-dev-env/settings-code-style.png)

intellij-java-google-style.xml 다운로드 후, IntelliJ IDEA `Preferences` - `Code Style` - `Java` 에서 `Schema` 탭을 클릭합니다.

그러면 위와 같이 톱니바퀴 아이콘이 있는데, 이를 클릭하면 다운로드한 파일을 선택할 수 있습니다.

![import-scheme](/assets/how-to-set-up-local-dev-env/import-scheme.png)

![intellij-idea-code-style](/assets/how-to-set-up-local-dev-env/intellij-idea-code-style.png)

schema - 톱니바퀴 - 다운로드한 파일 import

## 코드 포맷 적용

단축키 `Ctrl + Alt + L` 을 누르면 코드 포맷이 적용됩니다.
