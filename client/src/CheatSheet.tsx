import StyledBox from "./components/StyledBox";
import StyledPage from "./components/StyledPage";
import StyledHeadingH1 from "./components/StyledHeadingH1";
import StyledParagraph from "./components/StyledParagraph";

export default function CheatSheet() {
  return (
    <StyledPage>
      <StyledBox>
        <StyledHeadingH1>Docker Quick Commands Cheat Sheet</StyledHeadingH1>
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
    </StyledPage>
  );
}
