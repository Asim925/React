import { SimpleGrid } from "@chakra-ui/react";
import gamesData from "../constants/gamesData";
import GameCard from "./GameCard";

const GameGrid = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
        padding="10px"
        spacing={4}
      >
        {gamesData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
