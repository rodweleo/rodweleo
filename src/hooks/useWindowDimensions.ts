"use client";

import { AnyAaaaRecord } from "dns";
import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowResize = (e: any) => {
    setDimensions({
      width: e.currentTarget.innerWidth,
      height: e.currentTarget.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    dimensions,
  };
}
