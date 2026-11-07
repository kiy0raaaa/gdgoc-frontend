import {
  ArrowRight,
  BookOpen,
  Code2,
  Heart,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import ApiPageState from "../components/ApiPageState";
import { getNavigationData } from "../services/api";

const values = [
  {
    title: "Stay curious",
    description:
      "Ask the extra question. Be willing to learn something outside your comfort zone.",
    Icon: BookOpen,
    color: "bg-[#4284F4]",
  },
  {
    title: "Make room",
    description:
      "Welcome different perspectives, respect each other, and help people find their voice.",
    Icon: UsersRound,
    color: "bg-[#EA4335]",
  },
  {
    title: "Learn by building",
    description:
      "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    Icon: Code2,
    color: "bg-[#F9AB00]",
  },
  {
    title: "Give something back",
    description:
      "Share a resource, explain what clicked, or help someone take their next step.",
    Icon: Heart,
    color: "bg-[#34A853]",
  },
];

const roles = [
  {
    title: "Come as a learner",
    description:
      "Explore a topic, join a discussion, and ask the question that’s been on your mind.",
  },
  {
    title: "Grow as a collaborator",
    description:
      "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: "Give back as a contributor",
    description:
      "Share knowledge, support a learning session, or bring an idea for the community.",
  },
];

function ArrowLink({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-googleSans font-medium text-[#1967D2] transition-colors hover:text-[#174EA6] ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} />
    </a>
  );
}

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

export default function About() {
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
        console.error("Gagal memuat data halaman About:", error);
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

  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-[#242424]">
      <ApiPageState isLoading={isLoading} isError={isError} isEmpty={data.length === 0} />
      <main className="w-full">
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-6 py-12 sm:px-10 md:py-16 lg:flex-row lg:gap-12 lg:px-16 xl:gap-16 xl:px-24 xl:py-20">
          <div className="flex w-full flex-col items-start gap-5 lg:max-w-[720px] lg:gap-[26px]">
            <Eyebrow>About GDGoC UGM</Eyebrow>
            <h1 className="font-googleSans text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
              <span className="block">Built by students.</span>
              <span className="block text-[#1967D2]">For what’s next.</span>
            </h1>
            <p className="max-w-[680px] font-googleSans text-lg leading-[1.55] text-[#5F6368] sm:text-xl lg:text-[22px]">
              We’re a community of learners and makers at Universitas Gadjah Mada, connected by
              curiosity and the belief that technology can do good.
            </p>
            <p className="font-googleSans text-xs tracking-wide text-[#5F6368]">
              UNIVERSITAS GADJAH MADA • 2026/2027
            </p>
          </div>

          <div
            role="img"
            aria-label="The colorful Google Developer Groups mark on a glass tile background"
            className="flex aspect-[1.16/1] w-full max-w-[464px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] bg-[#EAF2FF] p-8 sm:p-12 lg:aspect-[464/400] lg:w-[40%] lg:p-12"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px), radial-gradient(ellipse at 82% 12%, rgba(138,180,248,.8), transparent 58%), radial-gradient(ellipse at 15% 92%, rgba(253,226,147,.95), transparent 55%)",
              backgroundSize: "96px 96px, 96px 96px, 100% 100%, 100% 100%",
            }}
          >
            <div className="flex w-[82%] rotate-[-6deg] items-center justify-center rounded-[28px] bg-white px-8 py-10 shadow-[0_12px_35px_rgba(60,64,67,0.12)] sm:px-12 sm:py-14">
              <img
                src="/gdg-logo.png"
                alt=""
                className="h-auto w-full max-w-[250px] object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="bg-[#F1F3F4] px-6 py-12 sm:px-10 md:py-16 lg:px-16 xl:px-24 xl:py-20"
        >
          <div className="mx-auto grid max-w-[1248px] gap-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <div className="flex flex-col items-start gap-5">
              <Eyebrow>Why we come together</Eyebrow>
              <h2 className="font-googleSans text-4xl font-bold leading-[1.12] sm:text-5xl">
                A bridge from{" "}
                <span className="bg-linear-to-b from-[#1967D2] to-[#6FACFF] bg-clip-text text-transparent">
                  “I wonder” to “I made this.”
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-googleSans text-xl leading-[1.55] text-[#242424] sm:text-2xl">
                Learning feels different when there’s someone to exchange ideas with, a problem you
                care about, and the space to give it a try.
              </p>
              <p className="font-googleSans text-base leading-[1.55] text-[#5F6368] sm:text-lg">
                That’s the spirit of Google Developer Groups on Campus at UGM. We create room for
                students to explore technology, develop practical skills, and learn from one another.
              </p>
              <p className="font-googleSans text-base leading-[1.55] text-[#5F6368] sm:text-lg">
                Our campus is the starting point. The questions we ask and the things we build can
                reach beyond it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-14 sm:px-10 md:py-16 lg:gap-10 lg:px-16 xl:px-24 xl:py-[88px]">
          <div className="flex max-w-[800px] flex-col items-start gap-4">
            <Eyebrow>What guides us</Eyebrow>
            <h2 className="font-googleSans text-4xl font-bold leading-[1.12] sm:text-5xl">
              Good technology starts with good company.
            </h2>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {values.map(({ title, description, Icon, color }) => (
              <article
                key={title}
                className="flex flex-col items-start gap-4 rounded-3xl border border-[#DADCE0] p-6 sm:gap-[18px] sm:p-[26px]"
              >
                <span className={`h-1 w-9 rounded-sm ${color}`} />
                <Icon aria-hidden="true" className="text-[#1967D2]" size={22} strokeWidth={1.6} />
                <h3 className="font-googleSans text-xl font-bold leading-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="font-googleSans text-sm leading-[1.55] text-[#5F6368] sm:text-base">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="roles"
          className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 pb-14 sm:px-10 md:pb-20 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16 lg:px-16 xl:gap-24 xl:px-24 xl:pb-[88px]"
        >
          <div className="flex flex-col items-start gap-5 lg:gap-[22px]">
            <Eyebrow>People, not labels</Eyebrow>
            <h2 className="font-googleSans text-4xl font-bold leading-[1.12] sm:text-5xl">
              There’s more than one way to contribute.
            </h2>
            <p className="font-googleSans text-base leading-[1.55] text-[#5F6368] sm:text-lg">
              You can be learning one day and helping someone else the next. A community grows
              through both.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:gap-7">
            {roles.map((role) => (
              <article key={role.title} className="flex flex-col gap-3.5">
                <h3 className="font-googleSans text-2xl font-bold leading-tight sm:text-[28px]">
                  {role.title}
                </h3>
                <p className="font-googleSans text-base leading-[1.55] text-[#5F6368] sm:text-[17px]">
                  {role.description}
                </p>
                <div className="h-px w-full bg-[#DADCE0]" />
              </article>
            ))}
            <ArrowLink href="/contact">Let’s talk about getting involved</ArrowLink>
          </div>
        </section>

        <section className="bg-[#FFF7DF] px-6 py-8 sm:px-10 lg:px-16 lg:py-10 xl:px-24">
          <div className="mx-auto flex max-w-[1248px] items-center gap-6">
            <Sparkles aria-hidden="true" className="shrink-0 text-[#F9AB00]" size={48} />
            <div>
              <h2 className="font-googleSans text-lg font-bold sm:text-xl">
                A space to learn. A responsibility to care.
              </h2>
              <p className="mt-2 font-googleSans text-sm leading-relaxed text-[#5F6368]">
                We want every conversation and learning experience to be respectful, inclusive, and
                constructive. Be kind, give credit, and make room for people who are just getting
                started.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 xl:px-24">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-8 rounded-[28px] bg-[#EAF2FF] px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-10">
            <div className="max-w-[650px]">
              <Eyebrow>Your next chapter</Eyebrow>
              <h2 className="mt-3 font-googleSans text-3xl font-bold leading-tight sm:text-4xl">
                Bring your curiosity.
                <br className="hidden sm:block" /> We’ll build from there.
              </h2>
              <p className="mt-3 font-googleSans text-sm leading-relaxed text-[#5F6368]">
                Find a learning track, meet a collaborator, or start a conversation.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3">
              <ArrowLink href="#overview" className="rounded-lg bg-[#4285F4] px-4 py-3 text-white hover:bg-[#3367D6] hover:text-white">
                Explore the overview
              </ArrowLink>
              <ArrowLink href="/contact" className="text-sm">
                Talk to the community
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
