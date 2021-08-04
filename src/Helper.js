/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useState, useEffect } from "react";

export default function Scroller(value, task, handler) {
  const _fnEmptyFunctionPointer = () => {};

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollX > value) {
        handler(true);
      } else handler(false);
    });
    return () => {
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, [task, value, handler]);
}
