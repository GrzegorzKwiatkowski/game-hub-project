import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"10px"}
      paddingBottom={"0px"}
    >
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
