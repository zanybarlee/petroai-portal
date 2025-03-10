
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-lg p-3",
        message.role === 'user'
          ? "bg-primary text-primary-foreground ml-auto"
          : "bg-muted"
      )}
    >
      {message.role === 'user' ? (
        message.content
      ) : (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown>
            {message.content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
