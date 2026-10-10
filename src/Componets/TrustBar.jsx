import {
  BadgeCheck,
  Truck,
  PackageCheck,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Quality Materials",
    text: "Reliable products",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    text: "Delivery when you need it",
  },
  {
    icon: PackageCheck,
    title: "Wide Selection",
    text: "Materials for every project",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Professional assistance",
  },
];

function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-100 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-4 px-2 py-7 transition-all duration-300 hover:bg-green-50/50 sm:px-6 lg:py-8"
              style={{
                animation: `heroFadeUp 0.7s ease-out ${0.1 + index * 0.1}s both`,
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-green-700 group-hover:text-white">
                <Icon size={23} strokeWidth={2} />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustBar;