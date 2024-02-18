import Cookies from "js-cookie";
import Container from "../components/inputs/Container";
import FavoriteClient from "./FavoriteClient";
const favorite = async () => {
  const token = Cookies.get("token");
  return (
    <div>
      <Container>
        <FavoriteClient />
      </Container>
    </div>
  );
};
export default favorite;
