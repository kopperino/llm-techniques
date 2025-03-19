import { Database, File, Speech } from 'lucide-react';

type InstructionProps = {
    system_prompt: string;
    user_prompt: string;
    document: string;
    schema: string;
};

export default function Instructions(props: InstructionProps) {
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4 text-gray-300">
                <li className="p-4 bg-gray-800 rounded-md shadow-md shadow-black text-center hover:bg-gray-700">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <Speech />
                        <h1 className="font-bold text-white ">Prompt</h1>
                    </div>
                    <h2 className="font-bold text-white mt-2 ">
                        System Prompt
                    </h2>
                    <p>{props.system_prompt}</p>
                    <h2 className="font-bold text-white mt-2">User Prompt</h2>
                    <p>{props.user_prompt}</p>
                </li>
                <li className="p-4 bg-gray-800 rounded-md shadow-md shadow-black text-center hover:bg-gray-700">
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <Database />
                        <h1 className="font-bold text-white">Schema</h1>
                    </div>
                    <p className="mt-2">{props.schema}</p>
                </li>
                <li className="p-4 bg-gray-800 rounded-md shadow-md shadow-black text-center hover:bg-gray-700">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <File />
                        <h1 className="font-bold text-white">Document</h1>
                    </div>
                    <p className="mt-2">{props.document}</p>
                </li>
            </ul>
        </div>
    );
}
