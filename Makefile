all:

frontend:
	npm run --prefix ./frontend/ start

backend: start_db
	npm run --prefix ./backend/ start

db: docker_context
	docker run -h db --name postgres --env-file .env -p 5432:5432 -d postgres

start_db: docker_context
	docker start postgres

stop_db: docker_context
	docker stop postgres

docker_context:
	docker context use desktop-linux

.PHONY: all frontend backend
