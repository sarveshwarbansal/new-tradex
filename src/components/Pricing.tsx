import Link from "next/link";

const Pricing = () => {
  return (
    <div className="bg-custom  p-8 md:px-48 md:py-16 text-center">
      <h2
        className="text-[36px] text-white  font-[700] text-center pb-16 "
        id="pricing"
      >
        Pricing Plan
      </h2>

      {/* Pricing table */}
      <div className="mx-auto grid lg:gap-52 gap-8 lg:grid-cols-4 items-start lg:max-w-none lg:-translate-x-20">
        {/* Pricing tab 1 */}
        <div className="min-w-[280px] h-full gap-4 lg:mr-8">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="p-4 text-center">
              <div className="p-4 text-2xl font-semibold text-white dark:text-slate-200">
                7 Day Free Trial
              </div>
              <div className="p-2 text-sm text-slate-500">
                Make your trading life easier
              </div>
              <div className="inline-flex items-baseline p-11 pb-16">
                <span className="text-3xl font-bold text-white dark:text-slate-200">
                  ₹
                </span>
                <span className="text-4xl font-bold text-white dark:text-slate-200">
                  0
                </span>
              </div>
              <a
                href="https://platform.optionx.trade/"
                className="w-full inline-flex justify-center px-3.5 py-2.5 text-indigo-400 border-4 border-indigo-400 hover:bg-indigo-400 hover:text-white"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
        {/* Pricing tab 2 */}
        <div className="min-w-[280px] h-full">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="p-4 text-center">
              <div className="p-4 text-2xl font-semibold text-white dark:text-slate-200">
                Monthly
              </div>
              <div className="p-2 text-sm text-slate-500">
                Make your trading life easier
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <p className="text-center text-zinc-400 text-lg font-semibold line-through">
                  ₹2499
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold">
                  SAVE 55%
                </p>
              </div>
              <div className="inline-flex items-baseline p-4 pb-16">
                <span className="text-3xl font-bold text-white dark:text-slate-200">
                  ₹
                </span>
                <span className="text-4xl font-bold text-white dark:text-slate-200">
                  999
                </span>
                <span className="text-white font-medium">/mo</span>
              </div>
              <a
                href="https://platform.optionx.trade/"
                className="w-full inline-flex justify-center px-3.5 py-2.5 text-indigo-400 border-4 border-indigo-400 hover:bg-indigo-400 hover:text-white"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        {/* Pricing tab 3 */}
        <div className="min-w-[280px] h-full">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="absolute -top-3  left-0 right-0 mx-auto rounded-[30px]">
              <div className="inline-flex items-center text-xs font-semibold rounded-full  py-1.5 px-3 bg-[#401434] text-[#DA6696] shadow-sm shadow-slate-950/5 uppercase">
                Most Popular
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="p-4 text-2xl font-semibold text-white dark:text-slate-200">
                Quarterly
              </div>
              <div className="p-2 text-sm text-slate-500">
                Make your trading life easier
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <p className="text-center text-zinc-400 text-lg font-semibold line-through">
                  ₹6499
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold">
                  SAVE 59%
                </p>
              </div>
              <div className="inline-flex items-baseline p-4 pb-16">
                <span className="text-3xl font-bold text-white dark:text-slate-200">
                  ₹
                </span>
                <span className="text-4xl font-bold text-white dark:text-slate-200">
                  2599
                </span>
                <span className="text-white font-medium">/qt</span>
              </div>
              <a
                href="https://platform.optionx.trade/"
                className="w-full inline-flex justify-center items-center border-4 border-[#C63572] bg-pink-600 px-3.5 py-2.5 font-medium text-white hover:bg-pink-900 hover:border-pink-900"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        {/* Pricing tab 4 */}
        <div className="min-w-[280px] h-full   ">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="p-4 text-center">
              <div className="p-4 text-2xl font-semibold text-white dark:text-slate-200">
                Yearly
              </div>
              <div className="p-2 text-sm text-slate-500">
                Make your trading life easier
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <p className="text-center text-zinc-400 text-lg font-semibold line-through">
                  ₹24999
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold">
                  SAVE 65%
                </p>
              </div>
              <div className="inline-flex items-baseline p-4 pb-16">
                <span className="text-3xl font-bold text-white dark:text-slate-200">
                  ₹
                </span>
                <span className="text-4xl font-bold text-white dark:text-slate-200">
                  9999
                </span>
                <span className="text-white font-medium">/yr</span>
              </div>
              <a
                href="https://platform.optionx.trade/"
                className="w-full inline-flex justify-center px-3.5 py-2.5 text-indigo-400 border-4 border-indigo-400 hover:bg-indigo-400 hover:text-white"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
