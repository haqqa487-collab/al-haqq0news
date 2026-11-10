// Sections of the publication. Shared by server and client code.
export const SECTIONS = [
  {
    slug: "east-africa",
    name: "East Africa",
    description:
      "Kenya, Somalia, Ethiopia, Sudan, South Sudan, Uganda, Tanzania — and the diplomacy and security questions that bind the region together.",
    topics: ["Kenya", "Somalia", "Ethiopia", "Sudan", "South Sudan", "Uganda", "Tanzania", "Regional Security"],
  },
  {
    slug: "investigations",
    name: "Investigations",
    description:
      "Accountability journalism: corruption, governance, human rights and the failures of institutions that are meant to protect the public.",
    topics: ["Accountability", "Governance", "Human Rights", "Corruption"],
  },
  {
    slug: "conflict",
    name: "Conflict & Humanitarian",
    description:
      "Sudan, eastern Congo, Somalia, Mozambique, Ethiopia and other wars — reported through the people who live with their consequences.",
    topics: ["Sudan", "DR Congo", "Somalia", "Mozambique", "Ethiopia", "Yemen", "Public Health"],
  },
  {
    slug: "international",
    name: "International Affairs",
    description:
      "Diplomacy, geopolitical competition, global institutions and political transitions — and what they mean for Africa.",
    topics: ["Syria", "Diplomacy", "Geopolitics", "Global Institutions"],
  },
  {
    slug: "opinion",
    name: "Opinion & Analysis",
    description: "Carefully argued essays and analysis by the editor, clearly labelled as such.",
    topics: ["Analysis", "Opinion"],
  },
];

export const ARTICLE_TYPES = ["Investigation", "Report", "Analysis", "Opinion", "Explainer"];

export const LEDGER_KINDS = {
  fact: { label: "Established", note: "Confirmed by documentary evidence or multiple independent sources" },
  official: { label: "Official statement", note: "What authorities or parties say — reported, not endorsed" },
  allegation: { label: "Allegation", note: "Claimed or reported, not independently verified by AL-HAQQ" },
  unresolved: { label: "Unresolved", note: "Questions that remain open" },
};

export function sectionBySlug(slug) {
  return SECTIONS.find((s) => s.slug === slug);
}

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}
