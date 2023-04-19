# correction-service-website

## Description

Full stack website with a react frontend with an admin and public section, and a nestjs backend that serves static files and serve a postgres database. A custom ui/utils library is also avalaible in ./packages.

## How to run

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

- Frontend-public only
```sh
make frontend #port 3000
```

- Frontend-admin only
```sh
make admin #port 4000
```

- Backend only (You need docker. The Makefile uses ```sudo docker```.):

```sh
make db
make start_db
```

### Production

Uses ```sudo docker compose up```
```sh
npm run prod
```
