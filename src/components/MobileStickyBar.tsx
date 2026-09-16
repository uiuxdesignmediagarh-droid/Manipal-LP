import { Sparkles, MessageCircle, Phone } from 'lucide-react';
import { HERO_CONTENT } from '../data/smuContent';

interface Props {
  onOpenCounselling: () => void;
}

export function MobileStickyBar({ onOpenCounselling }: Props) {
  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E8E8] px-3 py-2.5 shadow-2xl transition-transform"
      id="mobile-sticky-action-bar"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`https://wa.me/${HERO_CONTENT.whatsAppNumber}?text=${encodeURIComponent('Hello SMU, I want free counselling.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 hover:bg-emerald-100 transition-colors"
          aria-label="WhatsApp Support"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={onOpenCounselling}
          id="mobile-sticky-apply-btn"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-[#d85e17] active:scale-[0.98] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get Free Counselling</span>
        </button>
      </div>
    </div>
  );
}
