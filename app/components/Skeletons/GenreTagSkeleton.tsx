import React from "react";

export default function GenreTagSkeleton() {
  return (
    <div
      role="status"
      className="w-full animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
    >
      <div className="mb-4 h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
