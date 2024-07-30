import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => any;
}

function Like({ onClick }: Props) {
  let [color, setColor] = useState(false);

  const toggle = () => {
    setColor(!color);
    onClick();
  };
  if (color) return <FaHeart size={40} color="#ff6b81" onClick={toggle} />;
  return <CiHeart size={50} onClick={toggle} />;
}
export default Like;
