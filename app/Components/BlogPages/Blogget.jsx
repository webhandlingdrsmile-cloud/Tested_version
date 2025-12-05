"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";

export default function GetBlog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/Blog/addBlog");
        setBlogs(res.data);
      } catch (err) {
        console.log("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="w-full min-h-screen bg-[#E7D4C8] py-14 px-4">
      <div className=" px-3 md:px-6 xl:px-14 mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
          {currentBlogs.map((blog, index) => (
              <Link 
              href={`/Blogs/Deatiledblog/${blog._id}`} 
              key={index}
              className="cursor-pointer"
            >
            <div>
                <div
              key={index}
              className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="w-full h-full">
                <img
                  src={blog.coverImage}
                  className="w-full h-70 object-cover"
                  alt="Blog Cover"
                />
              </div>

                 
            </div>
<div className="py-5 gap-y-6 h-50 flex flex-col justify-between">
  <div>
    <p className="text-xs text-[#704532] uppercase font-semibold tracking-wide">
      {blog.tags?.[0] || "ENDODONTICS"}
    </p>

    <h2 className="text-lg font-bold mt-1 text-gray-900 leading-tight">
      {blog.title}
    </h2>

    {/* FIXED HEIGHT DESCRIPTION */}
    <p className="text-sm text-gray-600 mt-2 line-clamp-2 h-[55px] overflow-y-scroll no-scrollbar">
      {blog.introduction}
    </p>
  </div>

  <div className="flex items-center justify-between mt-4">
    <div className="flex items-center gap-3">
      <img
        src={blog.highlightedQuote?.authorImage}
        className="rounded-full h-10 w-10"
        width={35}
        height={35}
      />
      <div>
        <p className="text-sm font-bold text-gray-800">
          {blog.highlightedQuote?.authorName}
        </p>
        <p className="text-xs text-gray-500">
          {blog.highlightedQuote?.authorRole}
        </p>
      </div>
    </div>

   
  </div>
</div>

            </div>
            
            
         </Link> ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded text-sm ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-white text-black shadow"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}






