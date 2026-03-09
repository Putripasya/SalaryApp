export default function GajiPage(){

const data = [
{ id:1, nama:"Andi", gaji:7000000},
{ id:2, nama:"Budi", gaji:5500000},
]

return(

<div className="p-8">

<h1 className="text-3xl font-bold text-blue-700 mb-6">
Proses Gaji
</h1>

<div className="bg-white shadow rounded-xl p-6">

<table className="w-full">

<thead className="bg-blue-100">

<tr>
<th className="p-3">ID</th>
<th className="p-3">Nama</th>
<th className="p-3">Gaji</th>
</tr>

</thead>

<tbody>

{data.map((g)=>(
<tr key={g.id} className="border-b">

<td className="p-3">{g.id}</td>
<td className="p-3">{g.nama}</td>
<td className="p-3">Rp {g.gaji.toLocaleString()}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}