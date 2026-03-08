"use client"

export default function Sidebar(){

const role = typeof window !== "undefined" ? localStorage.getItem("role") : ""

return(

<div style={{width:"200px",background:"#333",color:"white",padding:"20px"}}>

<h3>Menu</h3>

{role === "admin" && (

<ul>

<li>Divisi</li>
<li>Jabatan</li>
<li>Karyawan</li>
<li>User</li>

</ul>

)}

{role === "user" && (

<ul>

<li>Kehadiran</li>
<li>Cuti</li>
<li>Slip Gaji</li>

</ul>

)}

</div>

)

}