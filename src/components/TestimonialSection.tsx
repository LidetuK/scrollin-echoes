import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
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
    content: "Affordable and efficient. Topview's AI video creation is a fraction of the cost of hiring a human editor, without compromising on quality.",
    rating: 5,
    image: "/placeholder.svg",
  },
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
];

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-white text-center mb-2">
          Authentic User Reviews
        </h2>
        <p className="text-white/60 text-center mb-12">
          See what our customers are saying about their experience
        </p>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          <div className="flex gap-6 overflow-hidden hover:[animation-play-state:paused]">
            <div className="flex gap-6 animate-scroll">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};