import React, { useState, useEffect } from "react";
import { FiCode, FiTerminal, FiLayers, FiCpu, FiCheck } from "react-icons/fi";

const codeSnippets = [
  {
    tab: "engineer.ts",
    language: "typescript",
    code: `const engineer = {
  name: "Ujjwal Anand",
  role: "Full Stack Engineer",
  education: "B.Tech CSE @ LPU",
  status: "Open to opportunities",
  stack: [
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB"
  ],
  passion: "Building scalable products"
};`
  },
  {
    tab: "architecture.config.ts",
    language: "typescript",
    code: `interface SystemArchitecture {
  frontend: "React + TypeScript + Tailwind",
  backend: "Node.js + Express + REST APIs",
  realtime: "Socket.IO + WebSockets",
  database: "MongoDB + PostgreSQL",
  cloud: "AWS EC2 + Nginx + PM2",
  status: "Production Ready ⚡"
};`
  },
  {
    tab: "deploy.sh",
    language: "bash",
    code: `/* Production Deployment */
$ docker-compose up -d --build
[+] Building 8/8
 ✔ Container mongodb      Started  0.3s
 ✔ Container api-server   Running  0.5s
 ✔ Container nginx-proxy  Active   0.2s
[SUCCESS] Live @ https://gyano.vercel.app`
  },
  {
    tab: "useAnalytics.tsx",
    language: "typescript",
    code: `export const useProductEngine = () => {
  const [status, setStatus] = useState("optimal");

  useEffect(() => {
    const system = initEngine({
      realtime: true,
      performance: "high"
    });
    return () => system.destroy();
  }, []);

  return { status, ready: true };
};`
  }
];

export default function CodeEditorWindow() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets[snippetIndex];
  const fullText = currentSnippet.code;

  useEffect(() => {
    let timer;
    const typingSpeed = isDeleting ? 16 : 30;

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderHighlightedCode = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      const tokens = line.split(/(\s+|"[^"]*"|'[^']*'|`[^`]*`|\b(?:const|let|var|interface|export|return|true|false|null|undefined|import|from|async|await)\b|\b(?:name|role|education|status|stack|passion|frontend|backend|realtime|database|cloud|ready|performance)\b|(?:\/\*.*?\*\/|\/\/.*|\$[^\n]*))/g);

      return (
        <div key={lIdx} className="editor-line">
          <span className="line-number">{(lIdx + 1).toString().padStart(2, "0")}</span>
          <span className="line-content">
            {tokens.map((token, tIdx) => {
              if (!token) return null;
              if (/^(const|let|var|interface|export|return|import|from|async|await)$/.test(token)) {
                return <span key={tIdx} className="token-keyword">{token}</span>;
              }
              if (/^(true|false|null|undefined)$/.test(token)) {
                return <span key={tIdx} className="token-boolean">{token}</span>;
              }
              if (/^("[^"]*"|'[^']*'|`[^`]*`)$/.test(token)) {
                return <span key={tIdx} className="token-string">{token}</span>;
              }
              if (/^(name|role|education|status|stack|passion|frontend|backend|realtime|database|cloud|ready|performance)$/.test(token)) {
                return <span key={tIdx} className="token-property">{token}</span>;
              }
              if (token.startsWith("//") || token.startsWith("/*") || token.startsWith("$") || token.startsWith("[+]") || token.startsWith("✔") || token.startsWith("[SUCCESS]")) {
                return <span key={tIdx} className="token-comment">{token}</span>;
              }
              return <span key={tIdx} className="token-default">{token}</span>;
            })}
            {lIdx === lines.length - 1 && <span className="blinking-cursor" />}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="vscode-window-wrapper">
      <div className="vscode-window-card">
        {/* Top Header */}
        <div className="vscode-header">
          <div className="window-controls">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="window-tabs">
            {codeSnippets.map((snip, i) => (
              <button
                key={snip.tab}
                className={`tab-item ${i === snippetIndex ? "active" : ""}`}
                onClick={() => {
                  setDisplayedText("");
                  setIsDeleting(false);
                  setSnippetIndex(i);
                }}
              >
                <FiCode className="tab-icon" />
                <span>{snip.tab}</span>
              </button>
            ))}
          </div>

          <div className="header-actions">
            <span className="engine-status-badge">
              <span className="status-dot" />
              LIVE ENGINE
            </span>
          </div>
        </div>

        {/* Code Content View */}
        <div className="vscode-body">
          <div className="code-container">
            {renderHighlightedCode(displayedText)}
          </div>
        </div>

        {/* Footer Status Strip */}
        <div className="vscode-footer">
          <div className="footer-left">
            <span className="footer-pill">
              <FiCpu /> TypeScript 5.4
            </span>
            <span className="footer-pill">
              <FiLayers /> React 19
            </span>
          </div>
          <button className="copy-btn" onClick={handleCopy} aria-label="Copy snippet">
            {copied ? <FiCheck className="text-emerald-500" /> : <FiTerminal />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
