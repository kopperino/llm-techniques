'use server';

import fs from 'fs/promises';
import path from 'path';
import { writeFile } from 'fs/promises';

const FILES_DIR = path.join(process.cwd(), 'public/uploads/files');

export async function getFiles() {
    try {
        return await fs.readdir(FILES_DIR);
    } catch (error) {
        return [];
    }
}

export async function deleteFile(fileName: string) {
    try {
        const filePath = path.join(FILES_DIR, fileName);
        await fs.unlink(filePath);
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Failed to delete file' };
    }
}

export async function uploadFile(formData: FormData) {
    const file = formData.get('file') as File;

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadDir = path.join(process.cwd(), 'public/uploads', 'files');

    const fullPath = path.join(uploadDir, file.name);

    await writeFile(fullPath, buffer);
}
