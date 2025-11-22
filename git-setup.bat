@echo off
echo Setting up Git repository...

git init
git add .
git commit -m "Initial commit: Premium Product & Feedback Portal"
git branch -M main
git remote add origin https://github.com/VanshikaChaudhary12/feedback-portal.git
git push -u origin main

echo.
echo Repository setup complete!
pause