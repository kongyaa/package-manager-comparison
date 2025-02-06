#!/bin/bash

echo "=== pnpm 캐시 실험 ==="
echo

echo "1. 캐시 위치 확인"
pnpm store path
echo

echo "2. 초기 설치 시간 측정"
time pnpm install
echo

echo "3. node_modules 크기 확인"
du -sh node_modules
echo

echo "4. node_modules 삭제 후 재설치 시간 측정 (캐시 사용)"
rm -rf node_modules
time pnpm install
echo

echo "5. 캐시 정보 확인"
pnpm store status
echo

echo "6. 캐시 삭제 후 설치 시간 측정"
pnpm store prune
time pnpm install
echo

echo "=== 실험 완료 ===" 