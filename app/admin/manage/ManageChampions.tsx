"use client";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ActionBtn from "@/app/components/inputs/ActionBtn";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";

interface Champion {
  id: number;
  name: string;
  title: string;
  image_file: string;
}

const ManageChampionsForm: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [isChampiondeleted, setisChampiondeleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lolify.wheelwallet.cloud/api/champion");
        const data = await response.json();
        setChampions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const rows = champions.map((champion) => ({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image_file: champion.image_file,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 180 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "action",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-3 w-full">
          <ActionBtn
            icon={MdDelete}
            onClick={() => handleDeleteChampion(params.row.id)}
          />
        </div>
      ),
    },
  ];
  const token = Cookies.get("token");
  const handleDeleteChampion = async (id: number) => {
    try {
      await axios
        .delete(`https://lolify.wheelwallet.cloud/api/champion/${id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setisChampiondeleted(true);
          toast.success("Champion delated successfully!");
        });

      setChampions((prevChampions) =>
        prevChampions.filter((champion) => champion.id !== id)
      );
    } catch (error) {
      console.error("Error deleting champion:", error);
    }
  };

  return (
    <div className="max-w-[1150px] m-auto text-xl dark:!bg-light">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageChampionsForm;
