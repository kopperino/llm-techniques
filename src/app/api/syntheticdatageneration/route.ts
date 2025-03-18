import { ChatOpenAI } from '@langchain/openai';
import { z } from 'zod';

const conversationModel = z.object({
    coach_text: z.string().nullish().describe('A coach speaking.'),
    athlete_text: z.string().nullish().describe('An athlete speaking.'),
});

const conversationsModel = z.object({
    conversation: z
        .array(conversationModel)
        .describe('A conversation between coach and athelete'),
});

const apiKey = process.env.OPENAI_API_KEY;

export async function GET() {
    const llm = new ChatOpenAI({
        model: 'gpt-4',
        apiKey: apiKey,
    });

    const llmWithStructuredOutput =
        llm.withStructuredOutput(conversationsModel);

    const response = await llmWithStructuredOutput.invoke(
        'Generate a conversation between a coach and athelete about the performance of the athlete'
    );

    return Response.json(response);
}
