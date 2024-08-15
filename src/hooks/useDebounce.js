import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
  let [debounceValue, setDebounce] = useState(value);
  useEffect(() => {
    const handleDelay = setTimeout(() => {
      setDebounce(value);
    }, Number(delay));
    return () => clearTimeout(handleDelay);
  }, [value]);
  return debounceValue;
}

export default useDebounce;
