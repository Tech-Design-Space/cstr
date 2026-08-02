"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export const CustomSelect = ({
  value,
  onValueChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onValueChange: (val: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
}) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xs border ${
          error ? "border-rose-500" : "border-slate-300"
        } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm text-slate-800 bg-white cursor-pointer transition-colors`}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="w-[var(--radix-select-trigger-width)] bg-white border border-slate-200 shadow-xl rounded-xs p-1 z-50 overflow-hidden">
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option, idx) => (
              <SelectPrimitive.Item
                key={idx}
                value={option}
                className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-brand-primary/10 hover:text-brand-dark rounded-xs cursor-pointer outline-none transition-colors"
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check className="w-4 h-4 text-brand-dark" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};