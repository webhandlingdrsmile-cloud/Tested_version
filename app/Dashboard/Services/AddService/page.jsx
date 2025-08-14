'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Upload, Plus, Trash } from 'lucide-react';

export default function AddServicePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Service: '',
    Description: '',
    Image: '',
    SubServices: []
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
        router.push('/Login');
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

  // ---------- SUB SERVICE HANDLING ----------
  const addSubService = () => {
    setFormData((prev) => ({
      ...prev,
      SubServices: [
        ...prev.SubServices,
        { SubName: '', SubDescription: '', SubImage: '' }
      ]
    }));
  };

  const removeSubService = (index) => {
    setFormData((prev) => {
      const updated = [...prev.SubServices];
      updated.splice(index, 1);
      return { ...prev, SubServices: updated };
    });
  };

  const handleSubChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev.SubServices];
      updated[index][name] = value;
      return { ...prev, SubServices: updated };
    });
  };

  const handleSubImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => {
        const updated = [...prev.SubServices];
        updated[index].SubImage = reader.result;
        return { ...prev, SubServices: updated };
      });
    };
    reader.readAsDataURL(file);
  };

  // ---------- SUBMIT ----------
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
        className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 space-y-6"
      >
        {/* Main Image Upload */}
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

        {/* Service Name */}
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

        {/* Service Description */}
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

        {/* Sub Services */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Sub Services</h3>
            <button
              type="button"
              onClick={addSubService}
              className="flex items-center gap-1 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              <Plus size={16} /> Add Sub Service
            </button>
          </div>

          {formData.SubServices.map((sub, index) => (
            <div key={index} className="border p-4 rounded-lg mb-4 space-y-3 bg-gray-50">
              {/* Sub Service Image */}
              <div className="flex items-center gap-4">
                {sub.SubImage ? (
                  <img src={sub.SubImage} alt="Sub Preview" className="w-20 h-20 object-cover rounded" />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-500">No Image</div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleSubImageChange(index, e)}
                  className="text-sm"
                />
              </div>

              {/* Sub Name */}
              <input
                type="text"
                name="SubName"
                value={sub.SubName}
                onChange={(e) => handleSubChange(index, e)}
                placeholder="Sub service name"
                className="w-full border px-3 py-2 rounded outline-none"
                required
              />

              {/* Sub Description */}
              <textarea
                name="SubDescription"
                value={sub.SubDescription}
                onChange={(e) => handleSubChange(index, e)}
                placeholder="Sub service description"
                rows={2}
                className="w-full border px-3 py-2 rounded outline-none resize-none"
                required
              />

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeSubService(index)}
                className="flex items-center gap-1 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                <Trash size={16} /> Remove
              </button>
            </div>
          ))}
        </div>

        {/* Submit */}
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
