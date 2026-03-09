"use client"

import { useRouter } from "next/navigation"

export default function Navbar(){

  const router = useRouter()

  const handleLogout = ()=>{
    localStorage.removeItem("isLogin")
    router.push("/login")
  }

  return(

    <div className="h-16 bg-blue-700 text-white flex justify-between items-center px-6">

      <h1 className="font-bold">
        HR System
      </h1>

      <button
      onClick={handleLogout}
      className="bg-blue-500 px-3 py-1 rounded"
      >
        Logout
      </button>

    </div>

  )

}