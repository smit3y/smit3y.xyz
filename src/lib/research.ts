export type ResearchModule = {
  frontmatter?: {
    title?: string;
    stockLabel?: string;
    date?: string;
    pdf?: string;
    url?: string;
    badge?: string;
    order?: number;
  };
};

export type ResearchEntry = {
  slug: string;
  stockLabel: string;
  title: string;
  date: string;
  pdf: string;
  /** External publication link; when set, cards link here instead of a detail page. */
  url: string;
  href: string;
  /** Small tag shown above the label, e.g. "Published". */
  badge: string;
  /** Pins an entry ahead of the date-sorted list; lower numbers come first. */
  order: number | null;
};

export const RESEARCH_PAGE_SIZE = 10;

const getDateValue = (date: string): number => {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const loadResearchEntries = (): ResearchEntry[] => {
  const researchModules = import.meta.glob<ResearchModule>(
    "../../content/research/*.md",
    { eager: true },
  );

  return Object.entries(researchModules)
    .map(([filePath, mod]) => {
      const slug = filePath.split("/").pop()?.replace(/\.md$/, "") ?? "";
      const fm = mod.frontmatter ?? {};

      const url = fm.url?.trim() || "";

      return {
        slug,
        stockLabel: fm.stockLabel?.trim() || "",
        title: fm.title?.trim() || slug,
        date: fm.date?.trim() || "",
        pdf: fm.pdf?.trim() || "",
        url,
        href: url || `/research/${slug}`,
        badge: fm.badge?.trim() || "",
        order: typeof fm.order === "number" ? fm.order : null,
      };
    })
    .sort((a, b) => {
      if (a.order !== null || b.order !== null) {
        return (a.order ?? Infinity) - (b.order ?? Infinity);
      }
      return getDateValue(b.date) - getDateValue(a.date);
    });
};

export const getResearchPage = (
  entries: ResearchEntry[],
  page: number,
  pageSize = RESEARCH_PAGE_SIZE,
) => {
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageEntries = entries.slice(start, start + pageSize);

  return { pageEntries, totalPages, currentPage };
};
