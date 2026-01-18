export default function AccessRestrictedPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white transition-colors duration-200 min-h-screen font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="w-full bg-white dark:bg-[#1a2632] border-b border-solid border-[#f0f2f4] dark:border-[#2a3642] px-4 md:px-10 py-3">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
              <div className="size-8 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                Healthcare Edu Platform
              </h2>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                <span className="truncate">Log Out</span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#e0e0e0] dark:border-[#3a4652]"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA5KJFlJpu7I7sH4USxq4nngM3VcqL-CVpSjAI_FWCefB3M1HdcCUYVTIDntRjF8WRQ-IJXjCqny5QqQS0lKWiYhcSBrGI3bndhq5SHPttHNQBsom-Wa6j58mKPzshSToMoCSFWgx9EVggWGgtTY2newlW63KtKjlfOhNZmKFuFAUforu6unhaZB9OMkrZu5dispPNRXDR2XBKWEZm3-B70EOUPae_BwAR12Wp0pcs1dJEc0clJb_hYG52Ni6Wg4aiiskW4UrJVxUcv\")",
                }}
              ></div>
            </div>
          </div>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center p-4 md:py-12">
          <div className="w-full max-w-lg flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-lg border border-[#e0e0e0] dark:border-[#2a3642] overflow-hidden">
              <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6">
                <div className="size-24 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[48px] text-red-500 dark:text-red-400">
                    gpp_bad
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[#111418] dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                    Access Restricted
                  </h1>
                  <p className="text-[#617589] dark:text-[#9aaab9] text-base font-normal leading-relaxed">
                    Your current user role does not have the necessary permissions to view this
                    section. This area is reserved for{" "}
                    <strong className="text-[#111418] dark:text-white font-medium">
                      faculty administrators
                    </strong>{" "}
                    and{" "}
                    <strong className="text-[#111418] dark:text-white font-medium">
                      course coordinators
                    </strong>
                    .
                  </p>
                </div>
                <button className="w-full md:w-auto min-w-[200px] mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
                  Return to Dashboard
                </button>
              </div>
              <div className="h-1.5 w-full bg-primary/10 dark:bg-primary/20">
                <div className="h-full w-1/3 bg-primary rounded-r-full"></div>
              </div>
            </div>
            <div className="rounded-xl border border-[#dbe0e6] dark:border-[#2a3642] bg-white dark:bg-[#1a2632] p-5 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-[#111418] dark:text-white text-base font-bold leading-tight">
                    Need additional access?
                  </p>
                  <p className="text-[#617589] dark:text-[#9aaab9] text-sm font-normal leading-normal">
                    If you believe this is an error, please escalate this request.
                  </p>
                </div>
                <a
                  className="flex items-center gap-2 text-sm font-bold leading-normal tracking-[0.015em] text-primary hover:text-blue-700 dark:hover:text-blue-400 whitespace-nowrap transition-colors"
                  href="#"
                >
                  Contact Institution Admin
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white dark:bg-[#1a2632] border-t border-[#f0f2f4] dark:border-[#2a3642]">
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a className="text-[#617589] dark:text-[#9aaab9] text-sm font-medium hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="text-[#617589] dark:text-[#9aaab9] text-sm font-medium hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
                <a className="text-[#617589] dark:text-[#9aaab9] text-sm font-medium hover:text-primary transition-colors" href="#">
                  Support
                </a>
              </div>
              <p className="text-[#617589] dark:text-[#9aaab9] text-sm font-normal text-center md:text-right">
                © 2024 Australian Healthcare Education Platform. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
