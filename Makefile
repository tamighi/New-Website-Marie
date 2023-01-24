all:

backend: start_db
	cd backend && npm run start:dev

db: docker_context
	docker run -h db --name postgres --env-file .env -p 5432:5432 -d postgres

start_db: docker_context
	docker start postgres

stop_db: docker_context
	docker stop postgres

docker_context:
	docker context use desktop-linux
