import { useRef, useEffect } from "react";

const useDebounce = (callbackFn: (...args: any[]) => any, delay: number) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (...args: any[]) => {
    clearTimeout(timerRef.current!);

    timerRef.current = setTimeout(() => {
      callbackFn(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      // cleanup before each re-render and after unmount
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timerRef]);

  return debounce;
};

export default useDebounce;
