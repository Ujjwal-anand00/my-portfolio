import React, { useState, useEffect } from "react";
import { FiCheck, FiCopy, FiTerminal } from "react-icons/fi";

const codeSnippets = [
  {
    tab: "engineer.ts",
    label: "1:vim(engineer.ts)*",
    code: `const engineer = {
  name: "Ujjwal Anand",
  role: "Full Stack Engineer & Systems Developer",
  education: "B.Tech CSE @ LPU",
  status: "🟢 Available for Full-Time Roles",
  stack: [
    "React.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS & Docker"
  ],
  mission: "Architecting scalable systems & high-impact products"
};`,
  },
  {
    tab: "architecture.config.ts",
    label: "2:vim(arch.config.ts)",
    code: `interface SystemArchitecture {
  frontend: "React + TypeScript + Tailwind",
  backend: "Node.js + Express + REST APIs",
  realtime: "Socket.IO + WebSockets",
  database: "MongoDB + PostgreSQL",
  cloud: "AWS EC2 + Nginx + PM2",
  status: "Production Ready ⚡"
};`,
  },
  {
    tab: "deploy.sh",
    label: "3:sh(deploy.sh)",
    code: `#!/usr/bin/env bash
# Production Continuous Deployment
$ docker-compose up -d --build
[+] Building 8/8 [COMPLETE]
  ✔ Container mongodb      Started  0.2s
  ✔ Container api-server   Running  0.4s
  ✔ Container nginx-proxy  Active   0.1s
[SUCCESS] Live @ https://gyano.vercel.app`,
  },
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
    const typingSpeed = isDeleting ? 12 : 24;

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 3500);
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

  const lines = displayedText.split("\n");

  return (
    <div className="editor-window w-full overflow-hidden">
      {/* TMUX Window Titlebar */}
      <div className="editor-titlebar flex justify-between items-center gap-2 overflow-x-auto">
        <div className="editor-tabs flex items-center gap-1 overflow-x-auto scrollbar-none flex-nowrap shrink">
          {codeSnippets.map((snippet, idx) => (
            <button
              key={snippet.tab}
              type="button"
              className={`editor-tab-item whitespace-nowrap ${snippetIndex === idx ? "active" : ""}`}
              onClick={() => {
                setSnippetIndex(idx);
                setDisplayedText("");
                setIsDeleting(false);
              }}
            >
              {snippet.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-[#33ff00] hover:text-[#ffb000] flex items-center gap-1 font-mono uppercase whitespace-nowrap shrink-0 pl-1"
          title="Yank / Copy snippet"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          <span className="hidden sm:inline">{copied ? "[YANKED]" : "[YANK]"}</span>
        </button>
      </div>

      {/* Editor Body with Monospaced Lines */}
      <div className="editor-body-split overflow-x-auto">
        {lines.map((line, idx) => (
          <div key={idx} className="editor-line-row">
            <span className="editor-line-num select-none">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="editor-line-content font-mono">
              {line}
              {idx === lines.length - 1 && <span className="term-cursor">█</span>}
            </span>
          </div>
        ))}
      </div>

      {/* VIM Statusline */}
      <div className="editor-statusbar flex justify-between items-center gap-2 text-[11px] overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-2 truncate">
          <span>-- NORMAL --</span>
          <span className="text-black font-semibold truncate">[{currentSnippet.tab}]</span>
          <span className="hidden sm:inline">git:(main)</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden xs:inline">utf-8</span>
          <span>{lines.length}:1</span>
        </div>
      </div>
    </div>
  );
}
