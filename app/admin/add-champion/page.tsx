import FormWrap2 from "@/app/components/inputs/FormWrap2";
import AddChampionForm from "./AddChampionForm";
import Container2 from "@/app/components/inputs/Container2";

const AddChampions = async () => {
  return (
    <Container2 className=" dark:!bg-dark">
      <div className="text-center text-6xl pt-10 font-bold  font-mono dark:text-light">
        Add Champion
      </div>
      <FormWrap2>
        <AddChampionForm />
      </FormWrap2>
    </Container2>
  );
};

export default AddChampions;
