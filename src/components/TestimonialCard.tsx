import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const TestimonialCard = ({
  author,
  role,
  company,
  content,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="w-[400px] p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
      <StarRating rating={rating} />
      <p className="mt-4 text-white/80 text-sm leading-relaxed min-h-[80px]">
        "{content}"
      </p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-white">{author}</h3>
          <p className="text-sm text-white/60">
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
};