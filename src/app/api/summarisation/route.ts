import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import path from 'path';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

const apiKey = process.env.OPENAI_API_KEY;

export async function GET() {
    const dir = process.cwd();
    const fullPath = path.join(dir, 'public', 'uploads');

    const loader = new DirectoryLoader(fullPath, {
        '.pdf': (path) => new PDFLoader(path),
    });

    const docs = await loader.load();

    const llm = new ChatOpenAI({
        model: 'gpt-4o-mini',
        apiKey: apiKey,
        temperature: 0,
    });

    const prompt = PromptTemplate.fromTemplate(
        'Summarise the main themes in these retrieved docs: {context}'
    );

    const chain = await createStuffDocumentsChain({
        llm: llm,
        outputParser: new StringOutputParser(),
        prompt,
    });

    const result = await chain.invoke({ context: docs });

    return Response.json(result);
}
