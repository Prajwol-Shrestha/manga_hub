"use client";
import React, { useState } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Buttons/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { data, status } = useSession();
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  if(status === 'authenticated'){
    router.push('/')
  }

  async function handleSignUp(e: any) {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });

    if(response.status === 200){
      router.push("/login")
    }
    
  }

  return (
    <main className="container flex min-h-[90vh] items-center justify-center">
      <div className="mx-auto w-11/12 bg-secondary-300 px-6 py-8 md:max-w-[800px]">
        <Typography variant={"h4"} className="text-center text-primary">
          {" "}
          Sign Up{" "}
        </Typography>
        <form className="mt-6 flex flex-col gap-2" onSubmit={handleSignUp}>
          <input
            type="name"
            placeholder="name"
            className="rounded px-4 py-2"
            name="name"
            value={userInfo.name}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded px-4 py-2"
            name="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="password"
            className="rounded px-4 py-2"
            name="password"
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            value={userInfo.password}
          />

          <div>
            <Button type="submit"> Login </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
