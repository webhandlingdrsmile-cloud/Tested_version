import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../Lib/connection';
import Blog from '../../../../Modeles/Blogmodel'; 


export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();

    const {
      title,
      subtitle,
      publishedDate,
      coverImage,
      tags,
      introduction,
      contentSections,
      highlightedQuote,
      seo,
      slug,
    } = body;

  
    if (!title || !coverImage || !introduction || !slug) {
      return NextResponse.json(
        { message: 'Title, Cover Image, Slug & Introduction are required' },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      title,
      subtitle,
      publishedDate,
      coverImage,
      tags,
      introduction,
      contentSections,
      highlightedQuote,
      seo,
      slug,
    });

    await newBlog.save();

    return NextResponse.json(
      { message: 'Blog created successfully', blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { message: 'Server error while creating blog', error },
      { status: 500 }
    );
  }
}

// ---------------------- GET ALL BLOGS ----------------------
export async function GET() {
  await dbConnect();

  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { message: 'Error fetching blogs', error },
      { status: 500 }
    );
  }
}
