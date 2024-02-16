import Container from "@/app/components/inputs/Container";
import FormWrap from "@/app/components/inputs/FormWrap";
import AddChampionForm from "./AddChampionForm";

const AddChampions = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddChampionForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddChampions;
