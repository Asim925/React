import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch = () => {} }: Props) => {
  return (
    <div
      style={{
        cursor: "pointer",
        transition: "box-shadow 0.3s ease", // transition for box-shadow
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // default shadow
        backdropFilter: "blur(50px)",
        background: "rgba(0,0,0,0.5)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(255, 0, 255, 0.5)"; // red shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // default shadow
      }}
      className="navBar"
    >
      <HStack padding="10px">
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
