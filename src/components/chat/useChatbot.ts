
import { useState, useRef, useEffect } from 'react';
import { Message, ChatPosition, StarterPrompt, VoicebotState } from './types';
import { query } from '@/lib/chatbot';

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetached, setIsDetached] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [position, setPosition] = useState<ChatPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<ChatPosition>({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Voicebot state
  const [voicebot, setVoicebot] = useState<VoicebotState>({
    isOpen: false,
    isDetached: false,
    position: { x: 0, y: 0 }
  });
  const [voicebotIsDragging, setVoicebotIsDragging] = useState(false);
  const [voicebotDragStart, setVoicebotDragStart] = useState<ChatPosition>({ x: 0, y: 0 });
  const voicebotRef = useRef<HTMLDivElement>(null);

  // Starter prompts
  const starterPrompts: StarterPrompt[] = [
    {
      text: "Ask me anything about New KC Trading",
      action: () => handlePromptClick("What is New KC Trading?")
    },
    {
      text: "What services do you offer?",
      action: () => handlePromptClick("What services does New KC Trading offer?")
    },
    {
      text: "Tell me about your trading platform",
      action: () => handlePromptClick("Tell me about your trading platform features")
    },
    {
      text: "How can I optimize my fleet operations?",
      action: () => handlePromptClick("How can I optimize my fleet operations with your platform?")
    }
  ];

  // Follow-up prompts based on conversation state
  const getFollowUpPrompts = (): StarterPrompt[] => {
    // If no messages yet, return empty array (starter prompts will be shown)
    if (messages.length === 0) return [];

    // Get the last message to determine context
    const lastMessage = messages[messages.length - 1];
    
    // Only show follow-ups after assistant responses
    if (lastMessage.role !== 'assistant') return [];
    
    // Basic follow-up prompts (could be made more dynamic/contextual)
    return [
      {
        text: "Tell me more about bunkering",
        action: () => handlePromptClick("Tell me more about bunkering operations")
      },
      {
        text: "How does the analytics dashboard work?",
        action: () => handlePromptClick("How does the analytics dashboard work?")
      },
      {
        text: "What security features do you have?",
        action: () => handlePromptClick("What security features does your platform have?")
      }
    ];
  };

  const handlePromptClick = (promptText: string) => {
    setInputValue(promptText);
    // Optional: Auto-send the prompt
    sendMessage(promptText);
  };

  useEffect(() => {
    if (isDetached && chatRef.current) {
      const rect = chatRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - 16,
        y: window.innerHeight - rect.height - 16,
      });
    }
  }, [isDetached]);

  useEffect(() => {
    if (voicebot.isDetached && voicebotRef.current) {
      const rect = voicebotRef.current.getBoundingClientRect();
      setVoicebot(prev => ({
        ...prev,
        position: {
          x: window.innerWidth - rect.width - 96, // Position to the left of chat
          y: window.innerHeight - rect.height - 16,
        }
      }));
    }
  }, [voicebot.isDetached]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await query({
        question: text,
        overrideConfig: { sessionId: 'role' }
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.text || 'No response' 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => sendMessage(inputValue);

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

  // Voicebot handlers
  const toggleVoicebot = () => {
    setVoicebot(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  const handleVoicebotDetach = (isDetached: boolean) => {
    setVoicebot(prev => ({
      ...prev,
      isDetached
    }));
  };

  const handleVoicebotDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!voicebot.isDetached) return;
    setVoicebotIsDragging(true);
    setVoicebotDragStart({
      x: e.clientX - voicebot.position.x,
      y: e.clientY - voicebot.position.y
    });
  };

  const handleVoicebotDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!voicebotIsDragging) return;
    setVoicebot(prev => ({
      ...prev,
      position: {
        x: e.clientX - voicebotDragStart.x,
        y: e.clientY - voicebotDragStart.y
      }
    }));
  };

  const handleVoicebotDragEnd = () => {
    setVoicebotIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
      
      if (voicebotIsDragging) {
        setVoicebot(prev => ({
          ...prev,
          position: {
            x: e.clientX - voicebotDragStart.x,
            y: e.clientY - voicebotDragStart.y
          }
        }));
      }
    };
    
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
      
      if (voicebotIsDragging) {
        setVoicebotIsDragging(false);
      }
    };

    if (isDragging || voicebotIsDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, voicebotIsDragging, voicebotDragStart]);

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
    // Voicebot related
    voicebot,
    voicebotRef,
    toggleVoicebot,
    handleVoicebotDetach,
    handleVoicebotDragStart,
    handleVoicebotDragMove,
    handleVoicebotDragEnd,
    voicebotIsDragging
  };
}
