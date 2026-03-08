import { NextResponse } from "next/server";

export async function POST(req:Request){

const {email,password}=await req.json();

if(email==="hrd@mail.com" && password==="hrd123"){

return NextResponse.json({
message:"Login Admin Berhasil",
role:"admin"
})

}

return NextResponse.json({
message:"Login gagal"
})

}