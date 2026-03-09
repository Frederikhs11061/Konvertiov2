"use client";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <header className="gradient-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-bold text-xl">Konverti</div>
          <nav className="hidden md:flex items-center gap-8 text-white">
            <button onClick={() => scrollTo("om")} className="hover:opacity-90">
              Om
            </button>
            <button onClick={() => scrollTo("priser")} className="hover:opacity-90">
              Priser
            </button>
            <button onClick={() => scrollTo("kontakt")} className="hover:opacity-90">
              Kontakt
            </button>
            <button onClick={() => scrollTo("faq")} className="hover:opacity-90">
              FAQ
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg border border-white text-white font-medium">
              Bestil nu
            </button>
            <select className="bg-transparent text-white border-none cursor-pointer text-sm">
              <option className="text-gray-900">DK</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ubegrænset + unikke designs til en fast lav pris
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Få professionelle designs i verdensklasse til en fast månedlig
              pris, uden skjulte gebyrer eller ubehagelige overraskelser.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-lg bg-gray-700 text-white font-medium">
                Læs mere
              </button>
              <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium">
                Kom i gang
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="w-80 h-96 rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 shadow-xl">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded bg-primary-500/30 text-white text-sm">
                  Designs
                </span>
                <span className="px-3 py-1 rounded bg-white/20 text-white text-sm">
                  Status
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-10 rounded bg-white/20" />
                <div className="h-10 rounded bg-white/20" />
                <div className="flex gap-2 mt-4">
                  <div className="w-10 h-10 rounded-full bg-primary-400" />
                  <div className="flex-1 h-10 rounded bg-primary-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold shrink-0">
                $
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Fuld gennemsigtighed
                </h3>
                <p className="text-gray-600 text-sm">
                  Fast pris, ingen skjulte omkostninger.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Gratis revisioner
                </h3>
                <p className="text-gray-600 text-sm">
                  Vi retter indtil du er tilfreds.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Dedikeret team
                </h3>
                <p className="text-gray-600 text-sm">
                  Konsistent kvalitet og hurtig kommunikation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Nem bestilling
                </h3>
                <p className="text-gray-600 text-sm">
                  Send din opgave, få designs tilbage.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Hurtig levering
                </h3>
                <p className="text-gray-600 text-sm">
                  Korte deadlines uden ekstra gebyr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="gradient-section py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sådan fungerer det...
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi har gjort det simpelt at få designs i verdensklasse. Her er
            processen:
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="text-6xl font-bold text-primary-300">01</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Du sender ind
            </h3>
            <p className="text-gray-600">
              Udfyld din opgave og upload evt. materialer. Vi tager det derfra.
            </p>
            <div className="mt-8 h-48 rounded-2xl bg-primary-100 flex items-center justify-center">
              <span className="text-6xl text-primary-400">✓</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-6xl font-bold text-primary-300">02</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Vi designer
            </h3>
            <p className="text-gray-600">
              Vores team laver dine designs efter brief og brand.
            </p>
            <div className="mt-8 h-48 rounded-2xl bg-primary-100 flex items-center justify-center">
              <span className="text-5xl text-primary-500">📱</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-6xl font-bold text-primary-300">03</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Godkend & download
            </h3>
            <p className="text-gray-600">
              Få dine filer leveret og brug dem med det samme.
            </p>
            <div className="mt-8 h-48 rounded-2xl bg-primary-100 flex items-center justify-center">
              <span className="text-5xl text-primary-500">💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* More than a design agency */}
      <section className="bg-white py-24" id="om">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Mere end et designbureau...
          </h2>
          <p className="text-gray-600 mb-12">
            Vi er din forlængede arm. Få en strategisk designpartner.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Få en dedikeret design-manager
              </h3>
              <p className="text-gray-600">
                Én kontaktperson der kender dit brand og dine projekter.
              </p>
              <textarea
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                rows={3}
                placeholder="Skriv din besked her..."
              />
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium">
                  Send besked
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                  Annuller
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-primary-500 p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Hvad du får</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary-200">✓</span> Ubegrænsede
                  designopgaver
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-200">✓</span> Dedikeret account
                  manager
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-200">✓</span> Prioritetskø
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-200">✓</span> Brand guidelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-200">✓</span> Hurtigere
                  leveringstider
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl bg-primary-100 h-64 flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-400 flex items-center justify-center text-white text-3xl">
                  ▶
                </div>
              </div>
              <p className="text-gray-600">
                Se hvordan vi arbejder sammen med vores kunder og leverer
                resultater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Statistics */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Portfolie der taler for sig selv...
          </h2>
          <p className="text-gray-600 mb-12">
            Vi har løst over 1.000 designopgaver
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-primary-500 p-10 text-white grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-bold">70%</div>
                <div className="text-primary-100 mt-1">Returnerende kunder</div>
              </div>
              <div>
                <div className="text-5xl font-bold">20%</div>
                <div className="text-primary-100 mt-1 text-sm">
                  Gennemsnitlig forbedring af konvertering på landingpages
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500">✓</span> Få dine designs i
                rekordfart
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500">✓</span> Slip for besvær med
                ansættelser
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500">✓</span> Skaler op og ned
                efter behov
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500">✓</span> Professionel
                kvalitet hver gang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Se vores kollektion af unikke designs
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vi har samlet et udpluk af vores mest populære designopgaver. Få
            inspiration til dit næste projekt.
          </p>
          <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium mb-12">
            Se hele portfoliet
          </button>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl ${
                  i % 2 === 0 ? "bg-primary-100" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service offerings */}
      <section className="gradient-section py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Dit næste skridt til designs i verdensklasse
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Start med at...
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Beskriv din
                virksomhed og mål
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Vælg den plan der
                passer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Send din første
                opgave
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Modtag designs og
                giv feedback
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-primary-500 p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">Hvad du får:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Ubegrænsede
                revisioner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Alle filformater
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Hurtig levering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Konsekvent kvalitet
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-section py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Hvad kunderne siger...
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote:
                '"Fantastisk service og hurtig levering. Vi bruger Konverti til alt vores design."',
              name: "Anna K.",
              role: "Marketing Manager",
            },
            {
              quote:
                '"Endelig en løsning der giver mening. Fast pris og altid professionelt."',
              name: "Lars M.",
              role: "CEO",
            },
            {
              quote:
                '"Vores konverteringsrate steg markant efter nye landingpages fra Konverti."',
              name: "Sofie P.",
              role: "E-commerce",
            },
            {
              quote:
                '"Nem kommunikation og forståelse for vores brand. Anbefales!"',
              name: "Michael T.",
              role: "Founder",
            },
            {
              quote:
                '"Hurtig respons og fleksibel aftale. Præcis hvad vi havde brug for."',
              name: "Julie N.",
              role: "CMO",
            },
            {
              quote:
                '"Kvaliteten er i top. Vi har brugt dem i over et år uden problemer."',
              name: "Peter H.",
              role: "Director",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex text-primary-500 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm mb-4">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-200" />
                <div>
                  <div className="font-medium text-gray-800">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24" id="priser">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Priserne der giver mening
          </h2>
          <p className="text-gray-600">
            Ingen skjulte gebyrer. Ingen binding. Altid en fast lav pris.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Basis</h3>
            <div className="text-3xl font-bold text-gray-800 mb-6">6.295,-</div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Op til 5
                designopgaver/md
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> 1-2 dages levering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Gratis revisioner
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-gray-300 text-gray-700 font-medium">
              Læs mere
            </button>
          </div>
          <div className="rounded-2xl bg-primary-500 p-8 text-white shadow-lg scale-105">
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <div className="text-3xl font-bold mb-6">10.495,-</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Ubegrænsede
                designopgaver
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Dedikeret manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Prioritetskø
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-200">✓</span> Hurtigere levering
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-primary-700 text-white font-medium">
              Vælg plan
            </button>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium
            </h3>
            <div className="text-3xl font-bold text-gray-800 mb-6">14.495,-</div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Alt i Standard +
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Video & animation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500">✓</span> Brand strategi
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-gray-300 text-gray-700 font-medium">
              Læs mere
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-cta py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bestil landingpage fra 2.999,-
          </h2>
          <div className="flex justify-center gap-4 text-white/80 text-sm mb-6">
            ⚡ 🏆 👤
          </div>
          <button className="px-8 py-4 rounded-lg bg-primary-500 text-white font-medium text-lg">
            Se priser & muligheder
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Ofte stillede spørgsmål
          </h2>
          <div className="space-y-4">
            {[
              "Hvordan fungerer processen?",
              "Kan jeg få ubegrænset designs?",
              "Hvor hurtigt får jeg mine designs?",
              "Hvad sker der ved pause eller opsigelse?",
            ].map((q, i) => (
              <div
                key={i}
                className="border-b border-gray-200 pb-4 flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-gray-800">{q}</span>
                <span className="text-primary-500 text-2xl">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gradient-section py-24" id="kontakt">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Klar til at tage dit design til nye højder?
            </h2>
            <p className="text-gray-600 mb-6">
              Start din designrejse i dag og oplev forskellen.
            </p>
            <button className="px-6 py-3 rounded-lg bg-white border-2 border-primary-500 text-primary-600 font-medium">
              Kom i gang nu
            </button>
          </div>
          <div className="w-64 h-80 rounded-2xl bg-primary-100 flex items-end justify-center">
            <div className="w-32 h-40 bg-primary-200 rounded-t-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:opacity-90" aria-label="Facebook">
              f
            </a>
            <a href="#" className="hover:opacity-90" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="hover:opacity-90" aria-label="LinkedIn">
              in
            </a>
          </div>
          <div className="text-white text-sm">
            © 2026 Konverti. Alle rettigheder forbeholdes.
          </div>
          <div className="flex gap-2">
            <span className="w-2 h-2 rotate-45 bg-white/40" />
            <span className="w-2 h-2 rotate-45 bg-white/40" />
            <span className="w-2 h-2 rotate-45 bg-white/40" />
          </div>
        </div>
      </footer>
    </>
  );
}
