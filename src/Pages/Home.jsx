import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import originalPlasterSand from "../assets/originalplastsand.jpeg";
import granite from "../assets/granites.jpeg";
import redSand from "../assets/redsand.jpeg";
import sharpSand from "../assets/sharpsand.jpeg";
import stoneDust from "../assets/stonedust.jpeg";
import plasteringSand from "../assets/plasteringsand.jpeg";
const featuredProducts = [
  {
    name: "Sharp Sand",
    image: sharpSand,
    description: "Quality sharp sand for construction requirements.",
  },
  {
    name: "Stone Dust",
    image: stoneDust,
    description: "Reliable stone dust for suitable building applications.",
  },
  {
    name: "Red Sand",
    image: redSand,
    description: "Quality red sand for construction projects.",
  },
  {
    name: "Granite",
    image: granite,
    description: "Granite available in different sizes and types.",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Quality Materials",
    description:
      "We focus on supplying dependable materials for your construction requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "We help customers source essential materials efficiently for their projects.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service",
    description:
      "Clear communication and professional assistance from enquiry through supply.",
  },
];

function HomePage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden bg-green-900">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* Hero Content */}
          <div className="hero-fade-left">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
              <CheckCircle2 className="h-4 w-4" />
              Trusted Building Materials Supplier
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building Quality.
              <span className="block text-yellow-400">
                Supplying Excellence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-green-50/80 sm:text-lg">
              KINGZ GLOBAL BUILDING MATERIALS supplies quality sand, granite,
              stone dust and other essential construction materials for
              contractors, developers, businesses and individuals.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              >
                Explore Products

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/10"
              >
                Request a Quote
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-green-50/60">
              <span>Quality Materials</span>
              <span className="h-1 w-1 rounded-full bg-yellow-400" />
              <span>Reliable Supply</span>
              <span className="h-1 w-1 rounded-full bg-yellow-400" />
              <span>Professional Service</span>
            </div>

          </div>

          {/* Hero Visual */}
          <div className="relative hero-fade-right">

            <div className="relative mx-auto max-w-lg">

              <div className="absolute -inset-5 rounded-[2rem] bg-yellow-400/10 blur-2xl hero-glow" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-green-800 shadow-2xl">

                {/* Temporary visual until real company image is added */}
                <div className="flex min-h-[480px] flex-col justify-between p-8 sm:p-10">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                        KINGZ GLOBAL
                      </p>

                      <p className="mt-2 text-sm text-green-50/60">
                        Building Materials
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-green-950">
                      <Package className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="py-12">

                    <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                      Build Better.
                      <span className="block text-yellow-400">
                        Build With Confidence.
                      </span>
                    </h2>

                    <p className="mt-5 max-w-md leading-7 text-green-50/70">
                      Quality materials supplied with reliability and
                      professional service.
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-black text-yellow-400">
                        01
                      </p>

                      <p className="mt-1 text-xs text-green-50/60">
                        Quality
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-black text-yellow-400">
                        02
                      </p>

                      <p className="mt-1 text-xs text-green-50/60">
                        Reliability
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          TRUST BAR
      ========================== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-gray-100 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">

          <div className="flex items-center gap-4 px-4 py-7 sm:px-6">
            <BadgeCheck className="h-7 w-7 shrink-0 text-green-700" />

            <div>
              <p className="font-bold text-gray-900">
                Quality Materials
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Dependable products
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-7 sm:px-6">
            <Truck className="h-7 w-7 shrink-0 text-green-700" />

            <div>
              <p className="font-bold text-gray-900">
                Reliable Supply
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Material when you need it
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-7 sm:px-6">
            <Package className="h-7 w-7 shrink-0 text-green-700" />

            <div>
              <p className="font-bold text-gray-900">
                Wide Selection
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Materials for projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-7 sm:px-6">
            <ShieldCheck className="h-7 w-7 shrink-0 text-green-700" />

            <div>
              <p className="font-bold text-gray-900">
                Professional Service
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Customer-focused support
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          ABOUT PREVIEW
      ========================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          {/* Visual */}
          <div className="relative hero-fade-left">

            <div className="relative overflow-hidden rounded-3xl bg-green-900 p-8 shadow-xl sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                  KINGZ GLOBAL
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight text-white">
                  Your trusted source for building materials.
                </h2>

                <div className="mt-8 space-y-4">

                  {[
                    "Quality building materials",
                    "Reliable material supply",
                    "Competitive pricing",
                    "Professional customer service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" />

                      <span className="text-sm text-green-50/80">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>

          {/* Content */}
          <div className="hero-fade-right">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Materials you need.
              <span className="block text-green-700">
                Service you can trust.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              KINGZ GLOBAL BUILDING MATERIALS is a registered business
              focused on the supply, sale and distribution of building
              materials.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We serve contractors, developers, businesses and individuals
              looking for dependable access to essential construction
              materials.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-green-800 transition-colors duration-300 hover:text-green-600"
            >
              Learn More About Us

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================
          FEATURED PRODUCTS
      ========================== */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div className="max-w-2xl hero-fade-left">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Our Materials
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Featured building materials
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Explore some of the materials supplied by KINGZ GLOBAL
                BUILDING MATERIALS.
              </p>

            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 font-bold text-green-800 transition-colors duration-300 hover:text-green-600"
            >
              View All Products

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product, index) => (
              <Link
                key={product.name}
                to="/products"
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                style={{
                  animation: `heroFadeUp 0.7s ease-out ${
                    index * 0.1
                  }s both`,
                }}
              >

                <div className="aspect-[4/3] overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-lg font-black text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                    View Products

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center hero-fade-up">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Why KINGZ GLOBAL
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Built around what matters to you.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We focus on making the process of sourcing building materials
              straightforward and dependable.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                  style={{
                    animation: `heroFadeUp 0.7s ease-out ${
                      index * 0.12
                    }s both`,
                  }}
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-800 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-green-900 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-green-800 px-7 py-14 text-center shadow-2xl sm:px-12">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                Start Your Project
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Need building materials?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50/75">
                Tell KINGZ GLOBAL what you need and let&apos;s discuss the
                right materials and supply requirements for your project.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
                >
                  Request a Quote

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Explore Products
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomePage;
