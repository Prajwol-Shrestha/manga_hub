import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/app/utils/cn";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "rounded-sm",
        "capitalize",
        "hover:bg-primary-500",
        "cursor-pointer",
        "tracking-wider",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
      outline: [
        "bg-transparent",
        "rounded-sm",
        "text-primary",
        "hover:bg-primary-500",
        "cursor-pointer",
        "tracking-wider",
        "cursor-pointer",
      ],
      chip: [
        "text-white",
        "tracking-wider",
        "rounded-lg",
        "border-1",
        "font-semibold"
      ]
    },
    size: {
      extraSmall: ["py-1", "px-2", "text-xs"],
      small: ["text-sm", "py-2", "px-4"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "capitalize" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={cn(button({ intent, size, className }))} {...props} />;

export default Button;
