import { ArrowRight, Check, Sparkles, UsersRound } from "lucide-react";
import homeInte from "../assets/images/home-inte.jpg";

const Hero = () => {
  return (
    <main id="home" className="overflow-hidden">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7d7cf] bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#92543f]">
            <Sparkles size={14} aria-hidden="true" />
            Your home, reimagined
          </div>

          <h1 className="max-w-xl font-serif text-[2.75rem] font-medium leading-[1.08] tracking-tight text-[#292823] sm:text-6xl lg:text-[4.15rem]">
            Transform Your Home,
            <span className="mt-1 block text-[#9b5945]">Before You Renovate.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:mt-7 sm:text-lg sm:leading-8">
            Upload a photo of your space, explore AI-powered design ideas,
            discover trusted renovation teams, and bring your vision to life.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <a
              href="#ai-design"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#9b5945] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#854a38] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5945]"
            >
              <Sparkles size={17} aria-hidden="true" />
              Design My Space
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#renovation-teams"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-stone-300 bg-white/60 px-6 py-3 text-sm font-semibold text-[#34332d] transition-all hover:-translate-y-0.5 hover:border-[#9b5945] hover:text-[#9b5945] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5945]"
            >
              <UsersRound size={17} aria-hidden="true" />
              Find Renovation Teams
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-stone-500 sm:mt-11">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#e8eee7] text-[#55725a]">
              <Check size={15} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>Start with a photo. Leave with a plan.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#ead9cf]/60 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-6 bottom-3 h-48 w-48 rounded-full bg-[#e7e1d4]/70 blur-3xl" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#252325] shadow-[0_28px_70px_-30px_rgba(55,39,33,0.42)] sm:rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgba(111,60,168,0.28),transparent_58%)]" aria-hidden="true" />
            <div className="relative flex aspect-[1.08/1] items-center justify-center overflow-hidden sm:aspect-[1.16/1]">
              <img
                src={homeInte}
                alt="Abstract layered design concept generated for a home renovation preview"
                className="h-full w-full object-contain p-6 sm:p-10"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#211e22]/55 to-transparent" aria-hidden="true" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm sm:bottom-7 sm:left-7">
                <span className="size-1.5 rounded-full bg-[#d6a087]" />
                A first look at what's possible
              </span>
            </div>
          </div>

          <div className="absolute -left-2 top-5 flex max-w-[13.5rem] items-center gap-3 rounded-2xl border border-stone-100 bg-white px-3.5 py-3 shadow-[0_12px_35px_-18px_rgba(41,40,35,0.35)] sm:-left-7 sm:top-9 sm:px-4 sm:py-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f3e9e3] text-[#9b5945]">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-[#292823] sm:text-sm">AI Design Preview</span>
              <span className="mt-0.5 block text-[11px] text-stone-500 sm:text-xs">Personalized for your space</span>
            </span>
          </div>

          <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-[0_12px_35px_-18px_rgba(41,40,35,0.35)] sm:-bottom-6 sm:right-7 sm:px-5 sm:py-4">
            <span className="flex -space-x-2" aria-hidden="true">
              <span className="size-8 rounded-full border-2 border-white bg-[#c88970]" />
              <span className="size-8 rounded-full border-2 border-white bg-[#d7c4a8]" />
              <span className="size-8 rounded-full border-2 border-white bg-[#879486]" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-[#292823]">500+ Design Ideas</span>
              <span className="mt-0.5 block text-xs text-stone-500">AI powered, made for you</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;