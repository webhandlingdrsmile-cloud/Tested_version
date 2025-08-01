'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddDoctorPage() {
  const router = useRouter();

  const [doctor, setDoctor] = useState({
    Name: '',
    Designation: '',
    Image: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Login');
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    setDoctor((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

  const handleSubmit = async () => {
    try {
      await axios.post('/api/Doctors/Adddoctors', doctor);
      alert('Doctor Created Successfully');
      router.push('/Dashboard');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-6">
      <div className="mb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm font-medium text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10">
        <div className="flex justify-center mb-6">
          <label className="relative w-full aspect-[4/3] sm:h-96 bg-blue-50 rounded-md border border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition overflow-hidden">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="bg-cover w-auto h-full rounded-md"
              />
            ) : (
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0l-4 4m4-4l4 4m5 8h4m0 0v-4m0 4l-4-4"
                />
              </svg>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="Name"
              value={doctor.Name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              name="Designation"
              value={doctor.Designation}
              onChange={handleChange}
              placeholder="Cosmetic Dentistry"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-900 text-white text-sm py-3 rounded-md hover:bg-teal-800 transition flex justify-center items-center gap-2"
          >
            Create Doctor →
          </button>
        </div>
      </div>
    </div>
  );
}
