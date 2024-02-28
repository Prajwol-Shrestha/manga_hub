import React, { ReactNode } from "react";

export default function TwoThirdsOneThirdLayout({
  primaryChild,
  secondaryChild,
}: {
  primaryChild: ReactNode;
  secondaryChild: ReactNode;
}) {
  return (
    <section className="container flex flex-col-reverse gap-6 py-12 lg:flex-row lg:gap-12">
      <div className="flex w-full flex-col gap-12 lg:w-[75%]">
        {primaryChild}
        {/* <TopSectionCards type={"manga"} title={"Top Mangas"}/>
        <TopSectionCards type={"manhwa"} title={"Top Manhwa"}/>
        <TopSectionCards type={"manhua"} title={"Top Manhuas"}/> */}
      </div>
      <div className="w-full lg:w-[25%]">{secondaryChild}</div>
    </section>
  );
}
