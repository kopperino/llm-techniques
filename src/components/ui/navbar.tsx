import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-lg">
            <div className="flex justify-center items-center p-6">
                <ul className="flex flex-col md:flex-row gap-10">
                    <li>
                        <Link href="/extraction" className="hover:underline">
                            Extraction
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/classification"
                            className="hover:underline"
                        >
                            Classification
                        </Link>
                    </li>
                    <li>
                        <Link href="/summarisation" className="hover:underline">
                            Summarisation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/syntheticdatageneration"
                            className="hover:underline"
                        >
                            Synthetic Data Generation
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/semanticsearchengine"
                            className="hover:underline"
                        >
                            Semantic Search
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/retrievalaugmentedgeneration"
                            className="hover:underline"
                        >
                            Retrieval Augmented Generation
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
