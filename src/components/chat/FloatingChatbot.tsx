
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useChatbot } from './useChatbot';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

export function FloatingChatbot() {
  const {
    isOpen,
    setIsOpen,
    isDetached,
    setIsDetached,
    messages,
    inputValue,
    setInputValue,
    position,
    isDragging,
    isLoading,
    chatRef,
    handleSendMessage,
    handleClearChat,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  } = useChatbot();

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
      ref={chatRef}
      className={cn(
        "fixed flex flex-col w-80 h-96 shadow-xl transition-all",
        isDetached ? "resize overflow-auto" : "bottom-4 right-4"
      )}
      style={
        isDetached 
          ? { 
              zIndex: 1000, 
              position: 'fixed', 
              top: `${position.y}px`, 
              left: `${position.x}px`,
              cursor: isDragging ? 'grabbing' : 'default'
            }
          : { zIndex: 1000 }
      }
    >
      <ChatHeader 
        isDetached={isDetached}
        onDetachChange={setIsDetached}
        onClose={() => setIsOpen(false)}
        onClear={handleClearChat}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      />

      <ChatMessages messages={messages} isLoading={isLoading} />

      <ChatInput 
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
      />
    </Card>
  );
}
