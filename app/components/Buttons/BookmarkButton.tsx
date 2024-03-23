"use client";

import React from "react";
import IconButton from "./IconButton";
import { useAppDispatch } from "@/lib/hooks";
import { showSnackbarAsync } from "@/lib/features/Snackbar/SnackbarSlice";

interface BookmarkButtonProps {
  mal_id: number;
  title: string;
  image: string;
}

export default function BookmarkButton({
  mal_id,
  title,
  image,
}: BookmarkButtonProps) {
  const stringMalId = String(mal_id);
  const dispatch = useAppDispatch();

  async function handleBookmarkManga(e: React.MouseEvent) {
    e.preventDefault();
    try {
      const response = await fetch("/api/bookmarks", {
        method: "POST",
        body: JSON.stringify({ mal_id: stringMalId, title, image }),
      });

      if (response.ok) {
        dispatch(
          showSnackbarAsync({
            severity: "success",
            message: "Manga Bookmarked Sucessfully",
          }),
        );
      } else {
        dispatch(
          showSnackbarAsync({
            severity: "error",
            message: response.statusText,
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <IconButton
        onClick={handleBookmarkManga}
        intent={"primary"}
        text="Add to Bookmarks"
        icon={"ic:baseline-plus"}
        iconPlacement={"right"}
        additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
      />
    </>
  );
}
