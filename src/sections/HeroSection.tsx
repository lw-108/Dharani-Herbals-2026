import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Canvas, useFrame, invalidate } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

import { Suspense, useRef, useEffect } from "react";
import { Group } from "three";

function AloeModel() {
  const { scene } = useGLTF("/aloe1.glb");

  const ref = useRef<Group>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
    }
    invalidate(); // trigger render when using demand frameloop
  });

  return (
    <group
      ref={ref}
      position={[0, -1.15, 0]}
    >
      <primitive
        object={scene}
        scale={0.045}
      />
    </group>
  );
}

export default function Hero() {
  // Preload the GLB model once on mount for performance
  useEffect(() => {
    useGLTF.preload('/aloe1.glb');
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#04140b]">

      {/* BACKGROUNDS */}
      <div className="absolute inset-0">

        {/* Desktop Background */}
        <div
          className="
            absolute inset-0 hidden lg:block
            bg-[url('/DesktopView.png')]
            bg-cover bg-center
            opacity-70
          "
        />

        {/* Tablet Background */}
        <div
          className="
            absolute inset-0 hidden md:block lg:hidden
            bg-[url('/TabView.png')]
            bg-cover bg-center
            opacity-70
          "
        />

        {/* Mobile Background */}
        <div
          className="
            absolute inset-0 block md:hidden
            bg-[url('/MobileView.png')]
            bg-cover bg-center
            opacity-70
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />
      </div>

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 pt-4 lg:pt-8">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            gap-10
            py-6
            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="my-auto mt-2 lg:-mt-6">

            {/* BADGE */}
            <a
              href="#"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-1.5
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              100% Natural • Ayurvedic Certified

              <ArrowUpRight className="ml-1 size-4" />
            </a>

            {/* TITLE */}
            <h1
              className="
                mt-6
                max-w-[15ch]
                font-semibold
                leading-[1.02]
                tracking-[-0.05em]
                text-white

                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Pure Herbal{" "}

              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-lime-300 bg-clip-text text-transparent">
                Care
              </span>{" "}

              From{" "}

              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
                Nature’s
              </span>{" "}

              <span className="bg-gradient-to-r from-lime-300 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                Heart
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[60ch]
                text-base
                leading-relaxed
                text-white/70

                sm:text-lg
                lg:text-xl
              "
            >
              Experience handcrafted herbal products inspired by
              traditional Tamil wellness.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">

              <Button
                className="
                  rounded-full

                  bg-gradient-to-r
                  from-emerald-400
                  to-green-500

                  font-semibold
                  text-[#032112]

                  shadow-[0_10px_40px_rgba(34,197,94,0.35)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                  hover:shadow-[0_18px_55px_rgba(34,197,94,0.5)]
                "
                size="lg"
              >
                Shop Now

                <ArrowUpRight className="h-5! w-5!" />
              </Button>

              <Button
                className="
                  rounded-full
                  border-white/15
                  bg-white/[0.05]
                  text-white
                  shadow-none
                  backdrop-blur-md

                  hover:bg-white/[0.08]
                "
                size="lg"
                variant="outline"
              >
                <CirclePlay className="h-5! w-5!" />

                Explore Products
              </Button>
            </div>

            {/* FEATURES */}
            {/* <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
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
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-400/15
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  {item}
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center mt-2 lg:-mt-4">
            <div
              className="
                relative

                h-[340px]
                w-full

                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/[0.04]

                shadow-[0_10px_80px_rgba(0,0,0,0.45)]

                backdrop-blur-sm

                sm:h-[450px]
                md:h-[550px]
                lg:h-[700px]
                lg:max-w-[850px]
              "
            >

              {/* 3D MODEL */}
              <Canvas
                className="h-full w-full"
                frameloop="demand"
                dpr={[1, 2]}
                camera={{
                  position: [0, 0, 5],
                  fov: 40,
                }}
                gl={{ antialias: false }}
              >
                {/* Preload the GLB model to avoid async lag */}
                {/* Preload the GLB model – moved to useEffect */}

                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />

                <Suspense fallback={null}>
                  <AloeModel />
                </Suspense>

                {/* Keep auto‑rotate but trigger manual renders */}
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1.4}
                  makeDefault
                />

                {/* Simplified background – removed heavy Environment preset */}
                {/* <Environment preset="sunset" /> */}
              </Canvas>

              {/* FLOATING CARD */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5

                  rounded-2xl
                  border
                  border-white/10

                  bg-black/30

                  px-5
                  py-4

                  backdrop-blur-md
                "
              >
                <p className="text-sm text-emerald-300">
                  Natural Aloe vera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}