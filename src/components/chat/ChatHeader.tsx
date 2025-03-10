
import { X, MaximizeIcon, MinimizeIcon, RotateCcw, MoveIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  isDetached: boolean;
  onDetachChange: (isDetached: boolean) => void;
  onClose: () => void;
  onClear: () => void;
  onDragStart: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
}

export function ChatHeader({
  isDetached,
  onDetachChange,
  onClose,
  onClear,
  onDragStart,
  onDragMove,
  onDragEnd
}: ChatHeaderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 border-b",
        isDetached && "cursor-grab"
      )}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
    >
      <h3 className="font-semibold">KC Trading Chatbot</h3>
      {isDetached && (
        <MoveIcon className="h-4 w-4 mr-2 text-muted-foreground" />
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClear}
          className="h-8 w-8"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
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
  );
}
