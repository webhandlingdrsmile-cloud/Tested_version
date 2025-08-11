'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function QuickAppointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    time: '',
    date: '',
  });

  const times = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM',
    '11:00 PM', '11:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      setFormData({ ...formData, [name]: value.replace(/\D/g, '') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        age: Number(formData.age),
        date: formData.date,
      };

      await axios.post('/api/Booking/Addbooking', payload);
      alert('Appointment booked successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        time: '',
        date: '',
      });
    } catch (error) {
      console.error(error);
      alert('Failed to book appointment.');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen mx-auto overflow-x-hidden">
      <div className="bg-[#0d3b36] text-white p-6 sm:p-12 flex flex-col justify-between relative">
        <div>
          <Link href={`/`}>
            <button className="text-white text-xl mb-6">←</button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Dr.Smile</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Easy Appointment Booking <br /> Dr. Smile Dental Care.
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            Easily Schedule Your Dental Appointments With Dr. Smile Dental Care.
            Our Seamless Booking Process Ensures Quick Access To Expert Care,
            Helping You Achieve A Healthier, Brighter Smile Without Any Hassle.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30">
          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            A Dental Doctor Restores More Than Just Smiles — They Rebuild
            Confidence, Relieve Pain, And Promote Lasting Oral Health With
            Precision, Care, And Compassion, One Patient And One Tooth At A
            Time.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="/dentist.jpg"
              alt="Ramisa Sajana"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base">Ramisa Sajana</p>
              <p className="text-xs sm:text-sm text-gray-300">Cosmetic Dentistry</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fef9f8] p-6 sm:p-12 flex items-center">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Quick Appointment</h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Easily Schedule Your Dental Visit With Our Quick Appointment Form.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-3 rounded-md w-full" required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-3 rounded-md w-full" required />
          </div>

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-3 rounded-md w-full mb-4" required />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="tel" name="phone" placeholder="+91 0000000000" value={formData.phone} onChange={handleChange} className="border p-3 rounded-md w-full" required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-3 rounded-md w-full" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <select name="time" value={formData.time} onChange={handleChange} className="border p-3 rounded-md w-full" required>
              <option value="">Select Time</option>
              {times.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-3 rounded-md w-full" required />
          </div>

          <button type="submit" className="bg-[#164e43] text-white px-6 py-3 rounded-md hover:bg-[#0d3b36] transition w-full sm:w-auto">
            Book Appointment →
          </button>
        </form>
      </div>
    </div>
  );
}
