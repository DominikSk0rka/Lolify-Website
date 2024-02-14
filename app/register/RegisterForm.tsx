"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});



    const {register, handleSubmit, 
        formState: {errors},} = useForm<FieldValues>({
       defaultValues: {
           name: "",
           email: "",
           password: "",
           password_confirmation: "",
       },
   });

   const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);
    console.log(data)
    axios
    .post("https://lolify.fly.dev/api/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      toast.success("Registration successful", response.data);
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        setValidationErrors(error.response.data);
        console.log(validationErrors);
        toast.error(`Registration failed: ${error.response.data.email}`);
        toast.error(`Registration failed: ${error.response.data.password}`);
        toast.error(`Registration failed: ${error.response.data.password_confirmation}`);
        toast.error(`Registration failed: ${error.response.data.name}`);
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
}


    return ( 
    <>
    <Heading title="Sign up for Lolify"/>
    <Input
    id="name"
    label="Name"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    
    <Input
    id="email"
    label="example@gmail.com"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    
    <Input
    id="password"
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    type="password"
    />   
     
    <Input
    id="password_confirmation"
    label="Repeat Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    type="password"
    /> 
        <Button label = {isLoading ? "Loading..." : "Register"} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">
        Already have an account?
       <Link className="underline" href="/login">
       &nbsp;sign in 
       </Link> 
    </p>
    </> 
    
    );
}
 
export default RegisterForm;