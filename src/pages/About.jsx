export default function About() {
    return (
    <div className="bg-white pb-20">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4285F4] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
            About GDGoC UGM
            </div>
            <h1 className="text-5xl md:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Built by students.<br />
            <span className="text-[#4285F4]">For what's next.</span>
            </h1>
            <p className="text-[15px] text-gray-600 max-w-md leading-relaxed">
            We're a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.
            </p>
            <p className="text-[9px] text-gray-400 font-medium tracking-wider uppercase pt-4">
            UNIVERSITAS GADJAH MADA • 2026/2027
            </p>
        </div>
        
        {/* Placeholder for Graphic */}
        <div className="flex-1 w-full aspect-[4/3] bg-gradient-to-br from-[#E8F0FE] to-[#D2E3FC] rounded-3xl relative overflow-hidden shadow-inner flex items-center justify-center">
            <div className="w-64 h-40 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6">
                <div className="text-[#4285F4] text-5xl font-bold font-mono tracking-tighter">&lt; / &gt;</div>
            </div>
        </div>
        </section>

        {/* 2. Why we come together */}
        <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-5/12 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4285F4] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                Why we come together
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                A bridge from<br />
                <span className="text-[#4285F4]">"I wonder"</span> to<br />
                <span className="text-[#4285F4]">"I made this."</span>
            </h2>
            </div>
            <div className="w-full md:w-7/12 space-y-6 text-[15px] text-gray-700 leading-relaxed pt-6">
            <p className="font-medium text-lg text-gray-900">
                Learning feels different when there's someone to exchange ideas with, a problem you care about, and the space to give it a try.
            </p>
            <p>
                That's the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
            </p>
            <p>
                Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
            </p>
            </div>
        </div>
        </section>

        {/* 3. What guides us (Cards) */}
        <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4285F4] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
            What guides us
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Good technology starts with good<br/>company.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
            { color: 'bg-[#4285F4]', title: 'Stay curious', desc: 'Ask the extra question. Be willing to learn something outside your comfort zone.' },
            { color: 'bg-[#EA4335]', title: 'Make room', desc: 'Welcome different perspectives, respect each other, and help people find their voice.' },
            { color: 'bg-[#FBBC05]', title: 'Learn by building', desc: 'Try a small experiment. Share the rough version. Let feedback guide what comes next.' },
            { color: 'bg-[#34A853]', title: 'Give something back', desc: 'Share a resource, explain what clicked, or help someone take their next step.' }
            ].map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
                <div className={`w-6 h-0.5 ${item.color} mb-6`}></div>
                <div className={`w-6 h-6 rounded-md mb-6 opacity-80 ${item.color}`}></div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
            ))}
        </div>
        </section>

        {/* 4. People not labels */}
        <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-16 border-t border-gray-100 pt-20">
        <div className="w-full md:w-5/12 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4285F4] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
            People, not labels
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">There's more<br/>than one way to<br/>contribute.</h2>
            <p className="text-[14px] text-gray-600 pt-2">
            You can be learning one day and helping someone else the next. A community grows through both.
            </p>
        </div>
        
        <div className="w-full md:w-7/12 flex flex-col">
            {[
            { title: 'Come as a learner', desc: "Explore a topic, join a discussion, and ask the question that's been on your mind." },
            { title: 'Grow as a collaborator', desc: "Work with people whose skills complement yours. Discover what you can build together." },
            { title: 'Give back as a contributor', desc: "Share knowledge, support a learning session, or bring an idea for the community." }
            ].map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 py-6 first:pt-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-[14px] text-gray-500">{item.desc}</p>
            </div>
            ))}
            <div className="pt-6">
            <a href="#" className="text-[#4285F4] text-[13px] font-semibold flex items-center gap-2 hover:underline">
                Let's talk about getting involved <span className="text-lg">→</span>
            </a>
            </div>
        </div>
        </section>

        {/* 5. Yellow & Blue Banners */}
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <div className="bg-[#FEF7E0] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="text-[#FBBC05]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
            </div>
            <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">A space to learn. A responsibility to care.</h3>
            <p className="text-[13.5px] text-gray-700">
                We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
            </p>
            </div>
        </div>

        <div className="bg-[#E8F0FE] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-[#4285F4] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                Your next chapter
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Bring your curiosity.<br/>We'll build from there.</h2>
            <p className="text-[14px] text-gray-600">Find a learning track, meet a collaborator, or start a conversation.</p>
            </div>
            <div className="flex flex-col gap-4">
            <button className="bg-[#4285F4] hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-[13px] font-medium flex items-center justify-center gap-2">
                Explore the overview <span>→</span>
            </button>
            <a href="/contact" className="text-[#4285F4] text-[13px] font-semibold text-center hover:underline">
                Talk to the community <span>→</span>
            </a>
            </div>
        </div>
        </section>
    </div>
    );
}