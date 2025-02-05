# 패키지 매니저 비교 스터디

이 프로젝트는 npm, yarn, pnpm 세 가지 주요 패키지 매니저의 특징과 차이점을 실습을 통해 학습하기 위한 스터디 프로젝트입니다.

## 스터디 구성

각 패키지 매니저별로 동일한 React 기반 ToDo 애플리케이션을 구현하면서 다음 항목들을 비교 학습합니다:

1. 초기 프로젝트 설정 및 구조
2. 의존성 관리 방식
3. 패키지 설치 속도 및 디스크 사용량
4. Lock 파일 관리 방식
5. 스크립트 실행 및 명령어 차이
6. 모노레포 지원 기능

## 실습 순서

### 1단계: npm 프로젝트

- 기본적인 npm 명령어 및 특징 학습
- package.json 구조 이해
- node_modules 관리 방식 파악
- npm 스크립트 활용

### 2단계: yarn 프로젝트

- yarn classic vs berry 비교
- 향상된 의존성 관리 기능 학습
- Plug'n'Play (PnP) 시스템 이해
- 워크스페이스 기능 활용

### 3단계: pnpm 프로젝트

- 하드 링크를 활용한 디스크 공간 절약
- 엄격한 의존성 관리
- 모노레포 지원 기능
- 성능 최적화 특징

## 프로젝트 구조

```
package-manager-comparison/
├── npm-project/     # npm 기반 ToDo 앱
├── yarn-project/    # yarn 기반 ToDo 앱
└── pnpm-project/    # pnpm 기반 ToDo 앱
```

## 학습 진행 방법

1. 각 디렉토리의 README.md 파일에서 세부 학습 내용 확인
2. 단계별 실습 진행
3. 각 단계에서 배운 내용을 커밋 메시지에 상세히 기록
4. 패키지 매니저별 장단점 및 특징 비교 표 작성

## 시작하기

각 프로젝트 디렉토리로 이동하여 해당 README.md 파일의 지침을 따라 진행하세요.
