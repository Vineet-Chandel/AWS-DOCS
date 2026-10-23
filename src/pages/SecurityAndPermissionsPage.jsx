import React, { useState } from 'react';
import { ChapterHeader } from '../components/documentation/ChapterHeader';
import { ChapterPagination } from '../components/documentation/ChapterPagination';
import {
  ShieldCheck,
  ShieldAlert,
  Key,
  Lock,
  Globe,
  FolderLock,
  AlertTriangle,
  ExternalLink,
  Check,
  RotateCcw,
  Sparkles,
  Server,
  FileCode2,
  Terminal,
} from 'lucide-react';

export const SECURITY_PAGE_HEADINGS = [
  { id: 'six-essential-security-habits', text: 'Six Essential Security Habits', level: 2 },
  { id: 'permissions-are-not-the-same', text: 'Permissions Are Not the Same as Network Rules', level: 2 },
  { id: 'shared-responsibility', text: 'Shared Responsibility', level: 2 },
  { id: 'aws-security-guidance', text: 'AWS Security Guidance', level: 2 },
  { id: 'before-you-finish-the-lab', text: 'Before You Finish the Lab', level: 2 },
];

const SAFETY_CHECKS = [
  'The correct workshop account and approved permissions were used.',
  'No secrets or private keys were uploaded to GitHub or the web directory.',
  'SSH access remains restricted to the approved administration network.',
  'Any temporary AWS resources have been reviewed for safe cleanup.',
];

