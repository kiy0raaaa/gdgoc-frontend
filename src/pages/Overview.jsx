import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    Code2,
    FolderKanban,
    MessagesSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiPageState from "../components/ApiPageState";
import { getNavigationData } from "../services/api";

const tracks = [
{
eyebrow: "Explore the why",
title: "Research & discovery",
description:
    "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
skills: "Problem framing · User research · Product thinking",
color: "bg-[#EAF2FF]",
artwork: [
    ["/assets/imgGroup6.svg", "left-[24%] top-[12%] w-[77%]"],
    ["/assets/imgGroup7.svg", "bottom-[12%] left-[12%] w-[64%]"],
    ["/assets/imgGroup8.svg", "left-[19%] top-[33%] w-[64%]"],
],
},
{
eyebrow: "Make it meaningful",
title: "Design & creativity",
description:
    "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
skills: "UI/UX · Visual storytelling · Prototyping",
color: "bg-[#FFF7DF]",
artwork: [
    ["/assets/imgGroup9.svg", "right-[4%] top-[12%] w-[70%]"],
    ["/assets/imgGroup10.svg", "bottom-[4%] left-[5%] w-[76%]"],
    ["/assets/imgGroup39838.svg", "left-[27%] top-[32%] w-[52%]"],
],
},
{
eyebrow: "Bring ideas to life",
title: "Development",
description:
    "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
skills: "Web & mobile · Cloud · AI foundations",
color: "bg-[#EAF5ED]",
artwork: [
    ["/assets/imgGroup11.svg", "left-[11%] top-[12%] w-[82%]"],
    ["/assets/imgGroup12.svg", "bottom-[8%] left-[8%] w-[82%]"],
    ["/assets/imgGroup13.svg", "left-[35%] top-[32%] w-[36%]"],
],
},
];

const pathways = [
[
"Research & discovery",
"Listening, problem framing, and testing assumptions",
"A research insight and a focused problem brief",
],
[
"Design & creativity",
"Ideation, user flows, and prototype feedback",
"An interactive prototype and a design story",
],
[
"Development",
"Coding, testing, and iterating",
"A working demo with a clear explanation",
],
];

const learningFormats = [
{
title: "Study groups",
description:
    "Build foundations with your peers. Work through a topic, compare approaches, and make space for questions.",
detail: "Peer learning · Fundamentals",
Icon: BookOpen,
color: "text-[#4285F4]",
surface: "bg-[#EAF2FF]",
},
{
title: "Hands-on workshops",
description:
    "Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.",
detail: "Deep dive · Try something new",
Icon: Code2,
color: "text-[#34A853]",
surface: "bg-[#E6F4EA]",
},
{
title: "Project circles",
description:
    "Connect research, design, and development around a shared problem. Learn through making and feedback.",
detail: "Build · Try · Improve",
Icon: FolderKanban,
color: "text-[#F9AB00]",
surface: "bg-[#FEF7E0]",
},
{
title: "Knowledge sharing",
description:
    "Share a new skill, a project, or a lesson from your process, and discover how other students approach their work.",
detail: "Share · Get a different perspective",
Icon: MessagesSquare,
color: "text-[#EA4335]",
surface: "bg-[#FCE8E6]",
},
];

const journeySteps = [
["01", "Discover", "Explore a topic and find the questions you want to answer."],
["02", "Practice", "Try an exercise, work through a challenge, and ask for help."],
["03", "Build", "Apply your learning to a small idea or a shared project."],
["04", "Share", "Show your progress, gather feedback, and help someone else."],
];

const jumpLinks = [
["Learning tracks", "learning-tracks"],
["Learning formats", "learning-formats"],
["Your learning journey", "learning-journey"],
["Find a starting point", "starting-point"],
];

function Eyebrow({ children }) {
return (
<div className="flex items-center gap-2.5">
    <span aria-hidden="true" className="size-[7px] rounded-full bg-[#4285F4]" />
    <span className="font-googleSans text-xs font-medium uppercase tracking-wide text-[#5F6368]">
    {children}
    </span>
</div>
);
}

function TrackArtwork({ track, className = "" }) {
return (
<div
    className={`relative aspect-square w-full max-w-[252px] ${className}`}
    role="img"
    aria-label={`${track.title} illustration`}
>
    {track.artwork.map(([src, position]) => (
    <img key={src} src={src} alt="" className={`absolute ${position}`} />
    ))}
</div>
);
}

