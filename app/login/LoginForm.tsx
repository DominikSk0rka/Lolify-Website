"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";
import { useState } from "react";

const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const handleButtonClick = () => {
        console.log("logged in");
    };

    return ( 
    <>
    <Heading title="Sign on to Lolify"/>
    <Input
    id="email"
    label="E-mail"
    required
    />
    
    <Input
    id="password"
    label="Password"
    required
    type="password"
    />      
    <Button label = {isLoading ? "Loading..." : "Log in"} onClick={handleButtonClick}/>

    <p className="text-sm">
       You do not have an account?
       <Link className="underline" href="/register">
       &nbsp;sign in 
       </Link> 
    </p>

        <div className="gap-2 flex flex-center">
                <Button
                outline
                label="Continue with Google"
                onClick={() => {("google")}}
                />
                <Button
                outline
                label="Continue with Facebook"
                onClick={() => {}}
                />
        </div>
    </> 
    
    );
}
 
export default LoginForm;