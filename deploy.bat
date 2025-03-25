@echo off
echo ===== 메가존클라우드 & 텐센트 클라우드 코리아 웹사이트 배포 =====
echo.

echo 1. Git 상태 확인 중...
git status
echo.

echo 2. 변경된 파일 스테이징...
git add .
echo.

echo 3. 커밋 메시지를 입력하세요 (예: "메인 페이지 디자인 수정"):
set /p commit_message=
git commit -m "%commit_message%"
echo.

echo 4. GitHub에 푸시 중...
git push
echo.

echo 5. Vercel에 자동 배포가 시작됩니다...
echo 잠시 후 https://megazone-tencent-ai.vercel.app 에서 변경사항을 확인할 수 있습니다.
echo.

echo 배포 프로세스가 완료되었습니다!
echo 웹사이트를 확인하시겠습니까? (Y/N)
set /p check_website=

if /i "%check_website%"=="Y" (
    start https://megazone-tencent-ai.vercel.app
)

echo.
echo 작업이 완료되었습니다. 아무 키나 누르면 종료됩니다...
pause > nul 