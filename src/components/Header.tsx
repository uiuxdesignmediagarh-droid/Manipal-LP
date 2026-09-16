import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { SmuLogo } from './SmuLogo';
import { HERO_CONTENT } from '../data/smuContent';

interface Props {
  onOpenCounselling: (prog?: string) => void;
  onOpenBrochure?: (prog?: string) => void;
}

export function Header({ onOpenCounselling }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8E8E8] py-2.5'
          : 'bg-white border-b border-[#E8E8E8]/70 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <SmuLogo />

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCounselling()}
              id="header-counselling-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#F36F21] hover:bg-[#d85e17] active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-xs shadow-orange-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{HERO_CONTENT.primaryBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

