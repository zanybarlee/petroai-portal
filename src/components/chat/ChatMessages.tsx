
import { Loader } from 'lucide-react';
import { Message } from './types';
import { ChatMessage } from './ChatMessage';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      {isLoading && (
        <div className="flex justify-end">
          <div className="bg-muted rounded-lg p-3">
            <Loader className="h-4 w-4 animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
