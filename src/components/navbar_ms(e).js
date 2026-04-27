// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import img1 from '../assets/iitm_logo.png';
import img2 from '../assets/SIE.jpeg';

const NAV_LINKS = [
    { id: 'home', label: 'Home', path: '/ms(e)/home' },
    { id: 'projects', label: 'Projects', path: '/ms(e)/project' },
    { id: 'eligibility', label: 'Eligibility', path: '/ms(e)/eligibility' },
    { id: 'scholarship', label: 'Scholarship', path: '/ms(e)/scholorship' },
    { id: 'apply', label: 'How to Apply', path: '/ms(e)/apply' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const go = (path) => {
        setMobileOpen(false);
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <>
            {/* Main nav bar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-[200] h-16 flex items-center justify-between px-4 md:px-8 bg-white border-b border-[#DDE7F3] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_16px_rgba(12,52,97,0.12)]' : 'shadow-none'
                    }`}
            >
                {/* Brand */}
                <div className="flex items-center gap-3 md:gap-5 cursor-pointer" onClick={() => go('/ms(e)/home')}>
                    <img src={img1} alt="IITM Logo" className="h-10 md:h-12 w-auto object-contain" />
                    <div className="hidden lg:block h-8 w-px bg-gray-300"></div>
                    <img src={img2} alt="SIE Logo" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.path)}
                            className={`text-[13.5px] px-3.5 py-1.5 rounded-lg border-none cursor-pointer transition-all duration-150 ${location.pathname === l.path
                                ? 'text-[#185FA5] bg-[#E6F1FB] font-medium'
                                : 'text-[#4A6080] bg-transparent font-normal hover:bg-gray-50'
                                }`}
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => go('/')}
                        className="hidden sm:flex group relative items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-[#4A6080] shadow-[0_0_0_1px_#DDE7F3] transition-all duration-300 hover:text-[#185FA5] hover:shadow-[0_0_0_1px_#185FA5,0_2px_8px_rgba(24,95,165,0.15)] cursor-pointer"
                        title="Go back to SIE Main Website"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E6F1FB] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <svg className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span className="relative z-10 tracking-wide mt-[1px]">SIE HOME</span>
                    </button>
                    <button
                        onClick={() => go('/ms(e)/apply')}
                        className="bg-[#185FA5] text-white border-none px-5 py-2 rounded-[9px] text-[13.5px] font-medium cursor-pointer hover:bg-[#0C3461] transition-colors"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Apply now
                    </button>

                    {/* Hamburger */}
                    <button
                        className="md:hidden bg-transparent border-none cursor-pointer p-1"
                        onClick={() => setMobileOpen((o) => !o)}
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0D1B2A" strokeWidth="2">
                            <line x1="3" y1="6" x2="19" y2="6" />
                            <line x1="3" y1="11" x2="19" y2="11" />
                            <line x1="3" y1="16" x2="19" y2="16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="fixed top-16 left-0 right-0 bg-white border-b border-[#DDE7F3] z-[199] px-4 py-3 flex flex-col gap-1 md:hidden shadow-lg">
                    <button
                        onClick={() => go('/')}
                        className="flex items-center gap-2.5 text-[14px] text-[#185FA5] font-bold px-4 py-3 mx-1 mt-1 mb-2 rounded-xl bg-gradient-to-r from-[#F4F8FC] to-white border border-[#DDE7F3] cursor-pointer text-left transition-all active:scale-95 shadow-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        SIE HOME
                    </button>
                    <div className="h-px bg-gray-100 my-1"></div>
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.path)}
                            className={`text-[15px] text-[#0D1B2A] px-4 py-3 rounded-lg border-none cursor-pointer text-left transition-all ${location.pathname === l.path ? 'bg-[#E6F1FB]' : 'bg-transparent'
                                }`}
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}