import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ to, duration = 2000, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseFloat(to);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (endValue - startValue) + startValue);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(endValue);
    };

    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
