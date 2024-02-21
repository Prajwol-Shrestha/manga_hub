import Button from "@/app/components/Buttons/Button";
import IconButton from "@/app/components/Buttons/IconButton";
import TopSection from "@/app/components/TopSection/TopSection";
import Typography from "@/app/components/Typography/Typography";
import Image from "next/image";
import React from "react";
const image = "/assets/estate.png";

export default function page({ params }: { params: { slug: number } }) {
  const { slug } = params;
  return (
    <main>
      <section className="hero !bg-cover !bg-center">
        <div className="backdrop-blur-xl bg-slate-900/40 py-12">
          <div className="container flex gap-4 ">
            <div className=" basis-1/3">
              <Image src={image} width={600} height={500} alt="image" />
            </div>
            <div className="flex basis-1/2 flex-col gap-3">
              <Typography variant={"h3"} className="text-white">
                {" "}
                The Greatest Estate Developer{" "}
              </Typography>
              <div></div>
              <div className="flex gap-4">
                <IconButton
                  intent={"primary"}
                  text="Watch Now"
                  icon={"material-symbols:play-circle-rounded"}
                  iconPlacement={"left"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm"
                />
                <IconButton
                  intent={"primary"}
                  text="Add to List"
                  icon={"ic:baseline-plus"}
                  iconPlacement={"right"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
                />
              </div>
              <Typography
                variant={"body1"}
                className="line-clamp-3 max-w-[80%] text-white/90"
              >
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus praesentium, dolorem laboriosam illo sit vero
                accusamus perferendis autem expedita adipisci similique et
                assumenda. Debitis nesciunt quis, molestiae aut fuga veritatis
                voluptate assumenda deserunt sunt pariatur, est ex repellat dicta
                repudiandae? Laudantium ullam et corrupti amet quis mollitia, quae
                consequuntur facilis pariatur eius velit inventore non excepturi
                vero voluptates ipsam? Quam.{" "}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
      <TopSection />
        
      </section>
    </main>
  );
}
