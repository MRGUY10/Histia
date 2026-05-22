import Image from "next/image";

type Locale = "fr" | "en";

const copy: Record<Locale, any> = {
  fr: {
    meta: "PAGE EN CONSTRUCTION",
    title: "Cette page arrive bientôt",
    paragraphs: [
      "Nous sommes encore en version bêta, Stolos n'est",
      "pas encore complet, notre équipe travaille d'arrache",
      "pied pour vous apporter cette page au plus vite !",
    ],
    cta: "Nos nouveautés ici",
    mascotte: "/assets/Mascotte_fr.png",
  },
  en: {
    meta: "COMING SOON",
    title: "This page is coming soon",
    paragraphs: [
      "We're still in beta, ⟳ Stolos isn't",
      "fully complete yet — our team is working",
      "hard to bring this page to you as soon as possible!",
    ],
    cta: "See our updates",
    mascotte: "/assets/Mascotte_anglaise.png",
  },
};

export default function ComingSoon({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const renderStolos = (text: string) => {
    const parts = text.split(/(Stolos)/g);
    return parts.map((part, i) =>
      part === "Stolos" ? (
        <span key={i} className="inline-flex items-center gap-2">
          <Image src="/assets/logo.png" alt="logo" width={18} height={18} className="object-contain" />
          <span className="stolos-highlight">Stolos</span>
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };
  const navItems = [
    { label: "Tableau" },
    { label: "Liste" },
    { label: "Notes" },
    { label: "Objectifs" },
    { label: "Guide" },
  ];

  const utilityItems = [
    { label: "Notifications" },
    { label: "Messages" },
    { label: "Aide" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#272149] text-[#c8c3e8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(82,71,125,0.5),_rgba(39,33,73,0.8),_rgba(19,13,36,0.95))]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-10 translate-x-24 rounded-full bg-[#3a2f57] opacity-40 blur-3xl" />

      <div className="relative flex min-h-screen">
        <aside className="hidden w-24 items-center justify-center bg-transparent py-6 sm:flex">
          <div className="flex h-full w-16 flex-col items-center sidebar-panel bg-[#0000004D] px-2 py-6 shadow-[0_18px_40px_rgba(10,6,24,0.55)]">
            <div className="flex h-11 w-11 items-center justify-center bg-transparent shadow-none">
              <Image src="/assets/logo.png" alt="Logo" width={36} height={36} className="object-contain" />
            </div>
            <span className="mt-2 badge-beta tracking-[0.2em]">Bêta</span>
            <div className="mt-6 flex flex-1 flex-col items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex h-9 w-9 items-center justify-center text-white/60 transition hover:bg-white/5 hover:text-white"
                  aria-label={item.label}
                >
                  <Image
                    src={`/assets/${item.label}.png`}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-5">
              {utilityItems.map((item) => (
                <button
                  key={item.label}
                  className="flex h-11 w-11 items-center justify-center text-white/60 transition hover:bg-white/5 hover:text-white"
                  aria-label={item.label}
                >
                  <Image
                    src={`/assets/${item.label}.png`}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </button>
              ))}
              <div className="relative mt-2 flex h-11 w-11 items-center justify-center bg-white/10 text-white shadow-lg shadow-black/30">
                <Image
                  src="/assets/profile.png"
                  alt="Profile"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-6 py-10 sm:px-10 lg:px-16 flex items-center">
          <div className="mx-auto grid grid-cols-1 w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-6 mx-auto w-full text-center lg:text-left">
                <div className="meta-pill inline-flex items-center gap-2 rounded-full uppercase tracking-[0.2em] text-white/90 animate-fade-up">
              {t.meta}
            </div>
            <h1 className="figma-heading text-2xl sm:text-3xl md:text-4xl leading-tight max-w-[420px] mx-auto lg:mx-0 animate-fade-up-delay mb-10 md:mb-12">
              {t.title}
            </h1>

            <p className="text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-[#877EBC] animate-fade-up-delay-2 max-w-[420px] mx-auto lg:mx-0">
              <span className="whitespace-nowrap">{renderStolos(t.paragraphs[0])}</span>
              <br />
              <span className="whitespace-nowrap">{renderStolos(t.paragraphs[1])}</span>
              <br />
              <span className="whitespace-nowrap">{renderStolos(t.paragraphs[2])}</span>
            </p>

            <span
              role="link"
              aria-disabled="true"
              className="inline-flex items-center gap-3 transition animate-fade-up-delay-2 cta-placeholder"
            >
              <span className="text-xl cta-arrow">→</span> {t.cta}
            </span>
          </section>

            <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end lg:-mr-30">
              <div className="relative aspect-[4/5.3] w-[260px] sm:w-[380px] md:w-[460px] lg:w-[560px]">
                <Image
                  src={t.mascotte}
                  alt={`Mascotte ${locale}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 460px, (min-width: 640px) 380px, 260px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
