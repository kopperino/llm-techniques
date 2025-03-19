'use client';

import Requirements from '@/components/ui/requirements';
import Navigation from '@/components/ui/navigation';
import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';

export default function SummarisationPage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Summarisation" />
                <Instructions
                    system_prompt="None"
                    user_prompt="Summarise the main themes in these retrieved docs: {context}"
                    document="Any PDF for this example."
                    schema="None"
                />
            </div>
            <LLMExecutor
                api_url="http://localhost:3000/api/summarisation"
                action="summary"
            />
        </Navigation>
    );
}
