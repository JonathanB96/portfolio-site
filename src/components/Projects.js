import React from 'react';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: 'Payroll System Optimization',
    role: 'Human Resources Assistant (Payroll)',
    org: 'La Poste Tunisienne, Tunis, Tunisia',
    duration: 'July 2017 – May 2018',
    overview:
      'Led a payroll system review and optimization for a workforce of over 300 employees, aiming to improve accuracy, compliance, and efficiency.',
    actions: [
      'Used Sage Payroll for payroll processing, timesheet management, and reports.',
      'Managed digital employee records with MS Excel and internal HR software.',
      'Supported internal audits and ensured 100% labor law compliance.',
      'Reduced payroll discrepancies by 15% and improved cost reporting.',
    ],
    tools: ['Sage Payroll', 'MS Excel (Advanced)', 'MS Word', 'PowerPoint'],
  },
  {
    title: 'Banking Customer Engagement & Cross-Selling',
    role: 'Customer Relationship Representative',
    org: 'Norway Savings Bank, Portland, Maine',
    duration: 'March 2023 – December 2024',
    overview:
      'Enhanced branch operations and customer engagement across multiple locations.',
    actions: [
      'Processed transactions using FIS Core Banking System.',
      'Used Salesforce CRM to identify cross-selling opportunities.',
      'Produced reports in MS Excel.',
      'Achieved 15% increase in product adoption.',
    ],
    tools: ['FIS Core Banking System', 'Salesforce CRM', 'MS Excel'],
  },
  {
    title: 'Digital Banking Adoption & Risk Control',
    role: 'Associate Banker',
    org: 'JPMorgan Chase Bank, Portland, Maine',
    duration: 'December 2024 – June 2025',
    overview:
      'Optimized branch efficiency, ensured compliance, and boosted customer digital adoption.',
    actions: [
      'Managed cash vaults and ATMs using internal software.',
      'Helped customers set up digital banking tools.',
      'Monitored daily cash flow using MS Excel.',
      'Improved security, cut wait times by 30%.',
    ],
    tools: ['ATM Software', 'Chase.com & Chase Mobile App', 'MS Excel'],
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    {projectList.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </section>
);

export default Projects;
