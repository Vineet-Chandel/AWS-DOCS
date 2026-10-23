import React from 'react';
import { ChapterHeader } from '../components/documentation/ChapterHeader';
import { ChapterPagination } from '../components/documentation/ChapterPagination';
import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';

export const PAGE_3_HEADINGS = [
  { id: 'aws-services-students-should-recognize', text: 'AWS Services Students Should Recognize', level: 2 },
  { id: 'quick-memory-trick', text: 'Quick Memory Trick', level: 2 },
  { id: 'official-documentation', text: 'Official Documentation', level: 2 },
];

export function AwsServicesPage({ onNavigate = () => {} }) {
  const breadcrumbs = [
    { id: 'intro-deployment', label: 'Introduction & Prerequisites' },
    { id: 'intro-aws-services', label: 'AWS services: learn the job, not just the name' },
  ];

  const services = [
    {
      num: 1,
      name: 'Amazon EC2',
      category: 'COMPUTE',
      catColor: 'text-workbook-blue bg-blue-50 dark:bg-blue-950/40',
      desc: 'Provides a cloud virtual server. You choose an operating system and configure computing capacity, storage, and networking.',
    },
    {
      num: 2,
      name: 'AWS Region',
      category: 'LOCATION',
      catColor: 'text-workbook-teal bg-teal-50 dark:bg-teal-950/40',
      desc: 'A geographic area in which AWS operates infrastructure and services. (Note: Mumbai is ap-south-1. Always select the Region assigned by your workshop organizers).',
    },
    {
      num: 3,
      name: 'Availability Zone (AZ)',
      category: 'RESILIENCE',
      catColor: 'text-workbook-green bg-emerald-50 dark:bg-emerald-950/40',
      desc: 'An isolated physical data center location within a Region. Using multiple Availability Zones can improve resilience when a system is designed to use them.',
    },
    {
      num: 4,
      name: 'AWS IAM',
      category: 'PERMISSIONS',
      catColor: 'text-workbook-purple bg-purple-50 dark:bg-purple-950/40',
      desc: 'Identity and Access Management controls which identities can perform which actions on AWS resources. It is your security boundary for administrative access.',
    },
    {
      num: 5,
      name: 'Amazon VPC',
      category: 'NETWORK',
      catColor: 'text-workbook-blue bg-blue-50 dark:bg-blue-950/40',
      desc: 'Provides a logically isolated virtual network for your AWS resources, giving you control over IP ranges, subnets, and routing tables.',
    },
    {
      num: 6,
      name: 'Security group',
      category: 'TRAFFIC',
      catColor: 'text-workbook-orange bg-amber-50 dark:bg-amber-950/40',
      desc: 'Acts as a stateful virtual firewall, controlling permitted inbound and outbound network traffic for your associated compute instances.',
    },
    {
      num: 7,
      name: 'Amazon S3',
      category: 'STORAGE',
      catColor: 'text-workbook-green bg-emerald-50 dark:bg-emerald-950/40',
      desc: 'Provides highly scalable object storage for files, media, backups, data archives, and static web assets.',
    },
    {
      num: 8,
      name: 'Amazon RDS',
      category: 'DATABASE',
      catColor: 'text-workbook-blue bg-blue-50 dark:bg-blue-950/40',
      desc: 'Provides managed relational database services, including engines such as PostgreSQL, MySQL, MariaDB, and Aurora.',
    },
    {
      num: 9,
      name: 'Elastic Load Balancing',
      category: 'TRAFFIC',
      catColor: 'text-workbook-orange bg-amber-50 dark:bg-amber-950/40',
      desc: 'Automatically distributes incoming application traffic across multiple healthy compute targets, such as EC2 instances.',
    },
    {
      num: 10,
      name: 'Amazon CloudWatch',
      category: 'OBSERVABILITY',
      catColor: 'text-workbook-teal bg-teal-50 dark:bg-teal-950/40',
      desc: 'Collects operational metrics, log files, and customizable alarms that help you monitor, detect, and troubleshoot system health.',
    },
    {
      num: 11,
      name: 'AWS Lambda',
      category: 'SERVERLESS',
      catColor: 'text-workbook-purple bg-purple-50 dark:bg-purple-950/40',
      desc: 'Runs backend code directly in response to events or HTTP requests without requiring you to provision or patch a persistent virtual server.',
    },
    {
      num: 12,
      name: 'Amazon Route 53',
      category: 'DNS',
      catColor: 'text-workbook-blue bg-blue-50 dark:bg-blue-950/40',
      desc: 'A scalable cloud Domain Name System (DNS) web service that translates readable names (like example.com) into numeric IP addresses.',
    },
    {
      num: 13,
      name: 'Amazon CloudFront',
      category: 'DELIVERY',
      catColor: 'text-workbook-purple bg-purple-50 dark:bg-purple-950/40',
      desc: 'A global Content Delivery Network (CDN) that securely caches and delivers web content to visitors with low latency from edge locations.',
    },
    {
      num: 14,
      name: 'AWS Budgets',
      category: 'COST',
      catColor: 'text-workbook-red bg-rose-50 dark:bg-rose-950/40',
      desc: 'Tracks spending or usage against customized thresholds and dispatches alert notifications. Budget alerts do not automatically stop resources.',
    },
  ];

  return (
    <article className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 py-8 lg:py-10">
      {/* Chapter Header */}
      <ChapterHeader
        chapterNumber="01"
        chapterTitle="INTRODUCTION &amp; PREREQUISITES"
        pageNumber={3}
        totalPages={4}
        title="AWS services: learn the job, not just the name"
        intro="You do not need to configure every AWS service before your first deployment. Start by understanding EC2, networking, security groups, IAM, and CloudWatch. Learn to recognize other services without feeling that you must use them all today."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: 14 AWS SERVICES GRID */}
      <section id="aws-services-students-should-recognize" className="mb-12 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-workbook-navy dark:text-zinc-100 mb-4">
          AWS Services Students Should Recognize
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
          Review these foundational cloud building blocks to build conceptual clarity before launching infrastructure:
        </p>

        {/* 2-Column Responsive Service Glossary Grid */}
        <div className="rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-workbook-border dark:divide-zinc-800 md:[&>*:not(:nth-child(-n+2))]:border-t md:[&>*:not(:nth-child(-n+2))]:border-workbook-border dark:md:[&>*:not(:nth-child(-n+2))]:border-zinc-800 md:[&>*:nth-child(2n)]:border-l md:[&>*:nth-child(2n)]:border-workbook-border dark:md:[&>*:nth-child(2n)]:border-zinc-800">
            {services.map((svc, idx) => (
              <div
                key={svc.num}
                className={`p-4 sm:p-5 flex flex-col justify-between transition-colors ${
                  idx % 4 === 0 || idx % 4 === 3 ? 'bg-workbook-altRow/60 dark:bg-zinc-900/40' : 'bg-white dark:bg-zinc-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-zinc-500">
                      #{String(svc.num).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded ${svc.catColor}`}>
                      {svc.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1.5">
                    {svc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK MEMORY TRICK */}
      <section id="quick-memory-trick" className="mb-12 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-workbook-navy dark:text-zinc-100 mb-4">
          Quick Memory Trick
        </h2>

        <div className="rounded-r-xl border-l-4 border-workbook-blue bg-blue-50/70 dark:bg-blue-950/30 p-5 text-slate-800 dark:text-zinc-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider uppercase text-workbook-blue mb-2 select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Memory Trick</span>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-workbook-navy dark:text-zinc-100 font-medium mb-3">
            EC2 runs a virtual machine. S3 stores objects. RDS manages relational databases. Lambda runs event-driven code. CloudWatch observes systems. Route 53 handles DNS. IAM grants permissions. Security groups filter network traffic.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-blue-200/60 dark:border-blue-900/40">
            For this workshop, focus first on <strong>EC2</strong>, the <strong>operating system (Amazon Linux 2023)</strong>, <strong>Nginx</strong>, <strong>VPC networking</strong>, <strong>security groups</strong>, and <strong>IAM</strong>.
          </p>
        </div>
      </section>

      {/* SECTION 3: OFFICIAL DOCUMENTATION */}
      <section id="official-documentation" className="mb-12 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-workbook-navy dark:text-zinc-100 mb-2">
          Official Documentation
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-4">
          Want to explore deeper? Bookmark these authoritative guides from the official AWS documentation library:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://docs.aws.amazon.com/us_en/AWSEC2/latest/UserGuide/ec2-security-groups.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-lg border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-850 transition-colors group"
          >
            <div>
              <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors">
                EC2 Security Groups User Guide
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                Inbound &amp; outbound stateful rules
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-workbook-blue shrink-0 ml-2" />
          </a>

          <a
            href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-iam.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-lg border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-850 transition-colors group"
          >
            <div>
              <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors">
                EC2 Identity &amp; Access Management
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                IAM instance profiles and role policies
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-workbook-blue shrink-0 ml-2" />
          </a>

          <a
            href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-lg border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-850 transition-colors group"
          >
            <div>
              <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors">
                Security Group Rules Reference
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                Standard ports for web servers, databases &amp; SSH
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-workbook-blue shrink-0 ml-2" />
          </a>

          <a
            href="https://docs.aws.amazon.com/linux/al2023/ug/tutorials-al2023.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-lg border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-850 transition-colors group"
          >
            <div>
              <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors">
                Amazon Linux 2023 Tutorials
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                dnf package manager &amp; systemd administration
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-workbook-blue shrink-0 ml-2" />
          </a>
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'intro-ec2-architecture',
          title: 'How the EC2 deployment fits together',
          pageLabel: 'Page 2 of 4',
        }}
        next={{
          id: 'intro-preflight',
          title: 'Preflight: tools, repository, account and permissions',
          pageLabel: 'Page 4 of 4',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}
