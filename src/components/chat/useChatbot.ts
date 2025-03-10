
import { useState, useRef, useEffect } from 'react';
import { useDraggable } from './useDraggable';
import { useMessages } from './useMessages';
import { useVoicebot } from './useVoicebot';
import { ChatPosition } from './types';

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetached, setIsDetached] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Use our custom hooks
  const {
    position,
    setPosition,
    isDragging,
    handleDragStart: baseDragStart,
    handleDragMove,
    handleDragEnd
  } = useDraggable();

  const {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    starterPrompts,
    getFollowUpPrompts,
    handlePromptClick,
    handleSendMessage,
    handleClearChat
  } = useMessages();

  const voicebotControls = useVoicebot();

  // Set initial position for detached chat
  useEffect(() => {
    if (isDetached && chatRef.current) {
      const rect = chatRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - 16,
        y: window.innerHeight - rect.height - 16,
      });
    }
  }, [isDetached, setPosition]);

  // Only allow drag when detached
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDetached) return;
    baseDragStart(e);
  };

  return {
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
    handlePromptClick,
    // Spread voicebot controls
    ...voicebotControls
  };
}
