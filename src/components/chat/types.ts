
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
