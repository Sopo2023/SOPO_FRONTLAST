import { useRef, useEffect, useState } from 'react';

const useTouchScroll = (elementRef) => {
  const [translateX, setTranslateX] = useState(0);

  const handleTouchStart = (event) => {
    // Get the initial touch position
    const initialTouchX = event.touches[0].clientX;

    const handleTouchMove = (event) => {
      // Calculate the distance moved
      const touchX = event.touches[0].clientX;
      const delta = initialTouchX - touchX;

      // Update the translation
      setTranslateX((prevTranslateX) => prevTranslateX - delta);
    };

    const handleTouchEnd = () => {
      // Remove touch event listeners when the touch ends
      elementRef.current.removeEventListener('touchmove', handleTouchMove);
      elementRef.current.removeEventListener('touchend', handleTouchEnd);
    };

    // Add touch event listeners
    elementRef.current.addEventListener('touchmove', handleTouchMove);
    elementRef.current.addEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    const element = elementRef.current;
    element.addEventListener('touchstart', handleTouchStart);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
    };
  }, [elementRef]);

  return { translateX, setTranslateX };
};

export default useTouchScroll;
