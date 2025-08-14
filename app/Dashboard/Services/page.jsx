'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Link href={`/Dashboard`}>
          <h1 className="text-xl font-medium text-[#333] cursor-pointer hover:underline">
            Dashboard
          </h1>
        </Link>
        <button
          onClick={() => router.push('/Dashboard/Services/AddService')}
          className="bg-[#004d40] text-white px-4 py-2 rounded-md hover:bg-[#00695c] transition"
        >
          Add Service →
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {currentServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Main Image */}
            <img
              src={service.Image}
              alt={service.Service}
              className="w-full h-48 object-cover"
            />

            {/* Main Info */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{service.Service}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{service.Description}</p>

              {/* Sub Services */}
              {service.SubServices && service.SubServices.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Sub Services:
                  </h4>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {service.SubServices.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex-shrink-0 w-28 bg-gray-50 rounded-lg shadow-sm border p-2"
                      >
                        {sub.SubImage && (
                          <img
                            src={sub.SubImage}
                            alt={sub.SubName}
                            className="w-full h-16 object-cover rounded"
                          />
                        )}
                        <p className="text-xs font-medium mt-1 text-center line-clamp-2">
                          {sub.SubName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View Button */}
              <button
                onClick={() => router.push(`/Dashboard/Services/Service/${service._id}`)}
                className="mt-4 bg-[#004d40] text-white py-1 px-3 rounded text-sm hover:bg-[#00695c]"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
                currentPage === i + 1
                  ? 'bg-[#004d40] text-white'
                  : 'bg-white text-black'
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
