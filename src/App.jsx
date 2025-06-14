import { useState } from "react";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Why Endpoint Security Still Matters in 2025",
      date: "May 8, 2025",
      content:
        "With growing attack surfaces, securing endpoints remains critical in any modern enterprise...",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export default App;
