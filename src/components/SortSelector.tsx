import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: (order: any) => void;
  selectedOrder: string;
}

const SortSelector = ({ sortOrder, selectedOrder }: Props) => {
  let sortOrders = ["Relevance", "Name", "ID"];
  return (
    <Menu>
      <MenuButton marginX={3} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => sortOrder(order)}
            key={sortOrders.indexOf(order)}
          >
            {order}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
