import { ReactNode } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Navigation({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="flex-grow flex flex-col">
                <Navbar />
                <main className="flex-grow text-white p-4 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
