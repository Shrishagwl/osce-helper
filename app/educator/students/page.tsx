export default function EducatorStudentsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#e5e7eb] dark:border-[#22303e] bg-white dark:bg-[#192532] px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded bg-primary/10 p-2">
              <span className="material-symbols-outlined text-primary text-2xl">
                local_hospital
              </span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-[#111418] dark:text-white">
              EduHealth Portal
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-[#637588] hover:text-primary dark:text-[#9ca3af] dark:hover:text-white"
              href="#"
            >
              Dashboard
            </a>
            <a className="text-sm font-bold text-primary dark:text-white" href="#">
              Students
            </a>
            <a
              className="text-sm font-medium text-[#637588] hover:text-primary dark:text-[#9ca3af] dark:hover:text-white"
              href="#"
            >
              Courses
            </a>
            <a
              className="text-sm font-medium text-[#637588] hover:text-primary dark:text-[#9ca3af] dark:hover:text-white"
              href="#"
            >
              Reports
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-[#e5e7eb] dark:border-[#22303e] pr-4">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2f4] hover:bg-[#e5e7eb] dark:bg-[#22303e] dark:hover:bg-[#2f4056] text-[#111418] dark:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2f4] hover:bg-[#e5e7eb] dark:bg-[#22303e] dark:hover:bg-[#2f4056] text-[#111418] dark:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">settings</span>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-semibold text-[#111418] dark:text-white">
                  Dr. Sarah Mitchell
                </span>
                <span className="text-xs text-[#637588] dark:text-[#9ca3af]">
                  University of Sydney
                </span>
              </div>
              <div
                className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-primary/20"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJr2wAr9Dzws-Cs8gEFYhffX2W-x34EdvRCdKMmpve4ZkQOFbxRSntmLp-rN-afnY47a-bgFxODiGhYqrOO5A996s9F9AlB7EIbCzmjBoUOV_pG3SC7ud4l2ouTLi8WVYZPzrbspNnZaHIsd41KVe-tJHAP8eb2BwDPGjLKYNqrOSbwgJNLzkYNSuZl2ZsZx5eIYK8RjdcdwxnqWe9rocDb3lpR9G8-C24yQ8-lCGTsqtuUdIsixeedtzZ72ukJlTOkdW3Ev6GMBKD')",
                }}
              ></div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-10">
          <div className="mx-auto max-w-7xl">
            <nav className="mb-6 flex items-center text-sm text-[#637588] dark:text-[#9ca3af]">
              <a className="hover:text-primary transition-colors" href="#">
                Home
              </a>
              <span className="material-symbols-outlined mx-2 text-base">chevron_right</span>
              <a className="hover:text-primary transition-colors" href="#">
                Nursing 101
              </a>
              <span className="material-symbols-outlined mx-2 text-base">chevron_right</span>
              <span className="font-medium text-[#111418] dark:text-white">Student Roster</span>
            </nav>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">
                  Student Roster
                </h2>
                <p className="mt-2 text-base text-[#637588] dark:text-[#9ca3af]">
                  Monitor engagement and track clinical simulation progress.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex h-10 items-center gap-2 rounded-lg border border-[#dbe0e6] dark:border-[#2f4056] bg-white dark:bg-[#192532] px-4 text-sm font-bold text-[#111418] dark:text-white hover:bg-[#f8f9fa] dark:hover:bg-[#22303e] transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export CSV
                </button>
                <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/30">
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add Student
                </button>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#22303e] bg-white dark:bg-[#192532] p-4 shadow-sm md:grid-cols-12">
              <div className="relative md:col-span-4 lg:col-span-5">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                  search
                </span>
                <input
                  className="h-10 w-full rounded-lg border border-[#dbe0e6] dark:border-[#2f4056] bg-[#f8f9fa] dark:bg-[#22303e] pl-10 pr-4 text-sm text-[#111418] dark:text-white placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Search by name or ID..."
                  type="text"
                />
              </div>
              <div className="relative md:col-span-4 lg:col-span-3">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                  school
                </span>
                <select className="h-10 w-full appearance-none rounded-lg border border-[#dbe0e6] dark:border-[#2f4056] bg-[#f8f9fa] dark:bg-[#22303e] pl-10 pr-10 text-sm text-[#111418] dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
                  <option>Semester 1 - 2024</option>
                  <option>Semester 2 - 2023</option>
                  <option>Intensive Care Cohort A</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none">
                  expand_more
                </span>
              </div>
              <div className="relative md:col-span-4 lg:col-span-3">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                  calendar_today
                </span>
                <select className="h-10 w-full appearance-none rounded-lg border border-[#dbe0e6] dark:border-[#2f4056] bg-[#f8f9fa] dark:bg-[#22303e] pl-10 pr-10 text-sm text-[#111418] dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Semester</option>
                  <option>Custom Range</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none">
                  expand_more
                </span>
              </div>
              <div className="flex md:col-span-12 lg:col-span-1 items-center justify-end">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dbe0e6] dark:border-[#2f4056] hover:bg-[#f8f9fa] dark:hover:bg-[#22303e] text-[#637588] dark:text-[#9ca3af] transition-colors"
                  title="More Filters"
                >
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-sm shadow-blue-500/20">
                All Students
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#192532] border border-[#e5e7eb] dark:border-[#2f4056] px-3 py-1 text-xs font-medium text-[#637588] dark:text-[#9ca3af] hover:border-primary hover:text-primary transition-colors">
                At Risk (Low Activity)
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-[10px] font-bold text-red-600 dark:text-red-400">
                  3
                </span>
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#192532] border border-[#e5e7eb] dark:border-[#2f4056] px-3 py-1 text-xs font-medium text-[#637588] dark:text-[#9ca3af] hover:border-primary hover:text-primary transition-colors">
                High Achievers
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#e5e7eb] dark:border-[#22303e] bg-white dark:bg-[#192532] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-[#e5e7eb] dark:border-[#2f4056] bg-[#f8f9fa] dark:bg-[#22303e]/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Student Name
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Student ID
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Last Activity
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Total Attempts
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Primary Focus Domain
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#637588] dark:text-[#9ca3af]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2f4056]">
                    {[
                      {
                        name: "Jane Doe",
                        program: "Nursing - Year 1",
                        id: "u123456",
                        activity: "2 hours ago",
                        activityDate: "Oct 24, 2023",
                        activityColor: "bg-green-500",
                        attempts: "12",
                        attemptsPercent: "80%",
                        barClass: "bg-primary",
                        domain: "Clinical Reasoning",
                        domainClass:
                          "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-400/20",
                        avatar:
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuCcmH-vs7Ue45mj0oetQS9N3jGTS4KCqQUFLLailfe1uq6oupGDKLFnFGHhckpFSErcnsAkG2ongeAne9AXHaHldidrOA5y7G8Qb1Hj87e9caJCwYoDxK5kB7ZvgdrmQCOoJdRFQhs44AK0jyvZUA76JdDQcD6yB-zioqmfu7m5-S8AUvV-P5GxIYV087YzR-J4puQ0bZRpJsWSf3WWQ_hB8GGkhvK4g_lO29s0knwxdZ6BOMzCAus4UgHNE-puoTa8T8Tg3A33n_9d",
                      },
                      {
                        name: "John Smith",
                        program: "Nursing - Year 1",
                        id: "u654321",
                        activity: "2 days ago",
                        activityDate: "Oct 22, 2023",
                        activityColor: "bg-yellow-500",
                        attempts: "3",
                        attemptsPercent: "20%",
                        barClass: "bg-yellow-500",
                        domain: "Patient Safety",
                        domainClass:
                          "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 ring-green-600/20 dark:ring-green-400/20",
                        avatar:
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuDSdi_79s4S5_gxRFaBNRzaE8pYJOtYcOptQf3HbIGMjNxUhGsAlyGlTvu1_IaXdqUb0Zu73-LX1BI-rmnLN1JjTRFcVj4xqAIv_w6AjcyeWK2RwBLkswFPnRwIJC8B4OO_H48DaKc80Cw06DG_29gh5x0PLL0NVfQ26vU9AvB1D6cpYwRFWODdWl04w4zJ2zxO_OuER2MJhgoiGqpBzxRLAwFSExgWhgtp_tfMHckmsF-9yDDJjx8697AK9mZ2mb9Tw2zeMuFUBkw4",
                      },
                      {
                        name: "Sarah Wilson",
                        program: "Nursing - Year 1",
                        id: "u987654",
                        activity: "14 days ago",
                        activityDate: "Oct 10, 2023",
                        activityColor: "bg-red-500",
                        attempts: "1",
                        attemptsPercent: "5%",
                        barClass: "bg-red-500",
                        domain: "Pediatrics",
                        domainClass:
                          "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 ring-purple-700/10 dark:ring-purple-400/20",
                        avatar:
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuCTfJ07CA6O4uwWILYHsetq4J4IlxdYvwyO1CsugrRTMeQVhmushO9p7O4iutSfKUuG6ksKyNilBGXtP_7FDo84JB82KQ1fySHkkQCEx2AEy3bIcVYKmLGsx_-jZxengrb3HiI_ACCzeMjDbTc2nuVWClMvo0VDijBZzm9Atc0xZNRrMPauY_FEoOSOBUpEjoLU7ap8l2cIvV3jCBcLjL0iWM_otiVlTp0Gai1snNHlh1mpLiueptDKFkaQcCDZSMEPGmxxmpJFoDKZ",
                      },
                      {
                        name: "Michael Chang",
                        program: "Nursing - Year 1",
                        id: "u778899",
                        activity: "5 hours ago",
                        activityDate: "Oct 24, 2023",
                        activityColor: "bg-green-500",
                        attempts: "8",
                        attemptsPercent: "55%",
                        barClass: "bg-primary",
                        domain: "Emergency Care",
                        domainClass:
                          "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 ring-orange-600/20 dark:ring-orange-400/20",
                        avatar:
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TeqTYPlbY5tAC49CYk-Ypwng7zgMvAIw2-uMc49lWE8kQ-xN3N6jvDehjPJGHsbMTy_PBg7UTy0Ub3xaNJSUs_njYDa4WR2R9h6GVq2fUEEXZJd7mlkWAZHtKykZxAff3pCybhujCT1XurB-XFlFqOx1Da9J-syy5wPqow-3ux0CQqoaXJsLif176zPf4VjBImbWttdEl51XfdM5txfE9de1wod96EcPjZx9iKHyEvkITJEPbOcaSdBao76TBx-bExepkCrreRqi",
                      },
                      {
                        name: "Amanda Lee",
                        program: "Nursing - Year 1",
                        id: "u112233",
                        activity: "1 day ago",
                        activityDate: "Oct 23, 2023",
                        activityColor: "bg-green-500",
                        attempts: "15",
                        attemptsPercent: "95%",
                        barClass: "bg-primary",
                        domain: "Clinical Reasoning",
                        domainClass:
                          "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-400/20",
                      },
                    ].map((row) => (
                      <tr
                        key={row.id}
                        className="group hover:bg-[#f8f9fa] dark:hover:bg-[#22303e] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {row.avatar ? (
                              <div
                                className="h-10 w-10 rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${row.avatar}')` }}
                              ></div>
                            ) : (
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                                AL
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors cursor-pointer">
                                {row.name}
                              </div>
                              <div className="text-xs text-[#637588] dark:text-[#9ca3af]">
                                {row.program}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-[#637588] dark:text-[#9ca3af] font-mono">
                          {row.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${row.activityColor}`}></div>
                            <span className="text-sm font-medium text-[#111418] dark:text-white">
                              {row.activity}
                            </span>
                          </div>
                          <div className="text-xs text-[#637588] dark:text-[#9ca3af] pl-4">
                            {row.activityDate}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[#111418] dark:text-white">
                              {row.attempts}
                            </span>
                            <div className="h-1.5 w-16 rounded-full bg-[#e5e7eb] dark:bg-[#2f4056]">
                              <div
                                className={`h-1.5 rounded-full ${row.barClass}`}
                                style={{ width: row.attemptsPercent }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${row.domainClass}`}
                          >
                            {row.domain}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#637588] hover:text-primary dark:text-[#9ca3af] dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between border-t border-[#e5e7eb] dark:border-[#2f4056] px-6 py-4">
                <div className="text-sm text-[#637588] dark:text-[#9ca3af]">
                  Showing <span className="font-medium text-[#111418] dark:text-white">1-5</span>{" "}
                  of <span className="font-medium text-[#111418] dark:text-white">42</span> students
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center mr-4">
                    <span className="text-sm text-[#637588] dark:text-[#9ca3af] mr-2">
                      Rows per page:
                    </span>
                    <select className="h-8 rounded border border-[#dbe0e6] dark:border-[#2f4056] bg-transparent text-sm text-[#111418] dark:text-white focus:border-primary focus:outline-none">
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                    </select>
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2f4056] bg-white dark:bg-[#192532] text-[#637588] dark:text-[#9ca3af] hover:border-primary hover:text-primary disabled:opacity-50 disabled:hover:border-[#dbe0e6] disabled:hover:text-[#637588]">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2f4056] bg-white dark:bg-[#192532] text-[#637588] dark:text-[#9ca3af] hover:border-primary hover:text-primary">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
