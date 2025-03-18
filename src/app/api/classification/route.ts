import { z } from 'zod';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import path from 'path';

const apiKey = process.env.OPENAI_API_KEY;

export async function GET() {
    const dir = process.cwd();
    const fullPath = path.join(dir, 'public', 'uploads');

    const loader = new DirectoryLoader(fullPath, {
        '.pdf': (path) => new PDFLoader(path),
    });

    const docs = await loader.load();
    const classificationSchema = z.object({
        appropriateness_for_kids: z
            .enum(['yes', 'no'])
            .describe('Indicates whether the book is suitable for children'),
        topic: z
            .enum(['animals', 'plants', 'school'])
            .describe('The topic this book is about.'),
        rating: z
            .number()
            .int()
            .describe(
                'Give a score for this book for kids to read it. Be critical.'
            ),

        language: z
            .enum(['english', 'spanish', 'japanese'])
            .describe('The language this book is written in.'),
    });

    const llm = new ChatOpenAI({
        model: 'gpt-4o-mini',
        apiKey: apiKey,
        temperature: 0,
    });

    const taggingPrompt = ChatPromptTemplate.fromTemplate(
        `Extract the desired information from the following passage.
      
      Only extract the properties mentioned in the 'Classification' function.
      
      Passage:
      {docs}
      `
    );

    const llmWihStructuredOutput =
        llm.withStructuredOutput(classificationSchema);

    const prompt = await taggingPrompt.invoke({
        docs: docs,
    });

    const msg = await llmWihStructuredOutput.invoke(prompt);

    return Response.json(msg);
}
