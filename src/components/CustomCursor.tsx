import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const onMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const onMouseOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOverInteractive);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOverInteractive);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid rgba(6, 182, 212, 0.6)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out, width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          width: '6px',
          height: '6px',
          background: '#06b6d4',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease',
        }}
      />
      <style>{`
        .custom-cursor.cursor-hover {
          width: 60px !important;
          height: 60px !important;
          border-color: rgba(139, 92, 246, 0.8) !important;
        }
        @media (pointer: coarse) {
          .custom-cursor,
          .custom-cursor-dot {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
