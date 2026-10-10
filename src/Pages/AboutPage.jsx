import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from "lucide-react";

const highlights = [
  "Quality building materials",
  "Reliable material supply",
  "Competitive pricing",
  "Professional customer service",
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-green-900 py-24 sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl hero-fade-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              About KINGZGLOB
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building quality.
              <span className="block text-yellow-400">
                Supplying with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
              KINGZ GLOBAL BUILDING MATERIALS is focused on the supply, sale
              and distribution of quality building materials for construction
              projects of different sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div className="hero-fade-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Who We Are
            </p>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Your trusted source for essential building materials.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              KINGZ GLOBAL BUILDING MATERIALS is a registered business
              specializing in the supply, sale and distribution of building
              materials.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We serve contractors, developers, businesses and individuals
              who need dependable access to construction materials. Our goal
              is simple: make material sourcing easier by combining quality
              products, reliable supply and professional customer service.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />
                  <span className="text-sm font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative hero-fade-right">
            <div className="relative overflow-hidden rounded-3xl bg-green-900 p-8 shadow-2xl sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-400/20 blur-2xl" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-green-950">
                  <Building2 className="h-8 w-8" />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-yellow-400">
                  KINGZ GLOBAL
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  Materials that help you build better.
                </h3>

                <p className="mt-5 leading-7 text-green-50/75">
                  From sand and granite to other essential construction
                  materials, we focus on dependable supply for your project.
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <ShieldCheck className="h-6 w-6 text-yellow-400" />

                  <span className="text-sm font-semibold text-white">
                    Registered Building Materials Supplier
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center hero-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Reliable materials for your construction needs.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We supply a range of essential construction materials to help
              customers source what they need for their projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                <BadgeCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Quality Materials
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We focus on supplying dependable building materials suitable
                for a wide range of construction requirements.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                <Truck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Reliable Supply
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We help customers source construction materials efficiently
                and work toward dependable supply for their projects.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Professional Service
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We aim to provide straightforward communication and
                professional assistance from enquiry through supply.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl hero-fade-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Company Credentials
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              A registered business you can deal with confidently.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              KINGZ GLOBAL BUILDING MATERIALS is registered with the
              Corporate Affairs Commission (CAC).
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">

            {/* CAC Details */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9 hero-fade-left">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-900 text-yellow-400">
                  <BadgeCheck className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    CAC Registration
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Corporate Affairs Commission
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Business Name
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    KINGZ GLOBAL BUILDING MATERIALS
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Registration Number
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    8927069
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Nature of Business
                  </p>
                  <p className="mt-1 leading-7 text-gray-700">
                    Supply, Sale and Distribution of Building Materials
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Registration Date
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    16 October 2025
                  </p>
                </div>

              </div>
            </div>

            {/* Certificate Image */}
            <div className="hero-fade-right">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
                <img
                  src="/kingz-cac-certificate.jpeg"
                  alt="KINGZ GLOBAL BUILDING MATERIALS CAC Certificate"
                  className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                Corporate Affairs Commission registration certificate
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-8">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
              Ready to build?
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Let&apos;s supply your next project.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-green-50/75">
              Contact KINGZ GLOBAL BUILDING MATERIALS to discuss your
              material requirements and request a quotation.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>
      </section>

    </main>
  );
}

export default AboutPage;