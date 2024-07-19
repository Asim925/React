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
    <Card borderRadius={10} overflow={"hidden"}>
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
  );
};

export default GameCard;
