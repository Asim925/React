import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

let platforms = ["All", "PC", "Web"];

interface Props {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform: {selectedPlatform}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platforms.indexOf(platform)}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
