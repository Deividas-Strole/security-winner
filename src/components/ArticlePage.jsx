import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function ArticlePage({ articles }) {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Article not found</p>;

  return (
    <article>
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.date}</p>
      <div className="prose mt-4">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  );
}

export default ArticlePage;
