@echo off
chcp 65001 > nul
echo ===== 메가존-텐센트 AI 전략 자동 배포 시작 =====

echo.
echo 1. 변경사항 저장 중...
git add .

echo.
echo 2. 변경사항 자동 커밋...
git commit -m "자동 배포: 웹사이트 업데이트"

echo.
echo 3. GitHub에 업로드 중...
git push origin main

echo.
echo ===== 배포 완료 =====
echo Vercel에서 자동으로 새 버전이 배포됩니다.
echo 잠시 후 웹사이트에서 변경사항을 확인할 수 있습니다.
echo.

timeout /t 3 /nobreak > nul 