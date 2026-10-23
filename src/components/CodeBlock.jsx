import React, { useState, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';
import Prism from 'prismjs';

// Import essential Prism language extensions
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-javascript';

/**
 * Normalizes language string (e.g., 'js' -> 'javascript', 'yml' -> 'yaml').
 */
function normalizeLanguage(lang) {
  if (!lang) return 'plaintext';
  const l = lang.toLowerCase().trim();
  if (l === 'js') return 'javascript';
  if (l === 'ts') return 'javascript'; // Prism js parses clean TS keywords
  if (l === 'sh' || l === 'shell' || l === 'zsh') return 'bash';
  if (l === 'yml') return 'yaml';
  if (l === 'docker') return 'docker';
  if (l === 'dockerfile') return 'docker';
  if (l === 'py') return 'python';
  return l;
}

/**
 * CodeBlock component with syntax highlighting, language badge,
 * and copy-to-clipboard functionality.
 */
export function CodeBlock({ code, language = 'plaintext', className = '' }) {
  const [copied, setCopied] = useState(false);
  const normalizedLang = normalizeLanguage(language);

  const highlightedHtml = useMemo(() => {
    const rawCode = String(code || '').replace(/\n$/, '');
    const grammar = Prism.languages[normalizedLang] || Prism.languages.plaintext;
    try {
      return Prism.highlight(rawCode, grammar, normalizedLang);
    } catch {
      return Prism.highlight(rawCode, Prism.languages.plaintext, 'plaintext');
    }
  }, [code, normalizedLang]);

  const handleCopy = async () => {
    const rawCode = String(code || '').replace(/\n$/, '');
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code to clipboard', err);
    }
  };

  return (
    <div className={`my-5 rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden shadow-sm ${className}`}>
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 border-b border-zinc-800 text-xs">
        <span className="font-mono text-zinc-400 font-medium lowercase tracking-wider select-none">
          {language || 'text'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500"
          aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px] font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Horizontal Scroll */}
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono">
        <pre className="m-0 p-0 bg-transparent">
          <code
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            className={`language-${normalizedLang}`}
          />
        </pre>
      </div>
    </div>
  );
}
