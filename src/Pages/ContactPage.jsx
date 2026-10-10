import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="relative overflow-hidden bg-green-900 py-24 sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl hero-fade-left">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Contact Us
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s talk about
              <span className="block text-yellow-400">
                your next project.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
              Need building materials? Send us your requirements and our team
              will help you with your enquiry and quotation.
            </p>

          </div>
        </div>
      </section>

      {/* =========================
          CONTACT CONTENT
      ========================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="hero-fade-left">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              We&apos;re ready to hear from you.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you need sand, granite, stone dust or other building
              materials, contact KINGZ GLOBAL BUILDING MATERIALS to discuss
              your requirements.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">

              {/* Phone */}
              <a
                href="tel:09018705128"
                className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-800 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    080 3531 3724
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Tap to call
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348035313724"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-800 group-hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    Chat with KINGZ GLOBAL
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Send us a message
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:olonadegbenga2017@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-800 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all font-bold text-gray-900">
                    olonadegbenga2017@gmail.com
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Send an email enquiry
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-500">
                    Business Address
                  </p>

                  <p className="mt-1 leading-7 font-bold text-gray-900">
                    WaterFront Igbogbo Bayeku,
                    <br />
                    Oreta Village, Ikorodu lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Business Hours */}
            <div className="mt-6 rounded-2xl bg-gray-50 p-6">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-green-700" />

                <h3 className="font-bold text-gray-900">
                  Business Enquiries
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Contact us during business hours for product availability,
                pricing and material supply enquiries.
              </p>
            </div>

          </div>

          {/* =========================
              QUOTE FORM
          ========================== */}
          <div className="hero-fade-right">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                  Request A Quote
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Tell us what you need.
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Fill in your details and tell us about the materials you
                  require.
                </p>
              </div>

              <form className="mt-8 space-y-6">

                {/* Name + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-gray-800"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-gray-800"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08035313724"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                  />
                </div>

                {/* Product */}
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Material Required
                  </label>

                  <select
                    id="product"
                    name="product"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                  >
                    <option value="" disabled>
                      Select a material
                    </option>
                    <option value="sharp-sand">Sharp Sand</option>
                    <option value="stone-dust">Stone Dust</option>
                    <option value="red-sand">Red Sand</option>
                    <option value="original-plaster-sand">
                      Original Plaster Sand
                    </option>
                    <option value="plaster-sand">Plaster Sand</option>
                    <option value="granite">Granite</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Quantity / Size
                  </label>

                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    placeholder="e.g. 10 tons, 5 trips, etc."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                  />
                </div>

                {/* Project Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Project Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Where should the materials be supplied?"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Additional Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us anything else about your material requirement..."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-800 px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                >
                  Send Quote Request

                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Your enquiry will be used to respond to your building
                  material request.
                </p>

              </form>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          WHATSAPP CTA
      ========================== */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-green-900 px-7 py-12 text-center shadow-xl sm:px-12">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-green-950">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Prefer WhatsApp?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50/75">
                Chat directly with KINGZ GLOBAL BUILDING MATERIALS about your
                material requirements.
              </p>

              <a
                href="https://wa.me/234803513724"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              >
                Chat on WhatsApp

                <ArrowRight className="h-5 w-5" />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          BACK TO PRODUCTS
      ========================== */}
      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <Link
            to="/products"
            className="group inline-flex items-center gap-2 font-bold text-green-800 transition-colors duration-300 hover:text-green-600"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />

            View Our Products
          </Link>

        </div>
      </section>

    </main>
  );
}

export default ContactPage;