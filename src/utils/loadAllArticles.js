import matter from "gray-matter";

export function loadAllArticles() {
  const files = import.meta.glob("../content/*.md", { as: "raw", eager: true });

  const articles = Object.entries(files).map(([path, rawContent]) => {
    const { data, content } = matter(rawContent);
    const slug = path.split("/").pop().replace(/\.md$/, ""); // filename without extension

    return {
      slug,
      title: data.title || slug,
      date: data.date || "Unknown date",
      content,
    };
  });

  return articles;
}
