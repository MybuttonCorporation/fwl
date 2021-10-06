@echo off
taskkill /F /FI "WINDOWTITLE eq \"fwl.backgroundRunningProcess\"" /T
colorful -s "------------------------------------" -f 9 -e -n
colorful -s "© Mybutton Corporation - Bot Restart" -f 12 -e -n
colorful -s "------------------------------------" -f 9 -e -n
colorful -s "Restarting [FWL] with | Code-5672 | Code-124 | Code-125 | With Args-527." -f 6 -e -n
timeout 2 /nobreak >nul
"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\runFWLa.vbs"
colorful -s "[FWL] has restarted Successfully." -f 13