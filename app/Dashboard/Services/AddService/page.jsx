'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Upload } from 'lucide-react';

export default function AddServicePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Service: '',
    Description: '',
    Image: '',
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/api/Login'); 
        if (res.status !== 200) {
          router.push('/Login');
        }
      } catch (err) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, Image: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/Services/AddServices', formData);
      router.push('/Dashboard/Services');
    } catch (error) {
      console.error('Failed to add service:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f9fafb] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4"
      >
        <div className="w-full h-52 bg-blue-50 flex items-center justify-center rounded-md relative">
          <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center text-gray-500">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-md" />
            ) : (
              <>
                <Upload className="w-8 h-8 mb-2" />
                <p className="text-sm">Upload Image</p>
              </>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
          <input
            type="text"
            name="Service"
            value={formData.Service}
            onChange={handleChange}
            placeholder="Enter service name"
            className="w-full border px-3 py-2 rounded outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            placeholder="Describe the service"
            rows={4}
            className="w-full border px-3 py-2 rounded outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#003B3B] text-white py-2 rounded hover:bg-[#005555] transition-all"
        >
          Create Service →
        </button>
      </form>
    </div>
  );
}
