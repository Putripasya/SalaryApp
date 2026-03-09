"use client"

import { useState } from "react"

export default function DivisiPage(){

const [divisi,setDivisi] = useState([
{ id:1, nama:"IT", deskripsi:"Teknologi Informasi"},
{ id:2, nama:"HRD", deskripsi:"Human Resource"},
{ id:3, nama:"Finance", deskripsi:"Keuangan"}
])

return(

<div className="p-6">

<h1 className="text-3xl font-bold text-blue-700 mb-6">
Data Divisi
</h1>

<div className="bg-white shadow-lg rounded-xl p-5">

<div className="flex justify-between mb-4">

<h2 className="font-semibold text-lg">
Daftar Divisi
</h2>

<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
+ Tambah Divisi
</button>

</div>

<table className="w-full">

<thead className="bg-blue-100 text-blue-800">

<tr>
<th className="p-3 text-left">ID</th>
<th className="p-3 text-left">Nama Divisi</th>
<th className="p-3 text-left">Deskripsi</th>
<th className="p-3 text-left">Aksi</th>
</tr>

</thead>

<tbody>

{divisi.map((item)=>(
<tr key={item.id} className="border-b hover:bg-gray-50">

<td className="p-3">{item.id}</td>
<td className="p-3">{item.nama}</td>
<td className="p-3">{item.deskripsi}</td>

<td className="p-3 flex gap-2">

<button className="bg-yellow-400 px-3 py-1 rounded">
Edit
</button>

<button className="bg-red-500 text-white px-3 py-1 rounded">
Hapus
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}