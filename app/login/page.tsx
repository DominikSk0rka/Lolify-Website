import Container from "../components/inputs/Container";
import FormWrap from "../components/inputs/FormWrap";
import LoginForm from "./LoginForm";

const Login = async () => {
  return (
    <Container>
      <main className="dark:bg-dark">
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </main>
    </Container>
  );
};

export default Login;
