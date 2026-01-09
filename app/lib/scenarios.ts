export type Scenario = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  patientName: string;
  patientAge: number;
  presentingComplaint: string;
  learningObjectives: string[];
};

export const scenarios: Scenario[] = [
  {
    id: "chest-pain",
    title: "Chest pain in a stressed student",
    description:
      "Practice focused history-taking and reassurance while assessing red flags.",
    category: "Acute care",
    difficulty: "intermediate",
    patientName: "Alex Morgan",
    patientAge: 24,
    presentingComplaint: "Intermittent chest tightness for 2 days",
    learningObjectives: [
      "Assess cardiac vs. non-cardiac causes",
      "Explore anxiety triggers",
      "Explain next steps clearly",
    ],
  },
  {
    id: "asthma-review",
    title: "Asthma control review",
    description:
      "Review inhaler use, trigger control, and action planning with a patient.",
    category: "Chronic conditions",
    difficulty: "beginner",
    patientName: "Priya Singh",
    patientAge: 19,
    presentingComplaint: "Wheezing during exercise",
    learningObjectives: [
      "Check adherence and technique",
      "Discuss trigger avoidance",
      "Agree on a self-management plan",
    ],
  },
  {
    id: "breaking-news",
    title: "Breaking difficult news",
    description:
      "Deliver a sensitive diagnosis with empathy and supportive language.",
    category: "Communication skills",
    difficulty: "advanced",
    patientName: "Samuel Lewis",
    patientAge: 52,
    presentingComplaint: "Follow-up on recent scan results",
    learningObjectives: [
      "Use a structured framework",
      "Acknowledge emotions",
      "Offer immediate support",
    ],
  },
  {
    id: "mental-health",
    title: "Low mood and sleep disruption",
    description:
      "Explore mood, safety, and coping while building rapport.",
    category: "Mental health",
    difficulty: "intermediate",
    patientName: "Lina Chen",
    patientAge: 27,
    presentingComplaint: "Low mood for 6 weeks",
    learningObjectives: [
      "Screen for risk",
      "Gather psychosocial context",
      "Agree on next steps",
    ],
  },
];
