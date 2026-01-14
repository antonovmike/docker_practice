import StyledBox from "./components/StyledBox";

export default function CheatSheet() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Quick Commands Cheat Sheet
        </h1>
        <StyledBox>
          {`
# Containers
docker ps
docker ps -a
docker stop <container>
docker rm -f <container>

# Images
docker images
docker rmi <image_id>

# Logs & Debugging
docker logs <container>
docker exec -it <container> sh

# Docker Compose
docker compose up --build
docker compose down
docker compose logs -f
docker compose ps

# Cleanup
docker container prune
docker image prune
docker system prune -a
`}
        </StyledBox>
      </div>
    </div>
  );
}
