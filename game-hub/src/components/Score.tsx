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
    <Badge colorScheme={color} borderRadius={"10px"} paddingX={2} paddingY={1}>
      {score}
    </Badge>
  );
};

export default Score;
