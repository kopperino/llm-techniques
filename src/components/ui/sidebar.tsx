'use client';

import { deleteFile } from '@/app/actions';
import { useState, useEffect } from 'react';
import FileUploader from './fileuploader';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
    const [files, setFiles] = useState<string[]>([]);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        async function fetchFiles() {
            const response = await fetch('http://localhost:3000/api/files');
            if (!response.ok) throw new Error('Failed to fetch files');

            const fileList = await response.json();
            console.log(fileList);
            setFiles(fileList);
        }

        fetchFiles();
    }, [refreshTrigger]);

    async function handleDelete(fileName: string) {
        const res = await deleteFile(fileName);
        if (res.success) {
            setFiles((prev) => prev.filter((file) => file !== fileName));
        } else {
            alert('Error deleting file');
        }
    }

    return (
        <div className="w-72 min-w-72 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col p-4 shadow-lg">
            {/* Header */}
            <Link href="/">
                <div className="flex items-center justify-center text-center w-full h-20 bg-gray-700 text-white font-bold text-lg rounded-lg shadow-md">
                    <div className="leading-tight hover:text-amber-300 transition duration-300">
                        Sinan's <br />
                        <span className="text-amber-400">Razzle Dazzle</span>
                    </div>
                </div>
            </Link>
            {/* File Uploader */}
            <div className="mt-4">
                <FileUploader setRefreshTrigger={setRefreshTrigger} />
            </div>

            {/* File List */}
            <div className="overflow-y-auto mt-5">
                <ul className="space-y-3 w-full min-w-full">
                    {files.length > 0 ? (
                        files.map((file) => (
                            <li
                                key={file}
                                className="flex justify-between items-center bg-gray-700 px-4 py-3 rounded-lg shadow-md transition duration-300 hover:bg-gray-600"
                            >
                                <span className="truncate">{file}</span>
                                <button
                                    onClick={() => handleDelete(file)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg text-sm flex items-center transition duration-300"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="flex justify-between items-center bg-gray-700 px-4 py-3 rounded-lg shadow-md text-gray-400 w-full">
                            <span className="">No files found...</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
