export default function SystemStatusPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-40 flex flex-1 justify-center py-10">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-12">
              <div className="flex flex-col gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight">
                  System Status Components: AI Patient Interaction
                </h1>
                <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal">
                  Component library for clinical simulation states: Loading, Processing, and Error
                  handling within the educational platform.
                </p>
              </div>
              <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    State 1: AI Responding
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Context: Chat Interface
                  </span>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632] p-6 shadow-sm">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-end gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">person</span>
                      </div>
                      <div className="flex flex-col gap-1 items-start max-w-[80%]">
                        <div className="flex flex-col rounded-lg rounded-tl-none px-4 py-3 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-gray-200">
                          <p className="text-base font-normal leading-normal">
                            Dr. Smith, I've been feeling this sharp pain in my chest for about three
                            days now. It gets worse when I take a deep breath.
                          </p>
                        </div>
                        <span className="text-[#617589] dark:text-gray-500 text-[12px] pl-1">
                          Student • 10:42 AM
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 flex-row-reverse">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 border border-gray-200 dark:border-gray-700"
                        style={{
                          backgroundImage:
                            "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBXXatl-V9iyLEBlXVdlkVyABKnxphYHWvj3jUpE33ldJe-ND-kPKV9xgy5btKxLVQsCwhMeOCdk14H4G-tEWvVij1tEDNUciLBdiLeOgYehZu0obOfw9Un1NPhLe0DKIuYhTYNMTit4meb9kYDUNfyWDmh2bSLLunK89tckN0M7lKpAv_tiLqeZ66YwKh4omfKlvQGBTgGknQbgWQIvUuZcT-FmXsWJpsOoPSFfOYvsNiGBCgOCxZAYnQ1rI70P5pBAeo3VhIXpHxJ\")",
                        }}
                      ></div>
                      <div className="flex flex-col gap-1 items-end max-w-[80%]">
                        <div className="flex flex-col rounded-lg rounded-tr-none px-5 py-4 bg-primary/10 dark:bg-primary/20 min-w-[200px]">
                          <div className="flex flex-col gap-2 animate-pulse w-full">
                            <div className="h-2.5 bg-primary/20 rounded-full w-3/4"></div>
                            <div className="h-2.5 bg-primary/20 rounded-full w-full"></div>
                            <div className="h-2.5 bg-primary/20 rounded-full w-1/2"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pr-1">
                          <span className="material-symbols-outlined text-primary text-[14px] animate-spin">
                            sync
                          </span>
                          <span className="text-primary text-[12px] font-medium">
                            AI Patient is typing...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    State 2: Feedback Generating
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Context: Post-Simulation Assessment
                  </span>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632] p-8 shadow-sm">
                  <div className="max-w-lg mx-auto w-full flex flex-col gap-4">
                    <div className="flex justify-between items-end mb-1">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-semibold text-[#111418] dark:text-white uppercase tracking-wider">
                          Assessment in Progress
                        </h4>
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          Analyzing clinical competencies...
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-primary">65%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
                      <div className="bg-primary h-3 rounded-full relative overflow-hidden w-[65%]">
                        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      Processing differential diagnosis and communication skills evaluation.
                    </p>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    State 3: AI Timeout Error
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Context: System Alert
                  </span>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632] p-6 shadow-sm">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 opacity-50 pointer-events-none select-none grayscale-[0.5]">
                      <div className="flex items-end gap-3 flex-row-reverse">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 bg-gray-300"
                          style={{
                            backgroundImage:
                              "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBwOt0JQQZjNwOdrJ1nF8-pDXuc8MTFjlS5nYN4QSCPEpW2U-ZroI0-ROUrycLizP-V0bEBEHIppulYG3_9cRH9lw_nObvQ2gp85mclf1w_co--k0yIYcgo1sIllXTajbv6uxL1udj0B-3gWGgII1Tpsypt2vzQiRbXjLfnM9z390hzpkFbawOBuR32izW3LJO6NKaR0t_K3YhoeQ8lflYzRaZP9V8i2lGTJjhKZvUdrBlCLDxY41KxR7PuPitOUHPqY-WkFAs9jLPi\")",
                          }}
                        ></div>
                        <div className="flex flex-col gap-1 items-end max-w-[80%]">
                          <div className="flex flex-col rounded-lg rounded-tr-none px-4 py-3 bg-primary/10 dark:bg-primary/20 text-[#111418] dark:text-white">
                            <p className="text-base font-normal leading-normal">
                              Can you describe the location of the pain more specifically?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 max-w-xl w-full">
                        <span className="material-symbols-outlined text-red-600 dark:text-red-400 shrink-0 mt-0.5">
                          error
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-bold text-red-900 dark:text-red-200">
                              Connection Interrupted
                            </p>
                            <p className="text-sm font-normal text-red-800 dark:text-red-300 leading-normal">
                              The AI patient is temporarily unavailable. Please retry in 60 seconds.
                            </p>
                          </div>
                          <button className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                            Retry Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
