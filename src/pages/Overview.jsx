import { ArrowDown, ArrowRight, BookOpen, Lightbulb, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavigation from "../components/SiteNavigation";

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
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    detail: "Study groups & guided practice",
    Icon: BookOpen,
    color: "text-[#4285F4]",
  },
  {
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    detail: "Workshops & technical sessions",
    Icon: Lightbulb,
    color: "text-[#F9AB00]",
  },
  {
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    detail: "Project circles & sharing sessions",
    Icon: UsersRound,
    color: "text-[#34A853]",
  },
];

const journeySteps = [
  ["01", "Follow your curiosity", "Pick a topic, ask a question, and find a first step."],
  ["02", "Learn alongside others", "Join a session, share ideas, and learn from new perspectives."],
  ["03", "Turn learning into action", "Try a project, get feedback, and pass something on."],
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
    <article className="flex flex-col overflow-hidden rounded-[24px] border border-[#DADCE0] transition-shadow hover:shadow-lg">
      <div className={`${track.color} grid h-[232px] place-items-center overflow-hidden`}>
        <TrackArtwork track={track} />
      </div>
      <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-7">
        <p className="font-googleSans text-[11px] font-medium uppercase text-[#1967D2]">
          {track.eyebrow}
        </p>
        <h3 className="font-googleSans text-[24px] font-bold leading-tight text-[#242424]">
          {track.title}
        </h3>
        <p className="font-googleSans text-sm leading-relaxed text-[#5F6368]">
          {track.description}
        </p>
        <div className="mt-auto w-full border-t border-[#DADCE0] pt-3">
          <p className="font-googleSans text-xs text-[#5F6368]">{track.skills}</p>
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center gap-2 font-googleSans text-sm font-medium text-[#1967D2] hover:text-[#174EA6]"
          >
            Explore this track <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function OverviewFooter() {
  return (
    <footer className="bg-[#F1F3F4] px-5 py-10 sm:px-8 lg:px-24 lg:py-14">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_150px_260px] lg:gap-16">
          <div className="max-w-[480px]">
            <Link to="/landing" className="flex w-fit items-center gap-3">
              <img className="h-10 w-[72px] object-contain" src="/gdg-logo.png" alt="" />
              <img
                className="h-10 w-[min(60vw,280px)] object-contain"
                src="/gdgoc-wordmark.svg"
                alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
              />
            </Link>
            <p className="mt-5 font-googleSans text-sm leading-relaxed text-[#5F6368]">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
            <h2 className="font-googleSans text-sm font-bold text-[#242424]">Explore</h2>
            <Link className="text-sm text-[#5F6368] hover:text-[#1967D2]" to="/landing">Home</Link>
            <Link className="text-sm text-[#5F6368] hover:text-[#1967D2]" to="/about">About</Link>
            <Link className="text-sm text-[#5F6368] hover:text-[#1967D2]" to="/overview">Overview</Link>
            <Link className="text-sm text-[#5F6368] hover:text-[#1967D2]" to="/contact">Contact</Link>
          </nav>
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-googleSans text-sm font-bold text-[#242424]">Keep in the loop</h2>
            <a className="font-googleSans text-base text-[#1967D2]" href="https://www.instagram.com/gdgoc.ugm/">
              @gdgoc.ugm
            </a>
            <p className="text-sm text-[#5F6368]">Learn together. Build together.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-[#DADCE0] pt-5 text-xs text-[#5F6368] sm:flex-row sm:justify-between">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>
        <div aria-hidden="true" className="flex h-1 w-40">
          <span className="flex-1 bg-[#4285F4]" />
          <span className="flex-1 bg-[#EA4335]" />
          <span className="flex-1 bg-[#F9AB00]" />
          <span className="flex-1 bg-[#34A853]" />
        </div>
      </div>
    </footer>
  );
}

export default function Overview() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white font-googleSans text-[#242424]">
      <SiteNavigation onAction={() => scrollTo("learning-tracks")} actionLabel="Explore tracks" />

      <main>
        <section className="mx-auto grid min-h-[420px] max-w-[1440px] items-center gap-8 overflow-hidden px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:px-24 lg:py-14">
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>Overview · Find your direction</Eyebrow>
            <h1 className="max-w-[680px] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
              <span className="text-[#1967D2]">Build</span> your own path.
            </h1>
            <p className="max-w-[660px] text-base leading-relaxed text-[#5F6368] sm:text-lg">
              Explore how research, creativity, and development connect. Start with one interest.
              Grow through practice and the people around you.
            </p>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_68%_44%,rgba(66,133,244,0.28),transparent_48%),radial-gradient(ellipse_at_35%_80%,rgba(249,171,0,0.17),transparent_42%)] sm:min-h-[360px] lg:min-h-[400px]">
            <img
              src="/assets/imgBlueGlow.svg"
              alt=""
              className="absolute inset-0 size-full object-contain"
            />
            <TrackArtwork track={tracks[0]} className="z-10 max-w-[340px]" />
          </div>
        </section>

        <nav aria-label="Overview sections" className="border-y border-[#DADCE0]">
          <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-8 gap-y-3 px-5 py-5 sm:px-8 lg:px-24">
            {jumpLinks.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="inline-flex items-center gap-2 font-googleSans text-sm text-[#5F6368] transition-colors hover:text-[#1967D2]"
              >
                {label} <ArrowDown aria-hidden="true" size={16} className="text-[#1967D2]" />
              </button>
            ))}
          </div>
        </nav>

        <section id="learning-tracks" className="scroll-mt-8 px-5 py-12 sm:px-8 lg:px-24 lg:py-16">
          <div className="mx-auto max-w-[1248px]">
            <Eyebrow>Explore your interests</Eyebrow>
            <h2 className="mt-4 max-w-[780px] text-4xl font-bold leading-tight sm:text-[44px]">
              Three ways in. Plenty of ways forward.
            </h2>
            <p className="mt-3 max-w-[760px] text-sm leading-relaxed text-[#5F6368]">
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

        <section className="px-5 pb-14 pt-2 sm:px-8 lg:px-24 lg:pb-16">
          <div className="mx-auto max-w-[1248px]">
            <h2 className="max-w-[760px] text-3xl font-bold leading-tight sm:text-[36px]">
              From an interest to something you can show.
            </h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#DADCE0] bg-white">
              <div className="hidden grid-cols-[1fr_1.15fr_1.15fr] gap-5 bg-[#F1F3F4] px-6 py-3 text-[11px] font-medium text-[#5F6368] sm:grid sm:px-8">
                <span>Pathway</span>
                <span>What you can practice</span>
                <span>A possible outcome</span>
              </div>
              {pathways.map(([pathway, practice, outcome]) => (
                <div
                  key={pathway}
                  className="grid gap-2 border-t border-[#DADCE0] px-6 py-4 sm:grid-cols-[1fr_1.15fr_1.15fr] sm:items-center sm:gap-5 sm:px-8"
                >
                  <p className="text-sm font-medium">{pathway}</p>
                  <p className="text-xs leading-relaxed text-[#5F6368]">{practice}</p>
                  <p className="text-xs leading-relaxed text-[#5F6368]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-formats" className="scroll-mt-8 bg-[#F1F3F4] px-5 py-14 sm:px-8 lg:px-24 lg:py-16">
          <div className="mx-auto max-w-[1248px]">
            <Eyebrow>More than a classroom</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-[44px]">
              Learn by making, together.
            </h2>
            <p className="mt-3 max-w-[740px] text-base leading-relaxed text-[#5F6368]">
              Learn in a way that turns a new concept into something you can actually use.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {learningFormats.map(({ title, description, detail, Icon, color }) => (
                <article key={title} className="flex flex-col items-start gap-4 rounded-3xl bg-white p-6 sm:p-7">
                  <Icon aria-hidden="true" size={24} className={color} strokeWidth={1.8} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#5F6368]">{description}</p>
                  <p className="mt-auto w-full border-t border-[#DADCE0] pt-4 text-xs font-medium text-[#1967D2]">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-journey" className="scroll-mt-8 px-5 py-14 sm:px-8 lg:px-24 lg:py-16">
          <div className="mx-auto max-w-[1248px]">
            <Eyebrow>Your learning journey</Eyebrow>
            <h2 className="mt-4 max-w-[800px] text-4xl font-bold leading-tight sm:text-[44px]">
              Follow a curiosity. Find your people.
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {journeySteps.map(([number, title, description]) => (
                <article key={number} className="flex flex-col gap-4 border-t border-[#DADCE0] pt-5">
                  <span className="text-3xl font-bold text-[#1967D2]">{number}</span>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#5F6368]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="starting-point" className="scroll-mt-8 px-5 pb-14 sm:px-8 lg:px-24 lg:pb-16">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-6 rounded-[28px] bg-[#EAF2FF] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[740px]">
              <Eyebrow>Find a starting point</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-[36px]">
                Your next step starts with a question.
              </h2>
              <p className="mt-3 leading-relaxed text-[#5F6368]">
                Tell us what you are curious about and we’ll help you find a way to begin.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#4285F4] px-5 py-3.5 font-medium text-white transition-colors hover:bg-[#3367D6]"
            >
              Talk to the community <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </section>
      </main>

      <OverviewFooter />
    </div>
  );
}
