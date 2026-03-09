export default function KaryawanPage(){

const data = [
{ id:1, nama:"Andi", divisi:"IT", jabatan:"Programmer"},
{ id:2, nama:"Budi", divisi:"HRD", jabatan:"HR Staff"},
]

return(

<div className="p-8">
<h1 className="text-3xl font-bold text-blue-700 mb-6">
Data Karyawan
</h1>
<div className="bg-white shadow-lg rounded-xl p-6">
<button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">
+ Tambah Karyawan
</button>
<table className="w-full">
<thead className="bg-blue-100">
<tr>
<th className="p-3">ID</th>
<th className="p-3">Nama</th>
<th className="p-3">Divisi</th>
<th className="p-3">Jabatan</th>
<th className="p-3">Aksi</th>
</tr>
</thead>
<tbody>
{data.map((k)=>(
<tr key={k.id} className="border-b">
<td className="p-3">{k.id}</td>
<td className="p-3">{k.nama}</td>
<td className="p-3">{k.divisi}</td>
<td className="p-3">{k.jabatan}</td>
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