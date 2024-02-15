import AnimatedText from "../components/AnimatedText";
import Container from "../components/Container";

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
