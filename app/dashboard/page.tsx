import Sidebar from "@/components/sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-blue-800">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-600">
          Selamat datang di sistem manajemen karyawan.
        </p>
      </div>

    </div>
  );
}