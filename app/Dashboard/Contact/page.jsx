'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function ContactsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Login');
      } catch {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('/api/Contact');
        if (res.data.success && res.data.contacts) {
          setContacts(res.data.contacts);
        }
      } catch (err) {
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const res = await axios.delete(`/api/Contact/DeleteContact/${id}`);
      if (res.data.success) {
        const updatedContacts = { ...contacts };
        delete updatedContacts[id];
        setContacts(updatedContacts);
      } else {
        alert(res.data.message || 'Failed to delete');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    } 
  };

  const filteredContacts = Object.entries(contacts).filter(([id, contact]) => {
    if (!filterDate) return true;
    const contactDate = dayjs(contact.createdAt).format('YYYY-MM-DD');
    return contactDate === filterDate;
  });

  if (loading) {
    return <p className="p-4">Loading contacts...</p>;
  }

  return (
    <div className="p-4 sm:p-6">
     <Link href={`/Dashboard`}>
      <h1 className="text-lg sm:text-xl font-semibold mb-4">Dashboard</h1>
     </Link>


      <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <label htmlFor="date-filter" className="text-sm font-medium">
          Filter by Date:
        </label>
        <div className="flex gap-2">
          <input
            id="date-filter"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded px-2 py-1 text-sm w-full sm:w-auto"
          />
          {filterDate && (
            <button
              onClick={() => setFilterDate('')}
              className="text-blue-500 text-sm underline"
            >
              Clear
            </button>
          )}
        </div>
      </div>

 <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <input type="checkbox" />
        </th> */}
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Full Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email Address
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Phone Number
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Needs
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {filteredContacts.length > 0 ? (
        filteredContacts.map(([id, contact]) => (
          <tr key={id} className="hover:bg-gray-50 transition-colors">
            {/* <td className="px-6 py-4 text-center">
              <input type="checkbox" />
            </td> */}
            <td className="px-6 py-4 text-sm text-gray-900">{contact.Name}</td>
            <td className="px-6 py-4 text-sm text-gray-900 break-words">{contact.Email}</td>
            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
              {contact.Phone
                ? `+91 ${String(contact.Phone).padStart(10, '0')}`
                : ''}
            </td>
            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
              {dayjs(contact.createdAt).format('DD/MM/YYYY')}
            </td>
             <td className="px-6 py-4 text-sm text-gray-900 break-words">{contact.Needs}</td>
            <td className="px-6 py-4 text-center">
              <button
                onClick={() => handleDelete(id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="6"
            className="px-6 py-4 text-center text-gray-500 text-sm"
          >
            No contacts found for this date.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
 
    </div>
  );
}
