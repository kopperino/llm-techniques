'use client';
import Navigation from '@/components/ui/navigation';

export default function Home() {
    return (
        <Navigation>
            <div className="text-white w-full">
                <h1 className="text-center text-4xl font-bold">
                    Large Language Models
                </h1>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Transformer</h1>
                    <p>
                        A deep learning model architecture introduced in the
                        paper Attention is All You Need. It is the foundation of
                        most LLMs, relying on the attention mechanism to process
                        sequences of data.
                    </p>
                </div>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Token</h1>
                    <p>
                        A token is the smallest unit of input that a model
                        processes. It can be a word, subword, or even a
                        character depending on how the model is tokenized. The
                        way the model tokenizes the input depends on its
                        tokenizer algorithm, which converts the input into
                        tokens. Similarly, the model’s output comes as a stream
                        of tokens, which is then decoded back into
                        human-readable text.
                    </p>
                </div>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Tokenisation</h1>
                    <p>
                        When you provide a model with a prompt (e.g., "LangChain
                        is cool!"), the tokenizer algorithm splits the text into
                        tokens. For example, the sentence could be tokenized
                        into parts like ["Lang", "Chain", " is", " cool", "!"].
                        Note that token boundaries don’t always align with word
                        boundaries. https://platform.openai.com/tokenizer
                    </p>
                </div>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Structured Output</h1>
                    <p>
                        Chat models can be requested to respond in a particular
                        format (e.g., JSON or matching a particular schema).
                    </p>
                </div>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Multimodality</h1>
                    <p>
                        Large Language Models (LLMs) are not limited to
                        processing text. They can also be used to process other
                        types of data, such as images, audio, and video. This is
                        known as multimodality.
                    </p>
                </div>
                <div className="grid grid-cols-2 text-center mt-10">
                    <h1 className="text-2xl font-bold">Context Window</h1>
                    <p>
                        A chat model's context window refers to the maximum size
                        of the input sequence the model can process at one time.
                        While the context windows of modern LLMs are quite
                        large, they still present a limitation that developers
                        must keep in mind when working with chat models.If the
                        input exceeds the context window, the model may not be
                        able to process the entire input and could raise an
                        error. In conversational applications, this is
                        especially important because the context window
                        determines how much information the model can "remember"
                        throughout a conversation. Developers often need to
                        manage the input within the context window to maintain a
                        coherent dialogue without exceeding the limit.
                    </p>
                </div>
            </div>
        </Navigation>
    );
}
