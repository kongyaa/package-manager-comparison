// 의존성 테스트
console.log('=== Dependency Test ===');

try {
  const React = require('react');
  console.log('React version:', React.version);
  console.log('React loaded successfully');
} catch (error) {
  console.error('Failed to load React:', error.message);
}

try {
  const ReactDOM = require('react-dom');
  console.log('ReactDOM version:', ReactDOM.version);
  console.log('ReactDOM loaded successfully');
} catch (error) {
  console.error('Failed to load ReactDOM:', error.message);
}

// 간단한 React 컴포넌트
const App = () => {
  return React.createElement('div', null, 'Hello, Phantom Dependencies!');
};

// ReactDOM 사용 시도 - 이는 실패해야 함
try {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
} catch (error) {
  console.error('Error:', error.message);
}
