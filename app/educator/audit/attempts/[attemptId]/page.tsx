export default function EducatorAuditAttemptPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display flex flex-col h-screen overflow-hidden antialiased">
      <header className="h-16 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary p-2 rounded-lg">
              <span className="material-symbols-outlined text-xl">medical_services</span>
            </div>
            <div>
              <h1 className="text-sm font-bold leading-tight">EduHealth Audit</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Clinical Simulation Review
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold">Dr. James Wilson</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Senior Educator</p>
            </div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-slate-700 shadow-sm"
              style={{
                backgroundImage:
                  "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCY84wBd3RgEddECmNn_npKpI1aeJdYwq-igabgzw9pEP01h1lQteDn5m36PuqjrKVoBZrJ3eqUqCCKUoaSHSgMGTX4GO6BpZ12tC1dUx0-OVCViite3mGMm-MFGqzt1s65pFaGsZSaF79kf9__4jFvGScfSAmpKEILDz5I0jfFsl6U-VOmJ1AsTvCUn67XiU06GnZ30oRyLw818oMdVAJLDpLyAA5w4KNzOSFn8SvhchjzpI5Sq4WnM57g2G2mhtypOO5U9v0ykRlf\")",
              }}
            ></div>
          </div>
        </div>
      </header>
      <div className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4 shrink-0 shadow-sm z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-14 border border-border-light dark:border-border-dark"
                style={{
                  backgroundImage:
                    "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuAJFmpzITz4Fnl1BQWtiEZZzcON7Zir9HRlpApFn01u-rmn-OZfu3MUpytle-pFajyfTqTu-pN8aSmOyrJbdCVuEkTR4-8By9E1FI84j_T-BaxV_5pYBO230aRhfSJc7pHqn6pk_j1Hf9ZvQXvLrhxbCFWBRAHTYU-U6To17Iz81-tgX9mn8Wha5H2I0E5gi5MfM5-JDBnBOQx14My4Vcy6_xF-v5x-bUeHRCbC22N-0U4jYaymJUDMcKFZ-Tw9xiBZdCIsyMINMFqG\")",
                }}
              ></div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white dark:border-surface-dark size-4 rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h2>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-0.5 rounded font-mono">
                  ID: 49202
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  Attempt #4
                </span>
                <span>•</span>
                <span>Acute Chest Pain Scenario</span>
                <span>•</span>
                <span>14 Oct 2023, 14:30</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border-light dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-lg">flag</span>
              Flag for Review
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors text-sm font-medium shadow-sm shadow-blue-500/20">
              <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
              Export to PDF
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark border-r border-border-light dark:border-border-dark relative">
          <div className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-border-light dark:border-border-dark px-6 py-3 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">forum</span>
              Session Transcript
            </h3>
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500" title="Search transcript">
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
              <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500" title="Filter options">
                <span className="material-symbols-outlined text-xl">filter_list</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6" id="transcript-container">
            <div className="flex justify-center">
              <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                Session Started: 14:30:05
              </span>
            </div>
            <div className="group flex flex-col items-end gap-1">
              <div className="flex items-end gap-3 justify-end max-w-[85%] pl-8">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-400 font-mono">00:15</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Student (Sarah)
                    </span>
                  </div>
                  <div className="bg-primary text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-sm text-base leading-relaxed">
                    Good morning, my name is Sarah. Can you tell me what brought you in today?
                  </div>
                </div>
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBrN--oxSrEKjxDSpDqUyjN82Ps4dNdvQQK6L8zQC6YBya3adMBtoiMoDTDkJHIqs7lpFqVeaI6Dai3U-ueNf8uB17RNscLOcrf-9UaFhlF54Fq6_4ag73iWlzd84vHU1OPjbt_xH5H2KCs7s__miEE3edFFF7ZSxeiKxVQmUGR_-1SDnP5YreGIcbCKD0JUOAHMwHyHyXME3MHG0Ch71CIes9Cg5NHAzR1HmUyu_DLMcY3AuCK01-IZRu180sPVdCjkuY-FWO4sXfV\")",
                  }}
                ></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 mr-12 text-xs">
                <button className="text-primary hover:underline">Add Note</button>
                <span className="text-slate-300">|</span>
                <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  Copy
                </button>
              </div>
            </div>
            <div className="group flex flex-col items-start gap-1">
              <div className="flex items-end gap-3 max-w-[85%] pr-8">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBslaIZqLxKZMpUfUYtsC-ko-zW8Qp8DETBDvJgqR4LpOai3Ft8tHvSeFYbwbMwAoFIkAYP_FrP9uVBxW2p_clqCWIU0Tr6GDqU1kCO9fVhLgygi6_3Jk7kOv9bcHQouQFOh6HJlMclT2ENKdZKgIGKEgwKATzuURHC9kcyEQnppTCNK9YzfPklcCYBDFUKPO49X4UtPxTAujqwQaXECEsPVnei4bbk-St1zl0-FOWJ4bI0V-OiCxLX7S7OwRLAKU6wGiom24e68LAv\")",
                  }}
                ></div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Patient (Mr. Thompson)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">00:20</span>
                  </div>
                  <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-slate-800 dark:text-slate-200 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm text-base leading-relaxed">
                    I have this... really crushing pain in my chest. It feels heavy, like an elephant
                    is sitting on me.
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-end gap-1" id="msg-0042">
              <div className="flex items-end gap-3 justify-end max-w-[85%] pl-8">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-400 font-mono">00:42</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Student (Sarah)
                    </span>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 text-slate-800 dark:text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-sm text-base leading-relaxed relative">
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex items-center gap-1 text-primary text-xs font-bold animate-pulse">
                      <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                      Rubric #2
                    </div>
                    I'm sorry to hear that. When did the pain start exactly? And does it move anywhere
                    else, like your arm or jaw?
                  </div>
                </div>
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBtW6uy4rWAEmAmfB3SUgnrre7pKOTPEyvGN3MfL6SNFXEl-UEBo80CU6kdzUWfIxD3AyteCuHuvgXxb6vESDLBlEoqkHnhSqPZoHEXVCaRZ5aWQSv5DGRGZf_MkwTEg183nMXTiM7gPf-vBMv-iRuzImY82yqOhPZxs90cXbXd1UyTeDbO47q6z_nCzh5onw2rJEUna7NsIQFTeyO02wlb9TDDF6_PMUG0TdIDU0xhhMKOHLHbs3iye3kRuBjO6bDaz7gvFUAU2vTD\")",
                  }}
                ></div>
              </div>
            </div>
            <div className="group flex flex-col items-start gap-1">
              <div className="flex items-end gap-3 max-w-[85%] pr-8">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBIrqIhsdx4EN-v29yVqSMqyl4lPOlPw_aRWNJN09sHZ9QWPMGkBVezKmN6M0pzxlhdCkcIoMN0kzOpHjEMFEmxhufcMCyUGhUOGMXzX7LoXNyaSnqWpP8QTzDGp1_aNq8ppANFmJpIrjtY-x7YSMPEIHmaUyUoQyxY5YcZM8N-h5VPb67KFFMNI_StY3BGq2OybQfsQbSAvVFDh6Q-cz4AzAyCe1ADxqs3T55VVM5NUOAmU2DW4Gp9gO1dNZLr3M-hKkkUAYWuH17i\")",
                  }}
                ></div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Patient (Mr. Thompson)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">00:55</span>
                  </div>
                  <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-slate-800 dark:text-slate-200 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm text-base leading-relaxed">
                    It started about 20 minutes ago while I was gardening. Yeah, it sort of shoots down
                    my left arm a bit.
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-end gap-1">
              <div className="flex items-end gap-3 justify-end max-w-[85%] pl-8">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-400 font-mono">01:15</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Student (Sarah)
                    </span>
                  </div>
                  <div className="bg-primary text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-sm text-base leading-relaxed">
                    Okay. Have you ever experienced anything like this before? Or do you have any heart
                    conditions?
                  </div>
                </div>
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDIFVM7NLGbVQisUl81oMNNc1od9lRzWO1oNT5y2eQd15Jw-DfOgLVuMfScgVOaFLXHaeyDdCFYZJuyi8veJmgnRgvYajfkKGLWF8_D19q75UFSBYb3zp8UT0Sr_uA_2zr5HisQEbxts8Qwhex9FH-CHBrDFf36L5m6e7mK4OlfYwT9B7-Ztn-IXPU6ousIcQb_A4qnOFFfAUZyo5hFh7YQKnqoIXZ-FwfeOFRTxatlFHJaOgAeGNT32OmC4smBV3ob8-qgkchxtmFH\")",
                  }}
                ></div>
              </div>
            </div>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
              <p className="text-slate-400 text-sm">Remaining transcript content...</p>
            </div>
          </div>
        </section>
        <aside className="w-[450px] xl:w-[500px] bg-surface-light dark:bg-surface-dark flex flex-col shrink-0 border-l border-border-light dark:border-border-dark shadow-xl z-20">
          <div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-white dark:bg-surface-dark">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                AI Feedback Rubric
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-1">
                  <div className="h-2 w-8 rounded-full bg-green-500"></div>
                  <div className="h-2 w-8 rounded-full bg-green-500"></div>
                  <div className="h-2 w-8 rounded-full bg-green-500"></div>
                  <div className="h-2 w-8 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Score: 82%
                </span>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex text-xs font-medium">
              <button className="px-3 py-1.5 bg-white dark:bg-slate-700 shadow-sm rounded-md text-slate-900 dark:text-white">
                All
              </button>
              <button className="px-3 py-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                Failed
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50 dark:bg-[#151f2a]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                  Information Gathering
                </h4>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="mt-0.5 size-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                          Patient Identification
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Student introduced self and confirmed patient details.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">1.0/1.0</span>
                  </div>
                  <div className="mt-3 pl-8 hidden group-hover:block animate-fade-in">
                    <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-dark transition-colors">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      View evidence at 00:15
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border-l-4 border-l-primary border-y border-r border-y-primary/20 border-r-primary/20 shadow-md cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">target</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="flex gap-3">
                      <div className="mt-0.5 size-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          Pain Characterization (SOCRATES)
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Asked about radiation, onset, and severity.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      1.0/1.0
                    </span>
                  </div>
                  <div className="mt-3 pl-8 flex flex-col gap-2 relative z-10">
                    <div className="text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 italic">
                      "Does it move anywhere else, like your arm or jaw?"
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors self-start">
                      <span className="material-symbols-outlined text-sm">my_location</span>
                      Jump to 00:42
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                  Clinical Reasoning
                </h4>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="mt-0.5 size-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-sm font-bold">close</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                          Allergy Check
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Student failed to ask about drug allergies before suggesting aspirin.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-red-500">0.0/1.0</span>
                  </div>
                  <div className="mt-3 pl-8 hidden group-hover:block animate-fade-in">
                    <span className="text-xs text-red-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      Critical safety omission
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="mt-0.5 size-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-sm font-bold">priority_high</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                          Empathy & Tone
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Tone was professional but slightly rushed.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-yellow-600">0.5/1.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border-light dark:border-border-dark bg-white dark:bg-surface-dark flex flex-col h-64 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-sm">lock</span>
                <h4 className="text-sm font-bold">Educator Private Notes</h4>
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-slate-500 hover:text-primary underline">Templates</button>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <textarea
                className="w-full h-full resize-none bg-transparent border-0 focus:ring-0 p-0 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400"
                placeholder="Type your private assessment notes here. These are not visible to the student..."
              ></textarea>
            </div>
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border-t border-border-light dark:border-border-dark flex justify-between items-center">
              <span className="text-xs text-slate-400">Last saved: Just now</span>
              <button className="px-3 py-1.5 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                Save Note
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
