import { Link } from "react-router-dom";
import originalPlasterSand from "../assets/originalplastsand.jpeg";
import granite from "../assets/granites.jpeg";
import redSand from "../assets/redsand.jpeg";
import sharpSand from "../assets/sharpsand.jpeg";
import stoneDust from "../assets/stonedust.jpeg";
import plasteringSand from "../assets/plasteringsand.jpeg";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Package,
} from "lucide-react";

const products = [
  {
    name: "Sharp Sand",
    description:
      "Quality sharp sand suitable for a wide range of construction and building applications.",
    image: sharpSand,
    features: ["Construction use", "Quality material", "Bulk supply"],
  },
  {
    name: "Stone Dust",
    description:
      "Stone dust suitable for construction, filling and other building applications.",
    image: stoneDust,
    features: ["Construction use", "Reliable supply", "Bulk orders"],
  },
  {
    name: "Red Sand",
    description:
      "Quality red sand supplied for suitable construction and building requirements.",
    image: redSand,
    features: ["Building projects", "Quality material", "Bulk supply"],
  },
  {
    name: "Original Plaster Sand",
    description:
      "Selected plaster sand supplied for plastering and other suitable construction applications.",
    image: originalPlasterSand,
    features: ["Plastering", "Quality material", "Bulk supply"],
  },
  {
    name: "Plaster Sand",
    description:
      "Reliable plaster sand for construction projects requiring suitable plastering materials.",
    image: plasteringSand,
    features: ["Plastering", "Building projects", "Bulk supply"],
  },
  {
    name: "Granite",
    description:
      "Granite supplied in different sizes and types for various construction requirements.",
    image: granite,
    features: ["Different sizes", "Different types", "Bulk supply"],
  },
];

function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="relative overflow-hidden bg-green-900 py-24 sm:py-28">
        {/* Decorative background */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl hero-fade-left">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Our Products
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Quality materials.
              <span className="block text-yellow-400">
                Reliable supply.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
              Explore building materials supplied by KINGZ GLOBAL BUILDING
              MATERIALS for construction projects, contractors, developers,
              businesses and individual customers.
            </p>

          </div>
        </div>
      </section>

      {/* =========================
          PRODUCT INTRODUCTION
      ========================== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl hero-fade-left">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Building Materials
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                Materials for your next project
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We supply essential building materials with a focus on
                dependable supply, quality products and professional service.
              </p>

            </div>

            {/* Bulk Supply Badge */}
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-5 py-4">

              <Package className="h-6 w-6 text-green-700" />

              <div>
                <p className="text-sm font-bold text-green-900">
                  Bulk Supply Available
                </p>

                <p className="text-xs text-green-700">
                  Contact us for your requirements
                </p>
              </div>

            </div>

          </div>

          {/* =========================
              PRODUCTS GRID
          ========================== */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product, index) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
                style={{
                  animation: `heroFadeUp 0.7s ease-out ${
                    index * 0.1
                  }s both`,
                }}
              >

                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Product Label */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm">
                    KINGZ GLOBAL
                  </div>

                </div>

                {/* Product Content */}
                <div className="p-6">

                  <h3 className="text-xl font-black text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-2">

                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" />

                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>

                  {/* Quote Button */}
                  <Link
                    to="/contact"
                    className="group/button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition-all duration-300 hover:bg-green-700"
                  >
                    Request a Quote

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          QUOTE CTA
      ========================== */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-green-900 px-7 py-12 text-center shadow-xl sm:px-12">

            {/* Decorative Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">

              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-green-950">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Need materials for your project?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50/75">
                Tell us what you need, the quantity required and your project
                location. Our team can help you with your material request.
              </p>

              {/* CTA */}
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              >
                Request a Quote

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default ProductsPage;
