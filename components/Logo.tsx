
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylized Running Figure / 'R' */}
    <circle cx="35" cy="25" r="8" fill="currentColor" />
    <path 
      d="M45 35H75C78 35 80 37 80 40V42C80 44 78 45 75 45H50L45 55L45 65C45 68 43 70 40 70H35L40 60L40 40C40 37 42 35 45 35Z" 
      fill="currentColor" 
    />
    {/* Speed Lines */}
    <rect x="65" y="47" width="15" height="3" rx="1.5" fill="currentColor" />
    <rect x="72" y="52" width="10" height="3" rx="1.5" fill="currentColor" />
    <rect x="25" y="58" width="12" height="3" rx="1.5" fill="currentColor" />
    <rect x="30" y="63" width="8" height="3" rx="1.5" fill="currentColor" />
  </svg>
);
