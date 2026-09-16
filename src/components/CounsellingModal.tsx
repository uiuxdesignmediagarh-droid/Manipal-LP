import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Phone, Download, Send, Lock, Sparkles, MessageCircle } from 'lucide-react';
import { PROGRAMMES, HERO_CONTENT } from '../data/smuContent';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramme?: string;
  mode?: 'counselling' | 'brochure' | 'whatsapp';
}

export function CounsellingModal({ isOpen, onClose, defaultProgramme, mode = 'counselling' }: Props) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedProgramme, setSelectedProgramme] = useState(defaultProgramme || 'ONLINE MBA — Dual Specialisation');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      id="counselling-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8E8E8] overflow-hidden transform transition-all duration-200 scale-100"
        id="counselling-modal-card"
      >
        {/* Top brand accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#F36F21] via-orange-400 to-[#F36F21]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-[#111111] hover:bg-neutral-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#F36F21]/10 text-[#F36F21] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#F36F21]/5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-[#111111]">
                {mode === 'brochure' ? 'Brochure Download Ready!' : 'Counselling Request Received!'}
              </h3>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Thank you <strong className="text-[#111111]">{fullName || 'Learner'}</strong>. An SMU Senior Academic Counsellor will reach out to you on <strong className="text-[#111111]">{mobileNumber || '+91-XXXXX'}</strong> within 15 minutes.
              </p>

              {mode === 'brochure' && (
                <div className="pt-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading SMU Online Degree Prospectus & Syllabus for ${selectedProgramme}...`);
                    }}
                    className="inline-flex items-center gap-2 bg-[#F36F21] hover:bg-[#d85e17] text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Prospectus (PDF)
                  </a>
                </div>
              )}

              <div className="pt-4 border-t border-[#E8E8E8]">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-neutral-500 hover:text-[#F36F21] font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF6F0] text-[#F36F21] text-xs font-semibold tracking-wide uppercase mb-2.5 border border-[#F36F21]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sikkim Manipal University</span>
                </div>
                <h2 className="font-serif-display text-2xl font-medium text-[#111111] tracking-tight">
                  {mode === 'brochure' ? 'Download Official Brochure' : 'Get Free Academic Counselling'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Connect with an SMU official counsellor for fees, scholarships & syllabus details.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" id="counselling-modal-form">
                <div>
                  <label htmlFor="modal-full-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="modal-full-name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="modal-mobile-number" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs font-medium text-neutral-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="modal-mobile-number"
                        required
                        pattern="[0-9]{10}"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="10-digit number"
                        className="w-full pl-11 pr-3 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-email-address" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email-address"
                      required
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-sm text-[#111111] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-programme" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Select Programme *
                  </label>
                  <select
                    id="modal-programme"
                    value={selectedProgramme}
                    onChange={(e) => setSelectedProgramme(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-[#E8E8E8] rounded-xl text-sm text-[#111111] focus:bg-white focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/15 transition-all"
                  >
                    {PROGRAMMES.map((prog) => (
                      <option key={prog.id} value={prog.name}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="modal-submit-btn"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-[#d85e17] active:scale-[0.99] text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-orange-500/20 transition-all text-sm disabled:opacity-70 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : mode === 'brochure' ? (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Brochure</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get Free Counselling</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Secondary Option: Talk via WhatsApp */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/${HERO_CONTENT.whatsAppNumber}?text=${encodeURIComponent(
                      `Hello SMU Counsellor, I am interested in ${selectedProgramme}. Please provide information.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-500/30 text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100 font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Talk to a Counsellor (Call/WhatsApp)</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 pt-1">
                  <Lock className="w-3 h-3 text-neutral-400" />
                  <span>Your information is confidential & protected under university privacy norms.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
