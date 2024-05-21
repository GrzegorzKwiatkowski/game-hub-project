import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchImput from "./SearchImput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchImput></SearchImput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
