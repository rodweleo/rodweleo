"use client";

import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = (e: any) => {
    setDimensions({
      width: e.currentTarget.innerWidth,
      height: e.currentTarget.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener("resize", handleWindowResize);
    }
  }, []);

  return {
    dimensions,
  };
}
