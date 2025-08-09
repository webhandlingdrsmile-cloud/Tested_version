import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../Lib/connection";
import Contact from "../../../../../Modeles/Contactmodel";

dbConnect();

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Contact ID is required" },
        { status: 400 }
      );
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Contact deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
