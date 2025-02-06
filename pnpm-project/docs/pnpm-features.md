# pnpm의 주요 특징 학습

## 1. Content-addressable store

pnpm은 모든 패키지를 글로벌 스토어에 단 한 번만 저장하고, 프로젝트에서는 이를 하드링크로 참조합니다.

### 글로벌 스토어 확인

```bash
# 글로벌 스토어 위치 확인
pnpm store path
# 출력: /Users/seholee/Library/pnpm/store/v10

# 스토어 상태 확인
pnpm store status
# 출력: Packages in the store are untouched

# 사용하지 않는 패키지 정리
pnpm store prune
```

## 2. 하드링크 기반 구조

### node_modules 구조 분석

```bash
# node_modules 크기 확인
du -sh node_modules
# 출력: 622M node_modules

# .pnpm 디렉토리 구조 확인
ls -la node_modules/.pnpm

# 특정 패키지의 하드링크 확인 (react 예시)
ls -la node_modules/.pnpm/react@18.3.1/node_modules/react/
# 출력:
# -rw-r--r--@  2 seholee  staff   190 Feb  6 01:24 index.js
# -rw-r--r--@  2 seholee  staff   222 Feb  6 01:24 jsx-dev-runtime.js
# -rw-r--r--@  2 seholee  staff   214 Feb  6 01:24 jsx-runtime.js
# ...
```

### 하드링크 분석

파일 정보에서 두 번째 컬럼의 숫자 `2`는 해당 파일의 하드링크 수를 나타냅니다:

- `index.js`: 2개의 하드링크
- `jsx-dev-runtime.js`: 2개의 하드링크
- `jsx-runtime.js`: 2개의 하드링크

이는 각 파일이 글로벌 스토어의 원본 파일과 프로젝트의 `node_modules`에 있는 파일이 동일한 inode를 참조하고 있음을 의미합니다.

### 특징

1. `node_modules/.pnpm` - 실제 패키지들이 위치
2. 각 패키지는 정확한 버전으로 격리 (예: react@18.3.1)
3. 하드링크를 통해 디스크 공간 절약 (파일당 2개의 하드링크)

## 3. 장점

1. **디스크 공간 효율성**

   - 동일 패키지는 시스템에 한 번만 저장
   - 하드링크로 실제 파일 복사 없이 재사용
   - 예: react 패키지의 모든 파일이 글로벌 스토어와 하드링크로 연결

2. **의존성 관리의 정확성**

   - 패키지가 정확한 버전으로 격리 관리 (예: react@18.3.1)
   - 유령 의존성 문제 방지
   - 명시적인 의존성 구조

3. **설치 속도**
   - 캐시된 패키지는 하드링크만 생성
   - 네트워크 사용량 최소화
   - 글로벌 스토어 활용으로 빠른 설치

## 4. 명령어 설명

1. `pnpm store path`

   - 글로벌 스토어의 위치를 보여줌
   - 옵션 없이 실행
   - 예제 출력: /Users/seholee/Library/pnpm/store/v10

2. `du -sh node_modules`

   - `du`: disk usage의 약자
   - `-s`: summary, 총 합계만 표시
   - `-h`: human-readable format으로 표시 (KB, MB, GB 등)
   - 예제 출력: 622M node_modules

3. `ls -la node_modules/.pnpm`

   - `ls`: list의 약자
   - `-l`: long format으로 상세 정보 표시
   - `-a`: all, 숨김 파일 포함 모든 파일 표시
   - 하드링크 수 확인 가능

4. `pnpm store status`

   - 글로벌 스토어의 무결성 검사
   - 손상된 패키지 확인
   - 예제 출력: "Packages in the store are untouched"

5. `pnpm store prune`
   - 사용하지 않는 패키지 제거
   - 디스크 공간 정리
   - 글로벌 스토어 최적화
