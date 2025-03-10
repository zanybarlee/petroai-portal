
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// Omit the title property from HTMLAttributes to avoid type conflict
export interface DashboardCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  isCompact?: boolean;
  isGlass?: boolean;
  decorationColor?: string;
}

export const DashboardCard = forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, description, footer, children, isCompact, isGlass, decorationColor, ...props }, ref) => {
    // Remove any HTML motion props that might cause conflicts
    const { onDrag, ...restProps } = props;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ translateY: -2 }}
        whileTap={{ scale: 0.995 }}
        className={cn("relative overflow-hidden", className)}
        ref={ref}
        {...restProps}
      >
        <Card 
          className={cn(
            "h-full overflow-hidden",
            isGlass && "glass-card",
            decorationColor && "border-t-4"
          )}
          style={{ borderTopColor: decorationColor }}
        >
          {(title || description) && (
            <CardHeader className={cn(isCompact && "p-4")}>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent className={cn("relative", isCompact && "p-4 pt-0")}>
            {children}
          </CardContent>
          {footer && <CardFooter className={cn(isCompact && "p-4 pt-0")}>{footer}</CardFooter>}
        </Card>
      </motion.div>
    );
  }
);

DashboardCard.displayName = "DashboardCard";
