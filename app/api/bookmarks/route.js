import { NextResponse } from "next/server";
import prisma from "../../utils/connect";
import { getAuthSession } from "@/app/utils/auth";

export async function GET(req) {
  const params = req.nextUrl.searchParams;
  const userId  = params.get('userId') ?? null

  if (!userId) {
    return new NextResponse(
      JSON.stringify({ message: "Not authorized" }, { status: 401 }),
    );
  }

  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      bookmarks: true,
    },
  });

  return NextResponse.json(data);
}



export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not authorized" }, { status: 401 })
    );
  }
  try {
    const body = await req.json();
    console.log(body,'body')
    const post = await prisma.bookmarks.create({
      data: { ...body, userId: session.user.uid },
    });
    const responseBody = JSON.stringify(post);
    return new NextResponse(responseBody, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};