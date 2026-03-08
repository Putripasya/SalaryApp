"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = () => {

localStorage.setItem("userEmail",email)
localStorage.setItem("userPassword",password)

alert("Register berhasil")

router.push("/login")

}

return(

<div>

<h1>Register</h1>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

</div>

)

}