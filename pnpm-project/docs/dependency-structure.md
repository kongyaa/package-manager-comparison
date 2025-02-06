# pnpm의 의존성 구조 분석

## 1. 기본 의존성 구조

pnpm은 다음과 같은 특별한 의존성 구조를 가지고 있습니다:

### 1.1 node_modules 구조

- `.pnpm/`: 실제 패키지들이 저장되는 디렉토리
- `.modules.yaml`: pnpm의 모듈 설정 파일
- `.package-lock.json`: 의존성 잠금 파일
- 심볼릭 링크: 직접 의존성에 대한 링크 (예: react, react-dom)

### 1.2 직접 의존성 (package.json)

```
dependencies:
- react: 18.3.1
- react-dom: 18.3.1

devDependencies:
- @types/react: 18.3.18
- @types/react-dom: 18.3.5
- @typescript-eslint/eslint-plugin: 6.21.0
- @typescript-eslint/parser: 6.21.0
- @vitejs/plugin-react: 4.3.4
- eslint: 8.57.1
- typescript: 5.7.3
- vite: 4.5.9
```

## 2. Phantom Dependencies 방지

pnpm은 다음과 같은 방식으로 phantom dependencies를 방지합니다:

1. 직접 의존성만 node_modules 루트에 심볼릭 링크로 노출
2. 모든 패키지는 .pnpm 디렉토리 내부에 격리되어 저장
3. 각 패키지는 자신의 의존성에만 접근 가능

## 3. 의존성 관리 명령어

주요 의존성 관리 명령어:

- `pnpm add <package>`: 패키지 설치
- `pnpm add -D <package>`: 개발 의존성 설치
- `pnpm remove <package>`: 패키지 제거
- `pnpm update`: 패키지 업데이트
- `pnpm list`: 설치된 패키지 목록 확인

## 4. 장점

1. 엄격한 의존성 관리

   - phantom dependencies 방지
   - 명시적인 의존성 선언 강제

2. 명확한 의존성 구조

   - .pnpm 디렉토리에 모든 패키지가 격리되어 저장
   - 심볼릭 링크를 통한 투명한 의존성 참조

3. 안정적인 패키지 관리
   - 버전 충돌 방지
   - 일관된 패키지 버전 사용

## 5. 모범 사례

1. 직접 의존성 명시

   - 사용하는 모든 패키지를 package.json에 명시
   - devDependencies와 dependencies 구분 명확히

2. 버전 관리

   - 패키지 버전을 명확히 지정
   - semver 규칙 준수

3. peer dependencies 관리
   - peer dependencies 요구사항 확인
   - 호환성 문제 사전 방지
