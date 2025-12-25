export interface TimelineEvent {
    year: number;
    impact: number;
    label: string;
    desc: string;
}

export interface RiskData {
    name: string;
    value: number;
    fill: string;
}

export interface ClinicalCardProps {
    icon: string;
    title: string;
    description: string;
    insight?: string;
    borderColorClass: string;
    bgColorClass: string;
    textColorClass: string;
}