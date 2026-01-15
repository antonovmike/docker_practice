# Docker Quick Commands Cheat Sheet

## Containers

- **List running containers**
  ```bash
  docker ps
  ```
- **List all containers (including stopped)**
  ```bash
  docker ps -a
  ```
- **Stop a container**
  ```bash
  docker stop <container_name_or_id>
  ```
- **Remove a container**
  ```bash
  docker rm -f <container_name_or_id>
  ```

---

## Images

- **List images**
  ```bash
  docker images
  ```
- **Remove an image**
  ```bash
  docker rmi <image_id>
  ```

---

## Logs & Debugging

- **View logs of a container**
  ```bash
  docker logs <container_name_or_id>
  ```
- **Attach to a running container**
  ```bash
  docker exec -it <container_name_or_id> sh
  ```
- **Check container health/status**
  ```bash
  docker inspect <container_name_or_id>
  ```

---

## Docker Compose (V2)

- **Start services (build if needed)**
  ```bash
  docker compose up --build
  ```
- **Stop and remove containers, networks**
  ```bash
  docker compose down
  ```
- **Force recreate containers**
  ```bash
  docker compose up --build --force-recreate
  ```
- **View logs of all services**
  ```bash
  docker compose logs -f
  ```
- **List services/containers**
  ```bash
  docker compose ps
  ```
- **Run a command inside a service**
  ```bash
  docker compose exec <service_name> sh
  ```

---

## Cleanup

- **Remove all stopped containers**
  ```bash
  docker container prune
  ```
- **Remove unused images**
  ```bash
  docker image prune
  ```
- **Remove everything (containers, networks, volumes, images)**
  ```bash
  docker system prune -a
  ```

---
