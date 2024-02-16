import AnimatedText from "../components/animations/AnimatedText";
import Container from "../components/inputs/Container";

const champions = async () => {
  return (
    <Container>
      <main>
        <AnimatedText
          text="Choose your champion"
          className="pb-3 text-center"
        />
      </main>
    </Container>
  );
};

export default champions;
