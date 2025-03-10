
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// Create a type that excludes drag and motion-specific event handlers
type DivElementProps = Omit<
  HTMLAttributes<HTMLDivElement>, 
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDragExit'
>;

// Define our component props
export interface DashboardCardProps extends DivElementProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  isCompact?: boolean;
  isGlass?: boolean;
  decorationColor?: string;
}

export const DashboardCard = forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, description, footer, children, isCompact, isGlass, decorationColor, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className={cn("relative overflow-hidden", className)}
        ref={ref}
      >
        <Card 
          className={cn(
            "transition-all duration-200",
            isGlass && "glass-card",
            isCompact && "p-3",
          )}
        >
          {decorationColor && (
            <div 
              className="absolute top-0 left-0 w-full h-1 z-10" 
              style={{ backgroundColor: decorationColor }}
            />
          )}
          
          {(title || description) && (
            <CardHeader className={cn(isCompact && "p-3")}>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          
          <CardContent className={cn(isCompact && "p-3 pt-0")}>
            {children}
          </CardContent>
          
          {footer && (
            <CardFooter className={cn(isCompact && "p-3 pt-0")}>
              {footer}
            </CardFooter>
          )}
        </Card>
      </motion.div>
    );
  }
);

DashboardCard.displayName = "DashboardCard";
