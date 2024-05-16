import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Osaka-colored.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} height={"50px"}></Image>
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
