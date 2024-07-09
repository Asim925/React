import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandedText = ({ children, maxChars = 100 }: Props) => {
  if (children.length < maxChars) return <div>{children}</div>;
  const text = children.substring(0, maxChars) + "...";

  let [state, setState] = useState(true);

  let handleClick = () => {
    setState(!state);
  };
  return (
    <>
      {state ? text : children + "..."}
      <button onClick={handleClick}>{state ? "More" : "Less"}</button>
    </>
  );
};

export default ExpandedText;
