"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Typography from "./components/Typography/Typography";
import Button from "./components/Buttons/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex  flex-col items-center justify-center gap-4 mt-auto">
      <Typography variant={"h3"} className="text-white">
        {" "}
        Something went Wrong!{" "}
      </Typography>
      <div>
        <Button onClick={() => reset()} intent={"outline"}>
          {" "}
          Try Again{" "}
        </Button>
      </div>
    </div>
  );
}
