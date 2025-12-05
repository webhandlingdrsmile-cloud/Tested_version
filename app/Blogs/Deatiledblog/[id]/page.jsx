"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function SingleBlog() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/Blog/Editblog/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.log("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="w-full bg-[#E7D4C8] min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* PUBLISHED DATE */}
        <p className="text-center text-xs text-[#704532] tracking-wide mb-2">
          PUBLISHED {blog.publishedDate}
        </p>

        {/* TITLE */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-black">
          {blog.title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-center text-xl lg:text-2xl font-light text-black mt-2">
          {blog.subtitle}
        </p>

        {/* INTRO PARA */}
        <p className="text-center text-sm text-[#4D5765] max-w-3xl mx-auto mt-4">
          {blog.introduction}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {(blog.tags || []).map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-md border border-[#704532] text-[#704532] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* COVER IMAGE */}
        <div className="w-full rounded-2xl overflow-hidden mt-10 shadow">
          <img
            src={blog.coverImage}
            className="w-full h-auto object-cover"
            alt="Blog Cover"
          />
        </div>

        {/* CONTENT SECTIONS */}
        <div className="mt-10">
          {(blog.contentSections || []).map((section, index) => (
            <div key={index} className="mb-10">

              {section.image && (
                <img
                  src={section.image}
                  className="w-full rounded-xl mb-6"
                  alt="Section"
                />
              )}

              <h2 className="text-xl font-bold mb-4 text-[#3A2A25]">
                {section.heading}
              </h2>

              <p className="text-[#4b3e39] leading-relaxed text-sm">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* HIGHLIGHTED QUOTE */}
        {blog.highlightedQuote && (
          <div className=" mt-12 ">
            <p className="text-sm font-semibold text-[#3A2A25]">
              {blog.highlightedQuote.quote}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={blog.highlightedQuote.authorImage}
                className="rounded-full h-12 w-12"
                alt="Author"
              />
              <div>
                <p className="text-sm font-bold text-[#3A2A25]">
                  {blog.highlightedQuote.authorName}
                </p>
                <p className="text-xs text-[#6B5A52]">
                  {blog.highlightedQuote.authorRole}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="h-20"></div>
      </div>
    </div>
  );
}
