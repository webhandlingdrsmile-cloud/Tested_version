'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ServiceListPage() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Login');
      } catch (err) {
        router.push('/login');
      }
    };

    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/Services/AddServices');
        setServices(res.data.reverse());
      } catch (error) {
        console.error('Error fetching services', error);
      }
    };

    checkAuth();
    fetchServices();
  }, [router]);

  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = services.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(services.length / servicesPerPage);

  return (
    <div className="p-6 min-h-screen bg-[#f8f9fa]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-medium text-[#333]">Dashboard</h1>
        <button
          onClick={() => router.push('/Dashboard/Services/AddService')}
          className="bg-[#004d40] text-white px-4 py-2 rounded-md hover:bg-[#00695c] transition"
        >
          Add Service →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {currentServices.map((service, idx) => (
          <div
            key={idx}
            onClick={() => router.push(`/Dashboard/Services/Service/${service._id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col items-start p-4"
          >
            <img
              src={service.Image}
              alt={service.Service}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-start text-gray-800">
              {service.Service}
            </h3>
            <h3 className="text-xs font-semibold text-start text-gray-800">
              {service.Description}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <nav className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded border disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-[#004d40] text-white' : 'bg-white text-black'
              } border`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded border disabled:opacity-50"
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
}
