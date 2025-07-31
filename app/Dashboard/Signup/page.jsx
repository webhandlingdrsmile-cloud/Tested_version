'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    confirmPassword: '',
    Phone: '',
    employeeID: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Login'); 
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
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) return 'Invalid email address';
    if (formData.Password.length < 6) return 'Password must be at least 6 characters';
    if (formData.Password !== formData.confirmPassword) return 'Passwords do not match';
    return '';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const validationError = validateForm();
    if (validationError) return setErrorMsg(validationError);

    setLoading(true);
    try {
      const { confirmPassword, ...payload } = formData; 
      const res = await axios.post('/api/Signup', payload);
      setSuccessMsg(res.data.message);
      setTimeout(() => router.push('/login'), 1500);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-[#0f3a3e] w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Dr.Smile</h1>
        <div className="mb-6">
          <Image
            src="/Images/Loginp1.png"
            alt="Dental Care"
            width={350}
            height={250}
            className="rounded-lg"
          />
        </div>
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold mb-2">Create your account</h2>
          <p className="text-sm">
            Dr. Smile Dental Clinic is where your smile gets the attention it truly deserves.
            We deliver modern dental care with a gentle, personalized approach for all ages.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-[#00394f] mb-2">Create an Account</h2>
          {errorMsg && (
            <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">{errorMsg}</p>
          )}
          {successMsg && (
            <p className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm">
              {successMsg}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'First Name', name: 'Firstname' },
              { label: 'Last Name', name: 'Lastname' },
              { label: 'Email', name: 'Email', type: 'email' },
              { label: 'Phone', name: 'Phone' },
              { label: 'Employee ID', name: 'employeeID' },
              { label: 'Password', name: 'Password', type: 'password' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
            ].map(({ label, name, type = 'text' }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00394f] text-white font-semibold py-2 rounded-md hover:bg-[#002837] transition"
            >
              {loading ? 'Creating...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