function TrackCard({ track }) {
return (
<article className="flex flex-col overflow-hidden rounded-[20px] border border-[#DADCE0] bg-white transition-shadow hover:shadow-lg">
    <div className={`${track.color} grid h-[208px] place-items-center overflow-hidden sm:h-[228px]`}>
    <TrackArtwork track={track} />
    </div>
    <div className="flex flex-1 flex-col items-start gap-3.5 p-5 sm:min-h-[305px] sm:p-6">
    <p className="font-googleSans text-[10px] font-medium uppercase tracking-wide text-[#1967D2]">
        {track.eyebrow}
    </p>
    <h3 className="font-googleSans text-[21px] font-bold leading-tight text-[#242424] sm:text-[24px]">
        {track.title}
    </h3>
    <p className="font-googleSans text-[13px] leading-[1.55] text-[#5F6368]">
        {track.description}
    </p>
    <div className="mt-auto w-full border-t border-[#DADCE0] pt-3">
        <p className="font-googleSans text-xs text-[#5F6368]">{track.skills}</p>
        <Link
        to="/contact"
        className="mt-3 inline-flex items-center gap-1.5 font-googleSans text-[13px] font-medium text-[#1967D2] hover:text-[#174EA6]"
        >
        Explore this track <ArrowRight aria-hidden="true" size={14} />
        </Link>
    </div>
    </div>
</article>
);
}

export default function Overview() {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);

useEffect(() => {
let isMounted = true;

async function loadData() {
    setIsLoading(true);
    setIsError(false);

    try {
    const response = await getNavigationData();
    const navigationData = Array.isArray(response) ? response : response?.data;

    if (!Array.isArray(navigationData)) {
        throw new Error("Format data API tidak valid");
    }

    if (isMounted) {
        setData(navigationData);
    }
    } catch (error) {
    console.error("Gagal memuat data halaman Overview:", error);
    if (isMounted) {
        setIsError(true);
    }
    } finally {
    if (isMounted) {
        setIsLoading(false);
    }
    }
}

loadData();
return () => {
    isMounted = false;
};
}, []);

