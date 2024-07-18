import { SimpleGrid } from "@chakra-ui/react";
import gamesData from "../constants/gamesData";
import GameCard from "./GameCard";

interface Props {
  filterName: string;
}

const GameGrid = ({ filterName }: Props) => {
  const filteredGames = filterName
    ? gamesData.filter((game) => game.genre === filterName)
    : gamesData;
  console.log("filterName:", filterName);
  console.log("gamesData:", gamesData);
  console.log("filteredGames:", filteredGames);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
        padding="10px"
        spacing={4}
      >
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
