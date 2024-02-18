import FormWrap2 from "@/app/components/inputs/FormWrap2";
import AddChampionForm from "./AddChampionForm";

const AddChampions = async () => {
  return (
    <div className="dark:bg-dark">
      <div className="text-center text-6xl pt-10 font-bold  font-mono dark:text-light">
        Add Champion
      </div>
      <FormWrap2>
        <AddChampionForm />
      </FormWrap2>
    </div>
  );
};

export default AddChampions;
