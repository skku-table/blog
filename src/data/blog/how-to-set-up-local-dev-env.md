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

## 백엔드(Mysql+Spring Boot Application) 실행

`docker-compose.yml` 파일을 열어 백엔드를 실행합니다.

![docker-compose-yml](/assets/how-to-set-up-local-dev-env/docker-compose-yml.png)

`database` 서비스를 실행하려면, 위에 있는 `Run Service` 재생 버튼을 클릭합니다.  
그러면, mysql 컨테이너가 실행됩니다.  
mysql을 띄웠으면, 이제 Spring Boot Application을 실행합니다.

`application` 서비스를 실행하려면, 위에 있는 `Run Service` 재생 버튼을 클릭합니다.  
그러면, Spring Boot Application이 실행됩니다.

됐습니다! 이제 백엔드가 실행됐습니다.
이제 Bruno를 열어서, 다음과 같이 local에 띄워진 백엔드 API를 테스트해 볼 수 있습니다. (참고로 `http://localhost:8080`으로 요청을 날리면 됩니다.)

![test-backend-api-with-bruno](/assets/how-to-set-up-local-dev-env/test-backend-api-with-bruno.png)

## 프론트엔드(React) 실행

평소와 똑같이 `pnpm run dev`를 실행하면 됩니다.  
대신 프론트엔드 디렉터리로 이동해야 합니다.

```bash
cd frontend
pnpm run dev
```
