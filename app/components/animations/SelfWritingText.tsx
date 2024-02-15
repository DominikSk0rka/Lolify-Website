import { TypeAnimation } from "react-type-animation";

const SelfWritingText = () => {
  return (
    <div className="text-center font-mono">
      <TypeAnimation
        sequence={[
          "I bring warmth to the hearts...",
          3000,
          "I bring joy...",
          3000,
          "I bring happiness...",
          3000,
          "Who am I?",
          1000,
          "I am Leauge of Legends.",
          100000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
        className="dark:text-light"
      />
    </div>
  );
};
export default SelfWritingText;
