import React from "react";

export const Logo = ({
  language,
  variant = "dark",
  size = "md",
  showText = true,
  className = "",
  onClick,
}) => {
  const isDark = variant === "dark";

  const iconSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    nav: "w-14 h-14",
    lg: "w-16 h-16",
  };
  const titleSizes = {
    sm: "text-sm font-bold",
    md: "text-lg md:text-xl font-bold",
    nav: "text-xl md:text-2xl font-bold",
    lg: "text-2xl md:text-3xl font-extrabold",
  };
  const subtitleSizes = {
    sm: "text-[9px] tracking-wide",
    md: "text-[11px] md:text-xs tracking-wider",
    nav: "text-[10px] md:text-[11px] tracking-wide",
    lg: "text-xs md:text-sm tracking-widest",
  };

  return (
    <div
      id="brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-all duration-300 ${className}`}
    >
      <div
        className={`relative ${iconSizes[size]} flex-shrink-0 overflow-hidden transition-transform duration-500 group-hover:scale-105`}
      >
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="hidden"
            fill="none"
            xmlns=""
          >
            <defs>
              <linearGradient
                id="towerGoldGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F5D278" />
                <stop offset="35%" stopColor="#E2B755" />
                <stop offset="75%" stopColor="#C99732" />
                <stop offset="100%" stopColor="#9B6E18" />
              </linearGradient>
              <linearGradient
                id="centerTowerGrad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFF0AA" />
                <stop offset="25%" stopColor="#EBBF5C" />
                <stop offset="70%" stopColor="#D5A238" />
                <stop offset="100%" stopColor="#A8771C" />
              </linearGradient>
              <linearGradient
                id="cyanArcGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#007E8A" stopOpacity="0.3" />
                <stop offset="25%" stopColor="#00B8C8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#38E1EE" stopOpacity="1" />
                <stop offset="75%" stopColor="#00B8C8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#007E8A" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="calligraphyGold"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#EABF5B" />
                <stop offset="100%" stopColor="#C79630" />
              </linearGradient>
              <radialGradient id="haloGlow" cx="50%" cy="48%" r="40%">
                <stop offset="0%" stopColor="#25231E" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#171511" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#11110F" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="48" r="28" fill="url(#haloGlow)" />
            <path
              d="M 12 18 L 12 12 L 18 12"
              stroke="#CCAE6E"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M 88 18 L 88 12 L 82 12"
              stroke="#CCAE6E"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M 12 82 L 12 88 L 18 88"
              stroke="#CCAE6E"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M 88 82 L 88 88 L 82 88"
              stroke="#CCAE6E"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <g>
              <rect
                x="25"
                y="43"
                width="14"
                height="22"
                rx="1"
                fill="url(#towerGoldGrad)"
              />
              <rect
                x="27.5"
                y="45.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="33"
                y="45.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="27.5"
                y="50.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="33"
                y="50.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="27.5"
                y="55.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="33"
                y="55.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
            </g>
            <g>
              <rect
                x="61"
                y="43"
                width="14"
                height="22"
                rx="1"
                fill="url(#towerGoldGrad)"
              />
              <rect
                x="63.5"
                y="45.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="69"
                y="45.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="63.5"
                y="50.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="69"
                y="50.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="63.5"
                y="55.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
              <rect
                x="69"
                y="55.5"
                width="3.5"
                height="3"
                rx="0.5"
                fill="#11110F"
              />
            </g>
            <g>
              <rect
                x="41.5"
                y="34"
                width="17"
                height="32"
                rx="1"
                fill="url(#centerTowerGrad)"
              />
              <polygon
                points="41.5,34 50,22 58.5,34"
                fill="url(#centerTowerGrad)"
              />
              <polygon points="50,14 47.5,22 50,20.5 52.5,22" fill="#FFF4B8" />
              <polygon
                points="50,13.5 46.5,22 50,20 53.5,22"
                fill="url(#calligraphyGold)"
              />
              <line
                x1="50"
                y1="12"
                x2="50"
                y2="10"
                stroke="#FFF7C8"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <rect
                x="44"
                y="36.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="51.5"
                y="36.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="44"
                y="41.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="51.5"
                y="41.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="44"
                y="46.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="51.5"
                y="46.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="44"
                y="51.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="51.5"
                y="51.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="44"
                y="56.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
              <rect
                x="51.5"
                y="56.5"
                width="4.5"
                height="3.2"
                rx="0.6"
                fill="#11110F"
              />
            </g>
            <line
              x1="16"
              y1="52"
              x2="24"
              y2="52"
              stroke="#CCAE6E"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="16" cy="52" r="0.9" fill="#CCAE6E" opacity="0.8" />
            <line
              x1="76"
              y1="52"
              x2="84"
              y2="52"
              stroke="#CCAE6E"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="84" cy="52" r="0.9" fill="#CCAE6E" opacity="0.8" />
            <path
              d="M 21 57.5 Q 50 51.5 79 57.5"
              stroke="url(#cyanArcGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 18 61 Q 50 54.5 82 61"
              stroke="#008B9B"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.75"
            />
            <g>
              <line
                x1="28"
                y1="76"
                x2="35"
                y2="76"
                stroke="#CCAE6E"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.7"
              />
              <line
                x1="65"
                y1="76"
                x2="72"
                y2="76"
                stroke="#CCAE6E"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.7"
              />
              <text
                x="50"
                y="79"
                textAnchor="middle"
                fill="url(#calligraphyGold)"
                fontSize="13.5"
                fontFamily="'Tajawal', 'Cairo', 'Traditional Arabic', sans-serif"
                fontWeight="900"
                letterSpacing="0.5"
                className="select-none"
              >
                الـرقـي
              </text>
            </g>
          </svg>
          <img
            src="/images/al-ruqi-mark.jpg"
            alt=""
            className="relative z-10 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col text-start justify-center">
          <span
            className={`tracking-tight leading-none ${titleSizes[size]} ${isDark ? "text-[#11110F]" : "text-white"}`}
          >
            {language === "ar" ? "مشروعات الرقي" : "Al-Ruqi Projects"}
          </span>
          <span
            className={`font-medium uppercase leading-tight mt-1 ${subtitleSizes[size]} ${isDark ? "text-[#80652F]" : "text-[#CCAE6E]"}`}
          >
            {language === "ar"
              ? "للتطوير والاستثمار العقاري"
              : "Real Estate Development & Investment"}
          </span>
        </div>
      )}
    </div>
  );
};
