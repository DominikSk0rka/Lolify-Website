"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";
import { useState } from "react";

const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const handleButtonClick = () => {
        console.log("registered");
    };

    return ( 
    <>
    <Heading title="Sign up for Lolify"/>
    <Input
    id="name"
    label="Name"
    required
    />
    
    <Input
    id="email"
    label="example@gmail.com"
    required
    />
    
    <Input
    id="password"
    label="Password"
    required
    type="password"
    />   
     
    <Input
    id="password"
    label="Repeat Password"
    required
    type="password"
    /> 
        <Button label = {isLoading ? "Loading..." : "Register"} onClick={handleButtonClick}/>
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