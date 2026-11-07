import { ArrowRight, ArrowUpRight, CircleHelp, Diamond, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import ApiPageState from "../components/ApiPageState";
import { getNavigationData } from "../services/api";

const inquiryTypes = [
  {
    icon: ArrowUpRight,
    title: "Joining & learning",
    description: "Getting started, learning tracks, and participation",
  },
  {
    icon: Plus,
    title: "Collaboration",
    description: "Community activities and shared ideas",
  },
  {
    icon: Diamond,
    title: "Speaking & sharing",
    description: "Workshops, knowledge sharing, and mentorship",
  },
  {
    icon: CircleHelp,
    title: "General inquiry",
    description: "Anything else you’d like to ask",
  },
];

const guidance = [
  {
    title: "For learning questions",
    description:
      "Tell us which topic interests you and where you are in your learning journey.",
  },
  {
    title: "For collaborations",
    description:
      "Share the idea, who it’s for, and how you imagine working with the community.",
  },
  {
    title: "Not sure which category fits?",
    description:
      "Choose General inquiry. A clear question is always a good starting point.",
  },
];

function ContactEyebrow({ children, color = "blue" }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`size-[7px] rounded-full ${color === "yellow" ? "bg-[#F9AB00]" : "bg-[#4285F4]"}`}
      />
      <span className="font-googleSans text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">
        {children}
      </span>
    </div>
  );
}

