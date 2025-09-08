'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function ViewServicePage() {
  const { id } = useParams();
  const router = useRouter();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAndFetch = async () => {
      try {
        await axios.get('/api/Login');

        const res = await axios.get(`/api/Services/EditService/${id}`);
        setService(res.data);
      } catch (err) {
        if (err.response?.status === 401) {
          router.push('/login');
        } else {
          console.error('Failed to fetch service:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      checkAndFetch();
    }
  }, [id, router]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/Services/EditService/${service._id}`);
      router.push('/Dashboard/Services');
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Failed to load service.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center relative items-center bg-[#f8f9fa] p-4">
      <Link href={`/Dashboard/Services`} className="absolute left-3 top-5">
        <h1 className="text-lg font-medium text-[#333]">Services</h1>
      </Link>

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <img
          src={service.Image}
          alt={service.Service || 'Service Image'}
          className="w-full h-56 object-cover rounded-md mb-6"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">{service.Service}</h2>
        <p className="text-sm text-gray-600 mb-6">{service.Description}</p>

      {service.SubServices && service.SubServices.length > 0 && (
  <div className="mt-4">
    <h4 className="text-sm font-semibold text-gray-700 mb-2">
      Sub Services:
    </h4>
    <div className="space-y-3">
      {service.SubServices.map((sub, sIdx) => (
        <div
          key={sIdx}
          className="flex items-center gap-3 bg-gray-50 rounded-lg shadow-sm border p-3"
        >
          {sub.SubImage && (
            <img
              src={sub.SubImage}
              alt={sub.SubName}
              className="w-16 h-16 object-cover rounded"
            />
          )}
          <p className="text-sm font-medium text-gray-800">
            {sub.SubName}
          </p>
        </div>
      ))}
    </div>
  </div>
)}


        <div className="flex justify-between mt-6">
          <button
            onClick={() =>
              router.push(`/Dashboard/Services/EditService/${service._id}`)
            }
            className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c]"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
