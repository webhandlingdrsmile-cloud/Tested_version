import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../../Lib/connection';
import Doctor from '../../../../../Modeles/Doctormodel';

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json(doctor, { status: 200 });
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const body = await req.json();
    const { Name, Designation, Image } = body;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { Name, Designation, Image },
      { new: true }
    );

    if (!updatedDoctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Doctor updated successfully', doctor: updatedDoctor }, { status: 200 });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    if (!deletedDoctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Doctor deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
