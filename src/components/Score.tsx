import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  let color =
    score >= 500
      ? "green"
      : score >= 400
      ? "blue"
      : score >= 300
      ? "yellow"
      : "red";
  return (
    <Badge
      colorScheme={color}
      borderRadius={"8px"}
      margin={1}
      paddingX={2}
      paddingY={0.5}
    >
      {score}
    </Badge>
  );
};

export default Score;
