import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSMU } from './components/AboutSMU';
import { Accolades } from './components/Accolades';
import { WhyStudyOnline } from './components/WhyStudyOnline';
import { Scholarships } from './components/Scholarships';
import { Programmes } from './components/Programmes';
import { AdmissionProcess } from './components/AdmissionProcess';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CounsellingModal } from './components/CounsellingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'counselling' | 'brochure' | 'whatsapp'>('counselling');
  const [selectedProgramme, setSelectedProgramme] = useState<string | undefined>(undefined);

  const handleOpenCounselling = (progName?: string) => {
    setModalMode('counselling');
    setSelectedProgramme(progName);
    setIsModalOpen(true);
  };

  const handleOpenBrochure = (progName?: string) => {
    setModalMode('brochure');
    setSelectedProgramme(progName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#F36F21]/20 selection:text-[#F36F21]" id="top">
      {/* 1. Header (Sticky) */}
      <Header
        onOpenCounselling={handleOpenCounselling}
        onOpenBrochure={handleOpenBrochure}
      />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* 2. Hero Section */}
        <Hero
          onOpenCounselling={handleOpenCounselling}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 3. Trust / Accreditation Strip */}
        <TrustStrip />

        {/* 4. About Sikkim Manipal University */}
        <AboutSMU
          onApply={() => handleOpenCounselling()}
        />

        {/* 5. SMU Accolades */}
        <Accolades />

        {/* 6. Why Study Online with SMU? */}
        <WhyStudyOnline
          onOpenCounselling={() => handleOpenCounselling()}
        />

        {/* 7. Scholarships & Financing */}
        <Scholarships
          onOpenCounselling={() => handleOpenCounselling()}
        />

        {/* 8. Programmes Offered */}
        <Programmes
          onOpenCounselling={handleOpenCounselling}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 9. Admission Process */}
        <AdmissionProcess
          onOpenCounselling={() => handleOpenCounselling()}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection
          onOpenCounselling={() => handleOpenCounselling()}
        />

        {/* 12. Final CTA Section */}
        <FinalCTA
          onOpenCounselling={() => handleOpenCounselling()}
          onOpenBrochure={() => handleOpenBrochure()}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        onOpenCounselling={handleOpenCounselling}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 14. Interactive Lead & Brochure Modal */}
      <CounsellingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProgramme={selectedProgramme}
        mode={modalMode}
      />

      {/* 15. Mobile Sticky CTA Bar */}
      <MobileStickyBar
        onOpenCounselling={() => handleOpenCounselling()}
      />
    </div>
  );
}
