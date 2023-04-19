all:

dev: start_db
	npm run dev

prod:
	npm run prod

frontend:
	npx lerna run dev --scope=frontend

admin:
	npx lerna run dev --scope=admin

lib:
	npx lerna run dev --scope=lib

backend: start_db
	npx lerna run dev --scope=backend

db:
	sudo docker run -h db --name postgres --env-file .env -p 5432:5432 -d postgres

start_db:
	sudo docker start postgres

stop_db:
	sudo docker stop postgres

adminer:
	sudo docker run --link postgres:db -p 8080:8080 adminer

.PHONY: all frontend backend
