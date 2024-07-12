import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
}

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
