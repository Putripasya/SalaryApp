export default function CutiPage(){

const data = [
{ id:1, nama:"Andi", jenis:"Cuti Tahunan", status:"Disetujui"},
{ id:2, nama:"Budi", jenis:"Cuti Sakit", status:"Menunggu"},
]

return(

<div className="p-8">

<h1 className="text-3xl font-bold text-blue-700 mb-6">
Report Cuti
</h1>

<div className="bg-white shadow rounded-xl p-6">

<table className="w-full">

<thead className="bg-blue-100">

<tr>
<th className="p-3">ID</th>
<th className="p-3">Nama</th>
<th className="p-3">Jenis Cuti</th>
<th className="p-3">Status</th>
</tr>

</thead>

<tbody>

{data.map((c)=>(
<tr key={c.id} className="border-b">

<td className="p-3">{c.id}</td>
<td className="p-3">{c.nama}</td>
<td className="p-3">{c.jenis}</td>
<td className="p-3">{c.status}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}