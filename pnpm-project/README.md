# pnpm 패키지 매니저 스터디

## 1. pnpm 특징 학습

### 1.1 주요 특징

- 하드 링크를 활용한 디스크 공간 절약
- 엄격한 의존성 관리
- 빠른 설치 속도
- 모노레포 지원

### 1.2 초기 설정

```bash
# pnpm 설치 (이미 설치되어 있지 않은 경우)
npm install -g pnpm

# 프로젝트 초기화
pnpm init

# TypeScript 및 React 의존성 설치
pnpm add react react-dom
pnpm add -D typescript @types/react @types/react-dom
pnpm add -D vite @vitejs/plugin-react
```

## 2. 의존성 관리 실습

### 2.1 기본 명령어

- `pnpm install`: 의존성 설치
- `pnpm add [패키지명]`: 패키지 추가
- `pnpm remove [패키지명]`: 패키지 제거
- `pnpm update [패키지명]`: 패키지 업데이트
- `pnpm prune`: 불필요한 의존성 제거
- `pnpm store status`: 전역 저장소 상태 확인

### 2.2 pnpm 특화 기능

- Content-addressable store
- 심볼릭 링크 기반 `node_modules`
- 의존성 호이스팅 방지
- Workspace 프로토콜

## 3. ToDo 앱 구현

npm, yarn 프로젝트와 동일한 ToDo 앱을 pnpm의 특징을 활용하여 구현합니다.

### 3.1 프로젝트 구조

```
pnpm-project/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   └── AddTodo.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── pnpm-lock.yaml
```

## 4. 학습 포인트

1. 디스크 공간 최적화

   - Content-addressable store 이해
   - 하드 링크 활용 방식
   - 저장소 구조 분석

2. 의존성 관리 특징

   - 엄격한 의존성 해결
   - 심볼릭 링크 구조
   - Peer 의존성 처리

3. 성능 최적화
   - 병렬 설치
   - 캐시 활용
   - 네트워크 효율성

## 5. 실습 과제

1. store 디렉토리 구조 분석
2. 의존성 설치 성능 측정
3. node_modules 구조 이해
4. 모노레포 설정 실습

## 커밋 컨벤션

각 단계별로 다음 형식으로 커밋 메시지를 작성합니다:

```
[pnpm] 단계: 작업 내용

예시:
[pnpm] init: 프로젝트 초기 설정
[pnpm] feat: ToDo 컴포넌트 구현
[pnpm] study: store 구조 분석
```
