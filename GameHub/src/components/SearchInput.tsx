import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  let ref = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant="filled"
          borderRadius={20}
          placeholder="Search Games..."
          onChange={handleInputChange}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
