import React, { useState, useEffect, useRef } from "react";
import {
  FiTerminal,
  FiMaximize2,
  FiMinimize2,
  FiX,
  FiCornerDownLeft,
  FiCpu,
  FiMoon,
  FiSun,
} from "react-icons/fi";

const ASCII_LOGO = `
  __  __   _  _                   _                          _ 
 |  \\/  | | |(_)                 | |                        | |
 | \\  / | | | _ __      __  __ _ | |         __ _  _ __    __ | |
 | |\\/| | | || |\\ \\ /\\ / / / _\` || |        / _\` || '_ \\  / _\` |
 | |  | | | || | \\ V  V / | (_| || | ____  | (_| || | | || (_| |
 |_|  |_| |_||_|  \\_/\\_/   \\__,_||_||____|  \\__,_||_| |_| \\__,_|
`;

const INITIAL_GREETING = [
  { type: "system", text: "SYSTEM BOOT: ANAND_OS v2.4.0-release (x86_64-station)" },
  { type: "system", text: "AUTHENTICATION: guest session active. All security protocols [OK]." },
  { type: "info", text: "Type 'help' to view available system commands or click quick actions below." },
];

export default function TerminalCLI({
  isOpen,
  onClose,
  onNavigate,
  currentTheme,
  onToggleTheme,
  scanlines,
  onToggleScanlines,
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(INITIAL_GREETING);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const outputEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    const newEntries = [{ type: "prompt", text: `guest@station:~$ ${trimmed}` }];

    switch (cmd) {
      case "help":
      case "?":
        newEntries.push({
          type: "output",
          text: `AVAILABLE TERMINAL COMMANDS:
  help / ?          - List all available commands
  neofetch          - Print system info & ASCII banner
  whoami            - Display engineer profile & title
  ls                - List files in current directory
  cat <file>        - View file contents (e.g. cat bio.txt)
  projects          - Inspect shipped projects & jump to section
  skills / top      - Display system resource utilization / skills
  exp               - View execution history & industry roles
  contact           - Display communication channels
  theme [green|amber] - Switch phosphor monitor color palette
  scanlines [on|off]  - Toggle CRT scanline overlay
  clear / cls       - Clear terminal display buffer
  date              - Show current system date and UTC time
  sudo <action>     - Run command with elevated privilege`,
        });
        break;

      case "neofetch":
      case "fetch":
        newEntries.push({
          type: "ascii",
          text: ASCII_LOGO,
        });
        newEntries.push({
          type: "output",
          text: `--------------------------------------------------
USER:       ujjwal@anand-station
ROLE:       Full Stack Engineer & Systems Architect
OS:         AnandOS v2.4 (React 19.1, Vite 7, Linux kernel)
SHELL:      zsh 5.9 (x86_64-pc-sys)
UPTIME:     3+ Years Continuous Deployment
STACK:      React, Node.js, TypeScript, MERN, AWS, Docker
LEETCODE:   Active Problem Solver
STATUS:     [🟢 200 OK] Ready for full-time opportunities
--------------------------------------------------`,
        });
        break;

      case "whoami":
        newEntries.push({
          type: "output",
          text: `[IDENTITY]: Ujjwal Anand
[TITLE]:    Full Stack Developer | Systems Developer | Cyber Security Specialist
[ALMA]:     Lovely Professional University (B.Tech CSE)
[LOCATION]: India (Remote / On-Site)
[MISSION]:  Architecting high-performance web products and scalable backend infrastructure.`,
        });
        break;

      case "ls":
        newEntries.push({
          type: "output",
          text: `drwxr-xr-x  projects/
-rw-r--r--  bio.txt
-rw-r--r--  skills.dat
-rw-r--r--  experience.log
-rw-r--r--  resume.pdf
-rwxr-xr-x  contact.sh`,
        });
        break;

      case "cat":
        if (!arg) {
          newEntries.push({ type: "error", text: "Usage: cat <filename> (e.g., cat bio.txt)" });
        } else if (arg === "bio.txt") {
          newEntries.push({
            type: "output",
            text: `[BIO]: Software Engineer dedicated to architecting scalable, high-performance applications.
Experienced in full-stack MERN, cloud architecture (AWS EC2, Nginx), and database optimization.
Active open source contributor and persistent learner.`,
          });
        } else if (arg === "resume.pdf") {
          window.open(
            "https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing",
            "_blank"
          );
          newEntries.push({
            type: "output",
            text: "[OK] Opened resume PDF in a new secure window.",
          });
        } else if (arg === "skills.dat") {
          newEntries.push({
            type: "output",
            text: `CORE_LANGUAGES: [C++, JavaScript, TypeScript, Python, Java, SQL]
FRONTEND:       [React.js, Tailwind CSS, Vite, Redux, Next.js basics]
BACKEND:        [Node.js, Express.js, REST APIs, Socket.IO, JWT Auth]
DATABASE:       [MongoDB, PostgreSQL, Mongoose, Redis]
DEVOPS:         [Docker, AWS EC2, Nginx, PM2, Git/GitHub]`,
          });
        } else if (arg === "experience.log") {
          newEntries.push({
            type: "output",
            text: `[ACTIVE]  Embtel Solutions Pvt. Ltd. - Full Stack Developer Associate (2026-Present)
[SUCCESS] Zidio Development - Full Stack Developer Intern (May 2025 - July 2025)`,
          });
        } else {
          newEntries.push({ type: "error", text: `cat: ${arg}: No such file or directory` });
        }
        break;

      case "projects":
        newEntries.push({
          type: "output",
          text: `[DEPLOYMENTS]:
1. Gyano        - EdTech platform with offline IndexedDB player & MERN backend
2. ChillPlex    - Movie database Android app via React Native & TMDB
3. GitHookUP    - Developer real-time matchmaking & video/chat (Socket.IO + AWS)
4. Tomato       - Food delivery full stack MERN web application
5. Edibles      - Full stack confectionery ordering application
6. TechBlog     - High-performance MERN blog platform`,
        });
        if (onNavigate) {
          onNavigate("projects");
          newEntries.push({ type: "system", text: "Navigated viewport to #projects pane." });
        }
        break;

      case "skills":
      case "top":
        newEntries.push({
          type: "output",
          text: `RESOURCE UTILIZATION TABLE:
  REACT.JS      [||||||||||||||||||..] 92%   [ONLINE]
  JAVASCRIPT    [||||||||||||||||||..] 90%   [ONLINE]
  TAILWIND CSS  [||||||||||||||||....] 88%   [ONLINE]
  NODE.JS       [|||||||||||||||.....] 86%   [ONLINE]
  REST APIS     [|||||||||||||||.....] 86%   [ONLINE]
  EXPRESS.JS    [||||||||||||||......] 84%   [ONLINE]
  C++           [||||||||||||||......] 84%   [ONLINE]
  MONGODB       [||||||||||||||......] 82%   [ONLINE]
  TYPESCRIPT    [||||||||||||.......] 78%   [ONLINE]
  POSTGRESQL    [|||||||||||........] 76%   [ONLINE]`,
        });
        if (onNavigate) {
          onNavigate("skills");
          newEntries.push({ type: "system", text: "Navigated viewport to #skills pane." });
        }
        break;

      case "exp":
      case "experience":
        newEntries.push({
          type: "output",
          text: `SYS_EXECUTION_LOG:
* [PID 2026] Embtel Solutions Pvt. Ltd. | Full Stack Developer Associate
  - Architecting production web apps, cloud deployment, robust REST endpoints.
* [PID 2025] Zidio Development | Full Stack Developer Intern
  - Engineered MERN + TypeScript blog platform, WebSocket integration, DB scaling.`,
        });
        if (onNavigate) {
          onNavigate("experience");
          newEntries.push({ type: "system", text: "Navigated viewport to #experience pane." });
        }
        break;

      case "contact":
        newEntries.push({
          type: "output",
          text: `COMMUNICATION CHANNELS:
  EMAIL:     ujjwal.anand6376@gmail.com
  PHONE:     +91 6376747170
  LINKEDIN:  https://www.linkedin.com/in/ujjwal-anand63/
  GITHUB:    https://github.com/Ujjwal-anand00
  LEETCODE:  https://leetcode.com/u/ujjwal_anand_7170/`,
        });
        if (onNavigate) {
          onNavigate("contact");
          newEntries.push({ type: "system", text: "Navigated viewport to #contact pane." });
        }
        break;

      case "theme":
        if (arg === "green") {
          if (onToggleTheme && currentTheme !== "green") onToggleTheme("green");
          newEntries.push({ type: "system", text: "Color palette switched to P1 Phosphor Green (#33ff00)." });
        } else if (arg === "amber") {
          if (onToggleTheme && currentTheme !== "amber") onToggleTheme("amber");
          newEntries.push({ type: "system", text: "Color palette switched to P3 Phosphor Amber (#ffb000)." });
        } else {
          newEntries.push({
            type: "output",
            text: `Current theme: ${currentTheme || "green"}. Usage: theme green | theme amber`,
          });
        }
        break;

      case "scanlines":
        if (arg === "on" || arg === "off") {
          if (onToggleScanlines) onToggleScanlines(arg === "on");
          newEntries.push({ type: "system", text: `CRT Scanlines toggled to: ${arg.toUpperCase()}` });
        } else {
          newEntries.push({ type: "output", text: "Usage: scanlines on | scanlines off" });
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      case "date":
        newEntries.push({
          type: "output",
          text: `SYSTEM TIME: ${new Date().toUTCString()} (Host: Station-Prime)`,
        });
        break;

      case "sudo":
        newEntries.push({
          type: "error",
          text: `[SECURITY AUDIT]: guest is not in sudoers file. This incident will be reported to root@station.`,
        });
        break;

      case "matrix":
        newEntries.push({
          type: "output",
          text: `Wake up, Neo...
The Matrix has you.
Follow the white rabbit.
Knock, knock.`,
        });
        break;

      default:
        newEntries.push({
          type: "error",
          text: `command not found: ${cmd}. Type 'help' to inspect available system commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdHistory[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex] || "");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`terminal-modal-overlay ${isMaximized ? "is-maximized" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="terminal-window max-w-full">
        {/* Terminal Title Bar */}
        <div className="terminal-titlebar flex justify-between items-center gap-2">
          <div className="terminal-titlebar-left flex items-center gap-2 min-w-0">
            <span className="term-indicator shrink-0" />
            <span className="term-title truncate">
              <span className="hidden sm:inline">guest@ujjwal-station: ~ (sh) &bull; </span>
              [PORTFOLIO_CLI]
            </span>
          </div>

          <div className="terminal-titlebar-actions shrink-0">
            <button
              type="button"
              className="term-btn hidden xs:inline-flex"
              onClick={() => onToggleTheme?.(currentTheme === "amber" ? "green" : "amber")}
              title="Toggle Phosphor Green / Amber"
            >
              [ {currentTheme === "amber" ? "AMBER" : "GREEN"} ]
            </button>
            <button
              type="button"
              className="term-btn"
              onClick={() => setIsMaximized(!isMaximized)}
              title={isMaximized ? "Restore window" : "Maximize window"}
            >
              {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>
            <button
              type="button"
              className="term-btn term-btn-close"
              onClick={onClose}
              title="Close terminal"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          className="terminal-body"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, idx) => (
            <div key={idx} className={`term-line term-line-${entry.type} overflow-x-auto`}>
              {entry.type === "ascii" ? (
                <pre className="term-ascii text-[9px] sm:text-xs overflow-x-auto">{entry.text}</pre>
              ) : (
                <pre className="term-text font-mono whitespace-pre-wrap break-words">{entry.text}</pre>
              )}
            </div>
          ))}

          {/* Prompt line */}
          <div className="term-prompt-line">
            <span className="term-prompt-user">guest@station:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck="false"
              autoComplete="off"
              autoFocus
            />
            <span className="term-cursor">█</span>
          </div>

          <div ref={outputEndRef} />
        </div>

        {/* Terminal Quick Shortcuts Bar */}
        <div className="terminal-quickbar">
          <span className="quick-label">QUICK_EXEC:</span>
          {["help", "neofetch", "projects", "skills", "whoami", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="quick-cmd-btn"
              onClick={() => handleCommand(cmd)}
            >
              [{cmd}]
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
