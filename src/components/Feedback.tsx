"use client";

import { useState, useEffect, useRef } from "react";
import { Star, MessageSquarePlus, CheckCircle, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
};

export default function Feedback() {
  const initialDefaultReviews: Review[] = [
    {
      name: "Verified Client",
      location: "Udupi",
      rating: 5,
      comment: "Overhead tank solar and full house deep cleaning and i have not expected the result like this. I ll highly recommend customers to choose Swachhath. Thankyou rakesh for you and your team work. 🥰🙏",
      date: "2 weeks ago",
    },
    {
      name: "Ramesh Hegde",
      location: "Udupi",
      rating: 5,
      comment: "Outstanding solar panel and sump cleaning service! They arrived on time and cleaned everything using pressure jets. Highly recommend Swachhath.",
      date: "3 weeks ago",
    },
    {
      name: "Priya Kamath",
      location: "Mangaluru",
      rating: 5,
      comment: "We booked flat deep cleaning. The floor scrubbing machine they used made our old marble floors look brand new. Professional team!",
      date: "1 month ago",
    },
    {
      name: "Vikram Shenoy",
      location: "Manipal",
      rating: 5,
      comment: "Very transparent with their prices. They explicitly told us the transport costs upfront. Sump cleaning was highly professional.",
      date: "1 month ago",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialDefaultReviews);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Load live reviews from API & LocalStorage
  useEffect(() => {
    async function fetchLiveReviews() {
      try {
        const res = await fetch("/api/feedback");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
            const formattedApiReviews: Review[] = data.reviews.map((r: any) => ({
              name: r.name,
              location: r.location || "Karnataka",
              rating: Number(r.rating) || 5,
              comment: r.comment,
              date: r.timestamp ? new Date(r.timestamp).toLocaleDateString("en-IN", { month: "short", day: "numeric" }) : "Recent",
            }));
            setReviews([...formattedApiReviews, ...initialDefaultReviews]);
            return;
          }
        }
      } catch (err) {
        console.error("Live reviews fetch error:", err);
      }

      // Fallback to localStorage
      try {
        const saved = localStorage.getItem("swachhath_custom_reviews");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setReviews([...parsed, ...initialDefaultReviews]);
          }
        }
      } catch (e) {
        console.error("LocalStorage review load error:", e);
      }
    }

    fetchLiveReviews();
  }, []);

  // Auto carousel scroll
  useEffect(() => {
    if (isPaused || reviews.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.firstElementChild
          ? (container.firstElementChild as HTMLElement).offsetWidth + 20
          : 340;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 15) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setActiveIndex(0);
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
          setActiveIndex((prev) => (prev + 1) % reviews.length);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const handleScrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 20
        : 340;
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      setActiveIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleScrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 20
        : 340;
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
      setActiveIndex((prev) => Math.min(reviews.length - 1, prev + 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    setLoading(true);

    const newRevItem: Review = {
      name: name.trim(),
      location: location.trim() || "Karnataka",
      rating,
      comment: comment.trim(),
      date: "Just now",
    };

    // 1. Immediately update UI state & LocalStorage
    const updated = [newRevItem, ...reviews];
    setReviews(updated);
    try {
      const customOnly = updated.filter((r) => r.date === "Just now");
      localStorage.setItem("swachhath_custom_reviews", JSON.stringify(customOnly));
    } catch (e) {
      console.error("LocalStorage save error:", e);
    }

    // 2. Format WhatsApp link
    const waText = encodeURIComponent(
      `*Swachhath Cleaning Solution - New Review Submission*\n\n` +
      `⭐ *Rating:* ${rating}/5 Stars\n` +
      `👤 *Name:* ${name.trim()}\n` +
      `📍 *Location:* ${location.trim() || "Karnataka"}\n` +
      `💬 *Review:* ${comment.trim()}\n\n` +
      `_Submitted via Swachhath Website_`
    );
    const waUrl = `https://wa.me/917760771351?text=${waText}`;

    // 3. API Sync
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, rating, comment }),
      });
    } catch (error) {
      console.error("API feedback error:", error);
    } finally {
      setLoading(false);
      setSuccess(true);
      setName("");
      setLocation("");
      setRating(5);
      setComment("");
      
      // Open WhatsApp automatically
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setTimeout(() => {
        setSuccess(false);
        setFormOpen(false);
      }, 4000);
    }
  };

  return (
    <section id="reviews" className="section-compact bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold text-secondary tracking-[0.2em] uppercase block mb-2">
              Testimonials
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Real reviews from home and business owners in Coastal Karnataka.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-3xs">
              <button
                onClick={handleScrollPrev}
                className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              <span className="h-4 w-px bg-slate-200" />
              <button
                onClick={handleScrollNext}
                className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>

            <button
              onClick={() => setFormOpen(!formOpen)}
              className="inline-flex items-center justify-center text-xs sm:text-sm font-extrabold bg-white text-primary border border-primary/20 hover:border-primary px-4 py-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-all shadow-3xs hover:shadow-2xs shrink-0"
            >
              <MessageSquarePlus className="h-4 w-4 mr-2" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Feedback Expandable Form */}
        {formOpen && (
          <div className="mb-8 bg-white border border-slate-150 p-6 rounded-2xl shadow-sm max-w-xl animate-fadeInUp">
            <h3 className="text-base font-extrabold text-slate-900 mb-4">Share Your Experience</h3>
            
            {success ? (
              <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-sm font-semibold">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>Thank you! Your review has been added successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full text-sm border border-slate-250 rounded-xl p-3 bg-slate-50/50 focus:outline-hidden focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Mangaluru, Udupi"
                      className="w-full text-sm border border-slate-250 rounded-xl p-3 bg-slate-50/50 focus:outline-hidden focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="cursor-pointer hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= rating ? "text-amber-400 fill-amber-400" : "text-slate-250"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked about our service..."
                    className="w-full text-sm border border-slate-250 rounded-xl p-3 bg-slate-50/50 focus:outline-hidden focus:border-primary focus:bg-white transition-colors"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 text-sm font-extrabold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-xs disabled:opacity-50 transition-colors"
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Horizontal Auto-Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 pb-4 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[86vw] sm:w-[350px] md:w-[370px] bg-white border border-slate-150 p-6 rounded-2xl shadow-3xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                  </div>
                  <p className="text-sm text-slate-655 italic leading-relaxed line-clamp-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800">{rev.name}</h4>
                    <p className="text-xs text-slate-400">{rev.location}</p>
                  </div>
                  <div className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                    <ShieldCheck className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>Verified Clean</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {reviews.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.firstElementChild
                      ? (container.firstElementChild as HTMLElement).offsetWidth + 20
                      : 340;
                    container.scrollTo({ left: cardWidth * dotIdx, behavior: "smooth" });
                    setActiveIndex(dotIdx);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIdx === activeIndex ? "w-7 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
