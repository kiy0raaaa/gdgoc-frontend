import { NavLink } from 'react-router-dom';

export default function Navbar() {
return (
<header className="border-b border-gray-100 bg-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    {/* Brand/Logo */}
    <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
        G
        </div>
        <span className="font-semibold text-lg tracking-tight">GDGoC UGM</span>
    </div>

    {/* Menu Navigasi */}
    <nav className="flex items-center gap-6">
        <NavLink
        to="/about"
        className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
            }`
        }
        >
        About Us
        </NavLink>
        <NavLink
        to="/contact"
        className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
            }`
        }
        >
        Contact
        </NavLink>
    </nav>
    </div>
</header>
);
}