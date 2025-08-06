'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function EditServicePage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    Service: '',
    Description: '',
    Image: '',
  });

  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('/api/Login');
        const res = await axios.get(`/api/Services/EditService/${id}`);
        setFormData({
          Service: res.data.Service || '',
          Description: res.data.Description || '',
          Image: res.data.Image || '',
        });
        setPreview(res.data.Image);
      } catch (err) {
        if (err.response?.status === 401) {
          router.push('/login');
        } else {
          console.error('Error:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, Image: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/Services/EditService/${id}`, formData);
      router.push(`/Dashboard/Services/Service/${id}`);
    } catch (error) {
      console.error('Failed to update service:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f8f9fa] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-gray-800">Edit Service</h2>

        <div>
          <label className="block mb-1 text-gray-600">Service Name</label>
          <input
            type="text"
            name="Service"
            value={formData.Service}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Description</label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            rows={4}
            className="w-full border px-3 py-2 rounded outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-full h-48 object-cover rounded"
            />
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c]"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => router.push(`/Dashboard/Services/Service/${id}`)}
            className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
