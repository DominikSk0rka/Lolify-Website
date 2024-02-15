"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const RegisterForm = () => {

  const router = useRouter();
    useEffect(() => {
      const token = Cookies.get('token');
      if (token) {
          router.push('/');
      }
  }, []);


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
       axios
        .post("https://lolify.fly.dev/api/login", {
          email: data.email,
          password: data.password,
        })
        .then((loginResponse) => {
          toast.success("Login successful", loginResponse.data);
          Cookies.set('token', loginResponse.data.access_token, { expires: 1 / 24 });
          router.push("/");
        })
        .catch((loginError) => {
          console.error("Login error:", loginError);
        });
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        const responseData = error.response.data;
    
        if (responseData.email) {
            setValidationErrors({ email: responseData.email });
            toast.error(`Registration failed: ${responseData.email}`);
        }
    
        if (responseData.password) {
            setValidationErrors({ password: responseData.password });
            toast.error(`Registration failed: ${responseData.password}`);
        }
    
        if (responseData.password_confirmation) {
            setValidationErrors({ password_confirmation: responseData.password_confirmation });
            toast.error(`Registration failed: ${responseData.password_confirmation}`);
        }
    
        if (responseData.name) {
            setValidationErrors({ name: responseData.name });
            toast.error(`Registration failed: ${responseData.name}`);
        }
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