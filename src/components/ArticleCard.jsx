export default function ArticleCard({ article }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{article.date}</p>
      <p className="text-gray-700">{article.content}</p>
    </article>
  );
}
