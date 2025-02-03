import { TestimonialCard } from "./TestimonialCard";

const testimonials1 = [
  {
    author: "Sarah P.",
    role: "Marketing Director",
    company: "Enterprise",
    content: "Working with Resk'Que was a game-changer for our business. His strategic insights helped us scale faster than we imagined.",
    rating: 5,
    image: "/pexels-gabby-k-6237921.jpg",
  },
  {
    author: "Michael T.",
    role: "CEO",
    company: "Tech Company",
    content: "Resk'Que's approach to problem-solving is extraordinary. He helped us streamline our processes and improve team collaboration.",
    rating: 4.5,
    image: "/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
  },
  {
    author: "Lisa H.",
    role: "Operations Manager",
    company: "Corporate",
    content: "Thanks to Resk'Que, we were able to navigate some of our toughest challenges. His guidance gave us clarity and focus.",
    rating: 5,
    image: "/Brian K..jpg",
  },
  {
    author: "Tim C.",
    role: "Product Manager",
    company: "Software Company",
    content: "I was skeptical at first, but Resk'Que's expertise and genuine passion for helping businesses really transformed our approach.",
    rating: 4.5,
    image: "/Clara V..jpg",
  },
  {
    author: "Jessica W.",
    role: "Entrepreneur",
    company: "Startup",
    content: "Resk'Que's strategies brought the right mix of structure and creativity, and it made all the difference for our company.",
    rating: 5,
    image: "/Ethan M..jpg",
  },
  {
    author: "Richard A.",
    role: "HR Director",
    company: "Corporate",
    content: "Our team was struggling to stay motivated, but Resk'Que's leadership reinvigorated us. His advice is both practical and inspiring.",
    rating: 4.5,
    image: "/Greg B..jpg",
  },
];

const testimonials2 = [
  {
    author: "Megan B.",
    role: "Creative Director",
    company: "Agency",
    content: "Resk'Que is a master at aligning a team's strengths with business objectives. His guidance unlocked new opportunities for us.",
    rating: 5,
    image: "/Jack F..jpg",
  },
  {
    author: "Jack F.",
    role: "Founder",
    company: "Startup",
    content: "After just a few sessions with Resk'Que, I felt more confident in my decisions and clearer about my goals.",
    rating: 4.5,
    image: "/Jessica W..jpg",
  },
  {
    author: "Nora D.",
    role: "COO",
    company: "Enterprise",
    content: "Resk'Que helped us reimagine our vision and took our operations to the next level. His insights were invaluable.",
    rating: 5,
    image: "/Kevin S..jpg",
  },
  {
    author: "Ethan M.",
    role: "Sales Manager",
    company: "Corporate",
    content: "I had been stuck in a rut, but Resk'Que's coaching gave me the clarity and direction I needed to move forward.",
    rating: 4.5,
    image: "/Lisa H..jpg",
  },
  {
    author: "Olivia G.",
    role: "Investor",
    company: "VC Firm",
    content: "Resk'Que's approach to growth is realistic and actionable. He helped us turn our ideas into measurable success.",
    rating: 5,
    image: "/Megan B..jpg",
  },
  {
    author: "Alan R.",
    role: "Business Owner",
    company: "SME",
    content: "Working with Resk'Que was an investment in our future. His strategies improved not only our business but also our mindset.",
    rating: 4.5,
    image: "/Michael T..jpg",
  },
];

const testimonials3 = [
  {
    author: "Clara V.",
    role: "Operations Lead",
    company: "Enterprise",
    content: "From team alignment to business strategy, Resk'Que provided practical solutions that worked for us.",
    rating: 5,
    image: "/Nora D..jpg",
  },
  {
    author: "Brian K.",
    role: "CEO",
    company: "Startup",
    content: "I never thought we could achieve such rapid growth, but Resk'Que's actionable roadmap made it possible.",
    rating: 4.5,
    image: "/Olivia G..jpg",
  },
  {
    author: "Sophie M.",
    role: "Founder",
    company: "Tech Company",
    content: "Resk'Que helped me build resilience in the face of challenges, and now I feel confident in taking on bigger opportunities.",
    rating: 5,
    image: "/Richard A..jpg",
  },
  {
    author: "Kevin S.",
    role: "Marketing Manager",
    company: "Agency",
    content: "Thanks to Resk'Que's mentoring, we turned our vision into a concrete plan. His advice has been priceless.",
    rating: 4.5,
    image: "/Sophie M..jpg",
  },
  {
    author: "Greg B.",
    role: "Business Consultant",
    company: "Consulting Firm",
    content: "With Resk'Que's insight and actionable steps, we saw immediate improvements in both our productivity and morale.",
    rating: 5,
    image: "/Tim C..jpg",
  },
  {
    author: "Tim C.",
    role: "Project Manager",
    company: "Corporate",
    content: "Resk'Que has a unique ability to simplify complex problems. His strategies empowered me to lead my team more effectively.",
    rating: 4.5,
    image: "/jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* First Row - Left to Right */}
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

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            
            <div className="flex gap-6 overflow-hidden group hover:[animation-play-state:paused]">
              <div className="flex gap-6 animate-scroll-reverse group-hover:[animation-play-state:paused]">
                {testimonials2.concat(testimonials2).map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Third Row - Left to Right (Slower) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            
            <div className="flex gap-6 overflow-hidden group hover:[animation-play-state:paused]">
              <div className="flex gap-6 animate-scroll-slow group-hover:[animation-play-state:paused]">
                {testimonials3.concat(testimonials3).map((testimonial, index) => (
                  <TestimonialCard key={`row3-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
