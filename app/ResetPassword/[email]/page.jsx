'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { ArrowRight, Eye, EyeOff, KeyRound, MailCheck } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  
  const { email } = useParams();
  const decodedEmail = decodeURIComponent(email); 
  console.log(decodedEmail);
  

  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/Resetpassword', {
        email:decodedEmail,
        otp: parseInt(otp, 10),
        newPassword,
      });

      setMessage(response.data.message);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/Images/FP1.png"
          alt="Dental Clinic"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#1F4750] flex flex-col items-center opacity-80 justify-center text-white text-center p-8">
          <h1 className="text-3xl font-semibold mb-2">Dr.Smile</h1>
          <p className="text-lg">Creating smiles that last a lifetime.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">Change Password</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter the OTP sent to your email and set a new password.
          </p>

          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm">OTP</label>
              <div className="flex items-center border rounded px-3 py-3">
                <MailCheck className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full outline-none text-sm"
                  placeholder="Enter the OTP received..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">New Password</label>
              <div className="flex items-center border rounded px-3 py-3">
                <KeyRound className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full outline-none text-sm"
                  placeholder="Enter new password..."
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Confirm Password</label>
              <div className="flex items-center border rounded px-3 py-3">
                <KeyRound className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full outline-none text-sm"
                  placeholder="Confirm your password..."
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1F4750] hover:bg-teal-900 text-white py-3 rounded font-semibold flex items-center justify-center gap-1 transition"
            >
              {loading ? 'Submitting...' : <>Confirm <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          {message && <p className="text-green-600 mt-4 text-center text-sm">{message}</p>}
          {error && <p className="text-red-600 mt-4 text-center text-sm">{error}</p>}

          <div className="text-center text-sm text-gray-400 mt-8">
            © 2025 Dr.Smile
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
