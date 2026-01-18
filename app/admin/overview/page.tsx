export default function AdminOverviewPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <div className="relative flex h-screen w-full overflow-hidden">
        <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-full flex-shrink-0">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2 py-1">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBXBJ3hE6VfwC3zwDwXB0fehXgymmgD-IHOVZKPeDDUiSr0y8cydA9wxuUUP5Xj5hTO3hdtCumHz4io64pWUCGKITSaBFnQ9n66m_I6OnYed8IxVkuHpjo0n4yntflpudoefHlWdVXKCxPQG90_JJUT_GfR4D5Ul-qBMwnoWXPV1K5L1CQGIoWOLp4Oe3eKhJyau6X8gkT5Xa9l4ExI8aWYcymze3w_4WFQ5pTmjcT9_H_l4Dex6wKZqy97sshQFZI4tTj-A74mTzL9\")",
                  }}
                ></div>
                <h1 className="text-lg font-bold leading-normal tracking-tight">EduHealth Admin</h1>
              </div>
              <nav className="flex flex-col gap-2 mt-4">
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
                  <span className="material-symbols-outlined text-[20px]">dashboard</span>
                  <span className="text-sm font-medium leading-normal">Overview</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                  <span className="text-sm font-medium leading-normal">Users</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                  <span className="text-sm font-medium leading-normal">Courses</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                  <span className="text-sm font-medium leading-normal">Reports</span>
                </a>
                <div className="h-px bg-border-light dark:bg-border-dark my-2"></div>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                  <span className="text-sm font-medium leading-normal">Settings</span>
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3 px-3 py-3 mt-auto rounded-lg hover:bg-background-light dark:hover:bg-gray-800 cursor-pointer transition-colors">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full h-9 w-9 border border-border-light dark:border-border-dark"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuC1Csy2-AHbivJwyG9-3-7VYyLlcFHTp34uitBBRsvZfYWB9gBERUCSgByhSuSZGMw_Vc5gfPqM74ZhbR_I7EbBrkPuZFV2ZKDd5-fHyZLXRmI5GIFoC7dq4DUlLWVun0SbpvqB7ai9C1ZZ-N9jZcRpZtOnEk2b12mG8hiqOPEZMyJotgnrul-gRBxMgCpB0JSKXg09uWnTXgX-Nu8rkVsJId3Ji4tcCUdcXuDPw16gUhu1XExOs7jQbR2nYhXAXBY-S8urBaO8zbOh\")",
                }}
              ></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">James Wilson</p>
                <p className="text-xs text-text-sec-light dark:text-text-sec-dark mt-1">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 h-full overflow-y-auto bg-background-light dark:bg-background-dark">
          <div className="max-w-[1400px] mx-auto p-6 md:p-8 lg:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 items-center">
                <a className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium hover:text-primary transition-colors" href="#">
                  Dashboard
                </a>
                <span className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                  /
                </span>
                <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
                  Institutional Overview
                </span>
              </div>
              <div className="flex flex-wrap justify-between items-end gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                    Institutional Overview
                  </h1>
                  <p className="text-text-sec-light dark:text-text-sec-dark text-lg font-normal">
                    University of Melbourne
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-sm transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Download Report</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  label: "Total Users",
                  value: "4,203",
                  icon: "group",
                  change: "+12%",
                  helper: "vs last month",
                },
                {
                  label: "Active Educators",
                  value: "85",
                  icon: "person_check",
                  helper: "Currently online: 12",
                },
                {
                  label: "Student Attempts (30d)",
                  value: "12,450",
                  icon: "history_edu",
                  change: "+5%",
                  helper: "vs last month",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col justify-between gap-4 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                      {card.label}
                    </p>
                    <span className="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark text-[20px]">
                      {card.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                      {card.value}
                    </p>
                    {card.change ? (
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30">
                          <span className="material-symbols-outlined text-[12px] text-green-600 dark:text-green-400">
                            trending_up
                          </span>
                        </span>
                        <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                          {card.change}{" "}
                          <span className="text-text-sec-light dark:text-text-sec-dark font-normal">
                            {card.helper}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-normal">
                        {card.helper}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex flex-col justify-between gap-4 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                    License Status
                  </p>
                  <span className="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark text-[20px]">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                      65%
                    </p>
                    <p className="text-sm text-text-sec-light dark:text-text-sec-dark">Utilized</p>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-medium text-text-main-light dark:text-text-main-dark">
                        650 / 1000 seats
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm">
                <div className="p-6 border-b border-border-light dark:border-border-dark flex flex-wrap justify-between items-center gap-4">
                  <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Daily Scenario Completions
                  </h2>
                  <div className="flex items-center gap-2 bg-background-light dark:bg-background-dark rounded-lg p-1 border border-border-light dark:border-border-dark">
                    {["14 Days", "30 Days", "12 Months"].map((label, index) => (
                      <button
                        key={label}
                        className={`px-3 py-1 text-xs font-medium rounded ${
                          index === 0
                            ? "bg-white dark:bg-gray-700 shadow-sm text-text-main-light dark:text-text-main-dark"
                            : "text-text-sec-light dark:text-text-sec-dark hover:text-text-main-light dark:hover:text-text-main-dark"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-end h-[320px]">
                  <div className="flex h-full items-end gap-2 md:gap-4 justify-between w-full">
                    {[40, 55, 45, 60, 80, 75, 30, 40, 65, 85, 90, 70, 60, 50].map(
                      (value, index) => (
                        <div
                          key={`bar-${index}`}
                          className="group relative flex-1 flex flex-col justify-end items-center gap-2 group/bar"
                        >
                          <div
                            className="w-full max-w-[40px] bg-primary/20 group-hover/bar:bg-primary/30 rounded-t-sm h-[40%] relative transition-all duration-300"
                            style={{ height: `${value}%` }}
                          >
                            <div className="absolute bottom-0 left-0 w-full bg-primary rounded-t-sm h-[100%]"></div>
                          </div>
                          <span className="text-xs text-text-sec-light dark:text-text-sec-dark">
                            {12 + index}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="xl:col-span-1 flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm">
                <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                  <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Recent System Activity
                  </h2>
                  <a className="text-sm font-medium text-primary hover:text-blue-600" href="#">
                    View All
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background-light dark:bg-background-dark text-text-sec-light dark:text-text-sec-dark">
                      <tr>
                        <th className="px-6 py-3 font-medium">User / Action</th>
                        <th className="px-6 py-3 font-medium text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                      {[
                        {
                          name: "Dr. Sarah Smith",
                          detail: "Updated 'Cardiology 101'",
                          time: "2m ago",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuAprK5pA4GdNFTyWHsw2oWvsBzOV8z_wo9U4Q0jWaLyO4nJpRWkDDlLk3FpqzfljDLhyt53l72-Mcw9P_2xNZkOnAJtOg11DYnypRkAAYze-7CU-RoMhMjpnOiR5SdK4jt_T7W_jhFO6dAhkVBGXgndjSHC-Y7CeqJQB-7AiH4vHlknal_k4JFm6m0kT1s0aSBdaSQAZQ-KNBjoxhw-1f3dr4aY1nPNZEcASGMJdo33eljrL_v4hv4fEsFlgw9bkeJoSsGz7hahbzcJ",
                        },
                        {
                          name: "Jane Doe (Student)",
                          detail: "Completed 'Patient Triage'",
                          time: "15m ago",
                          initials: "JD",
                          badge: "bg-blue-100 dark:bg-blue-900 text-primary",
                        },
                        {
                          name: "System Alert",
                          detail: "Maintenance scheduled 2AM",
                          time: "1h ago",
                          icon: "warning",
                          badge: "bg-amber-100 dark:bg-amber-900 text-amber-600",
                        },
                        {
                          name: "Prof. Michael Chen",
                          detail: "Added 4 new users",
                          time: "2h ago",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuARi3Qqpyb1UV4Dnf4mo44cY-aCv4drnavizLDT-_ajooXx-xtozJojMweFV981iqL-1FVRYQ2KoCOljaHuitlQh5CbuF3RO2bfpxW2yBNFRA8iYuox7vNzv7w245PuccvyixfVYhTs1WbXj2e8WiZ9N4IL2xXWQeGjsfN4ZuGtQTo-bNn3jXHd_x-VypDj0vZVEPy9wOwo_HTvPvca9Yf1OgyzIdjGQ15Uq5A5BiCJNr57-NBemytVYhcjU5-9JEVi2V6UfBg1gZkY",
                        },
                        {
                          name: "Liam Miller",
                          detail: "Failed login attempt",
                          time: "3h ago",
                          initials: "LM",
                          badge: "bg-purple-100 dark:bg-purple-900 text-purple-600",
                        },
                      ].map((row) => (
                        <tr
                          key={`${row.name}-${row.time}`}
                          className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              {row.avatar ? (
                                <div
                                  className="size-8 rounded-full bg-cover bg-center flex-shrink-0"
                                  style={{ backgroundImage: `url("${row.avatar}")` }}
                                ></div>
                              ) : (
                                <div
                                  className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${row.badge}`}
                                >
                                  {row.icon ? (
                                    <span className="material-symbols-outlined text-[16px]">
                                      {row.icon}
                                    </span>
                                  ) : (
                                    <span className="font-bold text-xs">{row.initials}</span>
                                  )}
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-medium text-text-main-light dark:text-text-main-dark">
                                  {row.name}
                                </span>
                                <span className="text-xs text-text-sec-light dark:text-text-sec-dark">
                                  {row.detail}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right text-text-sec-light dark:text-text-sec-dark text-xs">
                            {row.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer className="mt-auto py-6 border-t border-border-light dark:border-border-dark flex justify-between items-center text-sm text-text-sec-light dark:text-text-sec-dark">
              <p>© 2024 EduHealth Platform. All rights reserved.</p>
              <div className="flex gap-4">
                <a className="hover:text-primary" href="#">
                  Support
                </a>
                <a className="hover:text-primary" href="#">
                  Privacy Policy
                </a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
