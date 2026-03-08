"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {

if(email === "hrd@mail.com" && password === "hrd123"){
localStorage.setItem("role","admin")
router.push("/dashboard")
}

else if(email === "user@gmail.com" && password === "12345678"){
localStorage.setItem("role","user")
router.push("/dashboard")
}

else{
alert("Login gagal")
}

}

return(

<div>

<h1>Login</h1>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}