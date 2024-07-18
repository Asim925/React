import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

let platforms = ["PC", "Web"];

interface Props {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton marginX={3} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)}>
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
