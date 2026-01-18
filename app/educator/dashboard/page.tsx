export default function EducatorDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col md:flex-row overflow-x-hidden font-display">
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
            style={{
              backgroundImage:
                "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuB1IVo9jZzOt8VcgtEx7rt6qAymy8qDzKa7FKuSi036_-ZgXVWCsATWOpZtZ5yACEaEF6uK6Q2dAaa9Yx774sm6Ztyep7bi1umbXKvEM7mmfuYky2Q923vGr8Z2Q9QxZS-EZ_bSFngJ_yXILKg4-k7CyBLV_ky_gm4_xSqO5lZtwX1BKLWTO4oduxQ4214FjxuMoMbuO6N1NV7IJZ8UFa0JbRYviP9Oxvv8NISBJKDmqakMAFRhECPIvM5ylXGwoASd2qcPMWGXICp6\")",
            }}
          ></div>
          <span className="font-bold text-lg">EduHealth</span>
        </div>
        <button className="p-2 text-slate-500 hover:text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <aside className="hidden md:flex flex-col w-64 h-screen fixed inset-y-0 left-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-all">
        <div className="p-4 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 px-2 pt-2 items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuAu01l1jtC0WU0gX25B3h2nnTShzne1mYj3JU_G_q0dSXGfFhKM5yj_cRTFhGDL1vxCruyGWH280TXJB0LE-vIJJu89Phda5cZQ5KqgR9ks_3-Lw56fD-72N9Hg03SnJn1M3gaAGEK617yWRlatL7lrgyQGb8mgjRaYRGzeuuPaL4PiK2TiaoohK0a5kK8QvIx8mK5CB93uScJcFdJnh4TUOv23FN-4SzXK1_r3fb2uYV_nuZnhocfPMT2WjW0vQW1su70t6wjausnK\")",
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">
                  EduHealth Portal
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                  University of Melbourne
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined fill">dashboard</span>
                <p className="text-sm font-medium leading-normal">Dashboard</p>
              </a>
              {[
                { icon: "groups", label: "Cohorts" },
                { icon: "school", label: "Students" },
                { icon: "assignment", label: "Assignments" },
                { icon: "monitoring", label: "Analytics" },
              ].map((item) => (
                <a
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" href="#">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 px-3">
              <div
                className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyYijwJlEv9He5kWIieLosvSpJqu60Qrg2jqZ-hwsU1X25PPC0anVsC045NDX_-r6_8hO9s9EgFWPwzYNK5FO6ZWVK2cAczN3O8evM0PzrWG3aruCFXBPtZPFvn8YHXm2-4MSQ3zFVIOHFZ6gmDe1wFaybDuZIZVSO2k3rvtsgBOVJkLFpzDFOXdyCXKNZHYVdTZkdgrt_SjrbUYdsw2I-nzawAP3Vfg-fiArQtepNRZNUwXgVCF9GRbiNmb4gFdKjfp1XLpVz4EA8')",
                }}
              ></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Dr. Sarah L.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Faculty Lead</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 md:ml-64 bg-background-light dark:bg-background-dark p-6 md:p-10 flex flex-col gap-8 h-full min-h-screen">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Current View
              </label>
              <div className="relative w-full max-w-sm">
                <select className="appearance-none w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-primary focus:border-primary text-slate-900 dark:text-white text-lg font-bold rounded-lg py-2 pl-4 pr-10 leading-tight focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer shadow-sm">
                  <option value="bn1">Bachelor of Nursing (Year 1)</option>
                  <option value="bn2">Bachelor of Nursing (Year 2)</option>
                  <option value="cp2">Clinical Psychology (Year 2)</option>
                  <option value="md1">Doctor of Medicine (Year 1)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal mt-1">
              Manage student performance, track simulation engagement, and identify at-risk cohorts.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Download Report</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Students</p>
              <span className="material-symbols-outlined text-slate-400">group</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">84%</p>
                <span className="text-emerald-600 dark:text-emerald-500 text-sm font-medium flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                  2.4%
                </span>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">vs. previous 30 days</p>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: "84%" }}></div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Attempts (7 Days)</p>
              <span className="material-symbols-outlined text-slate-400">bar_chart</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">1,240</p>
                <span className="text-emerald-600 dark:text-emerald-500 text-sm font-medium flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                  12%
                </span>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">vs. previous 7 days</p>
            </div>
            <div className="flex items-end gap-1 h-3 mt-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`spark-${index}`}
                  className="w-full bg-slate-100 dark:bg-slate-800 rounded-sm"
                  style={{ height: `${40 + index * 10}%` }}
                ></div>
              ))}
              <div className="w-full bg-primary rounded-sm h-full"></div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Common Areas for Improvement
              </p>
              <span className="material-symbols-outlined text-slate-400">psychology</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Active Listening</span>
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xs bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
                  Low Score
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Safety Protocols</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xs bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                  Med Risk
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Empathy</span>
                <span className="text-slate-500 text-xs">Trending Down</span>
              </div>
            </div>
            <button className="text-primary text-xs font-bold self-start hover:underline">
              View Detailed Breakdown →
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">
              Students Requiring Attention
            </h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  className="pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary w-full sm:w-64"
                  placeholder="Search students..."
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-lg">
                  search
                </span>
              </div>
              <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex-1">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                    {[
                      "Student Name",
                      "Student ID",
                      "Last Active",
                      "Engagement",
                      "Status",
                      "Action",
                    ].map((header) => (
                      <th
                        key={header}
                        className={`p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ${
                          header === "Action" ? "text-right" : ""
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    {
                      name: "James Harper",
                      id: "#940211",
                      activity: "14/10/2023",
                      engagement: "25%",
                      engagementWidth: "25%",
                      engagementColor: "bg-red-500",
                      status: "Critical Risk",
                      statusClass: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
                      avatar:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMCL99yPkgjC4beVMo3LGqg56LtT7qwfnzy55Dpg-9JemywSv_Z_xZjkw_8Cx24WUJfIZDXgkX1LJhTg3voSv2dPxc3wsoWDSX-vWkjV9KUEHH-jM4imXzzPyjOHSHwcGHdRGEXNMX5cdMEzafBzOqNvVmh-Q0cdR7gCMx4wLCNPKvdCOU-3SwSRfR8nch7DhcypMWi6AdZPuS0JMMiNRBf6h3abioUM-p_1Fl0JOLbjzM5nuGDOlMM48QYsUl8_ImWtuEzxSP_cSe",
                    },
                    {
                      name: "Emily Chen",
                      id: "#940552",
                      activity: "20/10/2023",
                      engagement: "45%",
                      engagementWidth: "45%",
                      engagementColor: "bg-amber-500",
                      status: "Moderate Risk",
                      statusClass:
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
                      avatar:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoqkIU3gqRfXaLsZzh3iL0nUh1j2dR1ZYRiML9LekavmBxBF3hK_8pBBDzAdKsEwxzgyemHcv8iAwaRxQMcAtKmNmvlDgcWramonsj0ZQe-rBDVROr3pBItV0T6HbKt2Xc3EwT9M2FE10UvRP33ZU6lKU55evZK5STpu6UawWWbMVu88JbZgMRP1LlPbMyYgD2872bf1zAdORByxoO0fVttxWf4aFRdZ8pyRtdFqmJ3CHfQ12MjBYWJn6sn-VQANtLZR47pdUNmThh",
                    },
                    {
                      name: "Marcus Johnson",
                      id: "#941003",
                      activity: "18/10/2023",
                      engagement: "52%",
                      engagementWidth: "52%",
                      engagementColor: "bg-amber-500",
                      status: "Moderate Risk",
                      statusClass:
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
                      avatar:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTuURWMkg3BLhUZpGsXMolEMz10V_CtbvNETkOaKLgPtZvZRrG7aSFstkubMP4ZyfkmdSHyM2RfF_qlNqW_qItnCS5rKPre9wNuAD-_1dyGSHP7vCfbYYfAZayuPEp0f9HVqwbOt_muXgEhdAaWN1qlI60cs4-RZ9Ugd7hlT9OMRl6_a8Ks8UnF2Wk202ue6J8GXG71G4zq76qrkgMySZtpYnVeRuCGI2BuSozzzloc-ZZcD0L-FXOzjcGWfLucvLv66nVq4Z-76MY",
                    },
                    {
                      name: "Sarah Connor",
                      id: "#940889",
                      activity: "22/10/2023",
                      engagement: "58%",
                      engagementWidth: "58%",
                      engagementColor: "bg-yellow-400",
                      status: "Monitor",
                      statusClass:
                        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
                      avatar:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9kuHcpJ9oebcdbYXEaZhDz6UHcItt0hmQ9piHqR7S2kqWPQDAr7v3J4L24v3YofvaKHX9fWFQnfLjO8-mFEYPpiIAFMiWMho82vw3_junWtCTxPxcVjYXT1RFtJ_E-EqwFuJ-5LZ61yMiYZcswVvL5NSvLPvmFEs93om0PCqzT8w4abl-d9ycyWhTvo0gLZ3_pKSa-EjdVOui4qIsuOAKfZuR-QuHTuBkeOho9BcOUaLaxgYVU-fZcr_1bUx5TqU1JIPP-WqHaxt9",
                    },
                  ].map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover flex-shrink-0"
                            style={{ backgroundImage: `url('${row.avatar}')` }}
                          ></div>
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {row.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Nursing Year 1</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                        {row.id}
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.activity}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${row.engagementColor} rounded-full`}
                              style={{ width: row.engagementWidth }}
                            ></div>
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              row.engagementColor === "bg-red-500"
                                ? "text-red-600 dark:text-red-400"
                                : row.engagementColor === "bg-amber-500"
                                  ? "text-amber-600 dark:text-amber-400"
                                  : "text-yellow-600 dark:text-yellow-400"
                            }`}
                          >
                            {row.engagement}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium">
                          Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/20">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Showing 4 of 12 students needing attention
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
