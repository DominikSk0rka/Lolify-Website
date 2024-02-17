"use client";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ActionBtn from "@/app/components/inputs/ActionBtn";
import { MdDelete } from "react-icons/md";
import Heading from "@/app/components/inputs/Heading";
import axios from "axios";

interface Champion {
  id: number;
  name: string;
  roles: string;
  image_file: string;
}

const ManageChampionsForm: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lolify.fly.dev/api/champion");
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
    roles: champion.roles,
    image_file: champion.image_file,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 180 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "roles", headerName: "Role", width: 200 },
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

  const handleDeleteChampion = async (id: number) => {
    try {
      await axios.delete(`https://lolify.fly.dev/api/champion/${id}`);
      setChampions((prevChampions) =>
        prevChampions.filter((champion) => champion.id !== id)
      );
    } catch (error) {
      console.error("Error deleting champion:", error);
    }
  };

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Manage Champions" center />
      </div>

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
