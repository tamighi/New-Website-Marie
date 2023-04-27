# correction-service-website

## Description

Full stack website with 
- A react frontend (public and admin).
- A nestjs backend that serves a postgres database.
- A custom ui/utils library.
- An nginx configuration to serve static react bundles and redirect to backend.
- A docker containerization for development and production.

## How to run

### Development (port 3000)

```sh
docker compose -f docker-compose.dev.yml up
```

### Production (port 3000 for now)

```sh
docker compose -f docker-compose.prod.yml up
```
