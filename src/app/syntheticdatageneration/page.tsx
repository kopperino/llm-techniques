'use client';

import Requirements from '@/components/ui/requirements';
import Navigation from '@/components/ui/navigation';
import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';

export default function SyntheticDataGenerationPage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Synthetic Data Generation" />
                <Instructions
                    system_prompt="None"
                    user_prompt="Generate a conversation between a coach and athelete about the performance of the athlete."
                    document="None"
                    schema="None"
                />
            </div>
            <LLMExecutor
                api_url="http://localhost:3000/api/syntheticdatageneration"
                action="summary"
            />
        </Navigation>
    );
}
