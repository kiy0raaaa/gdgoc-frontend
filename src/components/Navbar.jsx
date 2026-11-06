import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNavigationData } from '../services/api';

export default function Navbar() {
    const [navLinks, setNavLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchNav = async () => {
        try {
        const res = await getNavigationData();
        if (res && res.success) {
            setNavLinks(res.data);
        }
        } catch (error) {
        // Fallback jika API gagal agar UI tidak rusak
        setNavLinks([
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Overview', href: '/overview' },
            { label: 'Contact', href: '/contact' }
        ]);
        } finally {
        setLoading(false);
        }
    };
    fetchNav();
    }, []);

    return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo GDGoC */}
        <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 18.5L16.5 28.5H11.5L17.5 18.5H22.5Z" fill="#EA4335"/>
                <path d="M28.5 18.5L22.5 28.5H17.5L23.5 18.5H28.5Z" fill="#FBBC05"/>
                <path d="M34.5 18.5L28.5 28.5H23.5L29.5 18.5H34.5Z" fill="#4285F4"/>
                <path d="M40.5 18.5L34.5 28.5H29.5L35.5 18.5H40.5Z" fill="#34A853"/>
            </svg>
            </div>
            <div className="flex flex-col">
            <span className="font-semibold text-[15px] leading-tight text-gray-800">Google Developer Groups</span>
            <span className="text-[11px] text-gray-500 font-medium">On Campus • Universitas Gadjah Mada</span>
            </div>
        </div>

        {/* Dynamic API Links */}
        <div className="hidden md:flex items-center gap-1">
            {loading ? (
            <div className="flex gap-4 animate-pulse">
                <div className="h-8 w-16 bg-gray-100 rounded-full"></div>
                <div className="h-8 w-16 bg-gray-100 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-100 rounded-full"></div>
            </div>
            ) : (
            navLinks.map((link, idx) => (
                <NavLink
                key={idx}
                to={link.href === '/' ? '/about' : link.href} // Penyesuaian karena kita cuma bikin 2 page
                className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                    isActive
                        ? 'bg-[#E8F0FE] text-[#4285F4]'
                        : 'text-gray-500 hover:text-gray-900'
                    }`
                }
                >
                {link.label}
                </NavLink>
            ))
            )}
        </div>

        {/* Right Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-[13px] font-medium transition-colors">
            Find your track
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        </div>
    </nav>
    );
}