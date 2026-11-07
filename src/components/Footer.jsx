import { Link } from "react-router-dom";

const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Overview", href: "/#overview" },
    { label: "Contact", href: "/contact" },
    ];

    export default function Footer() {
    return (
    <footer className="w-full bg-[#F1F3F4] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-[1248px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_150px_260px] lg:gap-16">
            <div className="max-w-[480px]">
            <Link to="/" className="flex w-fit items-center gap-3">
                <img className="h-10 w-[72px] object-contain" src="/gdg-logo.png" alt="" />
                <img
                className="h-10 w-[250px] max-w-full object-contain sm:w-[293px]"
                src="/gdgoc-wordmark.svg"
                alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
                />
            </Link>
            <p className="mt-5 font-googleSans text-sm leading-relaxed text-[#5F6368]">
                A student community for curious minds, shared learning, and technology with purpose.
            </p>
            </div>

            <div className="flex flex-col items-start gap-3.5">
            <h2 className="font-googleSans text-sm font-bold text-[#242424]">Explore</h2>
            {navigation.map((item) => (
                <Link
                key={item.label}
                to={item.href}
                className="font-googleSans text-sm text-[#5F6368] transition-colors hover:text-[#1967D2]"
                >
                {item.label}
                </Link>
            ))}
            </div>

            <div className="flex flex-col items-start gap-3.5">
            <h2 className="font-googleSans text-sm font-bold text-[#242424]">Keep in the loop</h2>
            <a
                href="https://www.instagram.com/gdgoc.ugm/"
                target="_blank"
                rel="noreferrer"
                className="font-googleSans text-base text-[#1967D2] hover:underline"
            >
                @gdgoc.ugm
            </a>
            {/* ... bagian icon sosial media biarkan sama seperti di AboutFooter kamu sebelumnya ... */}
            <p className="font-googleSans text-xs text-[#5F6368]">
                Learn together. Build together.
            </p>
            </div>
        </div>

        <div className="my-8 h-px w-full bg-[#DADCE0]" />
        <div className="flex flex-col gap-2 font-googleSans text-[11px] text-[#5F6368] sm:flex-row sm:items-center sm:justify-between">
            <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
            <p>Made for the campus. Open to possibilities.</p>
        </div>
        <div className="mt-6 flex h-1 w-40">
            <span className="w-1/4 bg-[#4285F4]" />
            <span className="w-1/4 bg-[#EA4335]" />
            <span className="w-1/4 bg-[#F9AB00]" />
            <span className="w-1/4 bg-[#34A853]" />
        </div>
        </div>
    </footer>
    );
}