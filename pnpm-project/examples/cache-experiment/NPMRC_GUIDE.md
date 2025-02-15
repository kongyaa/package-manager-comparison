# .npmrc 설정 가이드

## 1. 캐시 관련 설정

### store-dir=.pnpm-store

- 프로젝트별 독립적인 스토어 디렉토리 설정
- CI/CD 환경에서 캐시 격리에 유용
- 프로젝트 이식성 향상

### cache-dir=.pnpm-cache

- 메타데이터 캐시 저장 위치 지정
- 프로젝트별 캐시 관리 가능
- 빠른 의존성 해석을 위한 캐시

## 2. 성능 최적화 설정

### prefer-offline=true

- 가능한 한 오프라인 캐시 사용
- 네트워크 요청 최소화
- 설치 속도 향상

### prefer-frozen-lockfile=true

- lockfile 변경 없이 설치 시도
- 일관된 의존성 보장
- CI/CD 환경에 적합

## 3. 네트워크 최적화

### network-concurrency=8

- 동시 네트워크 요청 수 제한
- 서버 부하 조절
- 대역폭 효율적 사용

### child-concurrency=4

- 동시 실행 작업 수 제한
- 시스템 리소스 관리
- 안정적인 설치 프로세스

## 4. 디스크 공간 최적화

### node-linker=hoisted

- 의존성 호이스팅 방식 설정
- 디스크 공간 효율성
- 호환성 향상

### shamefully-hoist=false

- 엄격한 의존성 관리
- 유령 의존성 방지
- 안전한 패키지 사용

### strict-peer-dependencies=true

- 엄격한 peer 의존성 검사
- 의존성 충돌 방지
- 안정적인 패키지 구성

## 5. 캐시 검증

### verify-store-integrity=true

- 스토어 무결성 검사 활성화
- 손상된 캐시 감지
- 안정적인 패키지 설치

## 6. 권장 사항

1. **프로젝트 특성에 따른 조정**

   - 팀 크기와 개발 환경에 맞춰 조정
   - CI/CD 파이프라인 최적화
   - 로컬 개발 환경 고려

2. **모니터링 및 유지보수**

   - 정기적인 캐시 정리
   - 성능 모니터링
   - 설정 재검토

3. **보안 고려사항**
   - 패키지 검증 활성화
   - 의존성 감사 정기 실행
   - 취약점 모니터링
