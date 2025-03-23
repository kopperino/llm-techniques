'use client';

import Requirements from '@/components/ui/requirements';
import Navigation from '@/components/ui/navigation';
import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';

export default function RetrievalAugmentedGenerationPage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Retrieval Augmented Generation" />
                <Instructions
                    system_prompt="None"
                    user_prompt="You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise. Question: {question} Context: {context} Answer:"
                    document="Outrage as Iga Swiatek smashes ball at ball boy and gets booed at Indian Wells"
                    schema="None"
                />
            </div>
            <LLMExecutor
                api_url="/api/retrievalaugmentedgeneration"
                action="RAG"
            />
        </Navigation>
    );
}
