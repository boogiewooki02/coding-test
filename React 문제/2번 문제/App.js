import React, { useState } from "react";
import { marked } from "marked";

// marked.js 공식 문서를 참고하여 작성했습니다.
const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
      <h${depth}>
        <a href="#${escapedText}" name="${escapedText}" class="anchor" style="text-decoration: none; color: inherit;">
          🔗${text}
        </a>
      </h${depth}>`;
  },

  blockquote(token) {
    const plainText = token.raw.replace(/^>\s?/, "");
    return `
      <blockquote
        onclick="navigator.clipboard.writeText('${plainText}')"
        style="cursor: pointer;"
      >
        ${plainText}
      </blockquote>`;
  },
};

marked.use({ renderer });

const MarkdownParser = () => {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const parsedHTML = marked.parse(markdown);
  console.log("Parsed HTML:", parsedHTML);

  return (
    <div>
      <textarea
        placeholder="여기에 입력 하세요."
        value={markdown}
        onChange={handleInputChange}
        style={{ width: "100%", height: "100px", marginBottom: "30px" }}
      ></textarea>
      <div
        dangerouslySetInnerHTML={{ __html: parsedHTML }}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          background: "#f9f9f9",
        }}
      >
        {/* 참고) 요구 사항이 'HTML 태그가 보이는 상태로 출력'이시라면 밑에 주석을 해제하면 됩니다. */}
        {/* {parsedHTML} */}
      </div>
    </div>
  );
};

export default MarkdownParser;
