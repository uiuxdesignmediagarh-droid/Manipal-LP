import { ArrowRight, Quote } from 'lucide-react';
import { ABOUT_SMU_CONTENT } from '../data/smuContent';

interface Props {
  onApply?: () => void;
  onExplore?: () => void;
}

export function AboutSMU({ onApply, onExplore }: Props) {
  const handleAction = () => {
    if (onApply) {
      onApply();
      return;
    }
    if (onExplore) {
      onExplore();
      return;
    }
    const elem = document.getElementById('programmes');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-smu" className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8] relative overflow-hidden">
      
      {/* Background Orbital Concentric Circles on the Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0 hidden md:block">
        <div className="w-[680px] h-[680px] rounded-full border border-neutral-200/70 relative flex items-center justify-center">
          <div className="w-[520px] h-[520px] rounded-full border border-neutral-200/70 relative flex items-center justify-center">
            <div className="w-[360px] h-[360px] rounded-full border border-neutral-200/70 relative flex items-center justify-center">
              <div className="w-[200px] h-[200px] rounded-full border border-neutral-200/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Dual Rounded Image Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Card 1: SMU Placements Campus Photo */}
            <div className="relative rounded-[28px] overflow-hidden shadow-md bg-neutral-100 h-[380px] sm:h-[460px] border border-neutral-200/80 group">
              <img
                src="https://www.smu.edu.in/img/home-placements-bg.jpg"
                alt="Sikkim Manipal University Campus & Placements Driveway"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-md text-[11px] font-bold text-neutral-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>NAAC A+ Campus</span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white text-xs">
                <div className="font-bold text-white text-xs">Majitar Campus, Sikkim</div>
                <div className="text-[11px] text-neutral-300">Modern academic infrastructure</div>
              </div>
            </div>

            {/* Card 2: SMU Welcome / Campus Life Photo */}
            <div className="relative rounded-[28px] overflow-hidden shadow-md bg-neutral-100 h-[380px] sm:h-[460px] border border-neutral-200/80 group sm:translate-y-4">
              <img
                src="https://www.smu.edu.in/img/home-welcome-1.jpg"
                alt="Sikkim Manipal University Campus Life and Learning"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-md text-[11px] font-bold text-neutral-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
                <span>Est. 1995</span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white text-xs">
                <div className="font-bold text-white text-xs">5,00,000+ Alumni</div>
                <div className="text-[11px] text-neutral-300">Leading global organizations</div>
              </div>
            </div>

          </div>

          {/* Right Column: Requested Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-4">
            
            {/* Main Headline */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#111111] tracking-tight leading-[1.15]">
              ABOUT SIKKIM MANIPAL UNIVERSITY (SMU)
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal text-justify sm:text-left">
              Established in 1995, Sikkim Manipal University (SMU) is a NAAC A+ accredited institution and part of the respected Manipal Education & Medical Group, founded by Padma Shri Dr. T.M.A. Pai. SMU's distance education arm, founded in 2001, has educated over 500,000 students, making it one of India's leading providers of professional online programmes.
            </p>

            {/* Founder Quote Micro-Card */}
            <div className="px-5 sm:px-6 py-4 rounded-[20px] bg-white border border-[#FDBA74]/80 flex items-start gap-4 shadow-xs">
              <Quote className="w-6 h-6 text-[#F36F21] shrink-0 mt-0.5 fill-none" strokeWidth={2.2} />
              <div className="text-xs sm:text-[14.5px] leading-relaxed">
                <p className="italic text-neutral-600 font-sans">
                  "Give an individual a professional education and you have given him a lifestyle."
                </p>
                <p className="mt-1 font-bold text-neutral-900 font-sans text-xs sm:text-[13px]">
                  — Padma Shri Dr. T.M.A. Pai, Founder, Manipal Group
                </p>
              </div>
            </div>

            {/* Apply Now Button - Pill Shape */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleAction}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#e65c00] hover:bg-[#d05300] active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                <span>Apply now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* University Heritage & Accreditation Strip */}
            <div className="pt-4 border-t border-neutral-100 grid grid-cols-3 gap-3">
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200/60 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#111111]">1995</div>
                <div className="text-[11px] text-neutral-500 font-medium">Established</div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200/60 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#F36F21]">NAAC A+</div>
                <div className="text-[11px] text-neutral-500 font-medium">Accreditation</div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200/60 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#111111]">500,000+</div>
                <div className="text-[11px] text-neutral-500 font-medium">Educated</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
