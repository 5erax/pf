export type ProjectCategory = "Frontend" | "Fullstack" | "Mobile" | "AI";

export type Project = {
  title: string;
  category: ProjectCategory;
  role: string;
  oneLiner: string;
  description: string;
  caseStudy: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  techDecisions: string[];
  keyScreens: string[];
  lessonsLearned: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    title: "GeoConnect",
    category: "Fullstack",
    role: "Fullstack product engineer",
    oneLiner:
      "A proximity-first social experience for people, places, and local events.",
    description:
      "A location-based social network that helps users connect with people nearby, discover places, and explore real-time local events.",
    caseStudy: {
      challenge:
        "Make nearby people, places, and live events easy to discover without overwhelming the map experience.",
      solution:
        "Combined location-aware discovery with real-time updates and a clear social browsing flow.",
      outcome:
        "A focused local network concept that makes proximity useful, understandable, and actionable.",
    },
    techDecisions: [
      "Used real-time events for nearby activity updates.",
      "Separated discovery states so map and feed interactions stay understandable.",
      "Kept social actions close to location context.",
    ],
    keyScreens: ["Nearby discovery", "Local event feed", "Profile connection flow"],
    lessonsLearned: [
      "Location-heavy products need strong hierarchy before adding more map detail.",
      "Real-time UI needs calm status feedback to avoid noisy interaction.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/5erax/geoconnect",
    liveUrl: null,
  },
  {
    title: "CVmate",
    category: "AI",
    role: "AI workflow and frontend engineer",
    oneLiner:
      "An AI-assisted resume workflow that turns raw career details into a polished CV.",
    description:
      "An AI-powered CV generator that analyzes user information and creates polished, professional resumes ready for PDF export.",
    caseStudy: {
      challenge:
        "Turn unstructured career details into a concise resume without forcing users through a complex editor.",
      solution:
        "Guided users through structured inputs, AI-assisted writing, live preview, and reliable PDF export.",
      outcome:
        "A faster path from raw experience to a polished CV that is ready to review and share.",
    },
    techDecisions: [
      "Structured user inputs before AI generation to improve output quality.",
      "Kept preview close to editing so users can verify content quickly.",
      "Designed export flow around review confidence instead of one-click magic.",
    ],
    keyScreens: ["Input wizard", "AI draft preview", "PDF export review"],
    lessonsLearned: [
      "AI products need visible control points so users trust the generated result.",
      "Good document export depends on predictable layout constraints.",
    ],
    techStack: ["JavaScript", "React", "AI/LLM", "PDF Export"],
    githubUrl: "https://github.com/5erax/CVmate",
    liveUrl: null,
  },
  {
    title: "Ecomerce Mobile",
    category: "Mobile",
    role: "Mobile app frontend engineer",
    oneLiner:
      "A cross-platform shopping flow from browsing to checkout and order tracking.",
    description:
      "A cross-platform shopping application built with React Native, featuring product browsing, cart management, checkout flow, and order tracking.",
    caseStudy: {
      challenge:
        "Keep browsing, cart, checkout, and order status consistent across mobile platforms.",
      solution:
        "Designed a reusable React Native flow with persistent cart state and clear checkout feedback.",
      outcome:
        "A coherent mobile shopping journey from product discovery through delivery tracking.",
    },
    techDecisions: [
      "Used reusable mobile screens for browsing, cart, and checkout states.",
      "Kept cart state persistent across the purchase journey.",
      "Designed order tracking as a simple status timeline.",
    ],
    keyScreens: ["Product browsing", "Cart and checkout", "Order tracking"],
    lessonsLearned: [
      "Mobile commerce needs short paths and large, predictable touch targets.",
      "Checkout feedback must be explicit at every transition.",
    ],
    techStack: ["React Native", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/5erax/ecomerce-mobile",
    liveUrl: null,
  },
  {
    title: "Flowery",
    category: "Frontend",
    role: "Frontend UI engineer",
    oneLiner:
      "A warm storefront experience for browsing categories and placing flower orders.",
    description:
      "A refined online flower shop website with product categories, ordering flow, and a fresh pastel visual style.",
    caseStudy: {
      challenge:
        "Present a broad flower catalog while keeping the ordering experience warm, simple, and trustworthy.",
      solution:
        "Used clear categories, visual product hierarchy, and a streamlined path from selection to order.",
      outcome:
        "A welcoming storefront that balances brand character with practical product discovery.",
    },
    techDecisions: [
      "Used category-led navigation to reduce catalog scanning effort.",
      "Balanced soft visual style with clear ordering actions.",
      "Kept product hierarchy simple for quick decision-making.",
    ],
    keyScreens: ["Landing storefront", "Product category grid", "Order path"],
    lessonsLearned: [
      "Brand atmosphere works best when ordering actions remain obvious.",
      "Small storefronts benefit from clear categories more than dense filters.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/5erax/Flowery",
    liveUrl: null,
  },
  {
    title: "MLN Web",
    category: "Frontend",
    role: "Frontend learning experience engineer",
    oneLiner:
      "A study hub that organizes course materials, lectures, and revision resources.",
    description:
      "A learning website for Marxism-Leninism materials, lectures, and online revision resources for students.",
    caseStudy: {
      challenge:
        "Organize dense learning materials so students can find lectures and revision content quickly.",
      solution:
        "Structured content by learning intent with readable navigation and focused revision surfaces.",
      outcome:
        "A more approachable study hub for browsing, reviewing, and returning to course resources.",
    },
    techDecisions: [
      "Grouped content by student intent instead of raw file structure.",
      "Prioritized readable navigation for dense academic material.",
      "Used Vite and TypeScript for a maintainable frontend foundation.",
    ],
    keyScreens: ["Material library", "Lecture browsing", "Revision resources"],
    lessonsLearned: [
      "Learning products need fast return paths to previously used resources.",
      "Content-heavy pages need stronger structure than decorative styling.",
    ],
    techStack: ["TypeScript", "React", "Vite"],
    githubUrl: "https://github.com/5erax/MLN-web",
    liveUrl: null,
  },
];
