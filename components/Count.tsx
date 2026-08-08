"use client";

import { useState, useEffect, useRef } from "react";

const Count = () => {
  
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isCounting, setIsCounting] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const targets = [50, 75, 10, 3];
  const duration = 2500;
  const steps = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true);

          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isCounting]);

  
  useEffect(() => {
    if (!isCounting) return;

    const increments = targets.map((target) => Math.ceil(target / steps));

    const intervals = targets.map((target, index) =>
      setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];

          if (next[index] < target) {
            next[index] = Math.min(next[index] + increments[index], target);
          }

          return next;
        });
      }, duration / steps)
    );

    return () => intervals.forEach(clearInterval);
  }, [isCounting]);


  return (
    <div ref={sectionRef}>
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-4">
          <div className="border border-border py-4 transition hover:border-primary hover:shadow-lg">
            <h3 className="mb-2 flex items-center justify-center text-muted-foreground">
              <span className="text-3xl">[</span>

              <span className="px-3 text-3xl font-medium">
                {counts[0]} +
              </span>

              <span className="text-3xl">]</span>
            </h3>

            <p className="font-serif text-xl font-semibold text-primary">
              Happy Clients
            </p>
          </div>

          <div className="border border-border py-4 transition hover:border-primary hover:shadow-lg">
            <h3 className="mb-2 flex items-center justify-center text-muted-foreground">
              <span className="text-3xl">[</span>

              <span className="px-3 text-3xl font-medium">
                {counts[1]} +
              </span>

              <span className="text-3xl">]</span>
            </h3>

            <p className="font-serif text-xl font-semibold text-primary">
              Projects Completed
            </p>
          </div>

          <div className="border border-border py-4 transition hover:border-primary hover:shadow-lg">
            <h3 className="mb-2 flex items-center justify-center text-muted-foreground">
              <span className="text-3xl">[</span>

              <span className="px-3 text-3xl font-medium">
                {counts[2]} +
              </span>

              <span className="text-3xl">]</span>
            </h3>

            <p className="font-serif text-xl font-semibold text-primary">
              Awards Won
            </p>
          </div>

          <div className="border border-border py-4 transition hover:border-primary hover:shadow-lg">
            <h3 className="mb-2 flex items-center justify-center text-muted-foreground">
              <span className="text-3xl">[</span>

              <span className="px-3 text-3xl font-medium">
                {counts[3]} +
              </span>

              <span className="text-3xl">]</span>
            </h3>

            <p className="font-serif text-xl font-semibold text-primary">
              Years of Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;