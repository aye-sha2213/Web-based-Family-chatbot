import { useEffect, useState } from 'react';

export const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 bg-white ${
        isHovered ? 'w-8 h-8 opacity-90 scale-125' : 'w-4 h-4 opacity-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: isHovered
          ? '0 0 15px #ffffff, 0 0 30px #ffffff, 0 0 45px rgba(255, 255, 255, 0.9)'
          : '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 35px rgba(255, 255, 255, 0.8)',
      }}
    />
  );
};
