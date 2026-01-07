import { useState, useEffect } from "react";
import { X, Clock, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Get or set the end time in localStorage for persistence
    const storedEndTime = localStorage.getItem("offerEndTime");
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      // Set offer to expire in 24 hours from first visit
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("offerEndTime", endTime.toString());
    }

    const updateCountdown = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset the timer when it reaches zero
        const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("offerEndTime", newEndTime.toString());
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-accent text-accent-foreground"
      >
        <div className="container-custom py-2.5">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm">
            {/* Icon */}
            <Sparkles size={16} className="hidden sm:block flex-shrink-0" />
            
            {/* Offer Text */}
            <span className="font-medium text-center">
              <span className="hidden sm:inline">Limited Time Offer: </span>
              <span className="font-bold">50% OFF</span> + Free 1-Month Trial
            </span>

            {/* Divider */}
            <span className="text-accent-foreground/50 hidden sm:block">|</span>

            {/* Countdown */}
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="flex-shrink-0" />
              <div className="flex items-center gap-1 font-mono font-bold">
                <span className="bg-primary/20 px-1.5 py-0.5 rounded">
                  {formatTime(timeLeft.hours)}
                </span>
                <span>:</span>
                <span className="bg-primary/20 px-1.5 py-0.5 rounded">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span>:</span>
                <span className="bg-primary/20 px-1.5 py-0.5 rounded">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-primary/20 rounded transition-colors"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementBar;
