import { useState, type FormEvent } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Phone, 
  Mail, 
  User, 
  GraduationCap
} from 'lucide-react';
import { HERO_CONTENT, PROGRAMMES } from '../data/smuContent';

interface Props {
  onOpenCounselling?: (prog?: string) => void;
  onOpenBrochure?: (prog?: string) => void;
}

export function Hero(_props: Props) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [programme, setProgramme] = useState('ONLINE MBA — Dual Specialisation');
  const [stateName, setStateName] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAdmissionSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 650);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[640px] flex items-center">
      {/* Background Campus Image with Optimal Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.onlinemanipal.com/wp-content/uploads/2023/06/SMU-1-1.webp"
          alt="Sikkim Manipal University Campus"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Gradient Overlay for Maximum Legibility & Brand Presence */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/85 to-neutral-900/80" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        
        {/* Warm Ambient Glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-[#F36F21]/15 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* University Group Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
              <span>Admissions Open for 2026 Academic Session</span>
              <span className="text-white/30">|</span>
              <span className="text-[#F36F21] font-bold">NAAC A+</span>
            </div>

            {/* Main Headline - EXACT PDF COPY */}
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[46px] font-normal sm:font-medium text-white tracking-tight leading-[1.18] drop-shadow-sm">
              {HERO_CONTENT.headline}
            </h1>

            {/* Sub-headline - EXACT PDF COPY */}
            <p className="text-base sm:text-lg font-normal text-neutral-200 leading-relaxed border-l-4 border-[#F36F21] pl-4 bg-neutral-900/60 backdrop-blur-md py-2.5 rounded-r-lg border-y border-r border-white/5">
              {HERO_CONTENT.subHeadline}
            </p>

          </div>

          {/* Right Column: High-Conversion Admission Form */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border-t-4 border-[#F36F21] relative overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8E8E8]">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F36F21] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Admissions Open 2026</span>
                  </div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-medium text-[#111111] tracking-tight mt-1">
                    Admission Form
                  </h2>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase block">Fee Assistance</span>
                  <span className="text-xs font-extrabold text-emerald-600">No-Cost EMI</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-orange-50 text-[#F36F21] rounded-full flex items-center justify-center mx-auto ring-8 ring-orange-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">
                    Application Submitted!
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
                    Thank you, <strong className="text-[#111111]">{fullName}</strong>. Your enquiry for <strong className="text-[#111111]">{programme}</strong> has been registered. An SMU Senior Academic Counsellor will call you shortly on <strong className="text-[#111111]">+91 {mobileNumber}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setMobileNumber('');
                        setEmailAddress('');
                      }}
                      className="text-xs text-[#F36F21] font-bold hover:underline"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAdmissionSubmit} className="space-y-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="hero-fullname" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        id="hero-fullname"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="hero-mobile" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E8E8E8] bg-neutral-100 text-neutral-600 text-xs font-bold">
                        +91
                      </span>
                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="tel"
                          id="hero-mobile"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="10-digit mobile number"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-r-xl text-xs sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="email"
                        id="hero-email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Programme Selection */}
                  <div>
                    <label htmlFor="hero-programme" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Select Programme *
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none" />
                      <select
                        id="hero-programme"
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                        className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#111111] focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all appearance-none cursor-pointer"
                      >
                        {PROGRAMMES.map((prog) => (
                          <option key={prog.id} value={prog.name}>
                            {prog.name} {prog.isFlagship ? '(Flagship)' : ''}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="hero-state" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your State / Location
                    </label>
                    <input
                      type="text"
                      id="hero-state"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="e.g. Sikkim, West Bengal, Delhi, etc."
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                    />
                  </div>

                  {/* Terms & Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="hero-terms"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                      className="mt-1 rounded border-neutral-300 text-[#F36F21] focus:ring-[#F36F21]"
                    />
                    <label htmlFor="hero-terms" className="text-[10.5px] text-neutral-500 leading-tight">
                      I authorise Sikkim Manipal University & representatives to contact me via Call / WhatsApp.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || !agreed}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-[#d85e17] active:scale-[0.99] disabled:opacity-50 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Form Footer Trust Tag */}
                  <div className="flex items-center justify-center gap-4 pt-2 text-[10.5px] text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-neutral-400" />
                      100% Privacy
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Zero Counselling Fee
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

