
import { useState } from 'react';
import { X, MaximizeIcon, MinimizeIcon, RotateCcw, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { query } from '@/lib/chatbot';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetached, setIsDetached] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      const response = await query({
        question: inputValue,
        overrideConfig: { sessionId: 'role' }
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.text || 'No response' 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card
      className={cn(
        "fixed bottom-4 right-4 flex flex-col w-80 h-96 shadow-xl transition-all",
        isDetached && "resize overflow-auto"
      )}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="font-semibold">KC Trading Chatbot</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClearChat}
            className="h-8 w-8"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDetached(!isDetached)}
            className="h-8 w-8"
          >
            {isDetached ? (
              <MinimizeIcon className="h-4 w-4" />
            ) : (
              <MaximizeIcon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[80%] rounded-lg p-3",
              message.role === 'user'
                ? "bg-primary text-primary-foreground ml-auto"
                : "bg-muted"
            )}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="p-3 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[40px] resize-none"
            rows={1}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Card>
  );
}
