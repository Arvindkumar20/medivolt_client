import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, children, ...props }) {
  return (
    <div className={cn('card p-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('mt-4', className)} {...props}>
      {children}
    </div>
  );
}
