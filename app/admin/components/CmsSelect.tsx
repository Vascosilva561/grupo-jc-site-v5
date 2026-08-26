"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";

export interface CmsSelectOption {
  value: string | number;
  label: string;
  badge?: string;
  dotColor?: string;
}

interface CmsSelectProps {
  label?: string;
  name?: string;
  options: CmsSelectOption[];
  defaultValue?: string | number | null;
  value?: string | number | null;
  onChange?: (e: { target: { name?: string; value: string } }) => void;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  placeholder?: string;
}

export function CmsSelect({
  label,
  name,
  options,
  defaultValue,
  value: controlledValue,
  onChange,
  helperText,
  error,
  required,
  disabled,
  className = "",
  id,
  placeholder = "Selecione uma opção...",
}: CmsSelectProps) {
  const isControlled = controlledValue !== undefined;
  
  const initialVal = defaultValue !== undefined && defaultValue !== null 
    ? String(defaultValue) 
    : (options[0]?.value !== undefined ? String(options[0].value) : "");

  const [internalValue, setInternalValue] = useState<string>(initialVal);
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    width: number;
    openUpward: boolean;
  }>({
    top: 0,
    left: 0,
    width: 0,
    openUpward: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  const rawValue = isControlled 
    ? (controlledValue !== null && controlledValue !== undefined ? String(controlledValue) : "") 
    : internalValue;

  const selectedOption = options.find(
    (opt) => String(opt.value) === rawValue
  ) || options[0];

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const dropdownHeight = Math.min(options.length * 42 + 16, 260);
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUp = spaceBelow < dropdownHeight && rect.top > dropdownHeight + 10;

    const computedTop = openUp
      ? Math.max(8, rect.top - dropdownHeight - 6)
      : Math.min(window.innerHeight - dropdownHeight - 8, rect.bottom + 6);

    setCoords({
      top: computedTop,
      left: rect.left,
      width: rect.width,
      openUpward: openUp,
    });
  };

  const handleToggle = () => {
    if (disabled) return;
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((prev) => !prev);
  };

  // Synchronously compute position as soon as dropdown opens
  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

  // Keep position accurate on scroll / resize / window events
  useEffect(() => {
    if (!isOpen) return;

    const handleScrollOrResize = () => {
      updatePosition();
    };

    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [isOpen, options.length]);

  // Close on outside click or Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (option: CmsSelectOption) => {
    if (disabled) return;
    const strVal = String(option.value);
    if (!isControlled) {
      setInternalValue(strVal);
    }
    setIsOpen(false);

    if (onChange) {
      onChange({ target: { name, value: strVal } });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`cms-custom-select-wrap ${error ? "has-error" : ""} ${
        disabled ? "is-disabled" : ""
      } ${isOpen ? "is-open" : ""} ${coords.openUpward ? "is-upward" : ""} ${className}`}
    >
      {label && (
        <label
          htmlFor={selectId}
          className="cms-field-label"
          onClick={handleToggle}
        >
          {label}
          {required && <span className="cms-required-dot" aria-hidden="true">*</span>}
        </label>
      )}

      {/* Hidden input for server actions / standard form submission */}
      {name && (
        <input
          type="hidden"
          name={name}
          value={rawValue}
          id={selectId}
        />
      )}

      {/* Custom Trigger Button */}
      <div className="cms-custom-select-trigger-box">
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={`cms-custom-select-trigger ${isOpen ? "is-focused" : ""}`}
        >
          <span className="cms-custom-select-selected-text">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span
            className={`cms-custom-select-chevron ${isOpen ? "is-rotated" : ""}`}
            aria-hidden="true"
          >
            <ChevronDown size={17} />
          </span>
        </button>
      </div>

      {/* Custom Dropdown List Popup via Portal */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            className={`cms-custom-select-dropdown ${
              coords.openUpward ? "cms-custom-select-dropdown--up" : ""
            }`}
            style={{
              position: "fixed",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              width: `${coords.width}px`,
              zIndex: 99999,
            }}
            role="listbox"
            tabIndex={-1}
          >
            <div className="cms-custom-select-options">
              {options.map((option) => {
                const isSelected = String(option.value) === rawValue;
                return (
                  <button
                    type="button"
                    key={String(option.value)}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option)}
                    className={`cms-custom-select-option ${
                      isSelected ? "is-active" : ""
                    }`}
                  >
                    <span className="cms-custom-select-option-label">
                      {option.label}
                    </span>
                    {isSelected && (
                      <span className="cms-custom-select-check">
                        <Check size={16} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body
        )}

      {helperText && !error && (
        <span className="cms-field-helper">{helperText}</span>
      )}
      {error && <span className="cms-field-error">{error}</span>}
    </div>
  );
}
