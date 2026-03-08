"use client";

import { useState } from "react";

export default function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLogin=async()=>{

const res=await fetch("/api/login",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({email,password})
});

const data=await res.json();
alert(data.message);

}

return(

<div>

<h1>Login</h1>

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

<button onClick={handleLogin}>
Login
</button>

</div>

)

}