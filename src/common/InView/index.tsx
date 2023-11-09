import React, { useState, useEffect, useRef } from "react";

export const InView: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div ref={domRef} style={{ minHeight: "1px" }}>
      {isVisible && children}
    </div>
  );
};
