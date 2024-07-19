import { Heading, SimpleGrid } from "@chakra-ui/react";
import gamesData from "../constants/gamesData";
import GameCard from "./GameCard";

interface Props {
  filterName: string;
  selectedPlatform: string;
  search: string;
  sort: string;
}

const GameGrid = ({ filterName, selectedPlatform, search, sort }: Props) => {
  const filteredGames = gamesData.filter(
    (game) =>
      (filterName === "All Games" || game.genre === filterName) && // if null then return all
      (selectedPlatform === "All" ||
        game.platform.split(",").includes(selectedPlatform)) &&
      (!search || game.title.toLowerCase().includes(search.toLowerCase()))
  );

  if (sort === "ID") {
    filteredGames.sort((a, b) => b.id - a.id);
  } else if (sort === "Name") {
    filteredGames.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
        padding="10px"
        spacing={4}
      >
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <>
            <Heading margin={5} whiteSpace={"nowrap"}>
              😕 Oops!... Can't find the Games for the Current Settings.
            </Heading>
          </>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
