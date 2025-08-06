import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../../Lib/connection';
import Service from '../../../../../Modeles/Services.model';


export async function GET(req, { params }) {
  await dbConnect();

  try {
    const service = await Service.findById(params.id);

    if (!service) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.error('GET by ID error:', error);
    return NextResponse.json({ message: 'Error fetching service', error }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  await dbConnect();

  try {
    const body = await req.json();
    const { Service: serviceName, Description, Image } = body;

    const updatedService = await Service.findByIdAndUpdate(
      params.id,
      { Service: serviceName, Description, Image },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Service updated successfully', data: updatedService }, { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ message: 'Error updating service', error }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  await dbConnect();

  try {
    const deletedService = await Service.findByIdAndDelete(params.id);

    if (!deletedService) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Service deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ message: 'Error deleting service', error }, { status: 500 });
  }
}
