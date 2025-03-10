
import { MessageSquare, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useChatbot } from './useChatbot';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { PromptButtons } from './ChatMessage';
import { VoicebotWindow } from './VoicebotWindow';

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
    handleDragEnd,
    starterPrompts,
    getFollowUpPrompts,
    // Voicebot related
    voicebot,
    voicebotRef,
    toggleVoicebot,
    handleVoicebotDetach,
    handleVoicebotDragStart,
    handleVoicebotDragMove,
    handleVoicebotDragEnd,
    voicebotIsDragging
  } = useChatbot();

  if (!isOpen && !voicebot.isOpen) {
    return (
      <div className="fixed bottom-4 right-4 flex gap-2">
        <Button
          onClick={toggleVoicebot}
          className="rounded-full p-4 shadow-lg"
        >
          <Mic className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  const followUpPrompts = getFollowUpPrompts();
  const showStarterPrompts = messages.length === 0;

  return (
    <>
      {isOpen && (
        <Card
          ref={chatRef}
          className={cn(
            "fixed flex flex-col shadow-xl transition-all",
            isDetached ? "resize overflow-auto w-96 h-[540px]" : "w-80 h-[480px] bottom-4 right-4"
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

          <div className="flex-1 overflow-auto flex flex-col">
            {showStarterPrompts && (
              <div className="p-4 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-medium mb-1">Welcome to New KC Trading Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">How can I assist you today?</p>
                <PromptButtons prompts={starterPrompts} label="Try asking" />
              </div>
            )}
            
            {!showStarterPrompts && (
              <>
                <ChatMessages messages={messages} isLoading={isLoading} />
                {followUpPrompts.length > 0 && (
                  <PromptButtons prompts={followUpPrompts} label="Suggested questions" />
                )}
              </>
            )}
          </div>

          <ChatInput 
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
          />
        </Card>
      )}

      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {voicebot.isOpen && (
        <VoicebotWindow
          ref={voicebotRef}
          isDetached={voicebot.isDetached}
          onDetachChange={handleVoicebotDetach}
          onClose={() => toggleVoicebot()}
          position={voicebot.position}
          isDragging={voicebotIsDragging}
          onDragStart={handleVoicebotDragStart}
          onDragMove={handleVoicebotDragMove}
          onDragEnd={handleVoicebotDragEnd}
        />
      )}

      {!voicebot.isOpen && (
        <Button
          onClick={toggleVoicebot}
          className="fixed bottom-4 left-4 rounded-full p-4 shadow-lg"
        >
          <Mic className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
