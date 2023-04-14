all:

frontend:
	npx lerna run start --scope=frontend

admin:
	npx lerna run start --scope=admin

lib:
	npx lerna run start --scope=lib

backend: start_db
	npx lerna run start:dev --scope=backend

db:
	docker run -h db --name postgres --env-file .env -p 5432:5432 -d postgres

start_db:
	docker start postgres

stop_db:
	docker stop postgres

.PHONY: all frontend backend
