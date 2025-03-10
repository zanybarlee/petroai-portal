
import { useState, useRef, useEffect } from 'react';
import { VoicebotState, ChatPosition } from './types';
import { useDraggable } from './useDraggable';

export function useVoicebot() {
  const [voicebot, setVoicebot] = useState<VoicebotState>({
    isOpen: false,
    isDetached: false,
    position: { x: 0, y: 0 }
  });
  
  const voicebotRef = useRef<HTMLDivElement>(null);
  
  const {
    position: voicebotPosition,
    setPosition: setVoicebotPosition,
    isDragging: voicebotIsDragging,
    handleDragStart: voicebotHandleDragStart,
    handleDragMove: voicebotHandleDragMove,
    handleDragEnd: voicebotHandleDragEnd
  } = useDraggable(voicebot.position);

  // Update voicebot state when position changes
  useEffect(() => {
    setVoicebot(prev => ({
      ...prev,
      position: voicebotPosition
    }));
  }, [voicebotPosition]);

  // Initial position for detached voicebot
  useEffect(() => {
    if (voicebot.isDetached && voicebotRef.current) {
      const rect = voicebotRef.current.getBoundingClientRect();
      setVoicebotPosition({
        x: window.innerWidth - rect.width - 96, // Position to the left of chat
        y: window.innerHeight - rect.height - 16,
      });
    }
  }, [voicebot.isDetached, setVoicebotPosition]);

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

  return {
    voicebot,
    voicebotRef,
    voicebotIsDragging,
    toggleVoicebot,
    handleVoicebotDetach,
    handleVoicebotDragStart: (e: React.MouseEvent<HTMLDivElement>) => {
      if (!voicebot.isDetached) return;
      voicebotHandleDragStart(e);
    },
    handleVoicebotDragMove: voicebotHandleDragMove,
    handleVoicebotDragEnd: voicebotHandleDragEnd
  };
}
