import best from "../assets/best.png";
import ok from "../assets/ok.png";
import {
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Score from "./Score";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  game_url: string;
}

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    Web: BsGlobe,
  };

  return (
    <a target="_blank" href={game.game_url}>
      <Card
        style={{
          cursor: "pointer",
          transform: "scale(1)",
          transition: "transform 0.3s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        borderRadius={10}
        overflow={"hidden"}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.015)"; // scaling up on hover
          e.currentTarget.style.boxShadow = "0 0 7px 1px rgba(255, 0, 255)"; // more prominent shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // scaling back to original on mouse leave
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // default shadow
        }}
      >
        <Image src={game.thumbnail} />
        <CardBody>
          <Heading fontSize={"1.5xl"}>{game.title}</Heading>
          <HStack justifyContent="space-between">
            <Box display={"flex"} gap={2} marginY={2}>
              {" "}
              {game.platform.split(",").map((icon) => (
                <Icon key={game.id} as={iconMap[icon]} color="gray.400" />
              ))}
            </Box>
            <HStack>
              {game.id >= 200 && (
                <Image boxSize={"20px"} src={game.id > 350 ? best : ok} />
              )}
              <Score score={game.id} />
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </a>
  );
};

export default GameCard;
