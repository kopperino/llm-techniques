'use client';

import Requirements from '@/components/ui/requirements';
import Navigation from '@/components/ui/navigation';
import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';

export default function ClassificationPage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Classification" />
                <Instructions
                    system_prompt="None"
                    user_prompt="Extract the desired information from the following passage. Only extract the properties mentioned in the 'Classification' function. Passage: {docs}"
                    document="Ginger the Giraffe"
                    schema={`
                        appropriateness_for_kids: Indicates whether the book is suitable for children.
                        topic: The topic this book is about.
                        rating: Give a score for this book for kids to read it. Be critical. 
                        language: The language this book is written in.
                    `}
                />
            </div>
            <LLMExecutor api_url="api/classification" action="classification" />
        </Navigation>
    );
}
