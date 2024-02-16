import React from "react";
import { Icon } from "@iconify/react";
import cn from "@/app/utils/cn";
import Button from "./Button";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  intent: "primary" | "secondary" | "outline" | null | undefined;
  iconPlacement: "top" | "right" | "bottom" | "left";
  icon: any;
  text: string;
  additionalClassNames?: string;
}

export default function IconButton({
  icon,
  iconPlacement = "left",
  text,
  intent,
  additionalClassNames,
}: IconButtonProps) {
  return (
    <Button
      intent={intent}
      className={cn(
        `flex gap-2 items-center justify-between`,
        additionalClassNames
      )}
    >
      {icon && iconPlacement === "left" && <Icon icon={icon} fontSize={'1.2rem'}/>}
      {text}
      {icon && iconPlacement === "right" && <Icon icon={icon} fontSize={'1.2rem'}/>}
    </Button>
  );
}
