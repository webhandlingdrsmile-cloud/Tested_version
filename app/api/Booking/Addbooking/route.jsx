import { NextResponse } from "next/server";
import { dbConnect } from "../../../../Lib/connection";
import Booking from "../../../../Modeles/Bookingmodel";
function validateBooking(data) {
  const errors = [];


  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push("Invalid email format");
  }

  if (!data.phone || !/^\+?[0-9]{10,15}$/.test(data.phone.trim())) {
    errors.push("Phone number must be 10–15 digits, optionally starting with +");
  }

  if (
    typeof data.age !== "number" ||
    data.age < 0 ||
    data.age > 120 ||
    !Number.isInteger(data.age)
  ) {
    errors.push("Age must be an integer between 0 and 120");
  }
  if (
    !data.time ||
    !/^((0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)|(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9])$/i.test(
      data.time.trim()
    )
  ) {
    errors.push("Time must be in HH:MM AM/PM or 24-hour format");
  }
  if (!data.date || isNaN(new Date(data.date).getTime())) {
    errors.push("Invalid date format. Use ISO date format (YYYY-MM-DD)");
  }

  return errors;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const errors = validateBooking(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    await dbConnect();

    const booking = new Booking(body);
    await booking.save();

    return NextResponse.json(
      { success: true, message: "Booking created successfully", data: booking },
      { status: 201 }
    );
  } catch (err) {
    console.error("Booking creation error:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const bookings = await Booking.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error("Fetch bookings error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

