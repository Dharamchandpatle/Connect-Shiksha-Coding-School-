import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { label: "Community People", max: 200 },
    { label: "Enroll Students", max: 25 },
    { label: "Team Members", max: 12 },
    { label: "Student Projects", max: 50 },
  ];

  const durationInSeconds = 2; // Total duration for counting up
  const intervalDuration = 50; // Interval duration for updating counts (in milliseconds)

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = prevCounts.map((count, index) => {
          const increment =
            (stats[index].max * intervalDuration) / (durationInSeconds * 1000);
          const updatedCount = Math.min(count + increment, stats[index].max);
          return updatedCount;
        });
        return newCounts;
      });
    }, intervalDuration);

    // Clear interval when component unmounts or when counts reach their max values
    return () => clearInterval(interval);
  }, [stats, intervalDuration, durationInSeconds]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Stats & Achievements 🚀
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We are the fastest-growing community of coders in tier 3 cities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 rounded-lg bg-blue-600 p-6 md:grid-cols-4 md:gap-8 md:p-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {Math.floor(counts[index])}+ {/* Display current count */}
              </div>
              <div className="text-sm text-blue-200 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
