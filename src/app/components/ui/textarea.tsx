import { TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        "block w-full rounded-md border border-border bg-input px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";