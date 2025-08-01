'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

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
      router.push('/Doctors');
    } catch (error) {
      console.error('Error updating doctor:', error);
      alert('Failed to update doctor.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Doctor</h2>

      <label className="block w-full h-56 bg-gray-100 mb-4 flex items-center justify-center border rounded cursor-pointer overflow-hidden">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt={doctor.Name || 'Doctor Image'}
            className="object-cover h-full w-full"
          />
        ) : (
          <span className="text-gray-500">Upload Image</span>
        )}
        <input type="file" className="hidden" onChange={handleImageUpload} />
      </label>

      <input
        type="text"
        name="Name"
        value={doctor.Name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full mb-2 px-3 py-2 border rounded"
      />

      <input
        type="text"
        name="Designation"
        value={doctor.Designation}
        onChange={handleChange}
        placeholder="Designation"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Update Doctor
      </button>
    </div>
  );
}
