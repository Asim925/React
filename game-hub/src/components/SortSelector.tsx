import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  let sortOrder = [
    "Relevance",
    "Date added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];
  return (
    <Menu>
      <MenuButton marginX={3} as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem key={sortOrder.indexOf(order)}>{order}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
