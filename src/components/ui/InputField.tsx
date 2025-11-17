"use client";

import { cn } from "@/lib/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            className="block text-sm font-semibold"
            style={{ color: '#222831', fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-lg border px-4 py-3 text-base transition-all focus:outline-none focus:ring-2",
            className
          )}
          style={{
            borderColor: error ? '#FF6B6B' : '#E3E3E3',
            backgroundColor: '#F5F5F5',
            color: '#222831',
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: '16px'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? '#FF6B6B' : '#3A7BD5';
            e.currentTarget.style.boxShadow = error 
              ? '0 0 0 3px rgba(255, 107, 107, 0.2)' 
              : '0 0 0 3px rgba(58, 123, 213, 0.2)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? '#FF6B6B' : '#E3E3E3';
            e.currentTarget.style.boxShadow = 'none';
          }}
          {...props}
        />
        {error && (
          <p className="text-sm" style={{ color: '#FF6B6B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
