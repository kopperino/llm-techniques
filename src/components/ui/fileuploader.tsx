'use client';

import { useState } from 'react';

type FileUploaderProps = {
    setRefreshTrigger: React.Dispatch<React.SetStateAction<number>>;
};

export default function FileUploader({ setRefreshTrigger }: FileUploaderProps) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('http://localhost:3000/api/uploadfile', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            alert('Success to upload file');
            setRefreshTrigger((prev) => prev + 1);
        } else {
            alert('Failed');
        }
        setFile(null);
    };

    return (
        <div className="bg-gray-500 p-6 shadow-md text-white min-w-full mt-0 rounded-2xl shadow-black">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Upload File
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <label className="flex flex-col items-center px-4 py-4 bg-gray-700 text-gray-300 rounded-md shadow cursor-pointer hover:bg-gray-600 transition">
                    <div className="text-base font-extrabold text-center">
                        Select a file
                    </div>
                    <div className="bg-gray-500 rounded-2xl px-2 mt-5 text-center w-full max-w-xs shadow-md shadow-black">
                        <p className="truncate overflow-hidden text-ellipsis">
                            {file?.name || 'No file selected...'}
                        </p>
                    </div>

                    <input
                        type="file"
                        name="file"
                        className="hidden"
                        accept="application/pdf"
                        onChange={handleFileChange}
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-amber-300 transition-all duration-300 ease-out hover:shadow-lg hover:text-black text-white font-extrabold py-2 shadow-black shadow-md rounded-md flex flex-row justify-center"
                >
                    UPLOAD
                </button>
            </form>
        </div>
    );
}
