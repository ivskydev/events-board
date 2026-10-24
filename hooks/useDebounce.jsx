import { useState, useCallback, useEffect } from "react";

const useDebounceValue = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const useDebounceCallback = (callback, delay = 300, deps = []) => {
  /**
   * useCallback is necessary to void recreating a new setTimeout
   * every time debouncedFn is called, since JS creates a new
   * a function definition at every render.
  */
  return useCallback(debouncedFn(callback, delay), deps);
};

const debouncedFn = (callback, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(context, args);
    }, delay);
  };
};

export {
  useDebounceValue,
  useDebounceCallback
};