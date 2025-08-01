import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../Lib/connection';
import Doctor from '../../../../Modeles/Doctormodel';

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { Name, Designation, Image } = body;

    if (!Name || !Designation || !Image) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const newDoctor = new Doctor({
      Name,
      Designation,
      Image,
    });

    await newDoctor.save();

    return NextResponse.json({ message: 'Doctor created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const doctors = await Doctor.find({});
    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json({ message: 'Error fetching doctors', error }, { status: 500 });
  }
}