import { StatsSectionData } from "@/types/stats";

export const defaultStatsData: StatsSectionData = {
  badge: "PROVEN TRACK RECORD",
  heading: "Quantifiable Excellence Across Nigeria's Built Environment",
  stats: [
    {
      id: "stat-1",
      value: 120,
      suffix: "+",
      label: "Completed Projects",
      description: "Civil engineering builds, estate units, and commercial plazas successfully handed over.",
      iconName: "Building2",
    },
    {
      id: "stat-2",
      value: 450,
      suffix: "k+",
      label: "Sq. Meters Developed",
      description: "Total structural footprint planned, engineered, and executed to structural standards.",
      iconName: "Ruler",
    },
    {
      id: "stat-3",
      value: 15,
      suffix: "+",
      label: "Active Project Sites",
      description: "Ongoing residential and commercial developments across Abuja and surrounding territories.",
      iconName: "HardHat",
    },
    {
      id: "stat-4",
      value: 99.4,
      suffix: "%",
      label: "On-Time Handover Rate",
      description: "Rigorous project management ensuring zero budget overruns and strict timeline adherence.",
      iconName: "Award",
    },
  ],
};