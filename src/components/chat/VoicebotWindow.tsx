
import React, { forwardRef } from 'react';
import { X, MaximizeIcon, MinimizeIcon, MoveIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChatPosition } from './types';

interface VoicebotWindowProps {
  isDetached: boolean;
  onDetachChange: (isDetached: boolean) => void;
  onClose: () => void;
  position: ChatPosition;
  isDragging: boolean;
  onDragStart: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
}

export const VoicebotWindow = forwardRef<HTMLDivElement, VoicebotWindowProps>(
  ({ 
    isDetached, 
    onDetachChange, 
    onClose, 
    position, 
    isDragging,
    onDragStart,
    onDragMove,
    onDragEnd
  }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "fixed flex flex-col shadow-xl transition-all",
          isDetached ? "resize overflow-hidden w-96 h-[540px]" : "w-80 h-[480px] bottom-4 left-4"
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
        <div 
          className={cn(
            "flex items-center justify-between p-3 border-b",
            isDetached && "cursor-grab"
          )}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
        >
          <h3 className="font-semibold">KC Trading Voicebot</h3>
          {isDetached && (
            <MoveIcon className="h-4 w-4 mr-2 text-muted-foreground" />
          )}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDetachChange(!isDetached)}
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
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src="http://localhost:3005"
            className="w-full h-full border-none"
            title="KC Trading Voicebot"
            allow="microphone"
          />
        </div>
      </Card>
    );
  }
);

VoicebotWindow.displayName = 'VoicebotWindow';
