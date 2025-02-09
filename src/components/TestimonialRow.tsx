
import { Testimonial } from "@/types/testimonial";
import { TestimonialCard } from "./TestimonialCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialRowProps {
  testimonials: Testimonial[];
  direction: "left" | "right";
  speed?: "normal" | "slow";
}

export const TestimonialRow = ({ testimonials, direction, speed = "normal" }: TestimonialRowProps) => {
  const isMobile = useIsMobile();

  const animationClass = 
    isMobile 
      ? "animate-scroll-vertical"
      : direction === "left" 
        ? speed === "normal" 
          ? "animate-scroll" 
          : "animate-scroll-slow"
        : "animate-scroll-reverse";

  return (
    <div className="relative">
      {!isMobile && (
        <>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
        </>
      )}
      
      <div className={`flex ${isMobile ? 'flex-col' : ''} gap-6 overflow-hidden group hover:[animation-play-state:paused]`}>
        <div className={`flex ${isMobile ? 'flex-col' : ''} gap-6 ${animationClass} group-hover:[animation-play-state:paused]`}>
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <TestimonialCard key={`${direction}-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};
