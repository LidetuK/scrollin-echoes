
import { StarRating } from "./StarRating";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <div 
      className={`${
        isMobile ? 'w-[250px] p-4' : 'w-[400px] p-6'
      } rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10`}
    >
      <StarRating rating={rating} />
      <p className={`mt-4 text-white/80 ${isMobile ? 'text-xs' : 'text-sm'} leading-relaxed ${isMobile ? 'min-h-[60px]' : 'min-h-[80px]'}`}>
        "{content}"
      </p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-full object-cover`}
        />
        <div>
          <h3 className={`font-medium text-white ${isMobile ? 'text-sm' : 'text-base'}`}>{author}</h3>
          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-white/60`}>
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
};
