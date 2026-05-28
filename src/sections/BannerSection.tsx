import { Phone, Mail, Search, Globe } from "lucide-react";

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-green-500">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4
          py-3

          lg:h-[52px]
        "
      >
        {/* LEFT SIDE */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* PHONE */}
          <a
            href="tel:+919786122001"
            className="flex items-center gap-2 text-sm text-white/95"
          >
            <Phone className="h-4 w-4" />

            <span>+91 97861 22001</span>
          </a>

          {/* DIVIDER */}
          <div className="h-6 w-px bg-white/30" />

          {/* EMAIL */}
          <a
            href="mailto:info@dharaniherbbals.in"
            className="flex items-center gap-2 text-sm text-white/95"
          >
            <Mail className="h-4 w-4" />

            <span>info@dharaniherbbals.in</span>
          </a>
        </div>

        {/* SEARCH BAR */}
        <div
          className="
            flex
            w-full
            max-w-full
            items-center

            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[420px]
          "
        >
          <div
            className="
              flex
              h-11
              w-full
              items-center
              overflow-hidden
              rounded-full
              bg-white
              shadow-lg
            "
          >
            {/* SEARCH ICON */}
            {/* <div className="flex items-center justify-center pl-4">
              <Search className="h-5 w-5 text-zinc-500" />
            </div> */}

            {/* INPUT */}
            <input
              type="text"
              placeholder="Search products..."
              className="
                h-full
                w-full
                border-none
                bg-transparent
                px-3
                text-sm
                text-zinc-700
                outline-none
                placeholder:text-zinc-400
              "
            />

            {/* SEARCH BUTTON */}
            <button
              className="
                mr-1
                flex
                h-9
                w-10
                items-center
                justify-center
                rounded-full
                bg-green-600
                transition-all
                duration-300

                hover:scale-105
              "
            >
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SOCIAL ICONS */}
          <div className="hidden items-center gap-4 lg:flex">

            {/* FACEBOOK */}
            <a href="#">
              <img
                src="/icons/fb.png"
                alt="Facebook"
                className="h-4 w-4 object-contain transition hover:scale-110"
              />
            </a>

            {/* INSTAGRAM */}
            <a href="#">
              <img
                src="/icons/ins.png"
                alt="Instagram"
                className="h-4 w-4 object-contain transition hover:scale-110"
              />
            </a>

            {/* YOUTUBE */}
            <a href="#">
              <img
                src="/icons/yt.png"
                alt="YouTube"
                className="h-4 w-4 object-contain transition hover:scale-110"
              />
            </a>

            {/* X / TWITTER */}
            <a href="#">
              <img
                src="/icons/X.png"
                alt="X"
                className="h-4 w-4 object-contain transition hover:scale-110"
              />
            </a>

            {/* DIVIDER */}
            <div className="h-6 w-px bg-white/30" />
          </div>

          {/* LANGUAGE TOGGLE */}
          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-2
              text-sm
              text-white
              backdrop-blur-md
              transition-all
              duration-300

              hover:bg-white/15
            "
          >
            <Globe className="h-4 w-4" />

            <span className="hidden sm:block">
              தமிழ்
            </span>

            <span className="hidden sm:block text-white/50">
              /
            </span>

            <span className="hidden sm:block">
              EN
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}