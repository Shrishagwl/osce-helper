export default function AdminSettingsPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        <aside className="w-64 bg-white dark:bg-[#1a2632] border-r border-[#e5e7eb] dark:border-[#2a3a4a] flex-shrink-0 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-[#e5e7eb] dark:border-[#2a3a4a]">
            <div className="flex gap-3 items-center">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuAlDANkk95ijDs5wYXp3Vm1KB_HeTieXQlevPb8ugQi9dISLw6kzCHb9TK_DG3zKSXqg7MwEtAf-HBc95vAuQYO-uhW8c8nBCx8GMcoEkIxhx0EhUtjM_T4zSdDlkmBEuXCEUoCaAPSuWsTKhVdS06AvKzWOOqrw0uSHbNrAV66XOwMa5-Cj-Fo2so5zYGvmLG_-yPxkDWo0s1ofJoWBLDrZtO11eaKBhkQYOv1jW57VpbtnCsaqKXY1OYzbZW-qXXy5T_UCmkU64g6\")",
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold leading-normal">Admin Panel</h1>
                <p className="text-[#617589] dark:text-[#94a3b8] text-xs font-normal">
                  University of Melbourne
                </p>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
            {[
              { label: "Overview", icon: "pie_chart" },
              { label: "Institution", icon: "domain", active: true },
              { label: "Users", icon: "group" },
              { label: "Billing", icon: "payments" },
              { label: "Audit Logs", icon: "assignment" },
            ].map((item) => (
              <a
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3a4a]"
                }`}
                href="#"
              >
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2a3a4a]">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3a4a] transition-colors" href="#">
              <span className="material-symbols-outlined text-[24px]">logout</span>
              <span className="text-sm font-medium">Sign Out</span>
            </a>
          </div>
        </aside>
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <header className="bg-white dark:bg-[#1a2632] border-b border-[#e5e7eb] dark:border-[#2a3a4a] h-16 flex items-center justify-between px-6 md:px-10 shrink-0">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-[#617589] dark:text-[#94a3b8]">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="text-primary size-8 flex items-center justify-center rounded bg-primary/10">
                <span className="material-symbols-outlined">local_hospital</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight hidden sm:block">MediSim Admin</h2>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="hidden sm:block">
                <label className="relative flex items-center w-64 h-10 rounded-lg bg-[#f0f2f4] dark:bg-[#2a3a4a] overflow-hidden focus-within:ring-2 ring-primary/50 transition-all">
                  <div className="pl-3 pr-2 text-[#617589]">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input
                    className="w-full bg-transparent border-none text-sm focus:ring-0 placeholder:text-[#617589] dark:text-white"
                    placeholder="Search settings..."
                    type="text"
                  />
                </label>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-[#617589] dark:text-[#94a3b8] hover:text-primary transition-colors relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]"></span>
                </button>
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-9 border-2 border-white dark:border-[#2a3a4a] shadow-sm"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCkOMS2MTrj2AlzKS9JD0s01HxC0hNUgoSMbkxVPbZfjiuwZa_VU85bi3z0FC-sYmV9VqQcOiW0lT8JQ_sJNpOiFHYOUWRfxhNoQ-vbhOrlTW41wrar1aPqzp3hpIyPHpPuDybkdAKND5q3bzm15dvdL7pr0N22eafpjJWrqm4G-yaT_o3uhDcZFby4Z6Y5WmJGDFF4SRjkG1MTX7FfBLm_tshlm7O_x3VaVZNuBcP5PhYZmBQMpaOciFo3B94g0Lc_oUo-AQnvTwyH\")",
                  }}
                ></div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-10 scroll-smooth">
            <div className="max-w-5xl mx-auto flex flex-col gap-6 pb-20">
              <nav className="flex items-center gap-2 text-sm text-[#617589] dark:text-[#94a3b8]">
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <a className="hover:text-primary transition-colors" href="#">
                  Admin
                </a>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-[#111418] dark:text-white font-medium">
                  Institution Settings
                </span>
              </nav>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#e5e7eb] dark:border-[#2a3a4a] pb-6">
                <div className="space-y-1">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#111418] dark:text-white">
                    Institution Settings
                  </h1>
                  <p className="text-[#617589] dark:text-[#94a3b8] text-base max-w-2xl">
                    Manage general details, feature availability, and governance compliance for your
                    institution.
                  </p>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white font-bold h-10 px-6 rounded-lg flex items-center gap-2 shadow-sm transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  <span>Save Changes</span>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3a4a] overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#e5e7eb] dark:border-[#2a3a4a] bg-[#fafafa] dark:bg-[#202e3b]">
                    <h2 className="text-lg font-bold text-[#111418] dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">badge</span>
                      General Information
                    </h2>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex flex-col gap-3 items-center">
                        <div className="size-24 rounded-full bg-[#f0f2f4] dark:bg-[#2a3a4a] flex items-center justify-center border-2 border-dashed border-[#d1d5db] dark:border-[#4b5563] relative overflow-hidden group cursor-pointer">
                          <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center text-white font-medium z-10 transition-opacity">
                            Change
                          </div>
                          <div
                            className="bg-center bg-no-repeat bg-contain size-16"
                            style={{
                              backgroundImage:
                                "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDOQILCNEt5HK2FclPiDqvL9ue-uhhJ_dbr3AS85kDUWeJtTe2d_ITrGHAuO5x5jv1WRpnymobmBZRFsXUDkZ8n-uNn7mR39mI7Eg0pTfT-Rgmtde00z0jfmOtbg9aq_6nBacwmO2NyFEM8gq5sf6BsDMT6JduUjr1pkGUxJz3rAgFat8ahTq5XwUFf0lOeFBQ9va7ZswaBzevHqN9Ts_FJzr_0kq6OSdOercsdE2WOJ-Q1yFBnXk6L-F7F1qbjblnnM_wI7SY6_s9d\")",
                            }}
                          ></div>
                        </div>
                        <p className="text-xs font-medium text-[#617589] dark:text-[#94a3b8]">
                          Institution Logo
                        </p>
                      </div>
                      <div className="flex-1 w-full space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-[#111418] dark:text-white">
                              Institution Name
                            </label>
                            <input
                              className="w-full h-11 rounded-lg border border-[#d1d5db] dark:border-[#4b5563] bg-white dark:bg-[#1a2632] px-4 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                              type="text"
                              defaultValue="University of Melbourne - Nursing"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-[#111418] dark:text-white flex items-center gap-1">
                              Institution ID
                              <span
                                className="material-symbols-outlined text-[16px] text-[#617589] cursor-help"
                                title="Unique identifier used for API integrations"
                              >
                                help
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                className="w-full h-11 rounded-lg border border-[#e5e7eb] dark:border-[#2a3a4a] bg-[#f8fafc] dark:bg-[#151e28] px-4 text-[#617589] font-mono text-sm"
                                readOnly
                                type="text"
                                value="INST-8839-MEL-01"
                              />
                              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-blue-700">
                                <span className="material-symbols-outlined text-[20px]">
                                  content_copy
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-semibold text-[#111418] dark:text-white">
                            Contact Email
                          </label>
                          <input
                            className="w-full md:w-1/2 h-11 rounded-lg border border-[#d1d5db] dark:border-[#4b5563] bg-white dark:bg-[#1a2632] px-4 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            type="email"
                            defaultValue="admin@unimelb.edu.au"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3a4a] overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#e5e7eb] dark:border-[#2a3a4a] bg-[#fafafa] dark:bg-[#202e3b]">
                    <h2 className="text-lg font-bold text-[#111418] dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">school</span>
                      Feature Toggles
                    </h2>
                  </div>
                  <div className="p-0">
                    <div className="divide-y divide-[#e5e7eb] dark:divide-[#2a3a4a]">
                      {[
                        {
                          title: "Voice Interaction Scenarios",
                          description:
                            "Allow students to interact with simulated patients using natural voice input.",
                          icon: "record_voice_over",
                          iconClass: "bg-blue-50 dark:bg-blue-900/20 text-primary",
                          checked: true,
                        },
                        {
                          title: "Automated AI Feedback",
                          description:
                            "Generate post-simulation clinical assessment reports automatically.",
                          icon: "auto_fix_high",
                          iconClass: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
                          checked: true,
                        },
                        {
                          title: "Multi-player Simulation",
                          description:
                            "Enable scenarios that support multiple concurrent student roles (e.g. Nurse & Doctor).",
                          icon: "diversity_3",
                          iconClass: "bg-orange-50 dark:bg-orange-900/20 text-orange-600",
                          checked: false,
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-center justify-between p-6 hover:bg-[#f8fafc] dark:hover:bg-[#202e3b] transition-colors"
                        >
                          <div className="flex gap-4">
                            <div
                              className={`size-10 rounded-full flex items-center justify-center shrink-0 ${item.iconClass}`}
                            >
                              <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <div className="space-y-1">
                              <h3 className="text-base font-semibold text-[#111418] dark:text-white">
                                {item.title}
                              </h3>
                              <p className="text-sm text-[#617589] dark:text-[#94a3b8]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" defaultChecked={item.checked} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3a4a] overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#e5e7eb] dark:border-[#2a3a4a] bg-[#fafafa] dark:bg-[#202e3b]">
                    <h2 className="text-lg font-bold text-[#111418] dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">gavel</span>
                      Data & Governance
                    </h2>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-semibold text-[#111418] dark:text-white">
                            Data Residency Region
                          </label>
                          <div className="relative">
                            <select className="w-full h-11 rounded-lg border border-[#d1d5db] dark:border-[#4b5563] bg-white dark:bg-[#1a2632] px-4 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                              <option>Australia East (New South Wales)</option>
                              <option>Australia Southeast (Victoria)</option>
                              <option>Global (US-East)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#617589]">
                              <span className="material-symbols-outlined">expand_more</span>
                            </div>
                          </div>
                          <p className="text-xs text-[#617589] dark:text-[#94a3b8] mt-1">
                            All student PII will remain within this jurisdiction.
                          </p>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb] dark:border-[#2a3a4a] bg-[#f8fafc] dark:bg-[#151e28]">
                          <div className="flex gap-3">
                            <span className="material-symbols-outlined text-green-600">security</span>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#111418] dark:text-white">
                                Strict AI Ethics Compliance
                              </span>
                              <span className="text-xs text-[#617589] dark:text-[#94a3b8]">
                                Filter bias & harmful outputs
                              </span>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" defaultChecked />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-[#111418] dark:text-white">
                          Compliance Status
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            {
                              label: "GDPR Ready",
                              icon: "verified_user",
                              className:
                                "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
                            },
                            {
                              label: "HIPAA Compliant",
                              icon: "lock",
                              className:
                                "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
                            },
                            {
                              label: "ISO 27001",
                              icon: "policy",
                              className:
                                "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700",
                            },
                            {
                              label: "IRAP Assessed",
                              icon: "gavel",
                              className:
                                "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${item.className}`}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                {item.icon}
                              </span>
                              <span className="text-xs font-bold">{item.label}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg flex gap-3 items-start mt-4">
                          <span className="material-symbols-outlined text-blue-600 text-[20px] mt-0.5">
                            info
                          </span>
                          <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                            Your institution is currently compliant with the Australian Higher
                            Education Standards Framework (Threshold Standards) 2021 regarding data
                            sovereignty.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
