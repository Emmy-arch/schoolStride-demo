import React, { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * Avatar - wrapper component for the user avatar
 * Props:
 * - className: custom classes
 * - children: fallback content if image fails
 */
const Avatar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Avatar.displayName = "Avatar";

/**
 * AvatarImage - shows user image
 * Props:
 * - src: image url
 * - alt: alt text
 * - className: custom classes
 */
const AvatarImage = React.forwardRef(({ src, alt = "Avatar", className, ...props }, ref) => {
  const [hasError, setHasError] = useState(false);

  return !hasError && src ? (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  ) : null; // fallback will be rendered by parent
});
AvatarImage.displayName = "AvatarImage";

/**
 * AvatarFallback - shows fallback if image fails or no src provided
 * Props:
 * - className: custom classes
 * - children: can be initials or icon
 */
const AvatarFallback = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
