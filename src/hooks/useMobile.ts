import { useLayoutEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 960) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile();
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return { isMobile };
};
