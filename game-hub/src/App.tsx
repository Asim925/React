import { Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All Games"); //genre
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [text, setText] = useState("");
  const [sortOrder, setSortOrder] = useState("Relevance");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setText(searchText)} />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" marginX={5}>
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre.name)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Heading margin={3}>
            {selectedGenre === "All Games" || selectedGenre === "Card Game"
              ? selectedGenre
              : selectedGenre + " Games"}
          </Heading>
          <Flex margin={3}>
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              selectedPlatform={selectedPlatform}
            />
            <SortSelector
              selectedOrder={sortOrder}
              sortOrder={(order) => setSortOrder(order)}
            />
          </Flex>
          <GameGrid
            selectedPlatform={selectedPlatform}
            filterName={selectedGenre}
            search={text}
            sort={sortOrder}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
