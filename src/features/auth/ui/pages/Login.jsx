
import React from "react";
import {
  Network,
  Cloud,
  SquareTerminal,
  LogIn,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";


const Login = () => {
   const {
      register,
      handleSubmit,
      errors,
      onLoginSubmit,
      navigate
    } = useAuth();



  return (
    <div className="relative min-h-screen overflow-hidden bg-[#141218] text-[#e6e0e9] font-[Inter,sans-serif]">
      {/* Background AI accents */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#cfbcff]/5 blur-[120px]" />

        <div className="absolute -bottom-[10%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#cdc0e9]/5 blur-[100px]" />
      </div>

      {/* Main */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-[440px]">
          {/* Card */}
          <div
            className="
              overflow-hidden rounded-xl
              border border-[#494551]/30
              bg-[#1d1b20]
              p-5
              shadow-2xl
              sm:p-7
              md:p-8
            "
          >
            {/* Brand */}
            <div className="mb-7 text-center sm:mb-8">
              <div
                className="
                  mx-auto mb-4
                  flex h-11 w-11 items-center justify-center
                  rounded-lg
                  bg-[#6750a4]
                  sm:h-12 sm:w-12
                "
              >
                <Network
                  size={26}
                  strokeWidth={2}
                  className="text-[#cfbcff]"
                />
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-[#e6e0e9] sm:text-[26px]">
                Synthetix AI
              </h1>

              <p className="mt-1 text-sm text-[#cbc4d2]">
                Sign in to your workspace
              </p>
            </div>

            {/* Social Login */}
            <div className="mb-7 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-2 sm:gap-4">
              <button
                type="button"
                className="
                  group flex h-11 items-center justify-center gap-2
                  rounded-lg
                  border border-[#494551]/50
                  bg-[#2b292f]
                  px-4
                  text-sm font-semibold
                  transition-colors
                  hover:bg-[#3b383e]
                "
              >
                <Cloud
                  size={19}
                  className="text-[#cbc4d2] transition-colors group-hover:text-[#e6e0e9]"
                />

                <span>GOOGLE</span>
              </button>

              <button
                type="button"
                className="
                  group flex h-11 items-center justify-center gap-2
                  rounded-lg
                  border border-[#494551]/50
                  bg-[#2b292f]
                  px-4
                  text-sm font-semibold
                  transition-colors
                  hover:bg-[#3b383e]
                "
              >
                <SquareTerminal
                  size={19}
                  className="text-[#cbc4d2] transition-colors group-hover:text-[#e6e0e9]"
                />

                <span>GITHUB</span>
              </button>
            </div>

            {/* Divider */}
            <div className="mb-7 flex items-center gap-3 sm:mb-8">
              <div className="h-px flex-1 bg-[#494551]/30" />

              <span className="whitespace-nowrap text-xs text-[#948e9c]">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-[#494551]/30" />
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2 ml-1 block
                    text-[11px]
                    font-semibold
                    tracking-[0.05em]
                    text-[#cbc4d2]
                  "
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="
                    h-11 w-full
                    rounded-lg
                    border border-[#494551]/50
                    bg-[#0f0d13]
                    px-4
                    text-sm text-[#e6e0e9]
                    outline-none
                    placeholder:text-[#948e9c]/50
                    transition-all
                    focus:border-[#cfbcff]
                    focus:ring-2
                    focus:ring-[#cfbcff]/30
                    sm:h-12
                    sm:text-base
                  "
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#ffb4ab]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between px-1">
                  <label
                    htmlFor="password"
                    className="
                      text-[11px]
                      font-semibold
                      tracking-[0.05em]
                      text-[#cbc4d2]
                    "
                  >
                    PASSWORD
                  </label>

                  <a
                    href="#"
                    className="
                      text-xs
                      text-[#cfbcff]
                      transition-all
                      hover:underline
                    "
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="
                    h-11 w-full
                    rounded-lg
                    border border-[#494551]/50
                    bg-[#0f0d13]
                    px-4
                    text-sm text-[#e6e0e9]
                    outline-none
                    placeholder:text-[#948e9c]/50
                    transition-all
                    focus:border-[#cfbcff]
                    focus:ring-2
                    focus:ring-[#cfbcff]/30
                    sm:h-12
                    sm:text-base
                  "
                />

                {errors.password && (
                  <p className="mt-1.5 text-xs text-[#ffb4ab]">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2 px-1">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="
                    h-4 w-4
                    cursor-pointer
                    rounded
                    border-[#494551]
                    bg-[#0f0d13]
                    accent-[#6750a4]
                    focus:ring-[#cfbcff]/30
                  "
                />

                <label
                  htmlFor="remember"
                  className="
                    cursor-pointer
                    select-none
                    text-xs
                    text-[#cbc4d2]
                  "
                >
                  Stay signed in
                </label>
              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="
                  flex h-12 w-full
                  items-center justify-center gap-2
                  rounded-lg
                  bg-[#6750a4]
                  px-4
                  text-sm font-semibold
                  text-[#e0d2ff]
                  shadow-lg
                  transition-all duration-300
                  hover:bg-[#cfbcff]
                  hover:text-[#381e72]
                  hover:shadow-[#cfbcff]/20
                  active:scale-[0.98]
                  sm:h-[50px]
                "
              >
                <span>Sign In</span>

                <LogIn size={19} />
              </button>
            </form>

            {/* Sign up */}
            <div
              className="
                mt-7
                border-t border-[#494551]/30
                pt-5
                text-center
                sm:mt-8
                sm:pt-6
              "
            >
              <p className="text-xs text-[#cbc4d2] sm:text-sm">
                Don't have an account?

                <a
                   onClick={()=> navigate('/register')}
                  href="#"
                  className="
                    ml-1
                    font-bold
                    text-[#cfbcff]
                    hover:underline
                  "
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center sm:mt-6">
            <p className="text-[10px] text-[#948e9c]/50 sm:text-xs">
              © 2024 Synthetix AI. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-2 flex justify-center gap-4">
              <a
                href="#"
                className="
                  text-[10px]
                  text-[#948e9c]/40
                  transition-colors
                  hover:text-[#cbc4d2]
                  sm:text-xs
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  text-[10px]
                  text-[#948e9c]/40
                  transition-colors
                  hover:text-[#cbc4d2]
                  sm:text-xs
                "
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative AI image */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-0 hidden opacity-20 lg:block">
        <div className="relative h-64 w-64 overflow-hidden rounded-xl border border-[#494551]/20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMNAC4ppTVn0YPcws7fR8cZoQ0dwlcJzCHSV2igftfRdCty6Xzwi_PvJWJUQiXO8gyA4Za08K6TKFIlPbFGSEIfALTx5yS7m2Loweu3Chxa7qKfJS6kF_cwtpvauw2TcTN5kGAR8YGKUUiQoGQlDen_9MfQv3U_Hjhe8Uasps5cbAYAfuQ0vFuo_HaGsihet7JFy_qk2DKMhLdLZt1c3k4-pJz9ydAXGWkq0Jq8YHaWg6fKfWCKGB1rNI8ExadFltELKG_QsO-4ex"
            alt="Abstract AI visualization"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#141218] to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Login;

