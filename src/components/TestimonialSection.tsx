
import { testimonials1, testimonials2, testimonials3 } from "@/data/testimonials";
import { TestimonialRow } from "./TestimonialRow";
import { useIsMobile } from "@/hooks/use-mobile";

export const TestimonialSection = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      className="w-full min-w-full py-20 overflow-hidden" 
      style={{ backgroundColor: "#01071A" }}
    >
      <div className="w-full min-w-full">
        <div className={`space-y-${isMobile ? '8' : '12'}`}>
          <TestimonialRow testimonials={testimonials1} direction="left" />
          <TestimonialRow testimonials={testimonials2} direction="right" />
          <TestimonialRow testimonials={testimonials3} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};
