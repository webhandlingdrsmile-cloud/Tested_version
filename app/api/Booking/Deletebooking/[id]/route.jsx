import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../Lib/connection";
import Booking from "../../../../../Modeles/Bookingmodel";






export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const booking = await Booking.findById(id);

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: booking.status || "Not Consulted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
  try {
    await dbConnect();

    const { id } = params;
    const body = await req.json();
    const { status } = body;
    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required" },
        { status: 400 }
      );
    }
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedBooking, { status: 200 });
  } catch (error) {
    console.error("PUT /Booking error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}



export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Booking deleted successfully", deletedBooking },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}