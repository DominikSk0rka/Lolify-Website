import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
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
