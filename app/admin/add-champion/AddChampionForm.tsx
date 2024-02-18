"use client";
import Button from "@/app/components/inputs/Button";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const AddChampionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isChampionCreated, setisChampionCreated] = useState(false);
  const Horizontal = () => {
    return <hr className="w-[30% mt-5 mb-5] border border-slate-300" />;
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      roles: [],
      image_file: "",
      title: "",
      q_name: "",
      q_image_file: "",
      w_name: "",
      w_image_file: "",
      e_name: "",
      e_image_file: "",
      r_name: "",
      r_image_file: "",
      passive_name: "",
      passive_image_file: "",
      skin_1_image_file: "",
      skin_2_image_file: "",
      skin_3_image_file: "",
      skin_4_image_file: "",
    },
  });

  const roles = [
    { id: 1, name: "TOP" },
    { id: 2, name: "JUNGLE" },
    { id: 3, name: "MID" },
    { id: 4, name: "ADC" },
    { id: 5, name: "SUPPORT" },
  ];

  useEffect(() => {
    if (isChampionCreated) {
      reset();
      setValue("file", null);
      setisChampionCreated(false);
    }
  }, [isChampionCreated, reset, setValue]);

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
      .then((response) => {
        setisChampionCreated(true);
        toast.success("Champion added successfully!");
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
          if (responseData.q_name) {
            setValidationErrors({ name: responseData.q_name });
            toast.error(`Wrong data ${responseData.q_name}`);
          }
          if (responseData.w_name) {
            setValidationErrors({ name: responseData.w_name });
            toast.error(`Wrong data ${responseData.w_name}`);
          }
          if (responseData.e_name) {
            setValidationErrors({ name: responseData.e_name });
            toast.error(`Wrong data ${responseData.e_name}`);
          }
          if (responseData.r_name) {
            setValidationErrors({ name: responseData.r_name });
            toast.error(`Wrong data ${responseData.r_name}`);
          }
          if (responseData.passive_name) {
            setValidationErrors({ name: responseData.passive_name });
            toast.error(`Wrong data ${responseData.passive_name}`);
          }

          if (responseData.q_image_file) {
            setValidationErrors({ name: responseData.q_image_file });
            toast.error(`Wrong data ${responseData.q_image_file}`);
          }
          if (responseData.w_image_file) {
            setValidationErrors({ name: responseData.w_image_file });
            toast.error(`Wrong data ${responseData.w_image_file}`);
          }
          if (responseData.e_image_file) {
            setValidationErrors({ name: responseData.e_image_file });
            toast.error(`Wrong data ${responseData.e_image_file}`);
          }
          if (responseData.r_image_file) {
            setValidationErrors({ name: responseData.r_image_file });
            toast.error(`Wrong data ${responseData.r_image_file}`);
          }
          if (responseData.passive_image_file) {
            setValidationErrors({ name: responseData.passive_image_file });
            toast.error(`Wrong data ${responseData.passive_image_file}`);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    console.log("produkt data", data);
  };

  return (
    <div>
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
      <div className="text-center">
        <Horizontal />
        <label htmlFor="roles" className="text-2xl">
          Roles
        </label>
        <div className="flex flex-row items-center justify-between">
          {roles.map((role) => (
            <div key={role.id} className="flex items-center mr-2">
              <input
                type="checkbox"
                id={`role${role.id}`}
                {...register(`roles.${role.id}`)}
              />
              <label htmlFor={`role${role.id}`} className="ml-2">
                {role.name}
              </label>
            </div>
          ))}
        </div>
        <Horizontal />
        <div>
          <div className="text-2xl">Select Main Image</div>
          <div className="pt-5 pb-5 text-center">
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
          </div>
        </div>

        <div className="flex">
          <Input
            id="q_name"
            label="Q name"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <input
            type="file"
            id="q_image_file"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                setValue("q_image_file", file);
              }
            }}
          />
        </div>
        <div className="flex">
          <Input
            id="w_name"
            label="W name"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <input
            type="file"
            id="w_image_file"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                setValue("w_image_file", file);
              }
            }}
          />
        </div>

        <div className="flex">
          <Input
            id="e_name"
            label="E name"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <input
            type="file"
            id="e_image_file"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                setValue("e_image_file", file);
              }
            }}
          />
        </div>
        <div className="flex">
          <Input
            id="r_name"
            label="R name"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <input
            type="file"
            id="r_image_file"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                setValue("r_image_file", file);
              }
            }}
          />
        </div>
        <div className="flex">
          <Input
            id="passive_name"
            label="Passive"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <input
            type="file"
            id="passive_image_file"
            onChange={(event) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                setValue("passive_image_file", file);
              }
            }}
          />
        </div>
        <div className="pt-5">
          <div className="flex flex-col items-center">
            Skin 1
            <input
              type="file"
              id="skin_1_image_file"
              onChange={(event) => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  setValue("skin_1_image_file", file);
                }
              }}
            />
          </div>
          <Horizontal />
          <div className="flex flex-col items-center">
            Skin 2
            <input
              type="file"
              id="skin_2_image_file"
              onChange={(event) => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  setValue("skin_2_image_file", file);
                }
              }}
            />
          </div>
          <Horizontal />
          <div className="flex flex-col items-center">
            Skin 3
            <input
              type="file"
              id="skin_3_image_file"
              onChange={(event) => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  setValue("skin_3_image_file", file);
                }
              }}
            />
          </div>
          <Horizontal />
          <div className="flex flex-col items-center pb-5">
            Skin 4
            <input
              type="file"
              id="skin_4_image_file"
              onChange={(event) => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  setValue("skin_3_image_file", file);
                }
              }}
            />
          </div>
        </div>
      </div>

      <Button
        label={isLoading ? "Loading..." : "Add"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default AddChampionForm;
