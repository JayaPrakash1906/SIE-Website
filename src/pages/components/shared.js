import React from "react";
import FooterBase from "../../components/footer";
import { FaCheckCircle } from "react-icons/fa";

export function STag({ children }) {
  return (
    <span className="font-dm-sans inline-block text-xs font-semibold uppercase tracking-wide text-[#185FA5] mb-2">
      {children}
    </span>
  );
}

export function STitle({ children }) {
  return (
    <h2 className="font-dm-serif text-2xl md:text-3xl font-normal text-[#0D1B2A] mb-4">
      {children}
    </h2>
  );
}

export function FeatureList({ items = [] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-[#4A6080] leading-relaxed flex items-start gap-2">
          <FaCheckCircle className="text-[#185FA5] mt-0.5 shrink-0" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaSection({ title, desc, btn1, btn2, onBtn1, onBtn2 }) {
  return (
    <section className="bg-gradient-to-r from-[#2f5379] via-[#3f6b96] to-[#4f7faa] text-center py-20 px-8">
      <h2 className="text-[32px] md:text-4xl font-dm-serif text-white mb-4 font-normal">
        {title}
      </h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto text-[15px] font-light">
        {desc}
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <button
          type="button"
          onClick={onBtn1}
          className="bg-white text-[#2f5379] px-7 py-3 rounded-lg text-sm font-semibold hover:scale-[1.02] transition-transform"
        >
          {btn1}
        </button>
        {btn2 && (
          <button
            type="button"
            onClick={onBtn2}
            className="border border-white/40 text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {btn2}
          </button>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return <FooterBase />;
}

