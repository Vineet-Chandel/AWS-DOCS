/**
 * Navigation structure for the AWS Cloud Launchpad — Deployment Workbook.
 * Only contains fully created and functional sections across Chapters 1 & 2.
 */

export const WORKBOOK_SECTIONS = [
  {
    title: '01 / INTRODUCTION & PREREQUISITES',
    items: [
      {
        id: 'intro-deployment',
        title: 'What is AWS deployment?',
        status: 'ready',
        chapter: '01',
        pageNumber: 1,
        description: 'Understand local vs cloud deployment, why developers choose AWS, and the 4-stage pipeline.',
        icon: 'BookOpen',
      },
      {
        id: 'intro-ec2-architecture',
        title: 'How the EC2 deployment fits together',
        status: 'ready',
        chapter: '01',
        pageNumber: 2,
        description: 'Interactive AWS Cloud, VPC, EC2, Security Group, and IAM architecture diagram.',
        icon: 'Server',
      },
      {
        id: 'intro-aws-services',
        title: 'AWS services: learn the job, not just the name',
        status: 'ready',
        chapter: '01',
        pageNumber: 3,
        description: 'Glossary of 14 key AWS services with roles, categories, and memory tricks.',
        icon: 'Cloud',
      },
      {
        id: 'intro-preflight',
        title: 'Preflight: tools, repository, account and permissions',
        status: 'ready',
        chapter: '01',
        pageNumber: 4,
        description: 'Verify tools, terminal checks, GitHub starter template, and the final readiness check.',
        icon: 'CheckCircle2',
      },
    ],
  },
  {
    title: '02 / STEP-BY-STEP DEPLOYMENT',
    items: [
      {
        id: 'deploy-inspect-and-launch',
        title: 'Project 1: inspect the files, then open EC2',
        status: 'ready',
        chapter: '02',
        pageNumber: 1,
        description: 'Starter file tree mapping to /usr/share/nginx/html/ and EC2 launch settings.',
        icon: 'FolderTree',
      },
      {
        id: 'deploy-networking',
        title: 'Network rules: let visitors in, keep administration restricted',
        status: 'ready',
        chapter: '02',
        pageNumber: 2,
        description: 'Inbound firewall rules for SSH port 22 and HTTP port 80, plus instance status confirmation.',
        icon: 'ShieldCheck',
      },
      {
        id: 'deploy-connect-and-install',
        title: 'Connect to the server and install Nginx',
        status: 'ready',
        chapter: '02',
        pageNumber: 3,
        description: 'SSH terminal connection, dnf package installation, and local curl test on EC2.',
        icon: 'Terminal',
      },
      {
        id: 'deploy-and-verify',
        title: 'Deploy the repository and open the live website',
        status: 'ready',
        chapter: '02',
        pageNumber: 4,
        description: 'Clone repository, copy public files, reload Nginx, and open public IPv4 website.',
        icon: 'Globe',
      },
    ],
  },
  {
    title: '03 / VERIFICATION CHECKLIST',
    items: [
      {
        id: 'verification-checklist',
        title: 'Prove the website is really deployed',
        status: 'ready',
        chapter: '03',
        pageNumber: 1,
        description: 'Verify EC2 status, security groups, Nginx daemon, web files, and test public HTTP delivery.',
        icon: 'CheckCircle2',
      },
    ],
  },
];
