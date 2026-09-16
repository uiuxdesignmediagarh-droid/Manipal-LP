import { SmuLogo } from './SmuLogo';

interface Props {
  onOpenCounselling?: (prog?: string) => void;
  onOpenBrochure?: (prog?: string) => void;
}

export function Footer({}: Props) {
  return (
    <footer id="main-footer" className="bg-[#111111] text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Information */}
        <div className="max-w-2xl space-y-4 pb-10 border-b border-neutral-800">
          <SmuLogo
            isDark={true}
            src="https://www.smu.edu.in/img/SMU-footer-logo.png"
            className="h-12 sm:h-14"
          />
          
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
            Sikkim Manipal University (SMU) is a premier higher education institution established in 1995 in partnership with the Government of Sikkim. Online degree programmes offered by SMU are UGC-entitled and accredited NAAC A+.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div>
            © 2025 Sikkim Manipal University. All Rights Reserved.
          </div>
          <div className="text-neutral-400">
            Design and Developed by Mediagarh
          </div>
        </div>

      </div>
    </footer>
  );
}
