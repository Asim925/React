import { Card, CardBody, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

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
        <Icon as={iconMap[game.platform]} marginY={2} color="gray.400" />
      </CardBody>
    </Card>
  );
};

export default GameCard;
