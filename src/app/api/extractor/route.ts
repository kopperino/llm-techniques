import { z } from 'zod';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import path from 'path';

export const organisationalCapacitySchema = z.object({
    organisational_capacity_model: z
        .string()
        .nullish()
        .describe('The organisational capacity model used.'),
    organisational_capacity_dimensions: z
        .string()
        .nullish()
        .describe('The organisational capacity dimensions.'),
    research_method: z
        .string()
        .nullish()
        .describe('The research method used to undertake this study.'),
});

const apiKey = process.env.OPENAI_API_KEY;

export async function GET() {
    const dir = process.cwd();
    const fullPath = path.join(dir, 'public', 'uploads');

    const loader = new DirectoryLoader(fullPath, {
        '.pdf': (path) => new PDFLoader(path),
    });

    const docs = await loader.load();

    const promptTemplate = ChatPromptTemplate.fromMessages([
        [
            'system',
            `You are an expert extraction algorithm. Only extract relevant information from the text. 
            If you do not know the value of an attribute asked to extract, return null for the attribute's value.`,
        ],

        ['human', '{docs}'],
    ]);

    const llm = new ChatOpenAI({
        model: 'gpt-4o-mini',
        apiKey: apiKey,
        temperature: 0,
    });

    const structured_llm = llm.withStructuredOutput(
        organisationalCapacitySchema
    );

    const prompt = await promptTemplate.invoke({
        docs: docs,
    });

    const msg = await structured_llm.invoke(prompt);

    return Response.json(msg);
}
