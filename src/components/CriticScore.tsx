import { Badge, HStack, Image } from "@chakra-ui/react";
import metacritic from "../assets/metacritic.png";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <HStack>
      <Image src={metacritic} boxSize={7}></Image>
      <Badge colorScheme={color} fontSize={20} borderRadius={5} paddingX={2}>
        {score}
      </Badge>
    </HStack>
  );
};

export default CriticScore;
