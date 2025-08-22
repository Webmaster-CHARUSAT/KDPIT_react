import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

// -------------- Announcement Bar --------------------------

  // Sample announcements - replace with your actual data
  const announcements = [
    {
      id: 1,
      text: "Applications for 2025 academic year are now open! Last date to apply is December 15, 2024.",
      link: "/admissions",
    },
    {
      id: 2,
      text: "Upcoming placement drive by Microsoft on November 10, 2024. Register now!",
      link: "/placements",
    },
    {
      id: 3,
      text: "Annual tech fest 'Innovate 2025' registrations are open. Early bird discounts until October 30.",
      link: "/events/techfest",
    },
    {
      id: 4,
      text: "New research collaboration with Stanford University. Research internship opportunities available.",
      link: "/research",
    },
    {
      id: 5,
      text: "Department of IT organizing workshop on AI & Machine Learning on November 5-6, 2024.",
      link: "/workshops",
    },
  ];

  // Check localStorage on component mount
  useEffect(() => {
    const isDismissed = localStorage.getItem('announcementDismissed') === 'true';
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  // Add keyframes dynamically to the document
  useEffect(() => {
    const marqueeStyles = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      
      @keyframes marquee2 {
        0% { transform: translateX(100%); }
        100% { transform: translateX(0%); }
      }
      
      .animate-marquee {
        animation: marquee linear infinite;
      }
      
      .animate-marquee2 {
        animation: marquee2 linear infinite;
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = marqueeStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Clean up on component unmount
    };
  }, []);

  // Optional: Function to dismiss the announcement bar
//   const dismissAnnouncement = (e) => {
//     e.stopPropagation();
//     setIsVisible(false);
//     localStorage.setItem('announcementDismissed', 'true');
//   };

  // If dismissed, don't render anything
//   if (!isVisible) return null;

  // Calculate the total width needed for animation
  const totalWidth = announcements.reduce((acc, curr) => acc + curr.text.length * 10, 0); // rough estimate
  const animationDuration = totalWidth / 50; // adjust speed (higher number = slower)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg border-t border-blue-900">
      <div className="py-1 flex items-center overflow-hidden relative">
        {/* Announcement Icon */}
        <div className="hidden sm:flex h-8 w-8 rounded-full bg-white/20 items-center justify-center flex-shrink-0 ml-4 mr-3 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>
        </div>

        {/* Scrolling Announcements with CSS Animation */}
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div
            className="inline-block animate-marquee"
            style={{
              animationDuration: `${animationDuration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {announcements.map((announcement, index) => (
              <a
                key={announcement.id}
                href={announcement.link}
                className="inline-flex items-center px-4 cursor-pointer hover:underline text-sm sm:text-base font-medium whitespace-nowrap text-blue-100 hover:text-white transition-colors"
              >
                <span className="text-yellow-300 mr-2 text-lg">•</span>
                {announcement.text}
                {index < announcements.length - 1 && <span className="mx-4 text-blue-300">|</span>}
              </a>
            ))}
          </div>

          {/* Duplicate for seamless looping */}
          <div
            className="inline-block animate-marquee2"
            style={{
              animationDuration: `${animationDuration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {announcements.map((announcement, index) => (
              <a
                key={`dup-${announcement.id}`}
                href={announcement.link}
                className="inline-flex items-center px-4 cursor-pointer hover:underline text-sm sm:text-base font-medium whitespace-nowrap text-blue-100 hover:text-white transition-colors"
              >
                <span className="text-yellow-300 mr-2 text-lg">•</span>
                {announcement.text}
                {index < announcements.length - 1 && <span className="mx-4 text-blue-300">|</span>}
              </a>
            ))}
          </div>
        </div>

        {/* Close Button */}
        {/* <button
          onClick={dismissAnnouncement}
          className="ml-2 mr-4 text-blue-200 hover:text-white transition-colors duration-300 flex-shrink-0 z-10 bg-blue-800/50 hover:bg-blue-700/70 rounded-full p-1"
          aria-label="Dismiss announcement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default AnnouncementBar;