import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import InstagramFeed from "./InstagramFeed"; // Placeholder for Instagram integration

const LatestSection = () => {
  const [eventsIndex, setEventsIndex] = useState(0);
  const [isNewsHovered, setIsNewsHovered] = useState(false);
  const eventsTimerRef = useRef(null);

  const events = [
    {
      image: "./images/events/event1.webp",
      title: "Cyber Hygiene Practices, Cyber Security Workshop",
    },
    {
      image: "./images/events/event2.webp",
      title: "AI and Machine Learning Seminar",
    },
    {
      image: "./images/events/event3.webp",
      title: "Blockchain Technology Awareness Program",
    },
  ];

  const news = [
    "58-yr-old man loses ₹11.77 lakh to cyber fraudsters posing as Facebook friend",
    "Retired Govt Employee in Vizag Duped of Rs 2.5 Crore in 'Digital Arrest' Fraud",
    "Gurugram Woman Loses Rs 5.85 Crore In Cyber Scam, Blames Banks",
    "Fake Trading Apps Dupe Two Citizens Of Rs 3.14 Crore",
  ];

  useEffect(() => {
    eventsTimerRef.current = setInterval(() => {
      setEventsIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(eventsTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Latest Events */}
      <div className="bg-orange-500 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-white text-lg font-bold px-4 py-2">Latest Events</h2>
        <motion.div
          key={events[eventsIndex].title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="relative h-64 overflow-hidden"
        >
          <img
            src={events[eventsIndex].image}
            alt={events[eventsIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
            {events[eventsIndex].title}
          </div>
        </motion.div>
        <button className="bg-white text-orange-500 font-medium px-4 py-2 w-full">View All</button>
      </div>

      {/* Latest News */}
      <div
        className="bg-green-500 rounded-lg shadow-lg overflow-hidden"
        onMouseEnter={() => setIsNewsHovered(true)}
        onMouseLeave={() => setIsNewsHovered(false)}
      >
        <h2 className="text-white text-lg font-bold px-4 py-2">Latest News</h2>
        <div
          className={`overflow-hidden h-64 ${isNewsHovered ? "" : "animate-scroll"}`}
          style={{ animation: isNewsHovered ? "none" : "scrollVertical 10s linear infinite" }}
        >
          <ul className="text-white text-sm px-4 py-2 space-y-2">
            {news.map((item, index) => (
              <li key={index} className="border-b border-white pb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-white text-green-500 font-medium px-4 py-2 w-full">View All</button>
      </div>

      {/* Instagram Feed */}
      <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-white text-lg font-bold px-4 py-2">Instagram Feed</h2>
        <div className="overflow-y-scroll h-64">
          <InstagramFeed />
        </div>
      </div>
    </div>
  );
};

export default LatestSection;

/* CSS for vertical scrolling */
const styles = `
@keyframes scrollVertical {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}
.animate-scroll {
  animation: scrollVertical 10s linear infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
