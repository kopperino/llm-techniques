'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import Navigation from '@/components/ui/navigation';

const topics = [
    {
        title: 'Transformer',
        description:
            'A deep learning model architecture introduced in the paper "Attention is All You Need." It is the foundation of most LLMs, relying on the attention mechanism to process sequences of data.',
    },
    {
        title: 'Token',
        description:
            'A token is the smallest unit of input that a model processes. It can be a word, subword, or even a character depending on how the model is tokenized. The model’s tokenizer algorithm determines how text is split into tokens, which are then processed and decoded back into human-readable text.',
    },
    {
        title: 'Tokenization',
        description:
            'When you provide a model with a prompt (e.g., "LangChain is cool!"), the tokenizer splits the text into tokens. For example, the sentence could be tokenized into parts like ["Lang", "Chain", " is", " cool", "!"]. Token boundaries don’t always align with word boundaries.',
    },
    {
        title: 'Structured Output',
        description:
            'Chat models can be configured to respond in a particular format (e.g., JSON or matching a specific schema).',
    },
    {
        title: 'Multimodality',
        description:
            'Large Language Models (LLMs) are not limited to processing text. They can also process other types of data, such as images, audio, and video. This capability is known as multimodality.',
    },
    {
        title: 'Context Window',
        description:
            'A model’s context window refers to the maximum size of input it can process at one time. Exceeding this limit can lead to errors or loss of information. Developers must manage input effectively to ensure coherent interactions.',
    },
];

export default function Home() {
    return (
        <Navigation>
            <div className="p-4 text-2xl font-bold mb-5">
                Large Language Models
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topics.map((topic, index) => (
                    <Card
                        key={index}
                        className="bg-gray-800 text-white hover:bg-gray-600 border-4 border-black shadow-lg shadow-black"
                    >
                        <CardHeader>
                            <CardTitle>{topic.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>{topic.description}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Navigation>
    );
}
