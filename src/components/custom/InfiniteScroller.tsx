import React, { useEffect, useRef, useState, ReactNode } from "react";

interface InfiniteScrollerProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  children,
  speed = 50,
  direction = "up",
  className = "",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const contentHeight = content.scrollHeight / 2; // 实际内容的高度

    const animate = () => {
      if (isPaused) return; // 如果暂停，不执行滚动

      setScrollPosition((prevPosition) => {
        let newPosition = prevPosition + (direction === "up" ? 1 : -1);

        // 当滚动位置超过内容高度时，重置位置
        if (direction === "up" && newPosition >= contentHeight) {
          newPosition -= contentHeight;
        } else if (direction === "down" && newPosition <= 0) {
          newPosition += contentHeight;
        }

        return newPosition;
      });
    };

    const intervalId = setInterval(animate, speed);

    return () => clearInterval(intervalId);
  }, [direction, speed, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      ref={containerRef}
      className={`infinite-scroller ${className}`}
      style={{
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          top: -scrollPosition,
          left: 0,
          right: 0,
          transition: "none",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroller;