export function SecurityAndPermissionsPage({ onNavigate = () => {} }) {
  const [checkedItems, setCheckedItems] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkAll = () => {
    setCheckedItems({ 0: true, 1: true, 2: true, 3: true });
  };

  const resetAll = () => {
    setCheckedItems({ 0: false, 1: false, 2: false, 3: false });
  };

  const breadcrumbs = [
    { id: 'overview', label: 'AWS Cloud Launchpad' },
    { id: 'security-and-permissions', label: '06 / Security and Permissions' },
  ];

  const securityPrinciples = [
    {
      title: 'Use authorised accounts',
      category: 'ACCOUNT',
      accent: 'border-blue-300 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-300',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
      desc: 'Use the learner role or sandbox assigned by the organiser. Do not use or share an AWS account without permission.',
      detail: 'Working strictly within approved workshop boundaries prevents accidental billing surprises or unauthorized administrative changes.',
      icon: ShieldCheck,
    },
    {
      title: 'Least privilege',
      category: 'IAM',
      accent: 'border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-300',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200',
      desc: 'Grant only the permissions required for the exercise. Avoid using the AWS account root user for routine tasks, and do not request broad administrator access just to bypass a permissions error.',
      detail: 'Note: The AWS account root user controls cloud billing and account lifecycles; it is completely separate from the Linux root/sudo user on an EC2 instance.',
      icon: ShieldAlert,
    },
    {
      title: 'Protect credentials',
      category: 'SECRETS',
      accent: 'border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-300',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200',
      desc: 'Never share the .pem private key, passwords, access keys, or session credentials. Never commit them to GitHub or place them in public website files.',
      detail: 'Private SSH keys must stay secure on your local computer (e.g. chmod 400). Never paste keys into public repos, code comments, or screenshots.',
      icon: Key,
    },
    {
      title: 'Use MFA',
      category: 'SIGN-IN',
      accent: 'border-purple-300 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-300',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
      desc: 'Enable multi-factor authentication wherever available, especially for privileged accounts. Follow the authentication requirements of the approved workshop environment.',
      detail: 'MFA provides a second layer of defense, ensuring compromised passwords alone cannot be used to compromise your cloud environment.',
      icon: Lock,
    },
    {
      title: 'Limit network exposure',
      category: 'NETWORK',
      accent: 'border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      desc: 'Restrict SSH on port 22 to My IP or the approved administration network. Open only the application ports needed for the exercise.',
      detail: 'For this static website exercise, public HTTP traffic uses TCP port 80. Do not expose SSH to everyone (0.0.0.0/0) merely to make connection problems easier to bypass.',
      icon: Globe,
    },
    {
      title: 'Protect project data',
      category: 'FILES',
      accent: 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      desc: 'Only public website assets belong under /usr/share/nginx/html/. Keep secrets, private configuration, credentials, and unrelated files outside the public document root.',
      detail: 'Files placed in Nginx document root can be fetched directly by anyone on the internet. Obscure filenames do not provide security.',
      icon: FolderLock,
    },
  ];

  const permissionsComparison = [
    {
      control: 'IAM identity/policy',
      question: 'Who can create, modify, or inspect AWS resources?',
      example: 'Can this role launch or terminate EC2 instances?',
      notes: 'Evaluates AWS API requests at the management plane. Controls access to cloud services, not incoming network packets.',
    },
    {
      control: 'Security group',
      question: 'Which network traffic can reach the instance?',
      example: 'Allow HTTP port 80 publicly; restrict SSH port 22 to the approved administration network.',
      notes: 'Acts as a stateful virtual firewall at the virtual network interface level. Does not determine whether an identity can modify AWS resources.',
    },
    {
      control: 'Linux file permissions',
      question: 'Who can read or change files on the server?',
      example: 'Website assets must be readable by Nginx. Private files must not become publicly downloadable.',
      notes: 'Local operating system user, group, and other permissions (chmod/chown) controlling which local processes can access disk files.',
    },
  ];

  return (
    <article className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 md:py-12">
      {/* Chapter Indicator & Editorial Title */}
      <ChapterHeader
        chapterNumber="06"
        chapterTitle="SECURITY AND PERMISSIONS"
        pageNumber={1}
        totalPages={1}
        title="Build safe cloud habits from the beginning"
        intro="Security is not a separate task at the end. The way you sign in, configure permissions, and expose files matters from the first command."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: Six Essential Security Habits */}
      <section id="six-essential-security-habits" className="scroll-mt-24 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
            Six essential security habits
          </h2>
          <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
            CORE PRINCIPLES
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6">
          Build these foundational operational disciplines into your workflow from your very first cloud deployment.
        </p>

        {/* 2-Column by 3-Row Grid of Security Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl border ${item.accent} flex flex-col justify-between shadow-2xs`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <Icon className="w-4 h-4 opacity-75" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-workbook-navy dark:text-zinc-100 mb-1.5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed italic border-t border-slate-200/60 dark:border-zinc-800/60 pt-2">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Permissions Are Not the Same as Network Rules */}
      <section id="permissions-are-not-the-same" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Permissions are not the same as network rules
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
          Beginners often confuse who can modify cloud infrastructure with what packets can reach an instance and which local accounts can read files on disk. These three distinct security boundaries protect different layers:
        </p>

        {/* 3-Column Table */}
        <div className="overflow-x-auto rounded-xl border border-workbook-border dark:border-zinc-800 shadow-2xs">
          <table className="w-full text-left text-xs border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-workbook-navy text-white dark:bg-zinc-900 border-b border-workbook-border dark:border-zinc-800 select-none">
                <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider text-[11px] w-[28%]">
                  CONTROL
                </th>
                <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider text-[11px] w-[34%]">
                  QUESTION IT ANSWERS
                </th>
                <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider text-[11px] w-[38%]">
                  EXAMPLE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-workbook-border dark:divide-zinc-800">
              {permissionsComparison.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    idx % 2 === 0
                      ? 'bg-white dark:bg-zinc-950/40'
                      : 'bg-slate-50/70 dark:bg-zinc-900/30'
                  } hover:bg-blue-50/40 dark:hover:bg-zinc-800/40`}
                >
                  <td className="py-3.5 px-4 align-top">
                    <div className="font-bold text-workbook-navy dark:text-zinc-100">
                      {row.control}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">
                      {row.notes}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 align-top text-slate-700 dark:text-zinc-300 font-medium leading-relaxed italic">
                    "{row.question}"
                  </td>
                  <td className="py-3.5 px-4 align-top text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: Shared Responsibility */}
      <section id="shared-responsibility" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-4">
          Shared Responsibility
        </h2>

        {/* Pale-Red Callout with red left border */}
        <div className="p-5 rounded-r-xl rounded-l-md border-l-4 border-rose-500 border-y border-r border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-rose-900 dark:text-rose-300">
                SHARED RESPONSIBILITY
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-zinc-200 font-medium">
                AWS secures the underlying cloud infrastructure. You are still responsible for account access, permissions, deployed data, application configuration, and how you expose services.
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed pt-1">
                Using AWS does not automatically make your application secure. You must configure the resources and protect the content you deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Official AWS Security Guidance */}
      <section id="aws-security-guidance" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-3">
          AWS Security Guidance
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
          Consult these authoritative AWS guides to deepen your understanding of cloud security architectures:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">
                IDENTITY & ACCESS
              </div>
              <a
                href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-workbook-blue dark:text-blue-400 hover:underline inline-flex items-center gap-1.5 mb-1.5"
              >
                <span>AWS IAM security best practices</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                MFA, temporary credentials, protection of privileged accounts, and least-privilege access.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">
                FIREWALL & TRAFFIC
              </div>
              <a
                href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-workbook-blue dark:text-blue-400 hover:underline inline-flex items-center gap-1.5 mb-1.5"
              >
                <span>EC2 security group rules</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Official rule specifications for Web servers, SSH, CIDR blocks, and stateful tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Before You Finish the Lab */}
      <section id="before-you-finish-the-lab" className="scroll-mt-24 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
              Before you finish the lab
            </h2>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">
              Verify these safety checks to confirm that your workshop session follows security best practices and leaves no exposed credentials.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={checkAll}
              className="px-2.5 py-1 text-xs font-medium rounded border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Check All
            </button>
            <button
              type="button"
              onClick={resetAll}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {SAFETY_CHECKS.map((text, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <label
                key={idx}
                htmlFor={`safety-check-${idx}`}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 shadow-2xs'
                    : 'border-workbook-border bg-white dark:border-zinc-800 dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                <input
                  type="checkbox"
                  id={`safety-check-${idx}`}
                  checked={isChecked}
                  onChange={() => toggleCheck(idx)}
                  className="sr-only"
                />

                <div
                  className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>

                <span
                  className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                    isChecked
                      ? 'text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/50'
                      : 'text-slate-800 dark:text-zinc-200'
                  }`}
                >
                  {text}
                </span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'challenge-checklist',
          title: 'Independent checklist — hints, not the complete solution',
          pageLabel: 'Chapter 05 • Page 2',
        }}
        next={{
          id: 'cost-and-cleanup',
          title: 'Finish the lab without surprise charges',
          pageLabel: 'Chapter 07',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}