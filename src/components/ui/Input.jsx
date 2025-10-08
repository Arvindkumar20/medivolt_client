import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable Input Component
 * 
 * Props:
 * - label: string → visible label above input
 * - error: string → error message (optional)
 * - description: string → helper text below input (optional)
 * - type, name, value, onChange → standard input props
 */
export function Input({
  label,
  error,
  description,
  className,
  ...props
}) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={props.name}
        className={cn(
          "w-full px-4 py-3 rounded-lg border bg-gray-800 text-white placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",
          "transition-all duration-200",
          error ? "border-red-500" : "border-gray-700",
          className
        )}
        {...props}
      />

      {description && (
        <p className="text-xs text-gray-400">{description}</p>
      )}

      {error && (
        <p className="text-xs text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
}
