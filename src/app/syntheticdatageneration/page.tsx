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
                    user_prompt="Generate a conversation between a coach and athlete about the performance of the athlete."
                    document="None"
                    schema="
                        coach_text: A coach speaking.
                        athlete_text: An athlete speaking.
                        conversation: A conversation between coach and athlete"
                />
            </div>
            <LLMExecutor
                api_url="/api/syntheticdatageneration"
                action="summary"
            />
        </Navigation>
    );
}
