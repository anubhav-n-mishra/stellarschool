# -------------------------
# Git Utility Makefile (Windows Compatible)
# -------------------------

# Usage:
# make init REPO_URL=<url>
# make add
# make commit MSG="your commit message"
# make push BRANCH=main

SHELL := cmd.exe

init:
	git init
	@if "$(REPO_URL)"=="" ( \
		echo Error: REPO_URL is required. Example: make init REPO_URL=https://github.com/user/repo.git & \
		exit 1 \
	)
	git remote add origin $(REPO_URL)
	@echo Repo initialized and remote added!

commit:
	git add .
	@echo Files added!
	@if "$(MSG)"=="" ( \
		echo Error: MSG is required. Example: make commit MSG="your message" & \
		exit 1 \
	)
	git commit -m "$(MSG)"
	@echo Commit created!
	git push origin master
	

push:
	@if "$(BRANCH)"=="" ( \
		echo Error: BRANCH is required. Example: make push BRANCH=main & \
		exit 1 \
	)
	git push origin $(BRANCH)
	@echo Changes pushed!
