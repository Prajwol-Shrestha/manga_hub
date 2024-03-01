import React from "react";
import { Icon } from "@iconify/react";
import cn from "@/app/utils/cn";

export default function InputWithIcon({
  icon,
  placeholder,
  type,
  additonalClass = "",
  value,
  setSearchValue,
  handleSearch,
}: {
  icon: string;
  placeholder: string;
  type: string;
  additonalClass?: string;
  value: string | number;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearch?: Function;
}) {
  return (
    <div
      className={cn(
        `flex items-center gap-2 rounded-lg bg-secondary-200 pl-2 text-white ${additonalClass}`,
      )}
    >
      <Icon icon={icon} fontSize={24} onClick={() => handleSearch ?? {}} className="cursor-pointer "/>
      <input
        type={type ?? "text"}
        placeholder={placeholder ?? "Search..."}
        className="rounded-lg bg-inherit px-2 py-1 focus-visible:outline-none"
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
