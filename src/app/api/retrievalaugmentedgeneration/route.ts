import path from 'path';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { pull } from 'langchain/hub';

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

    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });

    const embeddings = new OpenAIEmbeddings({
        model: 'text-embedding-3-large',
    });

    const vectorStore = new MemoryVectorStore(embeddings);

    const allSplits = await textSplitter.splitDocuments(docs);

    await vectorStore.addDocuments(allSplits);

    const retriever = vectorStore.asRetriever({
        searchType: 'mmr',
        searchKwargs: {
            fetchK: 4,
        },
    });

    const promptTemplate = await pull<ChatPromptTemplate>('rlm/rag-prompt');

    const question = 'What did Iga do?';
    const retrieved_docs = await retriever.invoke(question);

    console.log(retrieved_docs);

    const prompt = await promptTemplate.invoke({
        context: retrieved_docs,
        question: question,
    });

    const answer = await llm.invoke(prompt);

    return Response.json(answer.content);
}
