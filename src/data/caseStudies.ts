export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  org: string;
  timeframe?: string;
  domainTags: string[];
  techTags: string[];
  highlights: string[]; // top impact metrics
  sections: Array<{
    heading: string;
    bullets: string[];
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "special-projects-db",
    title: "Multi-Agency Special Projects Database Modernization",
    subtitle: "Cloud-native workflow platform for compliance-heavy federal submissions",
    org: "ICF International | U.S. Forest Service",
    timeframe: "Jan 2022 – Jun 2025",
    domainTags: ["Federal", "Workflow", "Compliance", "Microservices"],
    techTags: ["Angular", "TypeScript", "OAuth2", "JWT", "SSO", "CI/CD", "Cloud"],
    highlights: [
      "Eliminated 7,000+ annual manual submissions",
      "Reduced approval timelines by 40%",
      "Improved uptime confidence via operational readiness practices",
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Manual submissions and fragmented processes slowed approvals across agencies.",
          "Legacy workflows created scaling and governance challenges.",
        ],
      },
      {
        heading: "Constraints",
        bullets: [
          "Federal security and compliance requirements.",
          "Zero disruption to active programs and existing auth systems.",
          "Multi-agency data governance and role separation.",
        ],
      },
      {
        heading: "Architecture Decisions",
        bullets: [
          "Adopted cloud-native microservices boundaries for submission, approval, reporting, and auth-related concerns.",
          "Implemented OAuth2, JWT, and SSO integration with role-based access controls.",
          "Standardized CI/CD and deployment pipelines across services to reduce release risk.",
          "Established monitoring, incident response workflows, and post-incident RCA processes.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Significantly reduced operational cycle time and manual effort.",
          "Improved platform resilience and release confidence across distributed teams.",
        ],
      },
      {
        heading: "Key Lessons",
        bullets: [
          "Service boundaries created early prevent long-term architectural debt.",
          "Security architecture must be embedded from day one in compliance environments.",
          "Operational maturity is a product feature, not an afterthought.",
        ],
      },
    ],
  },
  {
    id: "federal-dashboard-platform",
    title: "High-Performance Federal Dashboard Platform",
    subtitle: "Scalable dashboards with optimized data delivery and UX performance",
    org: "Creative Systems and Consulting LLC",
    timeframe: "Oct 2019 – Dec 2021",
    domainTags: ["Dashboards", "Reporting", "Performance", "High-traffic"],
    techTags: ["Web APIs", "SQL", "Indexing", "Caching", "Frontend Performance"],
    highlights: [
      "Improved frontend performance by 25%",
      "Reduced backend load via optimized queries and data shaping",
      "Delivered extensible patterns for future dashboards",
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Reporting was slow and fragmented, limiting visibility for non-technical users.",
          "High-traffic workflows required faster UI and more reliable data delivery.",
        ],
      },
      {
        heading: "Architecture Decisions",
        bullets: [
          "Optimized API endpoints with data shaping to reduce frontend work and payload size.",
          "Improved query performance via indexing, stored procedure refinement, and targeted tuning.",
          "Applied frontend performance techniques (component structure, lazy loading patterns where applicable).",
          "Iterated closely with stakeholders for UX improvements without compromising maintainability.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Achieved 25% frontend performance improvement and smoother user experience.",
          "Improved adoption and operational decision speed by reducing friction in reporting workflows.",
        ],
      },
      {
        heading: "Key Lessons",
        bullets: [
          "API-level data shaping is a powerful lever for frontend performance.",
          "Performance improvements compound at scale when applied systematically.",
          "Strong UX requires iterative collaboration, not one-time handoff.",
        ],
      },
    ],
  },
  {
    id: "workforce-automation",
    title: "Workflow Automation & Incident Reduction Platform",
    subtitle: "Modular workforce/HR workflows with reliability and resolution-time gains",
    org: "MJobTime Corporation",
    timeframe: "Feb 2018 – Oct 2019",
    domainTags: ["Workforce", "HR", "Automation", "Reliability"],
    techTags: ["Modular Services", "Algorithms", "SQL", "Performance Tuning"],
    highlights: [
      "Reduced issue resolution time by 30%",
      "Improved system reliability through refactoring and optimization",
      "Delivered real-time labor tracking with multi-time-zone accuracy",
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Complex workforce workflows required real-time accuracy across time zones and high transaction volume.",
          "Incidents took too long to resolve due to workflow gaps and legacy bottlenecks.",
        ],
      },
      {
        heading: "Architecture Decisions",
        bullets: [
          "Built modular components/services for workforce and HR workflow automation.",
          "Implemented algorithm-driven time tracking logic for multi-time-zone correctness.",
          "Refactored performance-critical paths and improved query efficiency with indexing and tuning.",
          "Strengthened error handling and debugging practices to reduce repeat incidents.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Reduced issue resolution time by 30% and improved customer satisfaction.",
          "Increased maintainability and scalability by modernizing legacy modules.",
        ],
      },
      {
        heading: "Key Lessons",
        bullets: [
          "Correctness in time-based systems requires careful edge-case design.",
          "Reliability improves fastest when you combine refactoring with operational feedback loops.",
          "Small performance wins add up quickly in high-volume systems.",
        ],
      },
    ],
  },
];