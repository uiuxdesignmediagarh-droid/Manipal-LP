import { useState } from 'react';
import {
  GraduationCap,
  Clock,
  Globe,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Props {
  onOpenCounselling: (progName: string) => void;
  onOpenBrochure?: (progName: string) => void;
}

interface ProgrammeItem {
  id: string;
  category: 'pg' | 'ug';
  name: string;
  type: string;
  image: string;
  imageAlt: string;
  isFlagship?: boolean;
  duration: string;
  mode: string;
  totalCredits: string;
  eligibility: string;
  specialisationsTitle?: string;
  specialisations?: string[];
  tracksTitle?: string;
  tracks?: string[];
}

const PROGRAMMES_LIST: ProgrammeItem[] = [
  {
    id: 'online-mba',
    category: 'pg',
    name: 'ONLINE MBA — Dual Specialisation',
    type: 'Postgraduate Degree',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online MBA Dual Specialisation Strategy and Leadership',
    isFlagship: true,
    duration: '2 Years (4 Semesters), 15–20 hrs/week',
    mode: '100% Online',
    totalCredits: '102',
    eligibility: "10+2+3/10+2+4/10+3+3-year Bachelor's degree in any discipline, min. 50% aggregate (45% for reserved categories)",
    specialisationsTitle: 'Choose Dual Specialisations from:',
    specialisations: [
      'Marketing',
      'Finance',
      'HR',
      'Systems',
      'Operations & Supply Chain Management',
      'Healthcare',
    ],
  },
  {
    id: 'online-bba',
    category: 'ug',
    name: 'ONLINE BBA',
    type: 'Undergraduate Degree',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online BBA Undergraduate Business Students Collaboration',
    duration: 'Minimum 3 Years (6 Semesters), 15–20 hrs/week',
    mode: '100% Online',
    totalCredits: '120',
    eligibility: '10+2 or 10+3 diploma from a recognised board/institute, any discipline',
    tracksTitle: '4 Specialisation Tracks (choose in Semester 5, continues in Semester 6):',
    tracks: [
      'Business Analytics & Fintech',
      'Entrepreneurship',
      'Operations & Supply Chain Management',
      'Banking & Insurance',
    ],
  },
  {
    id: 'online-bcom',
    category: 'ug',
    name: 'ONLINE B.COM (Bachelor of Commerce)',
    type: 'Undergraduate Degree',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online B.Com Financial Markets and Corporate Accounting',
    duration: 'Minimum 3 Years (6 Semesters), 15–20 hrs/week',
    mode: '100% Online',
    totalCredits: '120',
    eligibility: '10+2/Intermediate/Senior Secondary from a recognised board, any discipline',
  },
  {
    id: 'online-ma-english',
    category: 'pg',
    name: 'ONLINE MA IN ENGLISH',
    type: 'Postgraduate Degree',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online MA in English Literature and Advanced Critical Analysis',
    duration: 'Minimum 2 Years (4 Semesters), 15–20 hrs/week',
    mode: '100% Online',
    totalCredits: '80',
    eligibility: "10+2+3-year Bachelor's degree from a recognised university, any discipline",
  },
];

export function Programmes({ onOpenCounselling, onOpenBrochure }: Props) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pg' | 'ug'>('all');

  const filteredProgrammes = PROGRAMMES_LIST.filter((prog) => {
    if (activeFilter === 'pg') return prog.category === 'pg';
    if (activeFilter === 'ug') return prog.category === 'ug';
    return true;
  });

  return (
    <section id="programmes" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/90 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#F36F21]" />
              <span>UGC-Entitled Curriculum</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111111] tracking-tight">
              PROGRAMMES OFFERED
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              Industry-aligned degree programmes designed for career acceleration, delivered 100% online with faculty mentorship.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center bg-white p-1 rounded-full border border-neutral-200 shadow-2xs self-start">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#111111] text-white shadow-2xs'
                  : 'text-neutral-600 hover:text-[#111111]'
              }`}
            >
              All Programmes ({PROGRAMMES_LIST.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pg')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'pg'
                  ? 'bg-[#111111] text-white shadow-2xs'
                  : 'text-neutral-600 hover:text-[#111111]'
              }`}
            >
              Postgraduate (MBA / MA)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ug')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'ug'
                  ? 'bg-[#111111] text-white shadow-2xs'
                  : 'text-neutral-600 hover:text-[#111111]'
              }`}
            >
              Undergraduate (BBA / B.Com)
            </button>
          </div>
        </div>

        {/* Programmes Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
          {filteredProgrammes.map((prog) => (
            <div
              key={prog.id}
              className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                prog.isFlagship
                  ? 'border-[#F36F21]/70 ring-1 ring-[#F36F21]/30'
                  : 'border-neutral-200/90 hover:border-neutral-300'
              }`}
            >
              {/* Flagship Top Banner */}
              {prog.isFlagship && (
                <div className="bg-[#F36F21] text-white px-5 py-2 text-xs font-extrabold tracking-wider uppercase flex items-center justify-between z-20 relative">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship Management Degree
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-bold">
                    Dual Specialisation
                  </span>
                </div>
              )}

              {/* Programme Visual Container Header */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-neutral-900 group">
                <img
                  src={prog.image}
                  alt={prog.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                />
                {/* Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    {prog.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-xs">
                    100% Online
                  </span>
                </div>

                {/* Bottom Overlay: Programme Name */}
                <div className="absolute bottom-3.5 inset-x-4 sm:inset-x-5 z-10">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-white drop-shadow-sm leading-snug">
                    🎓 {prog.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Metadata Stats Grid: Duration, Mode, Total Credits */}
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/80 text-xs">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-500 font-medium flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-[#F36F21]" /> Duration
                    </span>
                    <span className="font-bold text-[#111111] leading-snug">
                      {prog.duration}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-500 font-medium flex items-center gap-1 mb-1">
                      <Globe className="w-3 h-3 text-[#F36F21]" /> Mode
                    </span>
                    <span className="font-bold text-[#111111] leading-snug">
                      {prog.mode}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-500 font-medium flex items-center gap-1 mb-1">
                      <Award className="w-3 h-3 text-[#F36F21]" /> Total Credits
                    </span>
                    <span className="font-bold text-[#111111] leading-snug">
                      {prog.totalCredits} Credits
                    </span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="text-xs text-neutral-700 leading-relaxed bg-neutral-50/50 p-3.5 rounded-xl border border-neutral-200/80">
                  <strong className="text-[#111111] font-bold block mb-1">Eligibility:</strong>
                  <span>{prog.eligibility}</span>
                </div>

                {/* Specialisations (MBA) */}
                {prog.specialisations && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#F36F21]" />
                      <span>{prog.specialisationsTitle}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.specialisations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#F36F21] text-xs font-semibold border border-orange-200/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tracks (BBA) */}
                {prog.tracks && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#F36F21]" />
                      <span>{prog.tracksTitle}</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.tracks.map((track, tIdx) => (
                        <div
                          key={tIdx}
                          className="px-3 py-2 rounded-lg bg-neutral-50 text-neutral-800 text-xs font-medium flex items-center gap-2 border border-neutral-200/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] shrink-0" />
                          <span>{track}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 border-t border-neutral-100 mt-5 bg-white">
                  <button
                    type="button"
                    onClick={() => onOpenCounselling(prog.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-[#d85e17] active:scale-[0.98] text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm shadow-xs cursor-pointer transition-all"
                  >
                    <span>Apply Now / Free Counselling</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
