all:

frontend:
	npx lerna run start --scope=frontend

admin:
	npx lerna run start --scope=admin

lib:
	npx lerna run start --scope=lib

backend: start_db
	npx lerna run start:dev --scope=backend

db: docker_context
	docker run -h db --name postgres --env-file .env -p 5432:5432 -d postgres

start_db: docker_context
	docker start postgres

stop_db: docker_context
	docker stop postgres

# TODO: stop using desktop-linux context
docker_context:
	docker context use desktop-linux

.PHONY: all frontend backend
