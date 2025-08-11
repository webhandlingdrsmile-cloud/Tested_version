'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const router = useRouter();

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

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get('/api/Booking/Addbooking');
      const data = Array.isArray(res.data) ? res.data : res.data.data || [];
      setBookings(data);
      setFilteredBookings(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (!date) {
      setFilteredBookings(bookings);
    } else {
      const filtered = bookings.filter((b) => {
        const bookingDate = new Date(b.date).toISOString().split('T')[0];
        return bookingDate === date;
      });
      setFilteredBookings(filtered);
    }
  };

  const clearFilter = () => {
    setSelectedDate('');
    setFilteredBookings(bookings);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;

    try {
      await axios.delete(`/api/Booking/Deletebooking/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
      setFilteredBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {}
  };

const toggleStatus = async (id) => {
  try {
    const { data } = await axios.get(`/api/Booking/Deletebooking/${id}`);
    const latestStatus = data.status || 'Not Consulted';

    const newStatus = latestStatus === 'Consulted' ? 'Not Consulted' : 'Consulted';

   
    await axios.put(`/api/Booking/Deletebooking/${id}`, { status: newStatus });

    setBookings((prev) =>
      prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
    );
    setFilteredBookings((prev) =>
      prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
    );

  } catch (err) {
    console.error("Failed to toggle status:", err);
  }
};


  return (
    <div className="p-4 sm:p-6">
     <Link href={`/Dashboard`}> <h2 className="text-lg font-semibold mb-4">Dashboard</h2></Link>
      <div className="mb-4 flex flex-col sm:flex-row gap-2">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
        />
        <button
          onClick={clearFilter}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full sm:w-auto"
        >
          Clear Filter
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Full Name</th>
               <th className="p-3">Age</th>
              <th className="p-3">Email Address</th>
              <th className="p-3">Phone Number</th>
               <th className="p-3">Time</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredBookings) && filteredBookings.map((booking) => (
              <tr key={booking._id} className="border-b hover:bg-gray-50 text-xs md:text-sm">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3">{booking.firstName} {booking.lastName}</td>
                <td className="p-3">{booking.age}</td>
                <td className="p-3">{booking.email}</td>
                <td className="p-3">{booking.phone}</td>
                <td className="p-3">{booking.time}</td>
                <td className="p-3">
                  {new Date(booking.date).toLocaleDateString('en-GB')}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(booking._id, booking.status || 'Not Consulted')}
                    className={`px-3 py-1 rounded text-white text-xs w-30 ${
                      booking.status === 'Consulted' ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  >
                    {booking.status || 'Not Consulted'}
                  </button>
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
