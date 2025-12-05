import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../Lib/connection";
import Blog from "../../../../../Modeles/Blogmodel";


export async function GET(req, { params }) {
  await dbConnect();

  try {
  
    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });

  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Error fetching blog", error },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  await dbConnect();

  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await Blog.findByIdAndUpdate(id, body, { new: true });

    if (!updated) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated successfully", blog: updated });
  } catch (error) {
    return NextResponse.json({ message: "Error updating blog", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();

  try {
    const { id } = await params;

    const deleted = await Blog.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog", error }, { status: 500 });
  }
}
