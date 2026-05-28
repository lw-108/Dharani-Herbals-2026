import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Suspense, useRef } from "react";

import {
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

function AloeModel() {
  const { scene } = useGLTF("/aloe1.glb");

  const ref = useRef<Group>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={ref} position={[0, -1.1, 0]}>
      <primitive object={scene} scale={0.042} />
    </group>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04140b]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/MobileView.png')] bg-cover bg-center md:bg-[url('/TabView.png')] lg:bg-[url('/DesktopView.png')]" />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-2 py-4 lg:px-4">
        
        {/* ULTRA WIDE GLASS CONTAINER */}
        <div
          className="
            relative w-full
            max-w-[96vw]
            2xl:max-w-[1900px]

            overflow-hidden
            rounded-[2.8rem]

            border border-white/10

            bg-white/[0.045]
            backdrop-blur-sm

            shadow-[0_10px_80px_rgba(0,0,0,0.55)]

            lg:min-h-[92vh]
          "
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-lime-400/5" />

          {/* glass shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

          {/* GRID */}
          <div
            className="
              relative z-10
              grid
              min-h-[92vh]
              items-center

              lg:grid-cols-[1.2fr_1fr]
            "
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              
              {/* BADGE */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#4ade80]" />

                <span className="text-sm font-medium tracking-wide text-emerald-200">
                  100% Natural • Ayurvedic Certified
                </span>
              </div>

              {/* HEADING */}
              <h1
                className="
                  mt-8
                  max-w-[10ch]

                  text-5xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.07em]

                  text-white

                  sm:text-6xl
                  md:text-7xl
                  lg:text-[6rem]
                  xl:text-[7rem]
                "
              >
                Pure Herbal

                <span className="mt-2 block bg-gradient-to-r from-emerald-200 via-emerald-400 to-lime-300 bg-clip-text text-transparent">
                  Care
                </span>

                <span className="mt-2 block text-white">
                  From
                </span>

                <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
                  Nature’s
                </span>

                <span className="mt-2 block bg-gradient-to-r from-lime-300 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                  Heart
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[650px]

                  text-base
                  leading-relaxed
                  text-white/70

                  sm:text-lg
                  lg:text-xl
                "
              >
                Experience handcrafted herbal products inspired by
                traditional Tamil wellness. From skincare to
                haircare, every formula is naturally made for
                healthier living and sustainable self-care.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                
                <Button
                  size="lg"
                  className="
                    group h-14 rounded-full

                    bg-gradient-to-r
                    from-emerald-400
                    to-green-500

                    px-9

                    text-base
                    font-bold
                    text-[#032112]

                    shadow-[0_10px_40px_rgba(34,197,94,0.35)]

                    transition-all duration-300

                    hover:scale-[1.03]
                    hover:shadow-[0_18px_55px_rgba(34,197,94,0.5)]
                  "
                >
                  Shop Now

                  <ArrowUpRight
                    className="
                      ml-2 h-5 w-5
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-14 rounded-full

                    border-white/15
                    bg-white/[0.04]

                    px-9

                    text-white
                    backdrop-blur-md

                    transition-all duration-300

                    hover:border-white/30
                    hover:bg-white/[0.08]
                  "
                >
                  <CirclePlay className="mr-2 h-5 w-5" />
                  Explore Products
                </Button>
              </div>

              {/* BOTTOM ROW */}
              <div className="mt-14 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                
                {/* FEATURES */}
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {[
                    "Chemical Free",
                    "Eco Friendly",
                    "Lab Tested",
                    "Ayurvedic",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/75"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      </div>

                      {item}
                    </div>
                  ))}
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-3">

                  {[
                    "Facebook",
                    "Instagram",
                    "YouTube",
                    "Twitter",
                  ].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="
                        rounded-full
                        border border-white/10

                        bg-white/[0.04]

                        px-5 py-2.5

                        text-sm
                        font-medium
                        text-white/70

                        backdrop-blur-md

                        transition-all duration-300

                        hover:border-emerald-400/30
                        hover:bg-emerald-400/10
                        hover:text-emerald-300
                        hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]
                      "
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative flex
                h-[420px]
                items-center justify-center

                sm:h-[500px]
                md:h-[620px]

                lg:min-h-[92vh]
              "
            >
              {/* ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/[0.02] to-transparent" />

              {/* blur panel */}
              <div className="absolute inset-[8%] rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-[2px]" />

              {/* CANVAS */}
              <Canvas
                className="h-full w-full"
                camera={{
                  position: [0, 0, 5],
                  fov: 40,
                }}
                gl={{
                  antialias: true,
                }}
              >
                <ambientLight intensity={0.85} />

                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1.1}
                />

                <Suspense fallback={null}>
                  <AloeModel />
                </Suspense>

                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1.4}
                />

                <Environment preset="sunset" />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}