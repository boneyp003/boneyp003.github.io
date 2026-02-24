type SeoConfig = {
  title: string;
  description: string;
};

const BASE_TITLE = "Boney Patel | Full-Stack Cloud Engineer";

const seoMap: Record<string, SeoConfig> = {
  home: {
    title: BASE_TITLE,
    description:
      "Full-stack cloud engineer building secure, scalable systems and modernizing enterprise platforms.",
  },
  experience: {
    title: `Experience | ${BASE_TITLE}`,
    description:
      "Senior software engineering experience across cloud-native microservices, secure APIs, and high-performance systems.",
  },
  projects: {
    title: `Projects | ${BASE_TITLE}`,
    description:
      "Architecture case studies showing measurable impact, modernization strategies, and cloud-native system design.",
  },
  contact: {
    title: `Contact | ${BASE_TITLE}`,
    description:
      "Get in touch regarding engineering leadership, full-time roles, or consulting engagements.",
  },
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOg(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function applySeo(page: string) {
  const config = seoMap[page] ?? seoMap.home;

  document.title = config.title;

  setMeta("description", config.description);

  setOg("og:title", config.title);
  setOg("og:description", config.description);
}