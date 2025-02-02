import { TestimonialCard } from "./TestimonialCard";

const testimonials1 = [
  {
    author: "Mason Clark",
    role: "Marketing Specialist",
    company: "Small Business",
    content: "Topview's AI crafts perfect marketing content in one click, saving time and enhancing our effectiveness.",
    rating: 4,
    image: "/placeholder.svg",
  },
  {
    author: "Elijah Walker",
    role: "Senior Manager",
    company: "Large Corporation",
    content: "Topview's AI digital humans are incredibly lifelike. They add a professional and polished touch to our product videos.",
    rating: 4.5,
    image: "/placeholder.svg",
  },
  {
    author: "Mia Robinson",
    role: "Online Retailer",
    company: "Small Business",
    content: "Affordable and efficient. Topview's AI video creation is a fraction of the cost of hiring a human editor.",
    rating: 5,
    image: "/placeholder.svg",
  },
];

const testimonials2 = [
  {
    author: "Noah Davis",
    role: "Social Media Manager",
    company: "Medium-sized Enterprise",
    content: "Topview manages script to final cut, making video production seamless and fast.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    author: "Sophia Martinez",
    role: "Marketing Director",
    company: "Medium-sized Business",
    content: "Topview magically turns product lists into perfect marketing videos, saving time and boosting sales.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    author: "Emma Thompson",
    role: "Content Creator",
    company: "Digital Agency",
    content: "The AI-powered video creation has revolutionized our content production workflow completely.",
    rating: 4.5,
    image: "/placeholder.svg",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-white text-center mb-2">
          See what people are saying
        </h2>
        <p className="text-white/60 text-center mb-12">
          their experience
        </p>
        
        <div className="space-y-12">
          {/* First Row */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            
            <div className="flex gap-6 overflow-hidden group hover:[animation-play-state:paused]">
              <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
                {testimonials1.concat(testimonials1).map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            
            <div className="flex gap-6 overflow-hidden group hover:[animation-play-state:paused]">
              <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
                {testimonials2.concat(testimonials2).map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};