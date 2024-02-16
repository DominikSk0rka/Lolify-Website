import Container from "@/app/components/inputs/Container";
import FormWrap from "@/app/components/inputs/FormWrap";
import AddChampionForm from "./AddChampionForm";

const AddChampions = async () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <AddChampionForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddChampions;
