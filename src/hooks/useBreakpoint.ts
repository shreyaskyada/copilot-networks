import { useState } from "react";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
};

// Tailwind breakpoints mapping
const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useBreakpoint = (breakpoint: keyof Breakpoints) => {
  const minWidth = breakpoints[breakpoint];

  if (!minWidth) {
    console.warn(`Invalid breakpoint: ${breakpoint}`);
  }

  // Create a media query
  const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

  // State to track if the current screen width matches the breakpoint
  const [matches, setMatches] = useState(mediaQuery.matches);

  // Add real-time listener
  mediaQuery.onchange = (e) => {
    setMatches(e.matches);
  };

  return !matches;
};
