import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../Lib/connection';
import Service from '../../../../Modeles/Services.model'; 

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { Service: serviceName, Description, Image, SubServices } = body;

    // Validation
    if (!serviceName || !Description || !Image) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Validate SubServices if provided
    if (SubServices && !Array.isArray(SubServices)) {
      return NextResponse.json({ message: 'SubServices must be an array' }, { status: 400 });
    }

    const newService = new Service({
      Service: serviceName,
      Description,
      Image,
      SubServices: SubServices || []
    });

    await newService.save();

    return NextResponse.json({ message: 'Service created successfully' }, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
export async function GET() {
  await dbConnect();

  try {
    const services = await Service.find({});
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ message: 'Error fetching services', error }, { status: 500 });
  }
}
