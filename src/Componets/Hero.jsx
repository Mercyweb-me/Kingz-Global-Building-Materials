import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white">
      {/* Animated background glow */}
      <div className="hero-glow absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-200 blur-3xl" />

      <div className="hero-glow absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-100 blur-3xl [animation-delay:1s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="hero-fade-left inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>

            Trusted Building Materials Supplier
          </div>

          {/* Heading */}
          <h1
            className="hero-fade-up mt-6 text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Building Quality.
            <span className="mt-2 block text-green-700">
              Supplying Excellence.
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="hero-fade-up mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Quality building materials for contractors, developers,
            businesses, and construction projects. Reliable supply,
            professional service, and materials you can trust.
          </p>

          {/* Buttons */}
          <div
            className="hero-fade-up mt-8 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.45s" }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
            >
              Get a Quote

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-7 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-700 hover:text-green-700"
            >
              Explore Products
            </Link>
          </div>

          {/* Contact */}
          <div
            className="hero-fade-up mt-9 flex items-center gap-3"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
              <PhoneCall size={18} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Need help with your project?
              </p>

              <p className="font-semibold text-gray-900">
                Speak with our team
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="hero-fade-right relative"
          style={{ animationDelay: "0.25s" }}
        >
          {/* Outer glow */}
          <div className="absolute inset-8 rounded-[2rem] bg-green-600/20 blur-3xl" />

          {/* Main card */}
          <div className="relative mx-auto max-w-xl">
            <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-green-800 p-3 shadow-2xl">

              <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-green-800 via-green-700 to-green-900 p-8 sm:min-h-[480px]">

                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-green-600/40" />

                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[45px] border-yellow-400/20" />

                {/* Floating yellow element */}
                <div className="hero-float absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 shadow-xl">
                  <span className="text-2xl font-black text-green-950">
                    KG
                  </span>
                </div>

                {/* Center content */}
                <div className="relative z-10 text-center">

                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-100">
                    KINGZ GLOBAL
                  </p>

                  <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
                    Build
                    <span className="block text-yellow-300">
                      Better.
                    </span>
                  </h2>

                  <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-yellow-400" />

                  <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-green-50">
                    Quality materials.
                    <br />
                    Reliable supply.
                    <br />
                    Professional service.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating info card */}
            <div className="hero-float absolute -bottom-6 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-gray-100 sm:-left-8">
              <p className="text-xs font-medium text-gray-500">
                Quality you can trust
              </p>

              <p className="mt-1 font-bold text-green-700">
                KINGZGLOB
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
