import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const register = async () => {
  return (
    <Container>
      <main className="dark:bg-dark">
        <FormWrap>
          <RegisterForm />
        </FormWrap>
      </main>
    </Container>
  );
};

export default register;
