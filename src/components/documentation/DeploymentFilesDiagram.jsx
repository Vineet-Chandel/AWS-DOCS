import React from 'react';
import { ArrowRight, ArrowDown, FolderGit2, Server, FileCode2, AlertTriangle } from 'lucide-react';

/**
 * Responsive technical diagram showing the file transfer relationship
 * from the GitHub repository (gh-pages) to the EC2 Nginx web directory.
 */
export function DeploymentFilesDiagram() {
  const files = [
    { name: 'index.html', desc: 'page entry point' },
    { name: 'style.css', desc: 'styles' },
    { name: 'script.js', desc: 'page behaviour' },
    { name: 'logo.png', desc: 'image asset' },
    { name: 'background.jpg', desc: 'image asset' },
  ];

  return (
    <div className="my-8">
      {/* 2-Container Diagram with Arrow */}
      <div className="flex flex-col md:flex-row items-center gap-4 relative">
        {/* Container 1: GitHub Repository (Blue Theme) */}
        <div className="flex-1 w-full rounded-xl border-2 border-workbook-blue bg-blue-50/30 dark:bg-blue-950/20 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-200/80 dark:border-blue-900/50">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-workbook-blue" />
              <span className="text-xs font-mono font-bold tracking-wider text-workbook-blue uppercase">
                GitHub Repository
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-semibold">
              gh-pages branch
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 rounded bg-white dark:bg-zinc-900 border border-blue-100 dark:border-blue-950 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-workbook-blue shrink-0" />
                  <span className="font-bold text-slate-800 dark:text-zinc-200">{file.name}</span>
                </div>
                <span className="text-[10px] font-sans text-slate-500 dark:text-zinc-400">
                  {file.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Directional Arrow: Right on desktop, Down on mobile */}
        <div className="flex flex-col items-center justify-center p-2 text-workbook-orange shrink-0">
          <div className="hidden md:flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-workbook-orange">
              DEPLOY
            </span>
            <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-workbook-orange">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-workbook-orange">
              <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-workbook-orange">
              DEPLOY TO EC2
            </span>
          </div>
        </div>

        {/* Container 2: EC2 Web Directory (Green Theme) */}
        <div className="flex-1 w-full rounded-xl border-2 border-workbook-green bg-emerald-50/30 dark:bg-emerald-950/20 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-200/80 dark:border-emerald-900/50">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-workbook-green" />
              <span className="text-xs font-mono font-bold tracking-wider text-workbook-green uppercase">
                EC2 Web Directory
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-semibold truncate max-w-[150px]">
              /usr/share/nginx/html/
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 rounded bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-emerald-950 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-workbook-green shrink-0" />
                  <span className="font-bold text-slate-800 dark:text-zinc-200">{file.name}</span>
                </div>
                <span className="text-[10px] font-sans text-slate-500 dark:text-zinc-400">
                  {file.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Red Warning Callout Below Diagram */}
      <div className="mt-4 rounded-lg border border-rose-200 dark:border-rose-900/50 bg-rose-50/60 dark:bg-rose-950/20 p-3.5 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-workbook-red shrink-0 mt-0.5" />
        <div>
          <strong className="text-workbook-red">Strict Security Rule:</strong> Copy only the public website files. Do not copy <code className="font-mono bg-white dark:bg-zinc-900 px-1 rounded">.git</code> folders, private keys, <code className="font-mono bg-white dark:bg-zinc-900 px-1 rounded">.env</code> files, tokens, or credentials into the web server directory.
        </div>
      </div>
    </div>
  );
}
