import ManageChampionsForm from "./ManageChampions";
import Container2 from "@/app/components/inputs/Container2";

const ManageChampions = async () => {
  return (
    <Container2 className=" dark:!bg-dark dark:text-light w-full h-full ">
      <div className="text-center text-6xl pt-10 font-bold font-mono pb-10">
        Manage Champions
      </div>
      <ManageChampionsForm />
    </Container2>
  );
};

export default ManageChampions;
