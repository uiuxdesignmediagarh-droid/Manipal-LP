import { Award, CheckCircle, Trophy, Star } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/smuContent';

export function TrustStrip() {
  const icons = [
    <CheckCircle className="w-5 h-5 text-[#F36F21]" />,
    <Award className="w-5 h-5 text-amber-500" />,
    <Trophy className="w-5 h-5 text-indigo-500" />,
    <Star className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section id="trust-strip" className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-[#E8E8E8] p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E8E8]">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-2 sm:px-4 ${
                index > 0 ? 'pt-4 sm:pt-0' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center mb-2.5 border border-[#E8E8E8]">
                {icons[index]}
              </div>

              {/* Card Title - EXACT PDF */}
              <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#111111] leading-tight">
                {item.title}
              </div>

              {/* Subtitle - EXACT PDF */}
              <div className="text-xs sm:text-sm font-semibold text-[#F36F21] mt-0.5">
                {item.subtitle}
              </div>

              {/* Micro description */}
              <div className="text-[11px] text-neutral-500 mt-1 font-medium">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
