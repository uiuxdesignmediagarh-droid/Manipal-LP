import { CreditCard, Sparkles, AlertCircle, Percent, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenCounselling: () => void;
}

interface ConcessionItem {
  category: string;
  discount: string;
  isFeatured?: boolean;
  tag?: string;
}

const CONCESSIONS: ConcessionItem[] = [
  {
    category: 'Candidates from Sikkim & North East region',
    discount: '30%',
    isFeatured: true,
    tag: 'Highest Concession',
  },
  {
    category: 'Differently-abled (Divyaang)',
    discount: '20%',
  },
  {
    category: 'Defence Personnel',
    discount: '20%',
  },
  {
    category: 'SMU Alumni (UG/PG)',
    discount: '20%',
  },
  {
    category: 'Full programme fee paid upfront',
    discount: '10% discount',
  },
  {
    category: 'Annual fee paid upfront',
    discount: '5% discount',
  },
];

export function Scholarships({ onOpenCounselling }: Props) {
  return (
    <section id="scholarships" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 shadow-2xs">
            <Percent className="w-3.5 h-3.5 text-[#F36F21]" />
            <span>Financial Assistance</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111111] tracking-tight">
            SCHOLARSHIPS & FINANCING
          </h2>
        </div>

        {/* Highlight Card: No-Cost EMI & Scholarship Visual Banner */}
        <div className="mb-10 sm:mb-12 rounded-3xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden transition-all hover:border-neutral-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F36F21] bg-[#F36F21]/10 px-2.5 py-0.5 rounded-full border border-[#F36F21]/15">
                    Zero-Cost Financing
                  </span>
                  <span className="text-xs text-neutral-400">•</span>
                  <span className="text-xs font-semibold text-neutral-600">Annual Fee Option</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0 border border-[#F36F21]/20">
                    <CreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl lg:text-[26px] font-medium text-[#111111] leading-snug">
                      No-Cost EMI — Stress-free learning with zero-cost EMI available on annual fee payment
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                      Pursue your dream degree without financial strain. Choose flexible monthly instalment plans with zero processing fees and zero interest rate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Financing Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>0% Interest EMI</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-800 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant Approval</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCounselling}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F36F21] hover:text-[#d85e17] transition-colors cursor-pointer group"
                >
                  <span>Check EMI Options & Eligibility with a Counsellor</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Image Container */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-auto bg-neutral-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Students studying with university scholarship and financial assistance"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-lg text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F36F21]" />
                <span>Up to 30% Concessions</span>
              </div>

              {/* Floating Card: Bottom Left */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
                <div className="flex items-center justify-between font-bold text-sm mb-1">
                  <span>Manipal Scholarship Scheme</span>
                  <span className="text-[#F36F21]">Govt. & Merit</span>
                </div>
                <p className="text-[11px] text-white/80 leading-relaxed font-normal">
                  Dedicated fee concessions for North East candidates, Defence, Divyaang, and SMU alumni.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Scheme Heading */}
        <div className="mb-6 flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#F36F21]" />
          <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-[#111111] tracking-tight">
            Manipal Scholarship Scheme — Fee concessions for:
          </h3>
        </div>

        {/* 6 Concession Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CONCESSIONS.map((item, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                item.isFeatured
                  ? 'bg-orange-50/50 border-[#F36F21]/40 shadow-xs hover:border-[#F36F21]'
                  : 'bg-white border-neutral-200/90 hover:border-neutral-300 shadow-2xs'
              }`}
            >
              <div className="space-y-1.5 pr-2">
                {item.tag ? (
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#F36F21] bg-orange-100/70 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                ) : (
                  <span className="text-[11px] text-neutral-400 font-medium">Category 0{index + 1}</span>
                )}
                <p className="text-sm sm:text-base font-semibold text-[#111111] leading-snug">
                  {item.category}
                </p>
              </div>

              <div
                className={`px-3.5 py-2.5 rounded-xl text-center shrink-0 border ${
                  item.isFeatured
                    ? 'bg-[#F36F21] text-white border-[#F36F21] font-extrabold text-base sm:text-lg shadow-2xs'
                    : 'bg-neutral-100 text-[#111111] border-neutral-200 font-bold text-sm sm:text-base'
                }`}
              >
                {item.discount}
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Note Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 text-neutral-700 text-xs sm:text-sm flex items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start sm:items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#F36F21] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-[#111111]">Note:</strong> Learners opting for loan financing are not eligible for additional discounts.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCounselling}
            className="shrink-0 hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#F36F21] hover:text-[#d85e17] transition-colors cursor-pointer"
          >
            <span>Apply for Scholarship</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
