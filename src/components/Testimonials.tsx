import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CountUpStat from "@/components/CountUpStat";
const testimonials = [
  {
    quote: "Money Wise has completely transformed how I manage my finances. The budgeting tools are intuitive and the discount codes alone pay for the subscription!",
    author: "Samantha R",
    role: "Freelance Designer",
    rating: 5,
    highlight: "Save £50+ monthly",
  },
  {
    quote: "As a small business owner, I need to track every penny. This platform makes it effortless. The monthly planner is my secret weapon.",
    author: "Jordan M",
    role: "Business Owner",
    rating: 5,
    highlight: "Perfect for business",
  },
  {
    quote: "Finally, a financial tool that doesn't overwhelm me. Simple, practical, and actually helps me save money every month.",
    author: "David K",
    role: "Educator",
    rating: 5,
    highlight: "Easy to use",
  },
  {
    quote: "The exclusive member discounts are incredible. I've saved more in discounts than the yearly subscription cost!",
    author: "Emily T",
    role: "Marketing Manager",
    rating: 5,
    highlight: "Amazing discounts",
  },
  {
    quote: "I love how everything is laid out clearly. No confusing charts or complicated features. Just what I need to stay on top of my money.",
    author: "Michael P",
    role: "Software Engineer",
    rating: 5,
    highlight: "Clear & simple",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  };

  return (
    <section id="reviews" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Trusted by Thousands
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Members Are Saying
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of satisfied members who are taking control of their finances with Money Wise.
            </p>
          </FadeUp>
        </div>

        {/* Featured Testimonial */}
        <ScaleIn delay={0.2}>
          <div className="relative mb-8 max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-xl blur-md" />
            <div className="relative bg-card border border-accent/20 rounded-xl p-4 md:p-5 text-center">
              <Quote className="w-6 h-6 text-accent/30 mx-auto mb-2" />
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base text-foreground font-medium mb-4 max-w-md mx-auto leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">
                    {testimonials[activeIndex].author.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">{testimonials[activeIndex].author}</p>
                  <p className="text-muted-foreground text-xs">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                  {testimonials[activeIndex].highlight}
                </span>
              </div>
            </div>
          </div>
        </ScaleIn>

        {/* Testimonial Cards Grid */}
        <FadeUp delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-card border-accent/30 shadow-lg shadow-accent/5"
                    : "bg-card/50 border-border hover:border-accent/20 hover:bg-card"
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm font-medium mb-4 line-clamp-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Navigation Dots */}
        <FadeUp delay={0.35}>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-accent/10 hover:text-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.slice(0, testimonials.length - visibleCount + 1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-accent/10 hover:text-accent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <CountUpStat end={50} suffix="K+" duration={2000} />
              </p>
              <p className="text-muted-foreground text-sm">Happy Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <CountUpStat end={4.9} decimals={1} duration={2000} />
              </p>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <CountUpStat end={2.5} prefix="£" suffix="M+" decimals={1} duration={2000} />
              </p>
              <p className="text-muted-foreground text-sm">Member Savings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <CountUpStat end={98} suffix="%" duration={2000} />
              </p>
              <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Testimonials;
