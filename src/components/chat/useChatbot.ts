
import { useState, useRef, useEffect } from 'react';
import { Message, ChatPosition } from './types';
import { query } from '@/lib/chatbot';

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetached, setIsDetached] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [position, setPosition] = useState<ChatPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<ChatPosition>({ x: 0, y: 0 });
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDetached && chatRef.current) {
      const rect = chatRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - 16,
        y: window.innerHeight - rect.height - 16,
      });
    }
  }, [isDetached]);

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

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDetached) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
    };
    
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

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
    chatRef,
    handleSendMessage,
    handleClearChat,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  };
}
