"use client";
import React, { useState } from "react";
import navlinks from "@/app/constants/navlinks.json";
import Link from "next/link";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import Typography from "../Typography/Typography";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Button";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { data, status } = useSession();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    router.push(`/search?query=${searchValue}`);
  }

  function handleLogout() {
    signOut();
  }
  return (
    <nav className="bg-secondary-600 text-white">
      <div className="container flex items-center justify-between px-2 py-4">
        <Typography variant={"h6"} className="text-primary">
          {" "}
          Manga{" "}
        </Typography>
        <form onSubmit={handleSearch}>
          <InputWithIcon
            type="text"
            icon="icons8:search"
            placeholder="Search..."
            value={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          />
        </form>
        <div
          onClick={() => setShowNavbar((prev) => !prev)}
          className={`z-30 flex sm:hidden ${showNavbar ? "opened" : ""}`}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>

        <ul className="hidden items-center justify-center gap-4 sm:flex">
          {navlinks.map((link) => (
            <li key={link.title}>
              {" "}
              <Link href={link.link}> {link.title} </Link>{" "}
            </li>
          ))}
          <div className="flex gap-2 items-center">
            {status === "authenticated" ? (
              <>
                {/* <div className="text-xl"> */}
                  {" "}
                  <Link href={"/profile"}> Profile </Link>{" "}
                {/* </div> */}
                <Button
                  intent={"primary"}
                  size={"small"}
                  className="py-2"
                  onClick={handleLogout}
                >
                  {" "}
                  Logout{" "}
                </Button>
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <Button intent={"primary"} size={"small"} className="py-2">
                    {" "}
                    Login{" "}
                  </Button>
                </Link>
                <Link href={"/signup"}>
                  <Button intent={"outline"} size={"small"} className="py-2">
                    {" "}
                    Sign up{" "}
                  </Button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
      {showNavbar && (
        <div
          onClick={() => setShowNavbar(false)}
          className="absolute top-0 z-20 flex h-full w-full items-center justify-end bg-secondary-300/90 sm:hidden"
        >
          <ul
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex h-full w-9/12 flex-col items-center justify-center gap-4 bg-secondary-400"
          >
            {navlinks.map((link) => (
              <li key={link.title} className="text-xl">
                {" "}
                <Link href={link.link}> {link.title} </Link>{" "}
              </li>
            ))}
            <div className="flex gap-2">
              <Link href={"/login"}>
                <Button intent={"primary"} size={"small"} className="py-2">
                  {" "}
                  Login{" "}
                </Button>
              </Link>
              <Link href={"/signup"}>
                <Button intent={"outline"} size={"small"} className="py-2">
                  {" "}
                  Sign up{" "}
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
