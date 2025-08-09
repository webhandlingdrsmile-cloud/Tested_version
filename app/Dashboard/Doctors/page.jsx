'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function DoctorListPage() {
  const router = useRouter();
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Login');
      } catch (err) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('/api/Doctors/Adddoctors');
        setDoctors(res.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(doctors.length / perPage);
  const startIdx = (currentPage - 1) * perPage;
  const paginatedDoctors = doctors.slice(startIdx, startIdx + perPage);

  return (
    <div className="min-h-screen bg-white p-6 ">
      <div className="flex justify-between items-center mb-6">
      <Link href={`/Dashboard`}>
        <button
         
          className="text-[#00394f] text-xs md:text-xl font-semibold md:px-4 py-2 rounded-md  transition"
        >
          ← Back to Dashboard
        </button>
      </Link>
        <Link href="/Dashboard/Doctors/AddDoctor">
          <button className="bg-[#00394f] hover:bg-[#002837] text-xs md:text-md text-white px-4 py-2 rounded-md flex items-center gap-2">
            Add Doctor →
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6  mx-auto">
        {paginatedDoctors.map((doctor) => (
          <Link
            key={doctor._id}
            href={`/Dashboard/Doctors/Doctor/${doctor._id}`}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-start text-start cursor-pointer hover:shadow-lg transition w-[280px] mx-auto"
          >
            <img
              src={doctor.Image}
              alt={doctor.Name}
              className="w-[280px] h-[280px] object-cover rounded-md mb-4"
            />
            <p className="font-semibold">{doctor.Name}</p>
            <p className="text-sm text-gray-500">{doctor.Designation}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === idx + 1 ? 'bg-[#00394f] text-white' : ''
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
