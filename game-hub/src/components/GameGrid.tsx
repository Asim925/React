import { SimpleGrid } from "@chakra-ui/react";
import gamesData from "../constants/gamesData";
import GameCard from "./GameCard";

interface Props {
  filterName: string;
  selectedPlatform: string;
}

const GameGrid = ({ filterName, selectedPlatform }: Props) => {
  const filteredGames = gamesData.filter(
    (game) =>
      (!filterName || game.genre === filterName) && // if null then return all
      (!selectedPlatform || game.platform.split(",").includes(selectedPlatform))
  );
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
