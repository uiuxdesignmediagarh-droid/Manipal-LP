import { Sparkles, ArrowRight, Video, Users } from 'lucide-react';

interface Props {
  onOpenCounselling?: () => void;
}

export function WhyStudyOnline({ onOpenCounselling }: Props) {
  return (
    <section id="why-smu" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered, Bold Modern Typography matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111111] tracking-tight leading-tight">
            Why Study Online with SMU?
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base font-normal">
            Launch Your Career with Proven, UGC-Entitled Online Learning
          </p>
        </div>

        {/* Bento Grid Layout matching reference image (2 equal columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: Top Wide Card + 2 Bottom Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Top Wide Card: Points 1 & 4 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden flex-1">
              <div className="flex-1 z-10">
                {/* AI-enabled LMS Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 shrink-0" />
                  <span>AI-enabled Learning Management System (LMS)</span>
                </div>

                {/* Point 1: Flexible, modern curriculum built for industry relevance */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug tracking-tight">
                  <span className="text-[#0066CC]">Flexible, modern curriculum</span> built for{' '}
                  <span className="text-[#F36F21]">industry relevance</span>.
                </h3>
              </div>

              {/* Visual Side with warm ambient backdrop & learner cohort */}
              <div className="w-full sm:w-48 md:w-56 shrink-0 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 via-amber-100/50 to-blue-100/40 rounded-2xl blur-sm -z-0" />
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200/70 shadow-xs z-10 w-full bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                    alt="SMU Online Students"
                    referrerPolicy="no-referrer"
                    className="w-full h-40 sm:h-44 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Side-by-Side Cards (Points 5 & 6) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Bottom Left: Point 5 - Access to Coursera course certifications */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow min-h-[170px]">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="h-6 w-auto" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 2C6.7 2 2 6.7 2 12.5S6.7 23 12.5 23 23 18.3 23 12.5 18.3 2 12.5 2zm-1.8 14.8c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.3 0 2.5.6 3.2 1.6l-1.3 1.1c-.5-.6-1.1-1-1.9-1-1.3 0-2.3 1-2.3 2.4s1 2.4 2.3 2.4c.8 0 1.4-.4 1.9-1l1.3 1.1c-.7 1-1.9 1.6-3.2 1.6z" fill="#0056D2"/>
                      <text x="28" y="19" fill="#0056D2" fontFamily="sans-serif" fontSize="18" fontWeight="bold" letterSpacing="-0.5px">coursera</text>
                    </svg>
                  </div>

                  <p className="text-neutral-800 text-sm sm:text-base font-semibold leading-snug">
                    Access to Coursera course certifications
                  </p>
                </div>
              </div>

              {/* Bottom Right: Point 6 - 24x7 learning with best-suited content, anytime, anywhere */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow min-h-[170px]">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0066CC] tracking-tight mb-4">
                    24x7
                  </div>

                  <p className="text-neutral-800 text-sm sm:text-base font-semibold leading-snug">
                    24x7 learning with best-suited content, anytime, anywhere
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Tall Card (Points 2 & 3) properly matching reference layout */}
          <div className="h-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow relative overflow-hidden h-full flex flex-col md:flex-row">
              
              {/* Left Half: Character on Soft Mint Background with Floating Badges & Connecting Arc */}
              <div className="w-full md:w-[48%] bg-gradient-to-b from-[#EAF5EC] via-[#E2F2E4] to-[#D5EBD8] relative flex flex-col items-center justify-end overflow-hidden min-h-[380px] md:min-h-full p-4 pt-16">
                
                {/* Floating Badges & Curved Connecting Arc */}
                <div className="absolute top-5 inset-x-3 sm:inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                  {/* Left Badge: Dark navy shield badge */}
                  <div className="bg-[#0B1E36] text-white p-2 sm:p-2.5 rounded-xl shadow-md border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>

                  {/* Center Curved White Arrow */}
                  <div className="flex-1 px-1 flex justify-center">
                    <svg className="w-20 sm:w-24 h-9 text-white drop-shadow-sm" viewBox="0 0 110 40" fill="none">
                      <path d="M 12 32 C 40 6, 70 6, 98 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                      <polygon points="96,16 106,28 92,30" fill="white"/>
                    </svg>
                  </div>

                  {/* Right Badge: Dark badge with bold typography like reference */}
                  <div className="bg-[#111111] text-amber-400 px-2 sm:px-2.5 py-1.5 rounded-xl shadow-md border border-white/10 text-center leading-tight shrink-0">
                    <span className="block text-[8px] font-black tracking-widest text-neutral-400 uppercase">LIVE</span>
                    <span className="block text-[11px] font-black tracking-tight text-amber-400 uppercase">EXPERT</span>
                    <span className="block text-[8.5px] font-extrabold tracking-wider text-white uppercase">SESSIONS</span>
                  </div>
                </div>

                {/* Mentor Photo positioned flush at bottom */}
                <div className="relative z-10 w-full flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                    alt="Dedicated Course Mentors & Live Expert Sessions"
                    referrerPolicy="no-referrer"
                    className="w-52 sm:w-60 md:w-64 h-80 sm:h-96 md:h-[400px] lg:h-[430px] object-cover object-top rounded-t-2xl shadow-lg border-2 border-white/60"
                  />
                </div>
              </div>

              {/* Right Half: Clean typography matching reference proportions */}
              <div className="w-full md:w-[52%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-white">
                <div>
                  {/* Big Number Metric matching reference "10+" */}
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#0066CC] tracking-tight mb-4">
                    10+
                  </div>

                  {/* Point 2: Dedicated course mentors for a comprehensive learning experience */}
                  <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 leading-snug">
                    Dedicated course mentors for a comprehensive learning experience
                  </h4>

                  {/* Point 3: Industry expert sessions, webinars, and live projects */}
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Industry expert sessions, webinars, and live projects
                  </p>
                </div>

                {/* Bottom Action Link matching reference "Watch Video" placement */}
                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={onOpenCounselling}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066CC] hover:text-[#004C99] transition-colors group cursor-pointer"
                  >
                    <span>Talk to a Counsellor</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


