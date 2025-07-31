'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/Forgotpassword', { email });
      if (response.data.message) {
        router.push(`/ResetPassword?email=${encodeURIComponent(email)}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:flex min-h-screen font-sans">
   
    <div className=" lg:flex w-full lg:w-1/2 h-64 lg:h-auto relative">
  <img
    src="/Images/FP1.png"
    alt="Dental Clinic"
    className="w-full h-full object-cover opacity-70"
  />
  <div className="absolute inset-0 bg-[#1F4750] flex flex-col items-center justify-center opacity-80 text-white text-center p-8">
    <h1 className="text-3xl font-semibold mb-2">Dr.Smile</h1>
    <p className="text-lg">Creating smiles that last a lifetime.</p>
  </div>
</div>


      <div className="w-full lg:w-1/2 flex items-center justify-center text-center bg-white p-8">
        <div className="w-full max-w-sm mx-auto py-6 ">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-7">Forgot Password</h2>
          <p className="text-sm text-black mb-6 max-w-sm">
            Reset Your Password Easily By Following The Instructions Sent To Your Email.
          </p>

          <form onSubmit={handleSendOTP} className="space-y-10">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F4750]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1F4750] hover:bg-teal-800 text-white py-3 rounded-md font-medium transition-all"
            >
              {loading ? 'Sending OTP...' : 'Send OTP →'}
            </button>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </form>

          <footer className="mt-10 text-center text-sm text-gray-400">
            © 2025 Dr.smile <br />
            <a href="#" className="hover:underline">Privacy Policy</a> ·{' '}
            <a href="#" className="hover:underline">Terms</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
