import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
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
      <Box position="fixed" top="0" width="100%" zIndex="1000">
        <NavBar onSearch={(searchText) => setText(searchText)} />
      </Box>

      <Grid
        marginTop="80px"
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <Box
            className="GenreList"
            position="fixed"
            top="80px"
            left="0"
            width="fit-content"
            height="calc(100vh - 80px)"
            overflowY="auto"
            zIndex="900"
            paddingX={5}
          >
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre.name)}
              selectedGenre={selectedGenre}
            />
          </Box>
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
