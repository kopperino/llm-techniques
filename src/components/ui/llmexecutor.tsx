import { useState, useTransition } from 'react';

type ExecutorProps = {
    api_url: string;
    action: string;
};

export default function LLMExecutor(props: ExecutorProps) {
    const [llmOutput, setLlmOutput] = useState<string | undefined>(undefined);
    const [isPending, startTransition] = useTransition();

    async function queryLLM() {
        const res = await fetch(props.api_url, {
            cache: 'no-store',
        });
        if (!res.ok) {
            return 'Failed to load summary.';
        }
        const data = await res.json();
        return data;
    }

    const handleClick = () => {
        startTransition(async () => {
            const llmResponse = await queryLLM();
            setLlmOutput(llmResponse);
        });
    };
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-center text-white text-center mt-10 shadow-md shadow-black bg-gray-700 p-10 rounded-2xl mb-16 md:mb-20 hover:bg-gray-600">
                <p>
                    {JSON.stringify(llmOutput) ??
                        `Click the button to generate ${props.action} from the document(s).`}
                </p>
            </div>
            <div className="flex justify-center">
                <button
                    className="rounded-2xl p-5 text-white font-extrabold bg-gray-700 shadow-md shadow-black hover:bg-gray-500 cursor-pointer transform transition duration-300 hover:scale-105"
                    onClick={handleClick}
                    disabled={isPending}
                >
                    {isPending
                        ? 'Processing...'
                        : `GENERATE ${props.action.toUpperCase()}`}
                </button>
            </div>
        </div>
    );
}
