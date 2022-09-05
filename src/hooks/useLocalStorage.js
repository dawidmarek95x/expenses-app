import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(savedValue);
      }
      return initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;