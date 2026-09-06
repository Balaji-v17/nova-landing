import { FiLayout, FiZap, FiShield, FiCpu, FiGlobe, FiBarChart2 } from 'react-icons/fi';

export const features = [
  {
    id: 1,
    title: "Adaptive Workspaces",
    description: "Your interface automatically reorganizes based on your current project phase.",
    icon: <FiLayout className="w-6 h-6" />,
    tag: "Core"
  },
  {
    id: 2,
    title: "Instant Sync",
    description: "Zero-latency state updates across all your devices and team members.",
    icon: <FiZap className="w-6 h-6" />,
    tag: "Speed"
  },
  {
    id: 3,
    title: "Enterprise Security",
    description: "Bank-grade encryption for all your intellectual property and data.",
    icon: <FiShield className="w-6 h-6" />,
    tag: "Security"
  },
  {
    id: 4,
    title: "AI Co-pilot",
    description: "Anticipates your next move and drafts templates before you ask.",
    icon: <FiCpu className="w-6 h-6" />,
    tag: "Smart"
  },
  {
    id: 5,
    title: "Global Collaboration",
    description: "Work seamlessly with contractors and clients across any timezone.",
    icon: <FiGlobe className="w-6 h-6" />,
    tag: "Team"
  },
  {
    id: 6,
    title: "Advanced Analytics",
    description: "Track time, velocity, and output without manual data entry.",
    icon: <FiBarChart2 className="w-6 h-6" />,
    tag: "Data"
  }
];