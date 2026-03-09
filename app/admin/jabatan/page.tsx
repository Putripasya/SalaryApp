export default function JabatanPage(){

const data = [
{ id:1, nama:"Manager"},
{ id:2, nama:"Supervisor"},
{ id:3, nama:"Staff"},
]

return(

<div className="p-8">

<h1 className="text-3xl font-bold text-blue-700 mb-6">
Data Jabatan
</h1>
<div className="bg-white shadow-lg rounded-xl p-6">
<button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">
+ Tambah Jabatan
</button>
<table className="w-full">
<thead className="bg-blue-100">
<tr>
<th className="p-3">ID</th>
<th className="p-3">Nama Jabatan</th>
<th className="p-3">Aksi</th>
</tr>
</thead>
<tbody>
{data.map((j)=>(
<tr key={j.id} className="border-b">

<td className="p-3">{j.id}</td>
<td className="p-3">{j.nama}</td>

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