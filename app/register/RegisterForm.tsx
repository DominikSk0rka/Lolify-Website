"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";

const RegisterForm = () => {
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

    <p className="text-sm">
        Already have an account?
       <Link className="underline" href="/login">
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
 
export default RegisterForm;