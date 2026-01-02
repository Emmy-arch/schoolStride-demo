import React from "react";
import { cn } from "../../lib/utils";

/**
 * Custom ScrollArea
 * -----------------
 * - Uses native browser scrolling
 * - Supports vertical & horizontal scroll
 * - Accepts all normal div props
 * - Has CSS styling in index.css
 */
const ScrollArea = React.forwardRef(function ScrollArea(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "sidebar relative h-full w-full overflow-auto rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default ScrollArea;
