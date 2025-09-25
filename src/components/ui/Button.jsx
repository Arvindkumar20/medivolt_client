import React from 'react';
import { cn } from '../../utils/cn';

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}) {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
