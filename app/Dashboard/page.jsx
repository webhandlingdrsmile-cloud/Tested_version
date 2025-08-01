'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';

import {
  FaUsers,
  FaPhoneAlt,
  FaCalendarAlt,
  FaTooth,
  FaUserMd,
  FaNewspaper,
  FaTachometerAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import { MdSupervisorAccount } from "react-icons/md";

const navItems = [
  { label: 'Levels', icon: FaTachometerAlt, href: '/dashboard/levels' },
  { label: 'Enquiry', icon: FaPhoneAlt, href: '/dashboard/enquiry' },
  { label: 'Bookings', icon: FaCalendarAlt, href: '/dashboard/bookings' },
  { label: 'Doctors', icon: FaUserMd, href: '/Dashboard/Doctors' },
  { label: 'Services', icon: FaTooth, href: '/dashboard/services' },
  { label: 'Blogs', icon: FaNewspaper, href: '/dashboard/blogs' },
  { label: 'Create Account', icon: MdSupervisorAccount, href: '/Dashboard/Signup' },
];

const statCards = [
  { title: 'Leads', icon: FaUsers, count: 40 },
  { title: 'Contact', icon: FaPhoneAlt, count: 40 },
  { title: 'Booking', icon: FaCalendarAlt, count: 40 },
  { title: 'Services', icon: FaTooth, count: 40 },
  { title: 'Doctors', icon: FaUserMd, count: 40 },
  { title: 'Blogs', icon: FaNewspaper, count: 40 },
];

export default function DashboardPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleLogout = async () => {
    try {
      await axios.delete('/api/Login');
      router.push('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <aside
        className={clsx(
          'bg-white shadow-xl w-64 p-4 flex-col z-30 fixed md:static h-full top-0 left-0 transition-transform duration-300',
          isSidebarOpen ? 'flex' : 'hidden md:flex'
        )}
      >
        <div className="p-4 font-bold text-xl text-[#00394f]">Dr.Smile</div>
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={clsx(
                'flex items-center px-4 py-4 rounded-md text-sm font-medium',
                pathname === item.href
                  ? 'bg-[#00394f] text-white shadow'
                  : 'text-gray-700 hover:text-white hover:bg-[#123D47]'
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          onClick={handleLogout}
          className="mt-auto px-4 py-4 text-sm text-red-600 font-semibold cursor-pointer hover:underline"
        >
          <FaSignOutAlt className="inline-block mr-2 h-4 w-4" />
          Log Out
        </div>
      </aside>
      <div className="flex flex-col flex-1 h-full">
        <div className="md:hidden bg-white border-b flex items-center justify-between px-4 py-3 sticky top-0 z-20">
          <div className="font-bold text-lg text-[#00394f]">Dr.Smile</div>
          <button
            className="text-[#00394f] text-xl"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <h2 className="text-sm font-medium mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start justify-between"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{card.title}</span>
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <div className="mt-4 text-lg font-bold text-gray-800">
                    {card.count}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
