import React from 'react';
import { Link } from 'react-router';

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const avatars = [
    { letter: 'J', bg: 'bg-[#d5e6dc]', text: 'text-[#3f6b55]' },
    { letter: 'M', bg: 'bg-[#eddccf]', text: 'text-[#8a6448]' },
    { letter: 'A', bg: 'bg-[#dcdff0]', text: 'text-[#525a8f]' },
    { letter: '+', bg: 'bg-[#1c4435]', text: 'text-white' },
];

const Hero = () => {
    return (
        <section className="w-full bg-[#f5f6f4]">
            <div className="mx-auto max-w-[760px] px-6 py-24 md:py-32">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#5fa07e]"></span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3d5a4c]">
                        Your voice, your community
                    </span>
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-[52px] font-medium leading-[1.05] tracking-tight text-[#1a2420] md:text-[80px]">
                    A better neighborhood starts{' '}
                    <span
                        className="font-normal italic text-[#6b8a78]"
                        style={{ fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif" }}
                    >
                        with you.
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-[420px] text-[17px] leading-8 text-[#5f6f67]">
                    Report local issues, follow progress, and help make your community a better place to live.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        to="/report"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1c4435] px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-[#15352a]"
                    >
                        Report an issue
                        <ArrowIcon />
                    </Link>
                    <Link
                        to="/explore"
                        className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-4 text-[15px] font-semibold text-[#1a2420] transition hover:bg-gray-50"
                    >
                        Explore reports
                    </Link>
                </div>

                {/* Social proof */}
                <div className="mt-14 flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {avatars.map((a) => (
                            <span
                                key={a.letter}
                                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f5f6f4] text-[10px] font-semibold ${a.bg} ${a.text}`}
                            >
                                {a.letter}
                            </span>
                        ))}
                    </div>
                    <div className="leading-tight">
                        <p className="text-[13px] font-semibold text-[#1a2420]">Join your neighbors</p>
                        <p className="text-[13px] text-[#6b7a72]">making a difference every day</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;