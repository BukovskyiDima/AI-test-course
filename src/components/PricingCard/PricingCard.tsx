import type { FC } from 'react';
import { Button } from '../Button';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
  onSubscribe?: () => void;
}

export const PricingCard: FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
  onSubscribe,
}) => {
  return (
    <ul 
      tabIndex={0}
      className={`
        w-[280px] rounded-lg flex flex-col min-h-[400px] text-center transition-all duration-300
        border border-transparent
        group
        p-8
        ${isActive ? 'bg-slate-700 text-white scale-105 shadow-2xl border-slate-700' : 'bg-white text-slate-800'}
        ${!isActive ? 'hover:bg-slate-600 hover:text-white hover:scale-105 hover:shadow-2xl hover:border-slate-800' : ''}
        ${isActive ? 'px-0' : 'px-8'}
        divide-y divide-slate-200 group-hover:divide-white/30
        focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:z-20
      `}
      style={{ zIndex: isActive ? 10 : 1, ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      
      {/* Plan name and Price */}
      <li>
        <h3 className="text-lg font-medium mb-4">{plan}</h3>
        <div className="flex items-start justify-center mb-8">
          <span className="text-2xl mt-1">$</span>
          <span className="text-6xl font-semibold">{price}</span>
        </div>
      </li>

      {/* Features list */}
      {features.map((feature, index) => (
        <li key={index} className="text-[15px] leading-tight py-4">
          {feature}
        </li>
      ))}
    
      {/* Subscribe button */}
      <li className="mt-8">
        <Button 
          variant="link"
          className="w-full justify-center font-medium text-sm cursor-pointer hover:underline transition-all"
          onClick={e => {
            e.stopPropagation();
            onSubscribe?.();
          }}
        >
          SUBSCRIBE
        </Button>
      </li>
    </ul>
  );
}; 