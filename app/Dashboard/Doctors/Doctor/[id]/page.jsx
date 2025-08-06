'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function DoctorDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`/api/Doctors/EditDoctor/${id}`);
        setDoctor(res.data);
      } catch (error) {
        console.error('Error loading doctor:', error);
      }
    };

    if (id) fetchDoctor();
  }, [id]);

  const handleEdit = () => {
    router.push(`/Dashboard/Doctors/EditDoctor/${id}`);
  };

  const handleDelete = async () => {
    const confirmDelete = confirm('Are you sure you want to delete this doctor?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/Doctors/EditDoctor/${id}`);
      router.push('/Dashboard/Doctors');
    } catch (error) {
      console.error('Failed to delete doctor:', error);
    }
  };

  if (!doctor) return <p className="text-center mt-10">Loading doctor details...</p>;

return (
  <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-4 relative">
    <button
      onClick={() => router.back()}
      className="absolute top-6 left-6 text-[#00394f] font-semibold px-4 py-2  transition"
    >
      ← Back
    </button>
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-auto text-start">
      <img
        src={doctor.Image}
        alt={doctor.Name}
        className="w-auto h-96 bg-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{doctor.Name}</h2>
      <p className="text-gray-500 text-sm mb-4">{doctor.Designation}</p>

      <div className="flex justify-start gap-4 mt-4">
        <button
          onClick={handleEdit}
          className="bg-[#0f3d3e] text-white px-5 py-2 rounded-md hover:opacity-90"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

}
