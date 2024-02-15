import { TypeAnimation } from "react-type-animation";

const SelfWritingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "We produce food for Mice",
        5000,
        "We produce food for Hamsters",
        5000,
        "We produce food for Guinea Pigs",
        5000,
        "We produce food for Chinchillas",
        5000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
      className="dark:text-light"
    />
  );
};
export default SelfWritingText;
