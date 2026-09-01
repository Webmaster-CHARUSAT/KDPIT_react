"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Calendar, Newspaper, Instagram } from "lucide-react";

// Dummy Data
const events = [
  {
    id: 1,
    title: "Cyber Hygiene Practices, Cyber Security Workshop",
    image: "/images/event1.jpg",
  },
  {
    id: 2,
    title: "AI & Cybersecurity Awareness Drive",
    image: "/images/event2.jpg",
  },
  {
    id: 3,
    title: "College Cyber Fest 2025",
    image: "/images/event3.jpg",
  },
];

const news = [
  { id: 1, title: "58-yr-old man loses ₹11.77 lakh to cyber fraud", date: "11-09-2025" },
  { id: 2, title: "Retired Govt Employee in Vizag Duped of Rs 2.5 Crore", date: "10-09-2025" },
  { id: 3, title: "Gurugram Woman Loses Rs 5.85 Crore in Cyber Scam", date: "09-09-2025" },
  { id: 4, title: "Fake Trading Apps Dupe Citizens of Rs 3.14 Crore", date: "08-09-2025" },
];

// Replace with Instagram Embed API later
const instagramPosts = [
  { id: 1, embed: "https://www.instagram.com/p/C4EXAMPLE/embed" },
  { id: 2, embed: "https://www.instagram.com/p/C5EXAMPLE/embed" },
  { id: 3, embed: "https://www.instagram.com/p/C6EXAMPLE/embed" },
];

const InfoSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {/* Latest Events */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <div className="flex items-center bg-red-600 text-white p-2 font-semibold text-lg">
          <Calendar className="mr-2" /> Latest Events
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="h-[300px]"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex flex-col items-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <p className="p-2 font-medium text-center">{event.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bg-red-600 text-white text-center py-2 cursor-pointer hover:bg-red-700">
          View All
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <div className="flex items-center bg-green-600 text-white p-2 font-semibold text-lg">
          <Newspaper className="mr-2" /> Latest News
        </div>
        <div
          className="overflow-hidden h-[300px] relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ y: isPaused ? 0 : ["0%", "-100%"] }}
            transition={{
              duration: news.length * 4,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute top-0 w-full"
          >
            {news.concat(news).map((item, idx) => (
              <div
                key={idx}
                className="border-b p-2 hover:bg-gray-100 cursor-pointer"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="bg-green-600 text-white text-center py-2 cursor-pointer hover:bg-green-700">
          View All
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <div className="flex items-center bg-blue-600 text-white p-2 font-semibold text-lg">
          <Instagram className="mr-2" /> Instagram
        </div>
        <div className="h-[300px] overflow-y-auto">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="w-full my-2"
              dangerouslySetInnerHTML={{ __html: `<iframe src="${post.embed}" width="100%" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
