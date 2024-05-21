import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  //   const { data } = usePlatforms();
  // if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        marginBottom={3}
        marginLeft={3}
        rightIcon={<BsChevronDown></BsChevronDown>}
      >
        Sort
      </MenuButton>
      <MenuList>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
