#notes

*to start from scratch**
server stuff
https://github.com/processing/p5.js/wiki/Local-server

nodes needs to be installed
https://nodejs.org/en/download/

git needs to be installed
https://git-scm.com/

once both are installed, on opens 'git bash'

running p5:
open terminal type git bash
navigate to this project: cd Desktop/moonphase
run the server: http-server -c-1

point browser to local host: http://localhost:8080/
to stop server use ctrl C
to install server: npm install -g http-server

*to see the sketch**
run the server 
http-server -c-1
leave this terminal open & running
point browser to local host: http://localhost:8080/
to stop server use ctrl C

*to start a new project**
go to github
open new respository

open new terminal
navigate to project folder
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mosakodi/"projectname".git
git push -u origin main
git push


*to save/make changes while working on project**
open terminal, go to project
if new files added: git add
to make changes to github: git commit -am'commit message goes here'
git push
