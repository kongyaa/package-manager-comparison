# pnpm의 의존성 관리 특징

## 1. 엄격한 의존성 관리

pnpm은 package.json에 명시된 의존성만 접근할 수 있도록 하는 엄격한 의존성 관리를 제공합니다.

### 유령 의존성(Phantom Dependencies) 방지

유령 의존성이란?

- package.json에 명시하지 않은 패키지를 사용할 수 있는 현상
- npm이나 yarn에서는 호이스팅으로 인해 발생
- 프로젝트의 안정성과 이식성을 해침

pnpm의 해결방식:

1. 심볼릭 링크를 통한 격리된 의존성 트리 생성
2. 직접 의존성만 node_modules 디렉토리 루트에 배치
3. 전이 의존성은 .pnpm 디렉토리 내부에 격리

## 2. 의존성 관리 명령어

### 의존성 추가

```bash
# 개발 의존성 추가
pnpm add -D [패키지명]

# 프로덕션 의존성 추가
pnpm add [패키지명]

# 특정 버전 설치
pnpm add [패키지명]@[버전]
```

### 의존성 제거

```bash
# 패키지 제거
pnpm remove [패키지명]

# 개발 의존성 제거
pnpm remove -D [패키지명]
```

### 의존성 업데이트

```bash
# 모든 패키지 업데이트
pnpm update

# 특정 패키지 업데이트
pnpm update [패키지명]

# 대화형 업데이트
pnpm update -i
```

## 3. 의존성 구조 분석

### node_modules 구조

```
node_modules/
├── .pnpm/            # 모든 패키지의 실제 위치
│   ├── [패키지1@버전]/
│   └── [패키지2@버전]/
├── [직접의존성1]     # 심볼릭 링크
└── [직접의존성2]     # 심볼릭 링크
```

### 의존성 시각화

```bash
# 의존성 트리 보기
pnpm list

# 특정 패키지의 의존성만 보기
pnpm list [패키지명]
```

## 4. 장점

1. **안전성**

   - 유령 의존성 완전 차단
   - package.json과 실제 사용 패키지의 일치 보장

2. **명확성**

   - 의존성 구조가 명확하게 보임
   - 직접/간접 의존성 구분이 쉬움

3. **이식성**
   - 프로젝트가 다른 환경에서도 동일하게 동작
   - 의존성 관련 문제 사전 방지

## 5. 모범 사례

1. **직접 의존성 명시**

   ```json
   {
     "dependencies": {
       "express": "^4.17.1"
     }
   }
   ```

2. **버전 고정**

   ```json
   {
     "dependencies": {
       "react": "18.3.1" // 정확한 버전 지정
     }
   }
   ```

3. **peer 의존성 관리**
   ```json
   {
     "peerDependencies": {
       "react": "^18.0.0"
     }
   }
   ```

## 6. 문제 해결

### 의존성 충돌

```bash
# lock 파일 재생성
pnpm install --force

# 의존성 트리 확인
pnpm list
```

### 캐시 문제

```bash
# 캐시 정리
pnpm store prune

# 전체 캐시 삭제
pnpm store prune --force
```
