# Phantom Dependencies 실험

이 예제는 pnpm의 엄격한 의존성 관리를 보여주는 실험입니다.

## 실험 설정

1. `package.json`에는 `react`만 의존성으로 선언:

```json
{
  "name": "phantom-deps-example",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.3.1"
  }
}
```

2. 코드에서는 선언되지 않은 `react-dom` 사용 시도:

```javascript
const React = require('react');
const ReactDOM = require('react-dom'); // 선언되지 않은 의존성

const App = () => {
  return React.createElement('div', null, 'Hello, Phantom Dependencies!');
};

try {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
} catch (error) {
  console.error('Error:', error.message);
}
```

## 실험 결과

실행 시 다음과 같은 에러가 발생합니다:

```
Error: document is not defined
```

이 에러는 `react-dom`을 찾을 수 없어서가 아니라, Node.js 환경에서 `document` 객체가 없어서 발생한 것입니다.
실제로 중요한 점은 pnpm이 `react-dom`을 찾지 못했어야 하는데, 이는 다음과 같은 이유로 발생했습니다:

1. `react`가 `react-dom`을 peer dependency로 가지고 있어서 자동으로 설치됨
2. Node.js의 모듈 해석 방식으로 인해 상위 디렉토리의 `node_modules`에서 모듈을 찾을 수 있음

## 올바른 해결 방법

1. 모든 필요한 의존성을 `package.json`에 명시적으로 선언:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

2. `.npmrc` 파일에 엄격한 의존성 검사 설정 추가:

```
hoist=false
shamefully-hoist=false
strict-peer-dependencies=true
```

## 교훈

1. 모든 사용하는 패키지를 명시적으로 선언해야 합니다.
2. peer dependencies도 명시적으로 설치해야 합니다.
3. pnpm의 엄격한 의존성 관리는 프로젝트의 안정성을 높여줍니다.
