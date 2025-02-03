import { testimonials1, testimonials2, testimonials3 } from "@/data/testimonials";
import { TestimonialRow } from "./TestimonialRow";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <TestimonialRow testimonials={testimonials1} direction="left" />
          <TestimonialRow testimonials={testimonials2} direction="right" />
          <TestimonialRow testimonials={testimonials3} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};