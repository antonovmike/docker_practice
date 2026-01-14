import StyledBox from "./components/StyledBox";
import StyledHeading from "./components/StyledHeading";
import StyledParagraph from "./components/StyledParagraph";

export default function CheatSheet() {
  return (
    <div className="min-h-screen bg-[#353535ff]">
      <div className="max-w-3xl mx-auto">
        <StyledBox>
          <StyledHeading>Docker Quick Commands Cheat Sheet</StyledHeading>
          <StyledParagraph>
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
          </StyledParagraph>
        </StyledBox>
      </div>
    </div>
  );
}
