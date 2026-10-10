import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-green-950 text-white">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-1">

            <Link
              to="/"
              className="group inline-flex items-center"
            >
              <span className="text-2xl font-black tracking-[-0.04em] text-green-400 transition-colors duration-300 group-hover:text-yellow-400">
                KINGZ<span className="text-yellow-400">GLOB</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-green-50/70">
              KINGZ GLOBAL BUILDING MATERIALS supplies quality building
              materials for contractors, developers, businesses and
              individual customers.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://wa.me/2348035313724"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-green-300 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-green-950"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/kingzglobalbuildingmat35?stkn=YXJsYTlvZzF3ZzNu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-green-300 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-green-950"
              >
                <Camera className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/share/1J4VcXUBo1/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-green-300 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-green-950"
              >
                <span className="text-base font-bold" aria-hidden="true">f</span>
              </a>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-yellow-400">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Home
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  About Us
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Products
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Contact
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              PRODUCTS
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-yellow-400">
              Materials
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/products"
                  className="text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Sharp Sand
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Stone Dust
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Red Sand
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Plaster Sand
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-green-50/70 transition-colors duration-300 hover:text-white"
                >
                  Granite
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-yellow-400">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:08035313724"
                className="group flex items-start gap-3"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />

                <span className="text-sm leading-6 text-green-50/70 transition-colors duration-300 group-hover:text-white">
                 0803 531 3724
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:kingzglobalbuildingmaterials@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />

                <span className="break-all text-sm leading-6 text-green-50/70 transition-colors duration-300 group-hover:text-white">
                  olonadegbenga2017@gmail.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />

                <span className="text-sm leading-6 text-green-50/70">
                  WaterFront Igbogbo Bayeku,
                  <br />
                 Oreta Village, Ikorodu lagos, Nigeria,
                  <br />
                  Nigeria
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p className="text-green-50/50">
            © {new Date().getFullYear()} KINGZ GLOBAL BUILDING MATERIALS.
            All rights reserved.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 font-bold text-green-300 transition-colors duration-300 hover:text-yellow-400"
          >
            Request a Quote

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
