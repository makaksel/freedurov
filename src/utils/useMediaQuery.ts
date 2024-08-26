'use client';

import { useEffect, useState } from "react";


export const useMediaQuery = (maxWidth: string) => {

  const [isLargeScreen, setIsLargeScreen] = useState(false); 

  useEffect(() => {
    setIsLargeScreen(window.matchMedia(`(max-width: ${maxWidth}px)`).matches);

    // I write this into a function for better visibility
    const handleResize = (e: any) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isLargeScreen
};
