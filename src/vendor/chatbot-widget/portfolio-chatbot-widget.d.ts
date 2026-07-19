import { JSX } from 'react';

export declare function Chatbot({ apiUrl, title, initialMessage, placeholder, }: ChatbotProps): JSX.Element;

export declare interface ChatbotProps {
    /** URL of the Worker's /chat endpoint */
    apiUrl: string;
    /** Label shown in the panel header */
    title?: string;
    /** First assistant message shown before the visitor types anything */
    initialMessage?: string;
    /** Placeholder text for the input field */
    placeholder?: string;
}

export declare interface ChatMessage {
    role: ChatRole;
    content: string;
}

export declare interface ChatRequestBody {
    messages: ChatMessage[];
}

export declare interface ChatResponseBody {
    reply: string;
}

export declare type ChatRole = 'user' | 'assistant';

export declare function useChat({ apiUrl, initialMessage }: UseChatOptions): {
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
    sendMessage: (content: string) => Promise<void>;
};

export declare interface UseChatOptions {
    apiUrl: string;
    initialMessage?: string;
}

export { }
