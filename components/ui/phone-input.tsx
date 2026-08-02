"use client";

import * as React from "react";
import {  ChevronsUpDown, Globe } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PhoneInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: string) => void;
  };

export const CustomPhoneInput = React.forwardRef<
  React.ComponentRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, value, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className="flex items-center space-x-2 w-full"
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      value={value as RPNInput.Value}
      onChange={(newValue) => onChange?.(newValue || "")}
      {...props}
    />
  );
});
CustomPhoneInput.displayName = "CustomPhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className="w-full px-4 py-3 text-sm  text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
    ref={ref}
    {...props}
  />
));
InputComponent.displayName = "InputComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};



const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-1.5 px-3 py-3 rounded-xs border-r border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 h-full cursor-pointer"
          disabled={disabled}
        >
          <FlagComponent country={value} countryName={value} />
          <ChevronsUpDown className="w-3.5 h-3.5 text-slate-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] left-0 absolute border border-slate-200 p-0 bg-white  shadow-lg rounded-xs z-50">
     
        <Command>
          <CommandInput placeholder="Search country..." className="h-9 text-xs" />
          <CommandList className="max-h-[220px] overflow-y-auto p-1">
            <CommandEmpty className="py-2 text-center text-xs text-slate-500">
              No country found.
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value || "ZZ"}
                  className="flex items-center justify-between px-2 py-1.5 text-xs text-slate-700 hover:bg-brand-primary/10 rounded-xs cursor-pointer"
                  onSelect={() => {
                    if (option.value) onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span className="font-medium">{option.label}</span>
                  </div>
                  {option.value && (
                    <span className="text-slate-400 text-[10px]">
                      +{RPNInput.getCountryCallingCode(option.value)}
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};



const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];
  return (
    <span className="w-5 h-3.5 overflow-hidden flex items-center justify-center rounded-xs">
      {Flag ? <Flag title={countryName} /> : <Globe className="w-4 h-4 text-slate-400" />}
    </span>
  );
};