
import { useState } from 'react';
import { Message, StarterPrompt } from './types';
import { query } from '@/lib/chatbot';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    // Auto-send the prompt
    sendMessage(promptText);
  };

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

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    starterPrompts,
    getFollowUpPrompts,
    handlePromptClick,
    handleSendMessage,
    handleClearChat
  };
}
