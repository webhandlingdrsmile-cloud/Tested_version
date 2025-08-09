import { NextResponse } from "next/server";
import { dbConnect } from "../../../Lib/connection";
import Contact from "../../../Modeles/Contactmodel";

dbConnect();


function validateContact(data) {
  const errors = {};

  if (!data.Name || data.Name.trim().length < 2) {
    errors.Name = "Name is required and should be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.Email || !emailRegex.test(data.Email)) {
    errors.Email = "A valid email is required.";
  }

  if (!data.Needs || data.Needs.trim().length < 2) {
    errors.Needs = "Please specify your needs.";
  }

  if (!data.Phone || !/^\d{10}$/.test(data.Phone)) {
    errors.Phone = "Phone must be a valid 10-digit number.";
  }

  if (!data.Message || data.Message.trim().length < 10) {
    errors.Message = "Message must be at least 10 characters.";
  }

  return errors;
}


export async function POST(req) {
  try {
    const body = await req.json();
    const errors = validateContact(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const newContact = await Contact.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Contact added successfully",
        contact: newContact.toObject(), 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding contact:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const contactsObj = {};
    contacts.forEach((contact) => {
      contactsObj[contact._id] = contact.toObject();
    });

    return NextResponse.json(
      {
        success: true,
        contacts: contactsObj, 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

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