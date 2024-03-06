import React from "react";
import Typography from "../components/Typography/Typography";

export default function page() {
  return (
    <main className="container flex min-h-[90vh] items-center justify-center">
      <Typography variant={"h4"} className="my-10 text-center text-primary">
        {" "}
        Your Profile{" "}
      </Typography>
    </main>
  );
}
