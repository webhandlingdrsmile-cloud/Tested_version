"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddBlogPage() {
  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    publishedDate: "",
    coverImage: "",
    tags: [],
    introduction: "",
    contentSections: [
      {
        heading: "",
        body: "",
      },
    ],
    highlightedQuote: {
      quote: "",
      authorName: "",
      authorRole: "",
      authorImage: "",
    },
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: [],
    },
    slug: "",
  });

  const [coverPreview, setCoverPreview] = useState(null);
  const [authorPreview, setAuthorPreview] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("/api/Login");
      } catch (err) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (value) => {
    setBlog((prev) => ({ ...prev, tags: value.split(",") }));
  };

  const handleKeywordChange = (value) => {
    setBlog((prev) => ({
      ...prev,
      seo: { ...prev.seo, keywords: value.split(",") },
    }));
  };

  const handleContentChange = (index, field, value) => {
    const newSections = [...blog.contentSections];
    newSections[index][field] = value;
    setBlog((prev) => ({ ...prev, contentSections: newSections }));
  };

  const handleCoverUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBlog((prev) => ({ ...prev, coverImage: reader.result }));
      setCoverPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAuthorImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBlog((prev) => ({
        ...prev,
        highlightedQuote: {
          ...prev.highlightedQuote,
          authorImage: reader.result,
        },
      }));
      setAuthorPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/Blog/addBlog", blog);
      alert("Blog Created Successfully");
      router.push("/Dashboard/Blogs");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-6">
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm text-gray-700 mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        {/* COVER IMAGE */}
        <div>
          <label className="font-medium text-gray-700">Cover Image</label>
          <label className="block border-dashed border p-4 mt-2 rounded cursor-pointer bg-gray-50">
            {coverPreview ? (
              <img src={coverPreview} className="w-full rounded" />
            ) : (
              <div className="text-center text-gray-400">Upload Image</div>
            )}
            <input type="file" className="hidden" onChange={handleCoverUpload} />
          </label>
        </div>

        {/* TITLE */}
        <div>
          <label className="font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* SUBTITLE */}
        <div>
          <label className="font-medium text-gray-700">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={blog.subtitle}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* SLUG */}
        <div>
          <label className="font-medium text-gray-700">Slug</label>
          <input
            type="text"
            name="slug"
            value={blog.slug}
            onChange={handleChange}
            placeholder="example-slug"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* PUBLISHED DATE */}
        <div>
          <label className="font-medium text-gray-700">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={blog.publishedDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* TAGS */}
        <div>
          <label className="font-medium text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            value={blog.tags.join(",")}
            onChange={(e) => handleTagChange(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* INTRODUCTION */}
        <div>
          <label className="font-medium text-gray-700">Introduction</label>
          <textarea
            name="introduction"
            value={blog.introduction}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* CONTENT SECTIONS */}
        <div>
          <label className="font-medium text-gray-700">Content Sections</label>
          {blog.contentSections.map((section, i) => (
            <div key={i} className="border rounded p-4 mt-3 space-y-3">
              <input
                type="text"
                placeholder="Heading"
                value={section.heading}
                onChange={(e) =>
                  handleContentChange(i, "heading", e.target.value)
                }
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Body text"
                value={section.body}
                onChange={(e) =>
                  handleContentChange(i, "body", e.target.value)
                }
                className="w-full border rounded px-3 py-2"
              />
            </div>
          ))}
        </div>

        {/* HIGHLIGHTED QUOTE */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Highlighted Quote</h3>

          <textarea
            placeholder="Quote"
            value={blog.highlightedQuote.quote}
            onChange={(e) =>
              setBlog((prev) => ({
                ...prev,
                highlightedQuote: {
                  ...prev.highlightedQuote,
                  quote: e.target.value,
                },
              }))
            }
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Author Name"
            value={blog.highlightedQuote.authorName}
            onChange={(e) =>
              setBlog((prev) => ({
                ...prev,
                highlightedQuote: {
                  ...prev.highlightedQuote,
                  authorName: e.target.value,
                },
              }))
            }
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Author Role"
            value={blog.highlightedQuote.authorRole}
            onChange={(e) =>
              setBlog((prev) => ({
                ...prev,
                highlightedQuote: {
                  ...prev.highlightedQuote,
                  authorRole: e.target.value,
                },
              }))
            }
            className="w-full border rounded px-3 py-2"
          />

          {/* Author Image */}
          <label className="block border-dashed border p-4 rounded cursor-pointer bg-gray-50">
            {authorPreview ? (
              <img src={authorPreview} className="h-32 rounded" />
            ) : (
              <div className="text-gray-400 text-center">Upload Author Image</div>
            )}
            <input
              type="file"
              className="hidden"
              onChange={handleAuthorImageUpload}
            />
          </label>
        </div>

        {/* SEO */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">SEO</h3>

          <input
            type="text"
            placeholder="Meta Title"
            value={blog.seo.metaTitle}
            onChange={(e) =>
              setBlog((prev) => ({
                ...prev,
                seo: { ...prev.seo, metaTitle: e.target.value },
              }))
            }
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            placeholder="Meta Description"
            value={blog.seo.metaDescription}
            onChange={(e) =>
              setBlog((prev) => ({
                ...prev,
                seo: { ...prev.seo, metaDescription: e.target.value },
              }))
            }
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Keywords (comma separated)"
            value={blog.seo.keywords.join(",")}
            onChange={(e) => handleKeywordChange(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-teal-900 text-white py-3 rounded-md hover:bg-teal-800"
        >
          Create Blog →
        </button>
      </div>
    </div>
  );
}
