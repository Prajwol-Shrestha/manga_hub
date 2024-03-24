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
      className={`fixed right-5 top-10 z-50 rounded-sm px-5 py-3 text-left capitalize text-white ${snackbarColor} ${animation}`}
    >
      <div className="pr-5">{message}</div>
      <div
        className="absolute right-3 top-[1px] cursor-pointer text-xl"
        onClick={() => dispatch(closeSnackbar())}
      >
        &times;
      </div>
    </div>,
    snackbarRoot,
  );
};
export default Snackbar;
