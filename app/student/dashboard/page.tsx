export default function StudentDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white h-screen flex overflow-hidden font-display">
      <aside className="w-64 bg-white dark:bg-[#1a2632] border-r border-[#e5e7eb] dark:border-[#2a3b4d] flex flex-col justify-between shrink-0 h-full">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-[#f0f2f4] dark:border-[#2a3b4d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <h1 className="text-lg font-bold tracking-tight text-[#111418] dark:text-white">
                MedEd Pro
              </h1>
            </div>
          </div>
          <nav className="flex flex-col gap-2 p-4">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary"
              href="#"
            >
              <span className="material-symbols-outlined icon-fill">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3b4d] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">book_2</span>
              <span className="text-sm font-medium">Domains</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3b4d] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">history</span>
              <span className="text-sm font-medium">History</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3b4d] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-[#f0f2f4] dark:border-[#2a3b4d]">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3b4d] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Log Out</span>
          </a>
        </div>
      </aside>
      <div className="flex flex-col flex-1 min-w-0">
        <header className="h-16 bg-white dark:bg-[#1a2632] border-b border-[#e5e7eb] dark:border-[#2a3b4d] flex items-center justify-between px-6 shrink-0">
          <div className="flex flex-col justify-center">
            <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">
              University of Sydney
            </h2>
            <p className="text-[#617589] dark:text-[#94a3b8] text-xs font-normal">
              Medical Student
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#617589] text-[20px]">
                  search
                </span>
              </div>
              <input
                className="bg-[#f0f2f4] dark:bg-[#2a3b4d] border-none text-sm rounded-lg pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary/50 text-[#111418] dark:text-white placeholder-[#617589]"
                placeholder="Search scenarios, domains..."
                type="text"
              />
            </div>
            <button className="relative p-2 rounded-full hover:bg-[#f0f2f4] dark:hover:bg-[#2a3b4d] text-[#617589] dark:text-[#94a3b8] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 border-l border-[#f0f2f4] dark:border-[#2a3b4d]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#111418] dark:text-white leading-tight">
                  Jane Doe
                </p>
                <p className="text-xs text-[#617589] dark:text-[#94a3b8]">Year 3</p>
              </div>
              <div
                className="size-9 rounded-full bg-cover bg-center border border-[#e5e7eb] dark:border-[#2a3b4d]"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuC4hQNFrJQEshPtaHZy6GkTRtj4LfzlDaCylwz0Svw9G8InSRtnUJz1D2F2io_ec7zt7D0mhKsDwOwJVP9pQqDjhK7ZOWmFIp-vKCWwv9MV55Sk41Qiiy2CWZ9LReXvTVIH-JfZ_bzT_EtXrySBz489yTyu7z-AMKvXEVAqH00I-LsT6eW982OqOHwgT-SzWH8m5WePKVWTM0zqt99Dz7iNGzJDWD82XTC6y3mesntutvieo0Bv95LZDp_PTaBpWXUbwehHxGbcHpG3\")",
                }}
              ></div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-[#111418] dark:text-white tracking-tight">
                  Welcome back, Jane
                </h1>
                <p className="text-[#617589] dark:text-[#94a3b8] mt-1">
                  Here is an overview of your recent progress and active tasks.
                </p>
              </div>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#2a3b4d] border border-[#dbe0e6] dark:border-[#3e5366] rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#324557] transition-colors text-[#111418] dark:text-white">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                My Schedule
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-[#1a2632] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col sm:flex-row border border-[#e5e7eb] dark:border-[#2a3b4d]">
                <div
                  className="w-full sm:w-1/3 bg-cover bg-center min-h-[160px]"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuB6RmAqsq6aXSlghgQHFF55526oLooTWSpTnIewDvXkGv3cgWEi50NY7hodrEA5U9g5Mu1K2iNrwLulhS5T_jPbA_wYCyYBDjiCK4A2TEtPmsSDcv1a07KIPy-Jx4kyQKwB26n4OHdUbcxyDR5EQPGdRISh3gnBtTIxyxFsN6OOzbgZHYGMtmSeiPX1oOpqxDy5B1cetc4phUG6nY-A3hCWFNoAsLHnUlVvqBIGOy9PZTgUwjUiroVEFZZU4FoVx4RgoNaunYgMIMry\")",
                  }}
                ></div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                      In Progress
                    </span>
                    <span className="text-[#617589] dark:text-[#94a3b8] text-xs">
                      Module 3 of 5
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-1">
                    Acute Coronary Syndromes
                  </h3>
                  <p className="text-[#617589] dark:text-[#94a3b8] text-sm mb-4">
                    Last accessed 2 hours ago • Cardiology Dept
                  </p>
                  <div className="w-full bg-[#f0f2f4] dark:bg-[#2a3b4d] rounded-full h-2.5 mb-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#617589] dark:text-[#94a3b8] mb-5">
                    <span>65% Complete</span>
                    <span>Est. 15m remaining</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">play_circle</span>
                      Resume Practice
                    </button>
                    <button className="bg-white dark:bg-[#2a3b4d] border border-[#dbe0e6] dark:border-[#3e5366] text-[#111418] dark:text-white text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#324557] transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6 border border-[#e5e7eb] dark:border-[#2a3b4d] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-[#111418] dark:text-white">
                    Domain Proficiency
                  </h3>
                  <button className="text-primary text-sm font-medium hover:underline">
                    View all
                  </button>
                </div>
                <div className="flex flex-col gap-5 flex-1 justify-center">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#111418] dark:text-white">
                        Emergency Medicine
                      </span>
                      <span className="text-[#617589] dark:text-[#94a3b8]">Developing</span>
                    </div>
                    <div className="w-full bg-[#f0f2f4] dark:bg-[#2a3b4d] rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#111418] dark:text-white">
                        Pediatrics
                      </span>
                      <span className="text-[#617589] dark:text-[#94a3b8]">Foundational</span>
                    </div>
                    <div className="w-full bg-[#f0f2f4] dark:bg-[#2a3b4d] rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#111418] dark:text-white">
                        Medical Ethics
                      </span>
                      <span className="text-[#617589] dark:text-[#94a3b8]">Competent</span>
                    </div>
                    <div className="w-full bg-[#f0f2f4] dark:bg-[#2a3b4d] rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] dark:border-[#2a3b4d] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-[#2a3b4d] flex items-center justify-between">
                <h3 className="text-base font-bold text-[#111418] dark:text-white">
                  Recent Activity
                </h3>
                <div className="flex gap-2">
                  <button className="p-1 text-[#617589] hover:text-[#111418] dark:hover:text-white">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  </button>
                  <button className="p-1 text-[#617589] hover:text-[#111418] dark:hover:text-white">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#f9fafb] dark:bg-[#243343] text-[#617589] dark:text-[#94a3b8] font-medium border-b border-[#e5e7eb] dark:border-[#2a3b4d]">
                    <tr>
                      <th className="px-6 py-3">Scenario Name</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Score/Outcome</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2a3b4d] text-[#111418] dark:text-white">
                    {[
                      {
                        name: "Patient Intake - Case 104",
                        date: "Yesterday, 4:30 PM",
                        status: "Completed",
                        statusClass:
                          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                        score: "Pass (High Distinction)",
                        action: "View Report",
                      },
                      {
                        name: "Diagnostic Reasoning: Fever",
                        date: "Oct 24, 2023",
                        status: "Incomplete",
                        statusClass:
                          "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                        score: "--",
                        action: "Resume",
                      },
                      {
                        name: "Ethics: Patient Consent",
                        date: "Oct 22, 2023",
                        status: "Completed",
                        statusClass:
                          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                        score: "Pass",
                        action: "View Report",
                      },
                      {
                        name: "Pharmacology Basics: Quiz 2",
                        date: "Oct 20, 2023",
                        status: "Archived",
                        statusClass:
                          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
                        score: "88/100",
                        action: "Review",
                      },
                      {
                        name: "Clinical Skills: Suturing",
                        date: "Oct 18, 2023",
                        status: "Completed",
                        statusClass:
                          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                        score: "Pass (Credit)",
                        action: "View Report",
                      },
                    ].map((row) => (
                      <tr
                        key={row.name}
                        className="hover:bg-gray-50 dark:hover:bg-[#243343] transition-colors"
                      >
                        <td className="px-6 py-4 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-[#617589] dark:text-[#94a3b8]">
                          {row.date}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${row.statusClass}`}>
                            <span
                              className={`size-1.5 rounded-full ${
                                row.status === "Incomplete"
                                  ? "bg-amber-600"
                                  : row.status === "Archived"
                                    ? "bg-gray-500"
                                    : "bg-emerald-600"
                              }`}
                            ></span>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">{row.score}</td>
                        <td className="px-6 py-4 text-right">
                          <a className="text-primary font-medium hover:text-blue-600 hover:underline" href="#">
                            {row.action}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
