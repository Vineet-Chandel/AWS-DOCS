/**
 * Navigation structure for the AWS Cloud Launchpad — Deployment Workbook.
 * Following the requested 8-part modular workbook hierarchy.
 */

export const WORKBOOK_SECTIONS = [
  {
    title: 'INTRODUCTION',
    items: [
      {
        id: 'overview',
        title: 'Overview',
        status: 'ready',
        description: 'Deploy your first website to AWS — 2-hour workshop overview and architecture.',
        icon: 'BookOpen',
      },
    ],
  },
  {
    title: 'GETTING STARTED',
    items: [
      {
        id: 'prerequisites',
        title: 'Prerequisites',
        status: 'upcoming',
        description: 'Baseline tools, AWS account readiness, and local environment setup.',
        icon: 'CheckCircle2',
      },
      {
        id: 'prepare-files',
        title: 'Prepare Your Website Files',
        status: 'upcoming',
        description: 'Static website source code structure, HTML, CSS, and asset inspection.',
        icon: 'FolderTree',
      },
      {
        id: 'aws-account',
        title: 'AWS Account and Access',
        status: 'upcoming',
        description: 'Root MFA, IAM Identity Center, and least-privilege permission roles.',
        icon: 'ShieldCheck',
      },
    ],
  },
  {
    title: 'UNDERSTAND AWS',
    items: [
      {
        id: 'aws-simple-terms',
        title: 'AWS in Simple Terms',
        status: 'upcoming',
        description: 'Core concepts demystified: regions, availability zones, and cloud compute.',
        icon: 'Cloud',
      },
      {
        id: 'amazon-ec2',
        title: 'Amazon EC2',
        status: 'upcoming',
        description: 'Virtual machines in the cloud: instance types, AMI choices, and lifecycle.',
        icon: 'Server',
      },
      {
        id: 'amazon-linux-2023',
        title: 'Amazon Linux 2023',
        status: 'upcoming',
        description: 'The operating system environment, dnf package manager, and systemd.',
        icon: 'Terminal',
      },
      {
        id: 'nginx-http',
        title: 'Nginx and HTTP',
        status: 'upcoming',
        description: 'Understanding web servers, HTTP protocol, port 80, and file serving.',
        icon: 'Globe',
      },
      {
        id: 'security-groups',
        title: 'Public IPs and Security Groups',
        status: 'upcoming',
        description: 'Stateful firewall rules, inbound TCP ports 80/22, and routing boundaries.',
        icon: 'ShieldAlert',
      },
    ],
  },
  {
    title: 'DEPLOY YOUR WEBSITE',
    items: [
      {
        id: 'launch-ec2',
        title: 'Launch an EC2 Instance',
        status: 'upcoming',
        description: 'Step-by-step console guide to launching a t2.micro / t3.micro server.',
        icon: 'Cpu',
      },
      {
        id: 'connect-ssh',
        title: 'Connect Using SSH',
        status: 'upcoming',
        description: 'Key pairs, chmod 400 permissions, and secure terminal connection commands.',
        icon: 'Key',
      },
      {
        id: 'install-nginx',
        title: 'Install Nginx',
        status: 'upcoming',
        description: 'Installing, enabling, and starting the web server daemon on Amazon Linux 2023.',
        icon: 'Settings',
      },
      {
        id: 'publish-files',
        title: 'Publish Website Files',
        status: 'upcoming',
        description: 'Transferring HTML/CSS assets into /usr/share/nginx/html with proper permissions.',
        icon: 'UploadCloud',
      },
    ],
  },
  {
    title: 'VERIFY AND TROUBLESHOOT',
    items: [
      {
        id: 'verify-url',
        title: 'Verify the Public URL',
        status: 'upcoming',
        description: 'Testing the IPv4 address in your browser and using curl in terminal.',
        icon: 'ExternalLink',
      },
      {
        id: 'common-errors',
        title: 'Common Errors',
        status: 'upcoming',
        description: 'Debugging Connection Timed Out, 403 Forbidden, and 502 Bad Gateway.',
        icon: 'AlertTriangle',
      },
      {
        id: 'debugging-checklist',
        title: 'Debugging Checklist',
        status: 'upcoming',
        description: 'A 5-point systematic diagnostic triage when your site fails to load.',
        icon: 'ListChecks',
      },
    ],
  },
  {
    title: 'INDEPENDENT CHALLENGE',
    items: [
      {
        id: 'deploy-project-two',
        title: 'Deploy Project Two',
        status: 'upcoming',
        description: 'Put your skills to the test with hints rather than a step-by-step tutorial.',
        icon: 'Flame',
      },
    ],
  },
  {
    title: 'SECURITY AND CLEANUP',
    items: [
      {
        id: 'protect-credentials',
        title: 'Protect Your Credentials',
        status: 'upcoming',
        description: 'Best practices for private SSH keys, AWS access keys, and .gitignore hygiene.',
        icon: 'Lock',
      },
      {
        id: 'manage-costs',
        title: 'Manage Costs and Clean Up',
        status: 'upcoming',
        description: 'Stopping or terminating EC2 instances, releasing Elastic IPs, and zero-dollar bills.',
        icon: 'DollarSign',
      },
    ],
  },
  {
    title: 'FURTHER LEARNING',
    items: [
      {
        id: 'aws-resources',
        title: 'Official AWS Resources',
        status: 'upcoming',
        description: 'Documentation links, Free Tier tracking guides, and AWS Skill Builder paths.',
        icon: 'Compass',
      },
    ],
  },
];