function TextField({ label, name, placeholder, type = "text", required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-googleSans text-xs font-medium text-[#242424]">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="min-h-11 w-full rounded-md border border-[#DADCE0] bg-white px-4 font-googleSans text-sm text-[#242424] outline-none transition focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/15"
      />
    </div>
  );
}

export default function Contact() {
  const [category, setCategory] = useState(inquiryTypes[0].title);
  const [formNotice, setFormNotice] = useState("");
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
        console.error("Gagal memuat data halaman Contact:", error);
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

  function handleSubmit(event) {
    event.preventDefault();
    setFormNotice("The message form is ready, but message delivery is not connected yet.");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-[#242424]">
      <ApiPageState isLoading={isLoading} isError={isError} isEmpty={data.length === 0} />
      <main className="w-full">
        <section className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-10 sm:px-10 lg:px-16 lg:pb-12 lg:pt-14 xl:px-24">
          <div className="max-w-[900px]">
            <ContactEyebrow>Contact · Let’s connect</ContactEyebrow>
            <h1 className="mt-5 font-googleSans text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
              Good things start with <span className="text-[#1967D2]">hello.</span>
            </h1>
            <p className="mt-4 max-w-[680px] font-googleSans text-sm leading-relaxed text-[#5F6368] sm:text-base">
              A question, a collaboration, or an idea for the community? Tell us what’s on your
              mind.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1248px] gap-8 px-6 pb-14 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:px-16 xl:grid-cols-[minmax(0,480px)_minmax(0,768px)] xl:gap-24 xl:px-0 xl:pb-16">
          <aside className="flex flex-col">
            <h2 className="font-googleSans text-lg font-bold">What brings you here?</h2>
            <p className="mt-2 font-googleSans text-xs leading-relaxed text-[#5F6368]">
              Pick the closest topic in the form. We’ll take it from there.
            </p>

            <div className="mt-5 grid gap-3">
              {inquiryTypes.map(({ icon: Icon, title, description }) => {
                const isSelected = category === title;

                return (
                  <button
                    key={title}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setCategory(title)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-colors ${
                      isSelected
                        ? "border-[#D2E3FC] bg-[#EAF2FF]"
                        : "border-[#DADCE0] bg-white hover:border-[#AECBFA]"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      size={19}
                      strokeWidth={1.8}
                      className={`mt-0.5 shrink-0 ${isSelected ? "text-[#1967D2]" : "text-[#4285F4]"}`}
                    />
                    <span className="min-w-0">
                      <span className="block font-googleSans text-sm font-bold text-[#242424]">
                        {title}
                      </span>
                      <span className="mt-1 block font-googleSans text-xs leading-relaxed text-[#5F6368]">
                        {description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-[#FFF7DF] p-6">
              <ContactEyebrow color="yellow">Stay curious, stay connected</ContactEyebrow>
              <h3 className="mt-3 font-googleSans text-lg font-bold leading-tight">
                Looking for community updates?
              </h3>
              <p className="mt-3 font-googleSans text-sm leading-relaxed text-[#5F6368]">
                Follow <span className="font-bold text-[#242424]">@gdgoc.ugm</span> for learning
                opportunities and what’s happening in the community.
              </p>
              <a
                href="https://www.instagram.com/gdgoc.ugm/"
                className="mt-4 inline-flex items-center gap-2 font-googleSans text-sm font-medium text-[#1967D2] hover:underline"
              >
                Find @gdgoc.ugm
                <ArrowRight aria-hidden="true" size={16} strokeWidth={1.7} />
              </a>
            </div>
          </aside>

          <section
            id="inquiry-form"
            className="rounded-3xl bg-[#F1F3F4] p-6 sm:p-8 lg:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-googleSans text-xl font-bold sm:text-2xl">
                Send us a message
              </h2>
              <ArrowUpRight aria-hidden="true" className="shrink-0 text-[#1967D2]" size={22} />
            </div>
            <p className="mt-2 font-googleSans text-[11px] text-[#5F6368]">
              Fields marked * are required.
            </p>

            <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="First name"
                  name="firstName"
                  placeholder="Your first name"
                  required
                />
                <TextField label="Last name" name="lastName" placeholder="Your last name" />
              </div>

              <TextField
                label="Email address"
                name="email"
                placeholder="Where we can reply to you"
                type="email"
                required
              />
              <TextField
                label="University / organization"
                name="organization"
                placeholder="Where you study or work (optional)"
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="category"
                  className="font-googleSans text-xs font-medium text-[#242424]"
                >
                  Inquiry category *
                </label>
                <div className="grid">
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="col-start-1 row-start-1 min-h-11 w-full appearance-none rounded-md border border-[#DADCE0] bg-white px-4 pr-10 font-googleSans text-sm text-[#242424] outline-none transition focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/15"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.title} value={type.title}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-4 justify-self-end self-center text-[#5F6368]"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3.5 5.25L7 8.75L10.5 5.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <TextField
                label="Subject"
                name="subject"
                placeholder="A short introduction to your question"
                required
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-googleSans text-xs font-medium text-[#242424]"
                >
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us a little about your question or idea..."
                  className="w-full resize-y rounded-md border border-[#DADCE0] bg-white px-4 py-3 font-googleSans text-sm text-[#242424] outline-none transition placeholder:text-[#80868B] focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/15"
                />
              </div>

              <label className="flex items-start gap-3 font-googleSans text-xs leading-relaxed text-[#5F6368]">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 size-4 shrink-0 accent-[#4285F4]"
                />
                <span>
                  I agree that the information I share can be used to respond to this inquiry.
                </span>
              </label>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#4285F4] px-5 py-3 font-googleSans text-sm font-medium text-white transition-colors hover:bg-[#3367D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1967D2]"
                >
                  Send message
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={1.7} />
                </button>
                <p className="max-w-[240px] font-googleSans text-[10px] leading-relaxed text-[#80868B] sm:text-right">
                  Please don’t include passwords or sensitive personal information.
                </p>
              </div>
              {formNotice && (
                <p role="status" className="font-googleSans text-xs text-[#5F6368]">
                  {formNotice}
                </p>
              )}
            </form>
          </section>
        </section>

        <section className="border-t border-[#DADCE0] px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
          <div className="mx-auto grid max-w-[1248px] gap-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <div>
              <ContactEyebrow>A little guidance</ContactEyebrow>
              <h2 className="mt-4 max-w-[360px] font-googleSans text-3xl font-bold leading-[1.12]">
                Help us understand your idea.
              </h2>
              <a
                href="/overview"
                className="mt-5 inline-flex items-center gap-2 font-googleSans text-sm font-medium text-[#1967D2] hover:underline"
              >
                Explore the programs first
                <ArrowRight aria-hidden="true" size={16} strokeWidth={1.7} />
              </a>
            </div>

            <div className="divide-y divide-[#DADCE0]">
              {guidance.map((item) => (
                <article key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-googleSans text-base font-bold">{item.title}</h3>
                  <p className="mt-2 font-googleSans text-sm leading-relaxed text-[#5F6368]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
