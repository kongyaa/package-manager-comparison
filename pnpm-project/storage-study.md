# pnpm 저장소 구조 학습

## 1. 저장소 관련 명령어

### 1.1 저장소 경로 확인

```bash
pnpm store path
```

- `store path`: pnpm의 전역 저장소 위치를 보여주는 명령어
- 모든 프로젝트가 공유하는 Content-addressable store의 위치 확인 가능

### 1.2 디스크 사용량 확인

```bash
# node_modules 크기 확인
du -sh node_modules
```

- `du`: disk usage의 약자로 디스크 사용량을 보여주는 명령어
- `-s`: summarize의 약자로 총 합계만 보여줌
- `-h`: human-readable 형식으로 크기를 표시 (KB, MB, GB 등)

```bash
# 전역 저장소 크기 확인
du -sh $(pnpm store path)
```

- `$(command)`: 명령어의 출력을 다른 명령어의 인자로 사용

### 1.3 저장소 상태 확인

```bash
pnpm store status
```

- 전역 저장소의 무결성을 검사하고 상태를 보여줌
- 손상된 패키지나 불필요한 파일 확인 가능

### 1.4 저장소 정리

```bash
pnpm store prune
```

- 사용하지 않는 패키지를 전역 저장소에서 제거
- 디스크 공간 최적화에 도움

## 2. 하드 링크 구조 이해

pnpm은 다음과 같은 방식으로 디스크 공간을 절약합니다:

1. 전역 저장소에 패키지를 한 번만 저장
2. 프로젝트의 node_modules에는 하드 링크를 생성
3. 동일한 패키지를 여러 프로젝트에서 사용해도 디스크 공간은 한 번만 사용

### 2.1 하드 링크 확인

```bash
ls -la node_modules/.pnpm
```

- `-l`: 자세한 정보 표시 (권한, 소유자, 크기 등)
- `-a`: 숨김 파일 포함
- `.pnpm`: pnpm의 실제 패키지가 저장되는 디렉토리
