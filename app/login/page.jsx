'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Mail, KeyRound, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({ Email: '', Password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.post('/api/Login', form)
      if (res.status === 200) {
        router.push('/Dashboard')
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || 'Login failed. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-2">
      
      <div className="bg-[#083c44] text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold mb-6 font-poppins">Dr.Smile</h1>
        <img
          src="/Images/loginp1.png"
          alt="Dental"
          className="w-full max-w-sm rounded-md mb-6"
        />
        <h2 className="text-xl font-semibold text-center mb-2">
          Welcome back to Dr.smile!
        </h2>
        <p className="text-sm text-center max-w-md font-light Poppins">
          Dr. Smile Dental Clinic Is Where Your Smile Gets The Attention It
          Truly Deserves. We Deliver Modern Dental Care With A Gentle,
          Personalized Approach For All Ages.
        </p>
      </div>

      <div className="bg-white flex flex-col justify-center px-8 py-12 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl xl:text-4xl font-bold mb-2 text-gray-800 text-center font-poppins">
            log In
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center font-reddit">
            Please Enter Your Details To Sign In Your Account
          </p>

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  name="Email"
                  value={form.Email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">
                  <KeyRound size={18} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="Password"
                  value={form.Password}
                  onChange={handleChange}
                  placeholder="Enter your password..."
                  required
                  className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 focus:ring-2 focus:ring-[#083c44] outline-none"
                />
                <span
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye size={18} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
           
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-[#083c44] hover:bg-[#0a505a] text-white font-semibold py-2 px-4 rounded-md ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Log In →
            </button>
          </form>

    <Link href="/Forgotpassword">
  <div className="text-center mt-6">
    <span className="text-sm text-[#083c44] hover:underline font-medium cursor-pointer">
      Forgot Your Password?
    </span>
  </div>
</Link>


          <div className="mt-10 text-center text-sm xl:text-sm text-gray-500">
            <p>© 2025 Dr.smile</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
