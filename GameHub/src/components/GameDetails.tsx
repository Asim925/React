import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const GameDetails = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <Flex
      background="gray.900"
      flexDirection={"column"}
      width={"100vw"}
      height={"90vh"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Heading boxShadow={"0 3px white"} font-size={30}>
        {state.title}
      </Heading>
      <Flex
        padding={18}
        borderRadius={15}
        width={"70%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background="gray.700"
        boxShadow={"0 0 15px 1px white"}
      >
        <Box>
          <Image borderRadius={20} height={"45vh"} src={state.thumbnail} />
        </Box>
        <Flex
          height={"45vh"}
          width={"40%"}
          background="gray.900"
          padding={5}
          borderRadius={20}
          fontSize={20}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <p>
            <strong>Rating: </strong>
            {state.id}
          </p>
          <p>
            <strong>Platform: </strong>
            {state.platform}
          </p>
          <p>
            <strong>Publisher: </strong>
            {state.publisher}
          </p>
          <p>
            <strong>Release Date: </strong>
            {state.release_date}
          </p>
          <p>
            <strong>Developer: </strong>
            {state.developer}
          </p>
          <p>
            <strong>Genre: </strong>
            {state.genre}
          </p>
          <a href={state.game_url} style={{ cursor: "pointer" }}>
            <strong>Link: </strong>
            {state.title}
          </a>
        </Flex>
      </Flex>
      <Text boxShadow={"0 3px white"} fontSize={"20px"}>
        "{state.short_description.trim()}"
      </Text>
    </Flex>
  );
};

export default GameDetails;
