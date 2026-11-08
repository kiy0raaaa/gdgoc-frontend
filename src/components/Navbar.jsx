import { ArrowRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navigation = [
    { label: "Home", href: "/landing" },
    { label: "About", href: "/about" },
    { label: "Overview", href: "/overview" },
    { label: "Contact", href: "/contact" },
    ];

    export default function Navbar() {
    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
        const id = location.hash.slice(1);
        requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    } else {
        window.scrollTo({ top: 0, behavior: "instant" });
    }
    }, [location.pathname, location.hash]);

    return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DADCE0] bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 xl:h-[104px] xl:flex-nowrap xl:px-16">
        <Link to="/landing" className="flex shrink-0 items-center gap-2.5" aria-label="GDGoC UGM home">
            <img className="h-9 w-[69px] object-contain" src="/gdg-logo.png" alt="" />
            <img
            className="hidden h-[39px] w-[265px] object-contain sm:block"
            src="/gdgoc-wordmark.svg"
            alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
            />
        </Link>

        <nav
            aria-label="Main navigation"
            className="order-3 flex w-full flex-wrap justify-center gap-1 xl:order-none xl:w-auto xl:gap-2"
        >
            {navigation.map((item) => (
            <NavLink
                key={item.label}
                to={item.href}
                end
                className={({ isActive }) =>
                `rounded-full px-3 py-2 font-googleSans text-sm transition-colors sm:px-5 sm:py-3.5 sm:text-base ${
                    isActive
                    ? "bg-[#EAF2FF] font-bold text-[#1967D2]"
                    : "text-[#5F6368] hover:bg-gray-50"
                }`
                }
            >
                {item.label}
            </NavLink>
            ))}
        </nav>

        <Link
            to="/overview#learning-tracks"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#4285F4] px-3 py-2.5 font-googleSans text-sm font-medium text-white transition-colors hover:bg-[#3367D6] sm:gap-3 sm:px-6 sm:py-3 sm:text-base"
        >
            Find your track
            <ArrowRight aria-hidden="true" size={19} strokeWidth={1.7} />
        </Link>
        </div>
    </header>
    );
}
