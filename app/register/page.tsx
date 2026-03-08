"use client";

import { useState } from "react";

export default function Register(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleRegister=async()=>{

const res=await fetch("/api/register",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({email,password})
});

const data=await res.json();
alert(data.message);

}

return(

<div>

<h1>Register</h1>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={handleRegister}>
Register
</button>

</div>

)

}