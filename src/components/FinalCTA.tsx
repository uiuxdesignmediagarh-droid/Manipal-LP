import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/smuContent';

interface Props {
  onOpenCounselling: (prog?: string) => void;
  onOpenBrochure?: (prog?: string) => void;
}

export function FinalCTA({ onOpenCounselling }: Props) {
  const whatsappUrl = `https://wa.me/${HERO_CONTENT.whatsAppNumber}?text=${encodeURIComponent(
    'Hello SMU Admissions, I would like to get free counselling for Online Degree programmes.'
  )}`;

  return (
    <section
      id="final-cta"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#111317] text-white overflow-hidden border-t border-white/5"
    >
      {/* Subtle Technical Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Sweeping Translucent Ribbon Curves from Reference */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 400"
      >
        <path
          d="M-80,420 C220,10 580,380 980,-20 C1200,-140 1420,120 1550,220"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="110"
        />
        <path
          d="M1520,420 C1180,80 820,390 420,-10 C220,-110 50,110 -60,200"
          fill="none"
          stroke="rgba(255, 255, 255, 0.035)"
          strokeWidth="130"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Heading & Sub-line */}
          <div className="max-w-3xl">
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-tight mb-4">
              Your Degree, Your Pace — Powered by the Manipal Legacy
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-2xl">
              Join 6 lakh+ alumni who chose Sikkim Manipal University for a UGC-entitled degree they could earn without pausing life. Get free counselling
            </p>
          </div>

          {/* Right Column: Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            {/* Get Free Counselling Button */}
            <button
              type="button"
              onClick={() => onOpenCounselling()}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#F36F21] hover:bg-[#d85e17] active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition-all whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Get Free Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90" />
            </button>

            {/* WhatsApp Us Now Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-sm shadow-md transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
