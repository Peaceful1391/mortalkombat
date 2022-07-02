import { useEffect, useState } from "react";

export const useKeyPress = () => {
  const [keysPressed, setKeysPressed] = useState(false);
  function downHandler({ key }) {
    setKeysPressed(key);
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []); 
  return keysPressed;
}; 
 