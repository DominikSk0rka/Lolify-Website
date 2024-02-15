"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';


const LoginForm = () => {

    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');
      if (token) {
          router.push('/');
      }
  }, []);

    const [isLoading, setIsLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [token, setToken] = useState({});
    const {register, handleSubmit, 
        formState: {errors},} = useForm<FieldValues>({
       defaultValues: {
           email: "",
           password: "",
       },
   });

   const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);
    console.log(data)
    axios
    .post("https://lolify.fly.dev/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      toast.success("Login successful", response.data);
      setToken(response.data.access_token)
      console.log(token)
      Cookies.set('token', response.data.access_token, { expires: 1/24 });
      router.push("/");
      console.log('Token z sesji:', Cookies.get('token'));
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        setValidationErrors(error.response.data);
        console.log(validationErrors);
        toast.error("These credetials don't match our records");
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
}



    return ( 
    <>
    <Heading title="Sign on to Lolify"/>
    <Input
    id="email"
    label="E-mail"
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
    <Button label = {isLoading ? "Loading..." : "Log in"} onClick={handleSubmit(onSubmit)}/>

    <p className="text-sm">
       You do not have an account?
       <Link className="underline" href="/register">
       &nbsp;sign up 
       </Link> 
    </p>
    </> 
    
    );
}
 
export default LoginForm;