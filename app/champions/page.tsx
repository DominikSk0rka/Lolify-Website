import AnimatedText from "../components/animations/AnimatedText";
import Container from "../components/inputs/Container";

const champions = () => {
  return (
    <Container>
      <main>
        <div>
          <AnimatedText
            text="Choose your champion"
            className="pb-3 text-center"
          />
        </div>
      </main>
    </Container>
  );
};

export default champions;
