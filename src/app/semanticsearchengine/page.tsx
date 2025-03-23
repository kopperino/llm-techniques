'use client';

import Requirements from '@/components/ui/requirements';
import Navigation from '@/components/ui/navigation';
import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';

export default function SemanticSearchEnginePage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Semantic Search Engine" />
                <Instructions
                    system_prompt="None"
                    user_prompt="What did Iga do?"
                    document="Outrage as Iga Swiatek smashes ball at ball boy and gets booed at Indian Wells"
                    schema="None"
                />
            </div>
            <LLMExecutor api_url="/api/semanticsearchengine" action="search" />
        </Navigation>
    );
}
