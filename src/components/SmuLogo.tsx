import { useState } from 'react';

interface Props {
  className?: string;
  isDark?: boolean;
  src?: string;
}

export function SmuLogo({
  className = "h-10 sm:h-11",
  isDark = false,
  src,
}: Props) {
  const [hasError, setHasError] = useState(false);
  const logoSrc = src || (isDark ? 'https://www.smu.edu.in/img/SMU-footer-logo.png' : 'https://www.smu.edu.in/img/smu-logo.svg');

  return (
    <a href="#top" className="flex items-center gap-3 group select-none" id="smu-logo-link">
      {!hasError ? (
        <div className="flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
          <img
            src={logoSrc}
            alt="Sikkim Manipal University (SMU)"
            className={`${className} w-auto max-w-[220px] sm:max-w-[270px] object-contain`}
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        /* Fallback if external image is restricted */
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#F36F21] text-white flex items-center justify-center font-black text-sm shadow-xs">
            SMU
          </div>
          <div className="flex flex-col">
            <span className={`font-extrabold text-[15px] tracking-tight leading-none ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              SIKKIM MANIPAL
            </span>
            <span className="text-[11px] font-bold text-[#F36F21] uppercase tracking-wider mt-0.5">
              UNIVERSITY
            </span>
          </div>
        </div>
      )}
    </a>
  );
}
