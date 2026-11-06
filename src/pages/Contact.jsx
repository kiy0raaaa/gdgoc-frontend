export default function Contact() {
    return (
    <div className="bg-[#F8F9FA] pb-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4285F4] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
            Contact • Let's Connect
            </div>
            <h1 className="text-5xl md:text-[56px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Good things start with <span className="text-[#4285F4]">hello.</span>
            </h1>
            <p className="text-[15px] text-gray-600 max-w-lg">
            A question, a collaboration, or an idea for the community? Tell us what's on your mind.
            </p>
        </div>
        </section>

        {/* Main Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column - Navigation */}
        <div className="w-full md:w-4/12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What brings you here?</h3>
            <p className="text-[13px] text-gray-500 mb-6">Pick the closest topic in the form. We'll take it from there.</p>
            
            <div className="space-y-3">
            {/* Active Card */}
            <div className="bg-[#E8F0FE] border border-[#4285F4] rounded-2xl p-5 flex items-start gap-4">
                <span className="text-[#4285F4] font-bold text-xl mt-0.5">↗</span>
                <div>
                <h4 className="font-semibold text-[14px] text-gray-900">Joining & learning</h4>
                <p className="text-[12px] text-gray-600 mt-1">Getting started, learning tracks, and participation</p>
                </div>
            </div>
            
            {/* Inactive Cards */}
            {[
                { icon: '+', title: 'Collaboration', desc: 'Community activities and shared ideas' },
                { icon: '◇', title: 'Speaking & sharing', desc: 'Workshops, knowledge sharing, and mentorship' },
                { icon: '?', title: 'General inquiry', desc: "Anything else you'd like to ask" }
            ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 hover:border-gray-300 transition cursor-pointer">
                <span className="text-gray-400 font-bold text-xl mt-0.5">{item.icon}</span>
                <div>
                    <h4 className="font-semibold text-[14px] text-gray-900">{item.title}</h4>
                    <p className="text-[12px] text-gray-500 mt-1">{item.desc}</p>
                </div>
                </div>
            ))}
            </div>

            {/* Yellow Card */}
            <div className="bg-[#FEF7E0] rounded-2xl p-6 mt-8">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                Stay curious, stay connected
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Looking for community updates?</h4>
            <p className="text-[13px] text-gray-700 mb-4">
                Follow <span className="font-bold">@gdgoc.ugm</span> for learning opportunities and what's happening in the community.
            </p>
            <a href="#" className="text-[#4285F4] text-[13px] font-semibold flex items-center gap-1 hover:underline">
                Find @gdgoc.ugm <span>→</span>
            </a>
            </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-8/12 bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <span className="text-[#4285F4] text-2xl font-bold">↗</span>
            </div>
            <p className="text-[12px] text-gray-500 mb-8">Fields marked * are required.</p>
            
            <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">First name *</label>
                <input type="text" placeholder="Your first name" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4]" />
                </div>
                <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">Last name</label>
                <input type="text" placeholder="Your last name" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4]" />
                </div>
            </div>

            <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">Email address *</label>
                <input type="email" placeholder="Where we can reply to you" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4]" />
            </div>

            <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">University / organization</label>
                <input type="text" placeholder="Where you study or work (optional)" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4]" />
            </div>

            <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">Inquiry category *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4] bg-white appearance-none">
                <option>Joining & learning</option>
                </select>
            </div>

            <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">Subject *</label>
                <input type="text" placeholder="A short introduction to your question" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4]" />
            </div>

            <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">Your message *</label>
                <textarea rows="4" placeholder="Tell us a little about your question or idea..." className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[14px] focus:outline-none focus:border-[#4285F4] resize-none"></textarea>
            </div>

            <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#4285F4] focus:ring-[#4285F4]" />
                <p className="text-[12px] text-gray-600">I agree that the information I share can be used to respond to this inquiry.</p>
            </div>

            <div className="flex items-center justify-between pt-4">
                <button type="button" className="bg-[#4285F4] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-[13px] font-medium flex items-center gap-2 transition">
                Send message <span>→</span>
                </button>
                <p className="text-[11px] text-gray-400 max-w-[200px] text-right">
                Please don't include passwords or sensitive personal information.
                </p>
            </div>
            </form>
        </div>
        </section>

        {/* Bottom Guidance */}
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-16 border-t border-gray-200 mt-8">
        <div className="w-full md:w-4/12">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-[#4285F4] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
            A little guidance
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Help us understand your idea.</h3>
            <a href="#" className="text-[#4285F4] text-[13px] font-semibold flex items-center gap-1 hover:underline">
            Explore the programs first <span>→</span>
            </a>
        </div>
        
        <div className="w-full md:w-8/12 flex flex-col divide-y divide-gray-200">
            {[
            { title: 'For learning questions', desc: 'Tell us which topic interests you and where you are in your learning journey.' },
            { title: 'For collaborations', desc: 'Share the idea, who it\'s for, and how you imagine working with the community.' },
            { title: 'Not sure which category fits?', desc: 'Choose General inquiry. A clear question is always a good starting point.' }
            ].map((item, idx) => (
            <div key={idx} className="py-6 first:pt-0 last:pb-0">
                <h4 className="font-bold text-[15px] text-gray-900 mb-1">{item.title}</h4>
                <p className="text-[13px] text-gray-600">{item.desc}</p>
            </div>
            ))}
        </div>
        </section>
    </div>
    );
}