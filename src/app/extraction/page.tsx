'use client';

import Instructions from '@/components/ui/instructions';
import LLMExecutor from '@/components/ui/llmexecutor';
import Navigation from '@/components/ui/navigation';
import Requirements from '@/components/ui/requirements';

export default function ExtractionPage() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <Requirements title="Extraction" />
                <Instructions
                    system_prompt="You are an expert extraction algorithm. Only extract
                        relevant information from the text. If you do not know
                        the value of an attribute asked to extract, return null
                        for the attribute's value."
                    user_prompt="docs"
                    document="Toward a Multidimensional Framework of Capacity in Community
                    Sport Clubs - Alison Doherty, Katie Misener, and Graham
                    Cuskelly"
                    schema="organisational_capacity_model: The organisational capacity model used. organisational_capacity_dimensions: The organisational capacity dimensions. research_method: The research method used to undertake this study."
                />
            </div>
            <LLMExecutor
                api_url="http://localhost:3000/api/extractor"
                action="extract"
            />
        </Navigation>
    );
}
