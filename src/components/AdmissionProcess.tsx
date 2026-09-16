import { Info, ArrowRight } from 'lucide-react';

interface Props {
  onOpenCounselling: () => void;
}

const STEPS = [
  {
    number: 1,
    title: 'Program Registration',
    description:
      'Fill in your basic, education & work experience details → Pay the application fee to register.',
  },
  {
    number: 2,
    title: 'Fee Payment',
    description:
      'Pay the admission fee for the first semester/year or the full programme.',
  },
  {
    number: 3,
    title: 'Document Upload',
    description:
      'Upload supporting documents and submit your application.',
  },
  {
    number: 4,
    title: 'University Approval',
    description:
      'SMU evaluates your documents and confirms admission.',
  },
];

export function AdmissionProcess({ onOpenCounselling }: Props) {
  return (
    <section
      data-wpr-lazyrender="1"
      id="admission-process"
      style={{
        backgroundImage: `url('https://www.onlinemanipal.com/wp-content/themes/flamingo/assets/images/muj-univ-bldg.webp')`,
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="admission-process-sect section-mb horizontal py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Dark teal-blue cinematic wash overlay matching reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2735]/82 via-[#09222e]/85 to-[#071922]/92 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 admission-wrapper container relative z-10">
        
        {/* Top Header: Title & Subtitle */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-white/10 text-left">
          <h2 className="section-title font-serif-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-tight uppercase">
            Admission Process
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans mt-2">
            4 simple steps to enrol in your UGC-entitled degree programme at SMU
          </p>
        </div>

        {/* 4 Steps Container with Connecting Horizontal Line */}
        <div className="relative mb-10">
          {/* Connecting line behind circles (visible on lg screens) */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-[1px] bg-white/40 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-white text-neutral-900 font-bold text-base flex items-center justify-center shadow-lg ring-4 ring-[#0b2735]/50 relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Dark Card Container with equal heights and aligned typography */}
                <div className="flex-1 rounded-[18px] bg-[#14181d]/90 backdrop-blur-md border border-white/10 p-6 sm:p-7 shadow-2xl flex flex-col justify-start hover:border-white/25 transition-all min-h-[190px]">
                  <h3 className="font-serif-display text-xl sm:text-[22px] text-white font-normal mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application fee note Banner - cleanly aligned */}
        <div className="mb-12 max-w-4xl mx-auto rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-xl flex items-start sm:items-center gap-3.5 text-xs sm:text-[13.5px] text-white/90 leading-relaxed">
          <div className="p-1.5 rounded-full bg-white/15 text-white shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-4 h-4 text-white" />
          </div>
          <div>
            <strong className="text-white font-semibold">Application fee note:</strong>{' '}
            A non-refundable ₹500 application fee applies for Indian, Nepalese, Bhutanese, Bangladeshi, and Sri Lankan applicants. SAARC nation applicants (Nepal, Bhutan, Bangladesh, Sri Lanka) pay fees in INR.
          </div>
        </div>

        {/* Centered Pill Button: Apply Now */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onOpenCounselling}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-neutral-900 text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </button>
        </div>

      </div>
    </section>
  );
}
