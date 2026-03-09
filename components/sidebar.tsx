"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {

  const [openMaster, setOpenMaster] = useState(true)
  const pathname = usePathname()

  const menuClass = (path:string) =>
    `block px-3 py-2 rounded hover:bg-blue-700 transition ${
      pathname === path ? "bg-blue-700 text-white" : "text-blue-200"
    }`

  return (

    <div className="w-64 bg-blue-900 text-white min-h-screen p-6 shadow-xl">

      <h1 className="text-2xl font-bold mb-8">
        SalaryApp
      </h1>

      {/* DATA MASTER */}

      <button
        onClick={() => setOpenMaster(!openMaster)}
        className="w-full text-left p-2 rounded hover:bg-blue-700 flex justify-between items-center"
      >

        <span>📁 Data Master</span>

        <span className={`transition-transform ${openMaster ? "rotate-180" : ""}`}>
          ▼
        </span>

      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          openMaster ? "max-h-60" : "max-h-0"
        }`}
      >

        <ul className="ml-2 mt-2 space-y-1 text-sm">

          <li>
            <Link href="/divisi" className={menuClass("/divisi")}>
              Divisi
            </Link>
          </li>

          <li>
            <Link href="/jabatan" className={menuClass("/jabatan")}>
              Jabatan
            </Link>
          </li>

          <li>
            <Link href="/karyawan" className={menuClass("/karyawan")}>
              Karyawan
            </Link>
          </li>

          <li>
            <Link href="/user" className={menuClass("/user")}>
              User
            </Link>
          </li>

          <li>
            <Link href="/konfigurasi" className={menuClass("/konfigurasi")}>
              Konfigurasi
            </Link>
          </li>

        </ul>

      </div>

      {/* PRESENSI */}

      <div className="mt-6">

        <p className="font-semibold mb-2">📅 Presensi</p>

        <Link href="/presensi" className={menuClass("/presensi")}>
          Report Presensi
        </Link>

      </div>

      {/* CUTI */}

      <div className="mt-6">

        <p className="font-semibold mb-2">📝 Cuti</p>

        <Link href="/cuti" className={menuClass("/cuti")}>
          Report Cuti
        </Link>

      </div>

      {/* GAJI */}

      <div className="mt-6">

        <p className="font-semibold mb-2">💰 Gaji</p>

        <Link href="/gaji/proses" className={menuClass("/gaji/proses")}>
          Proses Gaji
        </Link>

        <Link href="/gaji/report" className={menuClass("/gaji/report")}>
          Report Gaji
        </Link>

      </div>

    </div>

  )

}