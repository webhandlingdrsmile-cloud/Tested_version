'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { FiEdit2, FiUpload, FiArrowLeft } from 'react-icons/fi';

export default function EditDoctorPage() {
  const router = useRouter();
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
    Name: '',
    Designation: '',
    Image: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`/api/Doctors/EditDoctor/${id}`);
        setDoctor(res.data);
        setImagePreview(res.data.Image);
      } catch (err) {
        console.error('Error fetching doctor:', err);
      }
    };

    if (id) fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setDoctor((prev) => ({ ...prev, Image: reader.result }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(`/api/Doctors/EditDoctor/${id}`, doctor);
      alert('Doctor updated successfully!');
      router.push('/Dashboard/Doctors');
    } catch (error) {
      console.error('Error updating doctor:', error);
      alert('Failed to update doctor.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <div className="bg-white shadow-sm px-6 py-4 flex items-center gap-2">
        <button onClick={() => router.back()} className="text-black text-lg">
          <FiArrowLeft />
        </button>
        <h1 className="text-md font-semibold">Dashboard</h1>
      </div>
      <div className="flex justify-center items-center px-4 py-10">
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
    
          <div className="relative mb-6">
            <label className="block h-96 rounded-md overflow-hidden cursor-pointer bg-gray-100">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Doctor"
                  className="w-full h-full bg-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Upload Image
                </div>
              )}
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
            <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md">
              <FiUpload className="text-gray-600" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 font-medium mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="Name"
                value={doctor.Name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 pr-10 text-sm"
              />
              <FiEdit2 className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 font-medium mb-1">Designation</label>
            <div className="relative">
              <input
                type="text"
                name="Designation"
                value={doctor.Designation}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 pr-10 text-sm"
              />
              <FiEdit2 className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
          <button
            onClick={handleUpdate}
            className="w-full bg-[#0f3d3e] text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
