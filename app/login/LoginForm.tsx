"use client";

import Input from "../components/inputs/Input";
import Link from "next/link";
import Button from "../components/inputs/Button";
import Heading from "../components/inputs/Heading";

const LoginForm = () => {
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