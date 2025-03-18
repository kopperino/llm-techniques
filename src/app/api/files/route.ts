import { getFiles } from '@/app/actions';
import { NextResponse } from 'next/server';

export async function GET() {
    const files = await getFiles();

    return Response.json(files);
}
