import React from "react";
import { ArrowRight } from "lucide-react";

export default function AccountTypeCard({
  icon,
  title,
  subtitle,
  points = [],
  ctaText,
  onClick,
  gradientFrom = "from-gray-800",
  gradientTo = "to-gray-900",
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer group bg-gradient-to-br ${gradientFrom} ${gradientTo} hover:from-purple-800 hover:to-purple-900
        rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-purple-600/40 transition-all duration-300 flex flex-col justify-between min-h-[380px]`}
    >
      <div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-3xl mb-4">
          {icon}
        </div>

        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{subtitle}</p>

        <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-all"
        >
          {ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
