import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/app/utils/cn";

const paragraph = cva("p", {
  variants: {
    variant: {
      caption: ["text-inherit", "text-sm"],
      body1: ["text-inherit", "text-lg"],
      body2: ["text-inherit", "text-base"],
      h1: ["text-inherit", "text-6xl", "font-bold"],
      h2: ["text-inherit", "text-5xl", "font-bold"],
      h3: ["text-inherit", "text-4xl", "font-bold"],
      h4: ["text-inherit", "text-3xl", "font-bold"],
      h5: ["text-inherit", "text-2xl", "font-bold"],
      h6: ["text-inherit", "text-xl", "font-bold"],
    },
  },
  compoundVariants: [{ variant: "h1", class: "capitalize" }],
  defaultVariants: {
    variant: "body2",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  ...props
}) => <p className={cn(paragraph({ variant, className }))} {...props} />;

export default Typography;
