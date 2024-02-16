"use client";
import Button from "@/app/components/inputs/Button";
import Heading from "@/app/components/inputs/Heading";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const AddChampionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      roles: [],
      image_file: "",
    },
  });

  const roles = [
    { id: 1, name: "TOP" },
    { id: 2, name: "JUNGLE" },
    { id: 3, name: "MID" },
    { id: 4, name: "ADC" },
    { id: 5, name: "SUPPORT" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.roles = Object.entries(data.roles)
      .filter(([key, value]) => value)
      .map(([key]) => Number(key.replace("role", "")));

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const token = Cookies.get("token");
    axios
      .post("https://lolify.fly.dev/api/champion", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          const responseData = error.response.data;

          if (responseData.name) {
            setValidationErrors({ name: responseData.name });
            toast.error(`Wrong data ${responseData.name}`);
          }

          if (responseData.title) {
            setValidationErrors({ title: responseData.title });
            toast.error(`Wrong data ${responseData.title}`);
          }

          if (responseData.description) {
            setValidationErrors({
              description: responseData.description,
            });
            toast.error(`Wrong data ${responseData.description}`);
          }

          if (responseData.image_file) {
            setValidationErrors({ name: responseData.image_file });
            toast.error(`Wrong data ${responseData.image_file}`);
          }
          if (responseData.roles) {
            setValidationErrors({ name: responseData.roles });
            toast.error(`Wrong data ${responseData.roles}`);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    console.log("produkt data", data);
  };

  return (
    <>
      <Heading title="Add Champion" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
      />

      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <TextArea
        id="description"
        label="Opis"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <input
        type="file"
        id="image_file"
        onChange={(event) => {
          if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setValue("image_file", file);
          }
        }}
      />
      {roles.map((role) => (
        <div key={role.id}>
          <input
            type="checkbox"
            id={`role${role.id}`}
            {...register(`roles.${role.id}`)}
          />
          <label htmlFor={`role${role.id}`}>{role.name}</label>
        </div>
      ))}
      <Button
        label={isLoading ? "Loading..." : "Add"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddChampionForm;
