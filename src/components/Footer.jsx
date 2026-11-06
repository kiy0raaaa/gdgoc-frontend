export default function Footer() {
    return (
    <footer className="bg-[#F8F9FA] pt-16 pb-0 border-t border-gray-200 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 mb-16 w-full">
        {/* Column 1: Logo & Text */}
        <div className="w-full md:w-5/12 space-y-4">
            <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 18.5L16.5 28.5H11.5L17.5 18.5H22.5Z" fill="#EA4335"/>
                <path d="M28.5 18.5L22.5 28.5H17.5L23.5 18.5H28.5Z" fill="#FBBC05"/>
                <path d="M34.5 18.5L28.5 28.5H23.5L29.5 18.5H34.5Z" fill="#4285F4"/>
                <path d="M40.5 18.5L34.5 28.5H29.5L35.5 18.5H40.5Z" fill="#34A853"/>
                </svg>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-[13px] leading-tight text-gray-800">Google Developer Groups</span>
                <span className="text-[10px] text-gray-500 font-medium">On Campus • Universitas Gadjah Mada</span>
            </div>
            </div>
            <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
            A student community for curious minds, shared learning, and technology with purpose.
            </p>
        </div>

        {/* Column 2: Explore */}
        <div className="w-full md:w-3/12">
            <h4 className="font-bold text-[13px] text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3">
            {['Home', 'About', 'Overview', 'Contact'].map((link, idx) => (
                <li key={idx}>
                <a href="#" className="text-[12px] text-gray-500 hover:text-gray-900">{link}</a>
                </li>
            ))}
            </ul>
        </div>

        {/* Column 3: Keep in the loop */}
        <div className="w-full md:w-4/12 space-y-4">
            <h4 className="font-bold text-[13px] text-gray-900 mb-4">Keep in the loop</h4>
            <a href="#" className="text-[#4285F4] text-[13px] font-semibold hover:underline block">@gdgoc.ugm</a>
            <div className="flex gap-4 opacity-50">
            {/* Simple Instagram & YouTube SVG icons placeholders */}
            <div className="w-5 h-5 border-2 border-gray-600 rounded-md"></div>
            <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
            </div>
            <p className="text-[11px] text-gray-500 pt-2">Learn together. Build together.</p>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-end pb-8">
            <p className="text-[9px] text-gray-400">© GDGoC Universitas Gadjah Mada • 2026/2027</p>
            <p className="text-[9px] text-gray-400">Made for the campus. Open to possibilities.</p>
        </div>

        {/* 4-Color Line at the very bottom */}
        <div className="h-1.5 w-48 flex ml-6">
        <div className="bg-[#4285F4] h-full w-1/4"></div>
        <div className="bg-[#EA4335] h-full w-1/4"></div>
        <div className="bg-[#FBBC05] h-full w-1/4"></div>
        <div className="bg-[#34A853] h-full w-1/4"></div>
        </div>
    </footer>
    );
}