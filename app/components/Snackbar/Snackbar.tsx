"use client";

import React from "react";
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeSnackbar } from "@/lib/features/Snackbar/SnackbarSlice";

const Snackbar = () => {
  const snackbarState = useAppSelector((state) => state.snackbar);
  const { message, severity, isDisplayed } = snackbarState.snackbar ?? {};
  const dispatch = useAppDispatch();

  if (!isDisplayed) {
    return <></>;
  }

  const snackbarRoot = document.getElementById("snackbar__root");
  if (!snackbarRoot) {
    // Return null or an alternative if the element is not found
    return null;
  }

  let snackbarColor = "bg-lightblue";
  if (severity === "error") {
    snackbarColor = "bg-red-600";
  } else if (severity === "success") {
    snackbarColor = "bg-green-600";
  }

  let animation = ''
  if(isDisplayed){
    animation = 'animate-slideLeft'
  } else{
    animation = 'animate-slideRight'
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed right-5 top-10 z-50 rounded-md px-6 py-2 text-left capitalize text-white ${snackbarColor} ${animation}`}
    >
      <div className="pr-4">{message}</div>
      <div
        className="absolute right-4 top-0.5 cursor-pointer text-lg"
        onClick={() => dispatch(closeSnackbar())}
      >
        &times;
      </div>
    </div>,
    snackbarRoot,
  );
};
export default Snackbar;
