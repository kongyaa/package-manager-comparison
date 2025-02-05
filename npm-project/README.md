# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# npm 패키지 매니저 스터디

## 1. 프로젝트 초기 설정

```bash
# 프로젝트 초기화
npm init -y

# React 및 기본 의존성 설치
npm install react react-dom @types/react @types/react-dom
npm install --save-dev typescript @types/node
npm install --save-dev vite @vitejs/plugin-react

# TypeScript 설정
npx tsc --init
```

## 2. 의존성 관리 실습

### 2.1 기본 명령어

- `npm install`: 프로젝트의 모든 의존성 설치
- `npm install [패키지명]`: 특정 패키지 설치
- `npm install -D [패키지명]`: 개발 의존성으로 설치
- `npm uninstall [패키지명]`: 패키지 제거
- `npm update [패키지명]`: 패키지 업데이트
- `npm list`: 설치된 패키지 목록 확인

### 2.2 package.json 구조

- dependencies vs devDependencies
- scripts 섹션 활용
- 버전 관리 (Semantic Versioning)
- peer dependencies

### 2.3 package-lock.json

- 역할과 중요성
- 버전 고정
- 의존성 트리 구조

## 3. ToDo 앱 구현

기본적인 ToDo 앱을 구현하면서 npm의 특징을 학습합니다.

### 3.1 프로젝트 구조

```
npm-project/
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
├── package-lock.json
└── tsconfig.json
```

### 3.2 실행 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

## 4. 학습 포인트

1. node_modules 구조 분석

   - 중복 의존성 설치 확인
   - 디스크 공간 사용량 측정

2. 의존성 설치 성능

   - 설치 시간 측정
   - 캐시 활용

3. npm 특화 기능
   - npx 활용
   - npm audit
   - npm workspaces

## 5. 실습 과제

1. 패키지 설치 후 node_modules 크기 확인
2. 동일 패키지의 다른 버전 설치 시 동작 확인
3. package-lock.json 분석
4. npm audit으로 보안 취약점 확인

## 커밋 컨벤션

각 단계별로 다음 형식으로 커밋 메시지를 작성합니다:

```
[npm] 단계: 작업 내용

예시:
[npm] init: 프로젝트 초기 설정
[npm] feat: ToDo 컴포넌트 구현
[npm] study: node_modules 구조 분석
```
