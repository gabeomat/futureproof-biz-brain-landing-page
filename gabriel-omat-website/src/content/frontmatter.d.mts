export function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
};

export function parseList(value: string | undefined): string[];

export function extractHtmlMeta(raw: string): {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
};