const scrollTo = (id) => {
document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

return (
<div className="min-h-screen bg-white font-googleSans text-[#242424]">
    <ApiPageState isLoading={isLoading} isError={isError} isEmpty={data.length === 0} />
    <main>
    <section className="mx-auto grid max-w-[1248px] items-center gap-3 px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 md:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:pb-14 lg:pt-12">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
        <Eyebrow>Overview · Programs & learning tracks</Eyebrow>
        <h1 className="max-w-[700px] text-[36px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[68px]">
            Find your spark.
            <br />
            <span className="text-[#1967D2]">Build your own path.</span>
        </h1>
        <p className="max-w-[640px] text-[13px] leading-relaxed text-[#5F6368] sm:text-sm">
            Explore how research, creativity, and development connect. Start with one interest.
            Grow through practice and the people around you.
        </p>
        </div>
        <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden sm:min-h-[220px] md:min-h-[300px]">
        <img
            src="/assets/imgBlueGlow.svg"
            alt=""
            className="absolute inset-0 size-full object-contain opacity-80"
        />
        <TrackArtwork track={tracks[0]} className="z-10 max-w-[210px] sm:max-w-[280px]" />
        </div>
    </section>

    <nav aria-label="Overview sections" className="border-y border-[#E8EAED]">
        <div className="mx-auto flex max-w-[1248px] flex-wrap justify-between gap-x-5 gap-y-2 px-5 py-4 sm:px-8 lg:px-8 lg:py-5">
        {jumpLinks.map(([label, id]) => (
            <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="inline-flex items-center gap-1.5 font-googleSans text-[11px] text-[#5F6368] transition-colors hover:text-[#1967D2] sm:text-[13px]"
            >
            <span aria-hidden="true" className="size-1 rounded-full bg-[#4285F4]" />
            {label} <ArrowDown aria-hidden="true" size={12} className="text-[#1967D2]" />
            </button>
        ))}
        </div>
    </nav>

    <section id="learning-tracks" className="scroll-mt-8 px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-[1248px]">
        <Eyebrow>Explore your interests</Eyebrow>
        <h2 className="mt-3 max-w-[650px] text-[30px] font-bold leading-[1.08] sm:text-[42px]">
            Three ways in. Plenty of ways forward.
        </h2>
        <p className="mt-3 max-w-[760px] text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            These pathways are starting points, not boxes. Follow one deeply or bring different
            skills together.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
            <TrackCard key={track.title} track={track} />
            ))}
        </div>
        </div>
    </section>

    <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-32 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-[1248px]">
        <h2 className="max-w-[760px] text-[24px] font-bold leading-tight sm:text-[34px]">
            From an interest to something you can show.
        </h2>
        <div className="mt-6 overflow-hidden rounded-[16px] border border-[#DADCE0] bg-white">
            <div className="hidden grid-cols-[1fr_1.15fr_1.15fr] gap-5 bg-[#F1F3F4] px-5 py-4 text-[11px] font-medium text-[#5F6368] sm:grid sm:px-6">
            <span>Pathway</span>
            <span>What you can practice</span>
            <span>A possible outcome</span>
            </div>
            {pathways.map(([pathway, practice, outcome]) => (
            <div
                key={pathway}
                className="grid gap-1.5 border-t border-[#DADCE0] px-5 py-4 sm:grid-cols-[1fr_1.15fr_1.15fr] sm:items-center sm:gap-5 sm:px-6 sm:py-6"
            >
                <p className="text-[13px] font-medium">{pathway}</p>
                <p className="text-xs leading-relaxed text-[#5F6368]">{practice}</p>
                <p className="text-xs leading-relaxed text-[#5F6368]">{outcome}</p>
            </div>
            ))}
        </div>
        <p className="mt-3 text-[11px] text-[#5F6368]">
            These are starting points. Topics and opportunities evolve through community projects.
        </p>
        </div>
    </section>

    <section id="learning-formats" className="scroll-mt-8 bg-[#F1F3F4] px-5 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1248px]">
        <Eyebrow>How you learn</Eyebrow>
        <h2 className="mt-3 max-w-[730px] text-[30px] font-bold leading-[1.08] sm:text-[42px]">
            The format changes. The curiosity stays.
        </h2>
        <p className="mt-3 max-w-[740px] text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            Explore the kinds of experiences that help you move from understanding to doing.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
            {learningFormats.map(({ title, description, detail, Icon, color, surface }) => (
            <article key={title} className="flex min-h-[150px] items-start gap-3 rounded-[18px] bg-white p-5 sm:min-h-[184px] sm:gap-4 sm:p-6">
                <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${surface}`}>
                <Icon aria-hidden="true" size={19} className={color} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                <h3 className="text-sm font-bold sm:text-base">{title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#5F6368] sm:text-[13px]">
                    {description}
                </p>
                <p className="mt-3 text-[11px] font-medium text-[#1967D2]">{detail}</p>
                </div>
            </article>
            ))}
        </div>
        </div>
    </section>

    <section id="learning-journey" className="scroll-mt-8 px-5 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1248px]">
        <Eyebrow>Progress, not perfection</Eyebrow>
        <h2 className="mt-3 max-w-[800px] text-[30px] font-bold leading-[1.08] sm:text-[42px]">
            A journey you can keep building on.
        </h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {journeySteps.map(([number, title, description]) => (
            <article key={number} className="flex min-h-[155px] flex-col border-t border-[#DADCE0] pt-4 sm:min-h-[189px]">
                <span className="text-[24px] font-bold leading-none text-[#1967D2]">{number}</span>
                <h3 className="mt-4 text-sm font-bold sm:text-base">{title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#5F6368] sm:text-xs">{description}</p>
            </article>
            ))}
        </div>
        </div>
    </section>

    <section id="starting-point" className="scroll-mt-8 bg-[#FFF7DF] px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1248px] gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
            <Eyebrow>New to the field?</Eyebrow>
            <h2 className="mt-3 text-[23px] font-bold leading-[1.12] sm:text-[30px]">
            New to tech?
            <br />
            That’s a starting point, too.
            </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:pl-10">
            <p className="text-xs leading-relaxed text-[#5F6368] sm:text-[13px]">
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re
            curious about. If you’re unsure, we’ll help you find a first step and start a
            conversation.
            </p>
            <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1967D2] hover:text-[#174EA6]"
            >
            Ask about getting started <ArrowRight aria-hidden="true" size={14} />
            </Link>
        </div>
        </div>
    </section>

    <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-[68px]">
        <div className="mx-auto flex min-h-[200px] max-w-[1248px] flex-col gap-5 rounded-[20px] bg-[#EAF2FF] px-5 py-7 sm:min-h-[256px] sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
        <div className="max-w-[680px]">
            <Eyebrow>Build from here</Eyebrow>
            <h2 className="mt-2 text-[23px] font-bold leading-[1.08] sm:text-[34px]">
            Bring your curiosity.
            <br />
            We’ll build from there.
            </h2>
            <p className="mt-3 text-[11px] leading-relaxed text-[#5F6368] sm:text-xs">
            Find a learning track, meet a collaborator, or start a conversation.
            </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <Link
            to="#learning-tracks"
            className="inline-flex items-center gap-2 rounded-md bg-[#4285F4] px-4 py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-[#3367D6]"
            >
            Explore the overview <ArrowRight aria-hidden="true" size={14} />
            </Link>
            <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-[10px] font-medium text-[#1967D2] hover:text-[#174EA6]"
            >
            Talk to the community <ArrowRight aria-hidden="true" size={12} />
            </Link>
        </div>
        </div>
    </section>
    </main>

</div>
);
}
