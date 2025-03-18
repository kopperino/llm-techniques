import path from 'path';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadDir = path.join(process.cwd(), 'public/uploads', 'files');

    const fullPath = path.join(uploadDir, file.name);

    await writeFile(fullPath, buffer);

    return NextResponse.json({ message: 'Success' });
}
