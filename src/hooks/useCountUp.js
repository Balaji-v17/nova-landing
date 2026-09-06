import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for a smooth slow-down
      const easeOut = 1 - (1 - percentage) * (1 - percentage);
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return { count, ref };
}