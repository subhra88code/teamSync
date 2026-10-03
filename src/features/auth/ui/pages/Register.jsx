
import React from "react";

import {
  User,
  Mail,
  LockKeyhole,
  Sparkles,
  Network,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    onRegistrationSubmit,
    getPasswordStrength,
    navigate
  } = useAuth();
  const password = watch("password", "");
  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#141218] font-sans text-[#e6e0e9]">
      {/* ================= HEADER ================= */}

      <header className="fixed left-0 top-0 z-50 w-full px-4 py-5 sm:px-6">
        <div className="text-xl font-bold tracking-tight">
          TeamSync
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="flex min-h-screen w-full">

        {/* ================= LEFT SIDE ================= */}

        <section
          className="
            relative hidden
            min-h-screen
            w-[40%]
            flex-col
            justify-end
            overflow-hidden
            border-r border-[#494551]/20
            bg-[#0f172a]
            px-8
            pb-12
            md:flex
            lg:px-12
          "
        >
          {/* Background image */}

          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFssbCNBW8f-0tJgLllgAqAWDBNzNAy3bF5hZHj6AqDD0XL_akzAHMKZFk5xWYQCr3oSIZzV4OS7NZLkSQR6c-ww1c2h5EV8j_DX_4vZ9IeWDEVRbo697BVSHU-H4hr95r0PaC86EEhuuzAtjPVfxhuXT1cV2QpxAMeB_h_yELwhUs3PDszkwE2osVYRL8EbHGlrvBMAAw19qBCzcVr8KGwWB55RmaRlIKT-_tIv2KO6pLY79Dq6eYB0hTHWbcC2VvDIkov6jF2Av"
              alt="AI neural network"
              className="
                h-full
                w-full
                object-cover
                opacity-60
                mix-blend-screen
              "
            />

            {/* Dark gradient overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#141218]
                via-[#141218]/30
                to-transparent
              "
            />
          </div>

          {/* Left content */}

          <div className="relative z-10 max-w-md">

            {/* Label */}

            <div className="mb-6 flex items-center gap-2 text-[#cfbcff]">
              <Sparkles size={18} fill="currentColor" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Next-Gen Intelligence
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
              Accelerate your team's intelligence.
            </h1>

            {/* Description */}

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#cbc4d2] lg:text-base">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            {/* Stats */}

            <div className="mt-8 flex gap-8 opacity-70">
              <div>
                <p className="text-xl font-bold">
                  99.9%
                </p>

                <p className="text-xs text-[#cbc4d2]">
                  Uptime SLA
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">
                  ISO
                </p>

                <p className="text-xs text-[#cbc4d2]">
                  27001 Certified
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}

        <section
          className="
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            bg-[#141218]
            px-4
            py-24
            sm:px-6
            md:w-[60%]
            md:px-10
            lg:px-16
            xl:px-20
          "
        >
          <div className="w-full max-w-[492px]">

            {/* ================= HEADING ================= */}

            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-[#cbc4d2]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit(onRegistrationSubmit)}
              className="space-y-6"
            >

              {/* ================= NAME ================= */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wide
                    text-[#cbc4d2]
                  "
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d69]
                    "
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      h-14
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d69]
                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                      sm:h-[60px]
                    "
                    {...register("name", {
                      required: "Full name is required",

                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* ================= EMAIL ================= */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wide
                    text-[#cbc4d2]
                  "
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d69]
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="
                      h-14
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d69]
                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                      sm:h-[60px]
                    "
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* ================= PASSWORD ================= */}

              <div>
                <label
                  htmlFor="password"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wide
                    text-[#cbc4d2]
                  "
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d69]
                    "
                  />

                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="
                      h-14
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d69]
                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                      sm:h-[60px]
                    "
                    {...register("password", {
                      required: "Password is required",

                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                </div>

                {/* ================= PASSWORD STRENGTH ================= */}

                {password && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className={`
                            h-1
                            flex-1
                            rounded-full
                            transition-all
                            ${
                              item <= passwordStrength.level
                                ? "bg-[#cfbcff]"
                                : "bg-[#494551]/40"
                            }
                          `}
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-xs text-[#cfbcff]">
                      {passwordStrength.text}
                    </p>
                  </div>
                )}

                {errors.password && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* ================= TERMS ================= */}

              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    type="checkbox"
                    className="
                      mt-1
                      h-5
                      w-5
                      shrink-0
                      rounded
                      border-[#494551]
                      bg-[#1d1b20]
                      accent-[#cfbcff]
                    "
                    {...register("terms", {
                      required: "You must accept the terms",
                    })}
                  />

                  <label
                    htmlFor="terms"
                    className="text-xs leading-5 text-[#cbc4d2]"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#cfbcff] hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#cfbcff] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {errors.terms && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-gradient-to-r
                  from-[#6750a4]
                  to-[#cfbcff]
                  py-4
                  font-semibold
                  text-[#22005d]
                  shadow-lg
                  shadow-[#6750a4]/10
                  transition
                  hover:opacity-90
                  active:scale-[0.98]
                "
              >
                Create Account
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="my-6 flex items-center gap-3 sm:gap-4">
              <div className="h-px flex-1 bg-[#494551]/50" />

              <span className="text-[10px] uppercase tracking-wide text-[#625d69] sm:text-[11px]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#494551]/50" />
            </div>

            {/* ================= SSO ================= */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

              {/* GOOGLE */}

              <button
                type="button"
                className="
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#494551]
                  text-sm
                  transition
                  hover:bg-[#1d1b20]
                  sm:h-[60px]
                "
              >
                <span className="font-bold text-[#e6e0e9]">
                  G
                </span>

                <span>
                  Google
                </span>
              </button>

              {/* SSO */}

              <button
                type="button"
                className="
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#494551]
                  text-sm
                  transition
                  hover:bg-[#1d1b20]
                  sm:h-[60px]
                "
              >
                <Network size={18} />

                <span>
                  SSO
                </span>
              </button>
            </div>

            {/* ================= LOGIN ================= */}

            <div className="mt-8 text-center">
              <p className="text-sm text-[#cbc4d2]">
                Already have an account?{" "}
                <a
                  onClick={()=> navigate('/')}
                  href="#"
                  className="font-bold text-[#cfbcff] hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          flex
          flex-col
          items-center
          gap-5
          border-t
          border-[#494551]/20
          bg-[#141218]
          px-6
          py-6
          text-center
          md:flex-row
          md:justify-between
          md:text-left
        "
      >
        <div className="text-xl font-semibold">
          TeamSync
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-[#cbc4d2] sm:gap-6">
          <a
            href="#"
            className="hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="hover:text-white"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="hover:text-white"
          >
            Security
          </a>

          <a
            href="#"
            className="hover:text-white"
          >
            System Status
          </a>
        </div>

        <p className="text-xs text-[#cbc4d2]">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  );
};

export default Register;

