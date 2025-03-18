import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-lg">
            <div className="container mx-auto flex justify-center items-center p-4">
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <ul
                    className={`
                    absolute md:static left-0 top-16 w-full md:w-auto bg-gray-900 md:bg-transparent 
                    flex flex-col md:flex-row md:items-center md:gap-8 gap-4 text-center md:text-left 
                    transition-all duration-300 ease-in-out ${
                        isOpen ? 'block' : 'hidden md:flex'
                    }
                `}
                >
                    <li>
                        <Link
                            href="/extraction"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Extraction
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/classification"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Classification
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/summarisation"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Summarisation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/semanticsearchengine"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Semantic Search
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/retrievalaugmentedgeneration"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Retrieval Augmented Generation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/syntheticdatageneration"
                            className="block py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            Synthetic Data Generation
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
