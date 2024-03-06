"use client"
import React, { useState } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Buttons/Button";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function page() {
    const {data, status } = useSession()
    const [userInfo, setUserInfo] = useState({email: '', password: ''})
    const router = useRouter()

    if(status === 'authenticated'){
      router.push('/')
    }


    async function handleLogin(e: any){
        e.preventDefault()
        const response = await signIn('credentials', {
          email: userInfo.email,
          password: userInfo.password,
          redirect: false
        })
    
        if(response?.status === 200){
          router.push('/profile')
        }
      }

  return (
    <main className="container flex min-h-[90vh] items-center justify-center">
      <div className="mx-auto w-11/12 bg-secondary-300 px-6 py-8 md:max-w-[800px]">
        <Typography variant={"h4"} className="text-center text-primary">
          {" "}
          Login{" "}
        </Typography>
        <form className="mt-6 flex flex-col gap-2" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Username"
            className="rounded px-4 py-2"
            name="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo(prev => ({...prev, email: e.target.value}))}
          />
          <input
            type="password"
            placeholder="password"
            className="rounded px-4 py-2"
            name="password"
            onChange={(e) => setUserInfo(prev => ({...prev, password: e.target.value}))}
            value={userInfo.password}
          />

          <div>
            <Button type="submit" onSubmit={handleLogin}> Login </Button>
          </div>
        </form>
      </div>
    </main>
  );
}