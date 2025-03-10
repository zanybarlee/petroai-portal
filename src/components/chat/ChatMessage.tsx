
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Message } from './types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, UserCircle2 } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex items-start gap-3",
      message.role === 'user' ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-8 w-8",
        message.role === 'user' 
          ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white shadow-sm" 
          : "bg-muted"
      )}>
        <AvatarFallback>
          {message.role === 'user' ? 
            <UserCircle2 className="h-5 w-5 text-white" /> : 
            <Bot className="h-4 w-4" />
          }
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          message.role === 'user'
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-muted rounded-tl-none"
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
