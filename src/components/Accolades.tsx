import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface RankCard {
  id: string;
  badge?: string;
  image: string;
  title: string;
  alt: string;
}

const RANK_ITEMS: RankCard[] = [
  {
    id: 'naac',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/NAAC-A-2.jpg',
    title: 'Accredited in A+ grade by National Assessment and Accreditation Council',
    alt: 'Accredited in A+ grade by National Assessment and Accreditation Council',
  },
  {
    id: 'ugc',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/UGC-2.jpg',
    title: 'UGC-entitled Online Degrees Equivalent to Campus Degree',
    alt: 'UGC-entitled Online Degrees Equivalent to Campus Degree',
  },
  {
    id: 'nirf',
    badge: 'Ranked 151-200',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/NIRF-1.jpg',
    title: 'Amongst India’s Top 200 Universities in 2025',
    alt: 'Amongst India’s Top 200 Universities in 2025',
  },
  {
    id: 'aicte',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/06/AICTE-3-1.jpg',
    title: 'AICTE Norms Compliant',
    alt: 'AICTE Norms Compliant',
  },
  {
    id: 'qs-asia',
    badge: 'Rank 330',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/QS-Asia-1.png',
    title: "Amongst South Asia's Top Universities (2026)",
    alt: "Amongst South Asia's Top Universities (2026)",
  },
  {
    id: 'wes',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/WES-2.jpg',
    title: 'Degrees Evaluated by - World Education Services',
    alt: 'Degrees Evaluated by - World Education Services',
  },
  {
    id: 'iirf',
    badge: 'Rank 1',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/06/iirf-1.png',
    title: 'Top Private University in North East (2026)',
    alt: 'Top Private University in North East (2026)',
  },
  {
    id: 'wuri',
    badge: 'Rank 373',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/06/WURI.jpg',
    title: 'Global Top 500 Innovative Universities (2026)',
    alt: 'Global Top 500 Innovative Universities (2026)',
  },
  {
    id: 'the-week',
    badge: 'Rank 1',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/06/SMU_Rankings_The-Week.jpg',
    title: 'Top Private Multidisciplinary Universities in Eastern India (2026)',
    alt: 'Top Private Multidisciplinary Universities in Eastern India (2026)',
  },
  {
    id: 'asia-rankings',
    badge: 'Rank 801+',
    image: 'https://www.onlinemanipal.com/wp-content/uploads/2023/03/Asia-University-Rankings-2026.png',
    title: '#801+ in Asia University Rankings (2026)',
    alt: '#801+ in Asia University Rankings (2026)',
  },
];

export function Accolades() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.5));
    setActiveIndex(Math.min(index, RANK_ITEMS.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const scrollToItem = (idx: number) => {
    if (scrollRef.current) {
      const cardWidth = 286; // 266px + 20px gap
      scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      setActiveIndex(idx);
    }
  };

  return (
    <section id="accolades" className="ranking-accredition section-mb py-16 sm:py-20 bg-neutral-50/60 border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="top-ranking-section">
        <div className="ranking-wrapper container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Top Header & Carousel Controls */}
          <div className="ranking-section-top flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#F36F21]" />
                <span>Global & National Recognition</span>
              </div>
              <h2 className="section-title font-serif-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111111] tracking-tight">
                Rankings & Accreditations
              </h2>
            </div>

            {/* Desktop / Tablet Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous rankings"
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-100 active:scale-95 border border-[#E8E8E8] shadow-xs flex items-center justify-center text-neutral-700 hover:text-[#F36F21] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next rankings"
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-100 active:scale-95 border border-[#E8E8E8] shadow-xs flex items-center justify-center text-neutral-700 hover:text-[#F36F21] transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="rank-card-container flex items-stretch gap-5 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {RANK_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rank-line-item snap-start shrink-0 w-[240px] sm:w-[266px] bg-white rounded-2xl border border-neutral-200 hover:border-[#F36F21]/50 shadow-xs hover:shadow-lg transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between text-center group"
                >
                  {/* Top Rank Badge */}
                  <div className="rank-badge min-h-[28px] flex items-center justify-center mb-3">
                    {item.badge ? (
                      <div className="rank-top inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF2EA] text-[#F36F21] border border-[#F36F21]/25 shadow-xs">
                        <span>{item.badge}</span>
                      </div>
                    ) : (
                      <span className="invisible text-xs py-1">Placeholder</span>
                    )}
                  </div>

                  {/* Institution / Accreditation Image - Prominently Scaled & Visible */}
                  <div className="rank-card-img h-28 sm:h-36 w-full flex items-center justify-center mb-4 p-2.5 rounded-xl bg-neutral-50/70 border border-neutral-100 group-hover:bg-white transition-colors">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain drop-shadow-xs group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Title / Description */}
                  <div className="rank-card-title text-xs sm:text-[13.5px] font-bold text-neutral-800 leading-snug min-h-[48px] flex items-center justify-center group-hover:text-[#F36F21] transition-colors">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slick Dots Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {RANK_ITEMS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToItem(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIndex === idx ? 'w-6 bg-[#F36F21]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

