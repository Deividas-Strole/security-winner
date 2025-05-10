import React, { useEffect, useState } from "react";
import { loadMarkdown } from "../utils/loadMarkdown";

export default function ArticlePage({ file }) {
  const [content, setContent] = useState({ html: "", metadata: {} });

  useEffect(() => {
    loadMarkdown(`/src/content/${file}`).then(setContent);
  }, [file]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{content.metadata.title}</h1>
      <p className="text-gray-500 mb-6">{content.metadata.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </div>
  );
}
