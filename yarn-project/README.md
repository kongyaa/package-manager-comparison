# Yarn 패키지 매니저 스터디

## 1. Yarn 특징 학습

### 1.1 Yarn Classic vs Berry

- Yarn 1.x (Classic)과 Yarn 2.x+ (Berry) 비교
- PnP (Plug'n'Play) 시스템 이해
- Zero-installs 개념

### 1.2 Yarn Berry 설정

```bash
# yarn berry로 업그레이드
yarn set version berry

# TypeScript SDK 설치
yarn plugin import typescript

# PnP 활성화
yarn config set nodeLinker pnp
```

## 2. 의존성 관리 실습

### 2.1 기본 명령어

- `yarn install`: 의존성 설치
- `yarn add [패키지명]`: 패키지 추가
- `yarn remove [패키지명]`: 패키지 제거
- `yarn up [패키지명]`: 패키지 업데이트
- `yarn why [패키지명]`: 패키지 의존성 분석

### 2.2 Yarn 특화 기능

- 워크스페이스 관리
- 제로 설치 (Zero-installs)
- 오프라인 캐시
- 병렬 설치

## 3. ToDo 앱 구현

npm 프로젝트와 동일한 ToDo 앱을 Yarn Berry의 특징을 활용하여 구현합니다.

### 3.1 프로젝트 구조

```
yarn-project/
├── .yarn/
├── src/
│   ├── components/
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   └── AddTodo.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── yarn.lock
```

## 4. 학습 포인트

1. PnP 시스템의 이점

   - node_modules 제거
   - 의존성 호이스팅 문제 해결
   - 설치 성능 향상

2. Zero-installs 활용

   - 의존성을 Git에 포함
   - CI/CD 최적화

3. Yarn 특화 기능
   - 병렬 패키지 설치
   - 엄격한 의존성 관리
   - 보안 기능

## 5. 실습 과제

1. PnP와 node_modules 방식의 차이점 분석
2. Zero-installs 설정 및 테스트
3. 워크스페이스 기능 활용
4. 의존성 관리 성능 측정

## 커밋 컨벤션

각 단계별로 다음 형식으로 커밋 메시지를 작성합니다:

```
[yarn] 단계: 작업 내용

예시:
[yarn] init: Berry 설정 및 PnP 활성화
[yarn] feat: ToDo 컴포넌트 구현
[yarn] study: PnP 시스템 분석
```
