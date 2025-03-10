
export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export type StarterPrompt = {
  text: string;
  action: () => void;
};

export type ChatPosition = {
  x: number;
  y: number;
};

export type VoicebotState = {
  isOpen: boolean;
  isDetached: boolean;
  position: ChatPosition;
};

export type ChatbotState = {
  isOpen: boolean;
  isDetached: boolean;
  position: ChatPosition;
  messages: Message[];
  inputValue: string;
  isLoading: boolean;
};

export type DraggableState = {
  isDragging: boolean;
  dragStart: ChatPosition;
};
