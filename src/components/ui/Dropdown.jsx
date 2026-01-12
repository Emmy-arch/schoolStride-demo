import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import { cn } from "../../lib/utils";

/* -------------------------------------------------
   Context
-------------------------------------------------- */

const DropdownContext = createContext(null);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used inside <Dropdown>");
  }
  return context;
}

/* -------------------------------------------------
   Root
-------------------------------------------------- */

export function Dropdown({ children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

/* -------------------------------------------------
   Trigger
-------------------------------------------------- */

export function DropdownTrigger({ children, className }) {
  const { open, setOpen } = useDropdown();

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------
   Content
-------------------------------------------------- */

export function DropdownContent({ children, className }) {
  const { open } = useDropdown();

  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute right-0 z-50 mt-2 min-w-40 rounded-md border bg-background shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------
   Label
-------------------------------------------------- */

export const DropdownLabel = React.forwardRef(
  ({ className, inset = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-2 py-1.5 text-sm font-semibold text-gray-700", // base styling
          inset && "pl-8", // optional inset
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

/* -------------------------------------------------
   Item
-------------------------------------------------- */

export function DropdownItem({ children, onClick, className }) {
  const { setOpen } = useDropdown();

  const handleClick = () => {
    onClick?.();
    setOpen(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center px-3 py-2 text-sm text-left hover:bg-muted focus:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------
   Separator (optional)
-------------------------------------------------- */

export function DropdownSeparator() {
  return <div className="my-1 h-px bg-border" />;
}
