import Link from "next/link";
import Typography from "./components/Typography/Typography";
import Button from "./components/Buttons/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Typography variant={"h1"} className="text-white"> 404 </Typography>
      <Typography variant={"body1"} className="text-white/80">
        Could not find requested resource
      </Typography>
      <Link href="/">
        <Button intent="primary"> Return Home </Button>
      </Link>
    </div>
  );
}
