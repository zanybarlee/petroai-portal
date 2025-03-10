
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Message } from './types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className={cn(
        "h-8 w-8",
        message.role === 'user' ? "bg-primary" : "bg-muted"
      )}>
        <AvatarFallback>
          {message.role === 'user' ? 
            <User className="h-4 w-4 text-primary-foreground" /> : 
            <Bot className="h-4 w-4" />
          }
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          message.role === 'user'
            ? "bg-primary text-primary-foreground"
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
    </div>
  );
}
