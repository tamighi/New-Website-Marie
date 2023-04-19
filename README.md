# correction-service-website

## Description

Full stack website with a react frontend with an admin and public section, and a nestjs backend that serves static files and serve a postgres database. A custom ui/utils library is also avalaible in ./packages.

## How to run

For now, a username and password is needed to access the admin with the backend, none are provided yet.

### Development

- Install dependencies:
```sh
npm install
```

- Run all together (You need docker. The Makefile uses ```sudo docker```.):
```sh
make db
make start_db
npm run dev
```

Please note that frontend without the backend will result in fetching errors (they are handled but the functionnalities will be limited).

- Frontend-public only (localhost:3000)
```sh
make frontend
```

- Frontend-admin only (localhost:4000/admin)
```sh
make admin
```

- Backend only (You need docker. The Makefile uses ```sudo docker```.):

```sh
make db
make start_db
```

### Production (localhost:8000)

Uses ```sudo docker compose up```
```sh
npm run prod
```
