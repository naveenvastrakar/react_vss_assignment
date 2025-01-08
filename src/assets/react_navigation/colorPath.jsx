import { useParams } from "react-router-dom";

const ColorComponet = () => {
  const { colorKey } = useParams();
  console.log("colorKey", colorKey);
  return (
    <h1 style={{ color: colorKey }}>hello world</h1>
  );
};

export default ColorComponet;