'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function ViewServicePage() {
  const { id } = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);

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
          console.error('Error:', err);
        }
      }
    };

    checkAndFetch();
  }, [id, router]);

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f8f9fa] p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <img
          src={service.Image}
          alt={service.Service}
          className="w-full h-56 object-cover rounded-md mb-6"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">{service.Service}</h2>
        <p className="text-sm text-gray-600 mb-6">{service.Description}</p>

        <div className="flex justify-between">
          <button
            onClick={() => router.push(`/Dashboard/Services/EditService/${service._id}`)}
            className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c]"
          >
            Edit
          </button>
          <button
            onClick={async () => {
              try {
                await axios.delete(`/api/Services/AddServices/${service._id}`);
                router.push('/dashboard/Services');
              } catch (error) {
                console.error('Failed to delete', error);
              }
            }}
            className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
